from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import permissions
from Home.models import *


class ConfigSeri(serializers.ModelSerializer):
    class Meta:
        model = Config
        fields = ['phase', 'time_start',
                  'date_created', 'config_name', 'phase', 'tea_name', 'date_updated']


class ConfigDataSeri(serializers.ModelSerializer):
    class Meta:
        model = ConfigData
        fields = ['temp_min', 'temp_max',
                  'length', 'speed', 'date_updated', 'config_id']


class DataCollectSeri(serializers.ModelSerializer):
    class Meta:
        model = DataCollect
        fields = ['temp', 'humid',
                'capacity', 'status', 'config_id']

