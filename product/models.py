from django.db import models

# Create your models here.
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)
    category = models.CharField(max_length=250)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    description = models.TextField(blank=True)
