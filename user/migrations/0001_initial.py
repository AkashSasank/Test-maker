# Generated by Django 3.0 on 2020-12-25 08:42

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserRole',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False, verbose_name='Id')),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True, verbose_name='Uuid')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created date')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated date')),
                ('role', models.CharField(max_length=255, verbose_name='User Role')),
                ('slug', models.CharField(help_text='Slug should be string without spaces in between. Only Numbers, Alphabets, hyphen and underscores are allowed', max_length=255, unique=True, verbose_name='User Role Slug')),
            ],
            options={
                'db_table': 'user_roles',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.BigAutoField(primary_key=True, serialize=False, verbose_name='Id')),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True, verbose_name='Uuid')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created date')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated date')),
                ('email', models.EmailField(max_length=60, unique=True)),
                ('username', models.CharField(max_length=50, unique=True)),
                ('first_name', models.CharField(max_length=20)),
                ('last_name', models.CharField(max_length=20)),
                ('address', models.TextField(max_length=200)),
                ('is_active', models.BooleanField(default=True)),
                ('user_role', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='user_roles', to='user.UserRole')),
            ],
            options={
                'db_table': 'users',
            },
        ),
    ]
