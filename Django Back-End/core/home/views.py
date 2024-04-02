from django.shortcuts import render


from django.http import JsonResponse
from rest_framework.response import Response 
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework.views import APIView

from rest_framework import status

from .models import Notes

from rest_framework_simplejwt.serializers import  TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.
from core.serializers import NoteSerialzer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
     def get_token(cls, user):
          token = super().get_token(user)
          
          #we add custom user name i.e from here what we have done is that we have changed the name from user to user name
          #so the username wil be encrypted in the token 
          token['username'] = user.username

          return token

class MytokenObtainPairView(TokenObtainPairView):
     serializer_class = MyTokenObtainPairSerializer

@permission_classes([IsAuthenticated])
class NoteInfo(APIView):
    def get(self,request):
       obj = Notes.objects.all()
       serializer = NoteSerialzer(obj,many = True)
       return Response(serializer.data, status=status.HTTP_200_OK)
     
    def post(self, request):
       serializer = NoteSerialzer(data = request.data)
       if serializer.is_valid():
           serializer.save()
           return Response(serializer.data,status=status.HTTP_201_CREATED)
       return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)


@permission_classes([IsAuthenticated])
class NoteDetail(APIView):


   def get(request,id):
      
      try : 
          obj = Notes.objects.get(id = id)
      
      except Notes.DoesNotExist:
         msg = { "msg" : "message not found"}
  
      serializer = NoteSerialzer(obj)
      return Response(serializer.data,status=status.HTTP_200_OK)
  
  
   #    user = request.user
   # #'AnonymousUser' object has no attribute 'notes_set
   #    notes = user.notes_set.all()
   #    serializers = NoteSerialzer(notes, many = True)
   #    return Response(serializers.data)

  


   def post(request):
      
      serializer = NoteSerialzer(data=request.data)
      if request.method =='POST':
         if serializer.is_valid():
          serializer.save
          return Response(status =status.HTTP_201_CREATED)
      return  Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)



   def put(request,id):
      try:
         obj =Notes.objects.get(id = id)
      except  Notes.DoesNotExist:
         msg = {"msg" :'msg not found'} 

         return Response(msg,status=status.HTTP_404_NOT_FOUND)
      
      serializer  = NoteSerialzer(obj,data=request.data)
   
      if serializer.is_valid():
         serializer.save()
         return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
      return Response (serializer.errors,status= status.HTTP_400_BAD_REQUEST)


   def patch(request,):
      try:
         obj =Notes.objects.get(id = id)
      except  Notes.DoesNotExist:
         msg = {"msg" :'msg not found'} 

         return Response(msg,status=status.HTTP_404_NOT_FOUND)
      
      serializer  = NoteSerialzer(obj,data=request.data,partial = True)
   
      if serializer.is_valid():
         serializer.save()
         return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
      return Response (serializer.errors,status= status.HTTP_400_BAD_REQUEST)






def delete(request,id):
   try:
       obj = Notes.objects.get(id = id)

   except Notes.DoesNotExist:
       msg = {"msg" : "message not found"}
       return Response(msg,status=status.HTTP_404_NOT_FOUND)
   
   obj.delete()
   return Response({"msg":"deleted"},status =status.HTTP_204_NO_CONTENT)

    
   