from django.contrib import admin
from .models import *
# Register your models here.


class ContaAdmin(admin.ModelAdmin):
    list_display = list(ContaModel.__dict__)[5:-2]


admin.register(ContaModel, ContaAdmin)
