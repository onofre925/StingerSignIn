# Generated by Django 2.2.27 on 2022-02-24 04:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_recent_alerts'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recent_alerts',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
