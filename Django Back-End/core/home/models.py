from django.db import models
from django.contrib.auth.models import User
# Create your models here.



class Notes(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, null = True)
    note = models.TextField()
    edited = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add = True)
     