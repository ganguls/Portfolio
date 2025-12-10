# My Portfolio

A modern, responsive portfolio website built with Django and Bootstrap 5.

## Features

- Responsive design that works on all devices
- Clean and modern user interface
- Smooth scrolling navigation
- Contact form (frontend implementation)
- Skills section with progress bars
- Portfolio showcase section
- Easy to customize and extend

## Prerequisites

- Python 3.8 or higher
- pip (Python package installer)
- Virtual environment (recommended)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Create and activate a virtual environment**
   ```bash
   # On Windows
   python -m venv venv
   .\venv\Scripts\activate
   
   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up the database**
   ```bash
   python manage.py migrate
   ```

5. **Create a superuser (optional, for admin access)**
   ```bash
   python manage.py createsuperuser
   ```

## Running the Development Server

```bash
python manage.py runserver
```

Then, open your browser and go to `http://127.0.0.1:8000/`

## Project Structure

```
portfolio/
├── core/                    # Main app
│   ├── migrations/          # Database migrations
│   ├── templates/core/      # App-specific templates
│   ├── __init__.py
│   ├── admin.py            # Admin configuration
│   ├── apps.py             # App configuration
│   ├── models.py           # Database models
│   ├── tests.py            # Test cases
│   ├── urls.py             # App URL configuration
│   └── views.py            # View functions/classes
├── portfolio/              # Project configuration
├── static/                 # Static files (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/
├── templates/              # Base templates
│   └── includes/           # Reusable template partials
├── .gitignore
├── manage.py
└── README.md
```

## Customization

1. **Update Personal Information**
   - Edit the content in `core/templates/core/home.html`
   - Update the skills section with your own skills

2. **Change Styling**
   - Main styles are in `static/css/style.css`
   - You can also customize Bootstrap variables by overriding them in your CSS

3. **Add Your Own Projects**
   - Add project details in the portfolio section of `home.html`
   - Add project images to `static/images/`

4. **Update Images**
   - Replace `static/images/placeholder.svg` with your profile picture
   - Add your project screenshots to the `static/images/` directory

## Deployment

For production deployment, you'll need to:

1. Set `DEBUG = False` in `portfolio/settings.py`
2. Configure a production database (PostgreSQL recommended)
3. Set up a production web server (e.g., Gunicorn with Nginx)
4. Configure static files collection
5. Set environment variables for sensitive information

## License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to customize this template to make it your own!
