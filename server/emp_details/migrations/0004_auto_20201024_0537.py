# Generated by Django 3.1.2 on 2020-10-24 05:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emp_details', '0003_auto_20201024_0533'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='primaryid',
        ),
        migrations.AlterField(
            model_name='employee',
            name='employee_id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
