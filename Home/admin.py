from re import L
from django.contrib import admin
from Home.models import *
# Register your models here.



class ConfigAdmin(admin.ModelAdmin):
    pass
admin.site.register(Config,ConfigAdmin)


class ConfigDataAdmin(admin.ModelAdmin):
    pass
admin.site.register(ConfigData,ConfigDataAdmin)


class DataCollectAdmin(admin.ModelAdmin):
    pass
admin.site.register(DataCollect,DataCollectAdmin)