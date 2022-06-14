from django.urls import path
from .views import *
urlpatterns = [
    # path('Supervise', DefaultSuperviseView.as_view(), name='Supervise'),
    path('', HomeView.as_view(), name='Home'),
    path('add-config', ConfigView.as_view(), name='config'),
    path('set-config', SetData.as_view(), name='set'),
    path('get-data', GetData.as_view(), name='set'), 
    path('get-sensor', GetHardwareData.as_view(), name='sensor'),
]
