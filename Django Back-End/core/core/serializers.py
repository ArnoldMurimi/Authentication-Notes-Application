from rest_framework.serializers import ModelSerializer
from home.models import Notes


class NoteSerialzer(ModelSerializer):
    
    class Meta :
        model = Notes
        fields = '__all__'