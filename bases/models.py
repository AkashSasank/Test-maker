import uuid

from django.db import models


class BaseModel(models.Model):
    """Base model class injects default fields to the model"""

    id = models.BigAutoField(primary_key=True, verbose_name="Id")
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, verbose_name="Uuid")
    created_at = models.DateTimeField("Created date", auto_now_add=True)
    updated_at = models.DateTimeField("Updated date", auto_now=True)

    class Meta:
        abstract = True
