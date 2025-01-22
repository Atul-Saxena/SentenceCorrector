# Grammar Corrector

A web application that takes input text and provides grammatically corrected output. This project is built using **Vite** with **React** on the frontend and **Django** with **Django REST Framework** (DRF) on the backend. It leverages the **HappyTransformer** library for grammar correction.

---

## Features

- **Frontend**: Fast and responsive user interface built with Vite and React.
- **Backend**: Robust REST API powered by Django and Django REST Framework.
- **Grammar Correction**: Uses HappyTransformer's pre-trained models for accurate text correction.
- **User-Friendly**: Easy-to-use interface for submitting text and viewing corrected results.

---

## Prerequisites

- Node.js (v16 or later)
- Python (v3.8 or later)
- pip
- Virtual environment tool (e.g., virtualenv)

---

## Installation and Setup

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the backend server:
   ```bash
   python manage.py runserver
   ```

### Connecting Frontend and Backend

1. Update the frontend configuration file (e.g., `.env` or a constants file) to point to the backend API URL:
   ```env
   VITE_API_BASE_URL=http://127.0.0.1:8000/api/
   ```

2. Ensure both the frontend and backend servers are running.

---

## Usage

1. Open the frontend application in your browser (default: `http://localhost:5173`).
2. Enter a text into the input field and submit it.
3. View the grammatically corrected text in the output area.

---

## Project Structure

### Frontend
- **Vite**: Bundler for fast builds and hot module replacement.
- **React**: Component-based UI library.
- **Axios**: HTTP client for communicating with the backend API.

### Backend
- **Django**: Web framework for building robust APIs.
- **Django REST Framework**: Provides tools for API development.
- **HappyTransformer**: Python library for natural language processing, specifically for grammar correction.

---

## Example API Request

**Endpoint**: `POST /api/correct/`

**Request Body**:
```json
{
  "text": "I is a developer."
}

**Response Body**:
```json
{
  "corrected_text": "I am a developer."
}
```

---

## Dependencies

### Frontend
- Vite
- React
- Axios

### Backend
- Django
- Django REST Framework
- HappyTransformer

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- [HappyTransformer](https://github.com/EricFillion/happy-transformer)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Vite](https://vitejs.dev/)

