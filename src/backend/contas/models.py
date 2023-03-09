from django.db import models

# Create your models here.


class ContaModel(models.Model):
    usuario = models.CharField(default='', max_length=255, editable=False)
    email = models.CharField(default='', max_length=255, editable=False)
    senha = models.CharField(default='', max_length=255, editable=False)
    salt = models.CharField(default='', max_length=255, editable=False)
