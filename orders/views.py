from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Order, OrderItem
from .serializers import OrderSerializer, CreateOrderSerializer
from products.models import Product

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)\
            .select_related('user')\
            .prefetch_related('items__product')  

    def create(self, request):
        serializer = CreateOrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Create order
        order = Order.objects.create(
            user=request.user,
            shipping_address=serializer.validated_data.get('shipping_address', ''),
            payment_method=serializer.validated_data.get('payment_method', '')
        )
        
        total_amount = 0
        items_data = serializer.validated_data['items']
        
        # Create order items
        for item_data in items_data:
            try:
                product = Product.objects.get(id=item_data['product_id'])
                quantity = item_data.get('quantity', 1)
                
                order_item = OrderItem.objects.create(
                    order=order,
                    product=product,
                    quantity=quantity,
                    price=product.price
                )
                
                total_amount += order_item.total_price
                
            except Product.DoesNotExist:
                order.delete()
                return Response(
                    {"error": f"Product with ID {item_data['product_id']} not found."},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        # Update order total
        order.total_amount = total_amount
        order.save()
        
        return Response(
            OrderSerializer(order, context={'request': request}).data,
            status=status.HTTP_201_CREATED
        )
    
    @action(detail=True, methods=['post'])
    def cancel(self, request, pk=None):
        order = self.get_object()
        if order.status == 'pending':
            order.status = 'cancelled'
            order.save()
            return Response({"status": "Order cancelled successfully."})
        return Response(
            {"error": "Only pending orders can be cancelled."},
            status=status.HTTP_400_BAD_REQUEST
        )
        