from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest
from django.views.generic import TemplateView
from django.views.generic import View
from django.http import JsonResponse
from django.views.generic.detail import DetailView
from datetime import datetime

from matplotlib.pyplot import cla
# Create your views here.
from Home.models import *
from datetime import datetime
from Home.serialize import *
from django.core.cache import cache
import json
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.http import HttpResponse
from django.http import HttpRequest
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from Home.serialize import *

LIST_DATA_NAME = {
    'time',
    'temp',
    'humid',
    'speed',
    'capacity',
    'temp_min',
    'temp_max',
    'state',
}


class HomeView(TemplateView):
    template_name = 'Home.html'


@method_decorator(csrf_exempt, name='dispatch')
class ConfigView(View):
    def post(self, request):
        if request.method == "POST":
            print('post data')
            now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            config_name = request.POST.get('config_name')
            tea_name = request.POST.get('tea_name')
            phase = request.POST.get('phase')
            temp_min = request.POST.get('temp_min')
            temp_max = request.POST.get('temp_max')
            length = request.POST.get('length')
            speed = request.POST.get('speed')
            time_start = request.POST.get('start')
            print(
                f'{config_name} - {tea_name}- {phase}- {temp_min}- {temp_max}- {length}- {speed}-{time_start}')
            try:
                config_query = Config(phase=phase, time_start=time_start,
                                      config_name=config_name, tea_name=tea_name,)
                config_query.save()
                config_data_query = ConfigData(
                    temp_min=temp_min, temp_max=temp_max, length=length, speed=speed, config_id=config_query)
                print(config_query.id)
                config_data_query.save()
                return JsonResponse('saved', status=400, safe=False)
            except Exception as err:
                print(err)
                return JsonResponse('error', status=400, safe=False)

    def get(self, request):
        if request.method == "GET":
            config_name = request.GET.get('config_name')
            config = Config.objects.filter(config_name=config_name).values()
            return JsonResponse('done', status=400, safe=False)


@method_decorator(csrf_exempt, name='dispatch')
class HardwareData(View):
    def post(self, request):
        time, temp, humid, speed, capacity, temp_min, temp_max, state = 0
        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        time = request.POST.get(time)
        temp = request.POST.get(temp)
        humid = request.POST.get(humid)
        speed = request.POST.get(speed)
        capacity = request.POST.get(capacity)
        temp_min = request.POST.get(temp_min)
        temp_max = request.POST.get(temp_max)
        state = request.POST.get(state)
        phase = request.POST.get(phase)
        tea_name = request.POST.get(phase)
        length = request.POST.get(length)
        try:
            config_query = Config(
                phase=phase, time_start=now, tea_name=tea_name,)
            config_query.save()
            config_data_query = ConfigData(
                temp_min=temp_min, temp_max=temp_max, length=length, speed=speed, config_id=config_query)
            config_data_query.save()
            return JsonResponse('saved', status=400, safe=False)
        except Exception as err:
            return JsonResponse('error', status=400, safe=False)


# class ChartRender():
#     def get(self, request):

class ChartRender(View):
    def get(self, request):
        data = None

        return JsonResponse(data, status=400, safe=False)


@method_decorator(csrf_exempt, name='dispatch')
class SetData(View):
    def post(self, request):
        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        temp_min = request.POST.get('tempMin')
        temp_max = request.POST.get('tempMax')
        speed = request.POST.get('speed')
        length = request.POST.get('length')
        config_name = request.POST.get('configName')
        config_id = Config.objects.get(config_name=config_name)
        config_data_query = ConfigData(
            temp_min=temp_min, temp_max=temp_max, length=length, speed=speed, date_updated=now, config_id=config_id)
        config_data_query.save()
        return JsonResponse('done', status=200, safe=False)


class GetData(View):
    def get(self, request):
        data = []
        data_last_object = DataCollect.objects.last()
        config_id = data_last_object.config_id
        data_config_object = ConfigData.objects.filter(
            config_id=config_id).last()
        data_last_object_JSON = DataCollectSeri(instance=data_last_object).data
        data_config_object_JSON = ConfigDataSeri(
            instance=data_config_object).data
        config_JSON = ConfigSeri(instance=config_id).data
        data.append(data_last_object_JSON)
        data.append(data_config_object_JSON)
        data.append(config_JSON)
        return JsonResponse(data, status=200, safe=False)


@method_decorator(csrf_exempt, name='dispatch')
class GetHardwareData(View):
    def post(self, request):
        humid = request.POST.get('humid')
        temp = request.POST.get('temp')
        speed = request.POST.get('speed')
        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        status = request.POST.get('status')
        last_config = ConfigData.objects.last()
        last_config.speed = speed
        last_config.save()
        config_id = Config.objects.get(config_name='TL1')
        data_query = DataCollect(
            temp=temp, humid=humid, status=status, config_id=last_config)
