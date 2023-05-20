from django.db import models
from django.utils import timezone
# Create your models here.
class User(models.Model):
    id = models.CharField(primary_key=True, max_length=255, unique=True)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    def __str__(self):
        return self.username
      
class Post(models.Model):
    id = models.CharField(primary_key=True, max_length=255, unique=True)
    # userId = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    dt = models.DateTimeField(default=timezone.now)
  
    def __str__(self):
        return self.title