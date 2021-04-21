from rest_framework import serializers

from recipes import models

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'author',
            'created',
            'image',
            'ingredients',
            'instructions',
            'source',
        )
        model = models.Recipe
