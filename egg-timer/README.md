# Egg Timer Project

## Overview
The Egg Timer project is a web application built using FastAPI that allows users to set timers for cooking eggs. The application provides a simple and intuitive interface for users to interact with the timer functionality.

## Project Structure
```
egg-timer
├── app
│   ├── __init__.py
│   ├── main.py
│   ├── api
│   │   ├── __init__.py
│   │   └── routes.py
│   ├── models
│   │   ├── __init__.py
│   │   └── timer.py
│   └── core
│       ├── __init__.py
│       └── config.py
├── static
│   ├── css
│   │   └── styles.css
│   └── js
│       └── timer.js
├── templates
│   ├── base.html
│   └── index.html
├── requirements.txt
├── .gitignore
└── README.md
```

## Installation
To set up the Egg Timer project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd egg-timer
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

4. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage
To run the Egg Timer application, execute the following command:
```
uvicorn app.main:app --reload
```
This will start the FastAPI server, and you can access the application at `http://127.0.0.1:8000`.

## API Endpoints
The application provides the following API endpoints for timer operations:
- `POST /timer/start`: Start a new timer.
- `GET /timer/status`: Get the current status of the timer.
- `POST /timer/reset`: Reset the timer.

## Frontend
The frontend of the application is built using HTML, CSS, and JavaScript. The main user interface is located in the `templates` directory, with styles defined in `static/css/styles.css` and functionality in `static/js/timer.js`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.