from rest_framework import routers
from product.viewsets import ProductViewSet

router = routers.DefaultRouter()

router.register(r'product', ProductViewSet)
