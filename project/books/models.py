from django.db import models

# Create your models here.
class Book(models.Model):
    name = models.CharField(max_length = 100)
    genre = models.CharField(max_length = 30)
    rating = models.DecimalField(max_digits=1, decimal_places=0)
    comment = models.CharField(max_length = 200)
    created_at = models.DateTimeField(auto_now_add=True)
    end_at = models.DateField()