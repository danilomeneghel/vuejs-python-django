from django.shortcuts import render, redirect
from users.forms import UserModelForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

def create_user(request):
    form = UserModelForm(request.POST or None)

    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return redirect('/')
    return render(request, 'register.html', {'form': form})

@login_required
def update_user(request, id=1):
    id = request.user.id
    user = User.objects.get(id=id)
    form = UserModelForm(request.POST or None, instance=user)

    if form.is_valid():
        form.save()
        return redirect('/')

    return render(request, 'users-form.html', {'form': form, 'user': user})

def do_login(request):
    form = UserModelForm(request.POST or None)
    error = ''

    if request.method == 'POST':
        user = authenticate(username=request.POST['username'], password=request.POST['password'])
        if user is not None:
            if user.is_active:
                try:
                    login(request, user)
                    return redirect('/product')
                except:
                    error = 'Internal error'
            else:
                error = 'Inactive user'
        else:
            error = 'Invalid username or password!'

    return render(request, 'login.html', {'form': form, 'error': error})

def do_logout(request):
    logout(request)
    return redirect('/')
