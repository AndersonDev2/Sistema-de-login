# Generated by Django 3.2.18 on 2023-03-01 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contas', '0003_auto_20230225_1403'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contamodel',
            name='email',
            field=models.CharField(default='', editable=False, max_length=255),
        ),
        migrations.AlterField(
            model_name='contamodel',
            name='salt',
            field=models.CharField(default='', editable=False, max_length=255),
        ),
        migrations.AlterField(
            model_name='contamodel',
            name='senha',
            field=models.CharField(default='', editable=False, max_length=255),
        ),
        migrations.AlterField(
            model_name='contamodel',
            name='usuario',
            field=models.CharField(default='', editable=False, max_length=255),
        ),
    ]
