# Generated by Django 3.2.18 on 2023-02-24 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContaModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usuario', models.CharField(default='', max_length=255)),
                ('email', models.CharField(default='', max_length=255)),
                ('senha', models.CharField(default='', max_length=255)),
                ('salt', models.CharField(default='', max_length=255)),
            ],
        ),
    ]