from . import views
from rest_framework import routers


ContasRouter = routers.DefaultRouter()
ContasRouter.register('Contas', views.ContasView)
