import jwt
import os
from datetime import datetime, timedelta
from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from bases.models import BaseModel


class UserRole(BaseModel):
    """Stores user roles"""

    role = models.CharField("User Role", max_length=255)
    slug = models.CharField(
            "User Role Slug",
            unique=True,
            max_length=255,
            help_text="Slug should be string without spaces in between. Only Numbers, Alphabets, hyphen and "
                      "underscores are allowed",
    )

    class Meta:
        db_table = "user_roles"

    def __repr__(self):
        return "<User(id='%s', role='%s')>" % (self.id, self.role)

    def __str__(self):
        return self.role


class User(AbstractBaseUser, BaseModel):
    """Stores user data"""

    # User basic data
    email = models.EmailField(max_length=60, unique=True)
    username = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    address = models.TextField(max_length=200)

    # User roles
    is_active = models.BooleanField(default=True)
    user_role = models.ForeignKey(UserRole, on_delete=models.SET_NULL, related_name="user_roles", null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "first_name", "last_name"]

    class Meta:
        db_table = "users"

    def __repr__(self):
        return "<User(id='%s', email='%s')>" % (self.id, self.email)

    @property
    def token(self):
        return self.generate_jwt_token()

    def generate_jwt_token(self):
        """
        Function to generate JWT valid for 30 days
        """
        token = jwt.encode({
            'id': self.pk,
            'exp': datetime.utcnow() + timedelta(days=30)
        }, os.getenv("JWT_SECRET_KEY"), algorithm='HS256')

        return token.decode('utf-8')
