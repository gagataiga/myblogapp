# Generated by Django 4.2.1 on 2023-05-20 04:40

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_remove_post_userid'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='dt',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
