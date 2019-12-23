# Products

Project of an products registration using Python with Django and VueJS.

## Features

- CRUD
- Active Record
- API RestFul
- Login
- Search
- Paginate
- Routes
- Migrate
- Responsive

## Requirements

- Python >= 3.7.0
- Django >= 2.1.2
- PIP >= 18.0

## Tecnologies

- Python
- Django
- CSS and SCSS
- Jquery
- VueJS
- Bootstrap
- SQLite

## Installation

```
$ git clone https://github.com/danilomeneghel/vuejs-python-django.git

$ cd vuejs-python-django
```

Download and install Python 3: 

https://www.python.org/downloads/

PS: Set the environment variable pointing to the path of the Python installation.


Download and install PIP:

https://pip.pypa.io/en/stable/installing/

```
$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
$ python get-pip.py
$ python -m pip install -U pip
```

Then install the requirements of the 'requirements.txt' file:

```
$ pip install -r requirements.txt
```

After everything is done, migrate database and run the project:

```
$ python manage.py migrate
$ python manage.py runserver
```

Finally, open the project in your browser: 

http://localhost:8000/

## Create new modules

```
$ python manage.py startapp name_module
```

## Create new migration (database table)

```
$ python manage.py makemigrations
```

## Routes

```
$ python manage.py show_urls
```

## Demonstration

You can see the system working by clicking the link below:<br>
https://vuejs-python-django.herokuapp.com

- Login:
    - Username: admin
    - Password: admin

## API REST

Endpoint Products:<br>
http://localhost:8000/api/product

## License

This project is licensed under <a href="LICENSE">The MIT License (MIT)</a>.

## Screenshots

![Screenshots](screenshots/screenshot01.png)<br><br>
![Screenshots](screenshots/screenshot02.png)<br><br>
![Screenshots](screenshots/screenshot03.png)<br><br>
![Screenshots](screenshots/screenshot04.png)<br><br>
![Screenshots](screenshots/screenshot05.png)<br><br>


Developed by<br>
Danilo Meneghel<br>
danilo.meneghel@gmail.com<br>
http://danilomeneghel.github.io/<br>
