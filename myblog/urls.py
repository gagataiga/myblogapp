
from django.contrib import admin
from django.urls import path , include
from blog.views import index, getPosts, addPost

urlpatterns = [
    path('admin/', admin.site.urls),
    path('posts/', getPosts),
    path('add/', addPost, name='add_post'),
    path('', index , name='index'),

]
