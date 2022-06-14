# Generated by Django 4.0.3 on 2022-04-28 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0002_alter_config_phase'),
    ]

    operations = [
        migrations.AddField(
            model_name='config',
            name='date_updated',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='config',
            name='config_name',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
    ]