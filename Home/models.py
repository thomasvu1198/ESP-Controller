from django.db import models

# Create your models here.


class Config(models.Model):
    PHASE1 = "DIỆT MEN"
    PHASE2 = "SAO CHÈ"
    PHASE_CHOICES = (
        (PHASE1, "DIỆT MEN"),
        (PHASE2, "SAO CHÈ"),
    )

    phase = models.IntegerField(blank=True, null=True)
    time_start = models.TimeField()
    date_created = models.DateTimeField(auto_now_add=True)
    config_name = models.CharField(max_length=255, blank=True, null=True, unique=True)
    tea_name = models.TextField(blank=True, null=True)
    date_updated = models.DateTimeField(
        auto_now_add=True, blank=True, null=True)
    class Meta:
        ordering = ('-date_created',)


class ConfigData(models.Model):
    temp_min = models.IntegerField(blank=True, null=True)
    temp_max = models.IntegerField(blank=True, null=True)
    length = models.IntegerField(blank=True, null=True)
    speed = models.IntegerField(blank=True, null=True)
    date_updated = models.DateTimeField(auto_now_add=True)
    config_id = models.ForeignKey(
        Config, on_delete=models.CASCADE, related_name='config_id')


class DataCollect(models.Model):
    temp = models.IntegerField(blank=True, null=True)
    humid = models.IntegerField(blank=True, null=True)
    capacity = models.IntegerField(blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    config_id = models.ForeignKey(
        Config, on_delete=models.CASCADE, related_name='config_id_data')



class Updatesource(models.Model):
    id = models.IntegerField(primary_key=True)
    model = models.CharField(
        max_length=50,  blank=True, null=True)
    # Field name made lowercase.
    datasource = models.CharField(
        db_column='dataSource', max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'UpdateSource'
