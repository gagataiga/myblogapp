from django.shortcuts import render
from .models import Post
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import PostSerializer
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def index (request):
  return render(request, "index.html")

@api_view(['GET'])
def getPosts(request):
  posts = Post.objects.all()
  serializer = PostSerializer(posts,many=True)
  return Response(serializer.data)

@api_view(['POST'])
@csrf_exempt
def addPost(request):
  print(request)
  serializer = PostSerializer(data=request.data)
  
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  