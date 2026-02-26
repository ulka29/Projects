# 🎨 BG Changer – Full Stack Application

A simple full-stack project built using:

- ⚡ FastAPI (Backend)
- ⚛️ React + Vite (Frontend)

The backend provides color data through an API, and the frontend dynamically generates buttons based on the colors received. Clicking a button changes the background color.

---

## 📂 Project Structure

```
bgChanger/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .gitignore
│
├── frontend/
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── .gitignore
└── README.md
```

---

# 🚀 Backend Setup (FastAPI)

## 1. Navigate to backend folder

```bash
cd backend
```

## 2. Create Virtual Environment

```bash
python -m venv myenv
```

## 3. Activate Virtual Environment

### Windows
```bash
myenv\Scripts\activate
```

### Mac/Linux
```bash
source myenv/bin/activate
```

## 4. Install Dependencies

```bash
pip install -r requirements.txt
```

## 5. Run the Server

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

API Endpoint:

```
GET /colors
```

---

# 💻 Frontend Setup (React + Vite)

## 1. Navigate to frontend folder

```bash
cd frontend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Start Development Server

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🔄 How It Works

1. FastAPI exposes a `/colors` endpoint.
2. React fetches colors from the backend.
3. Buttons are created dynamically.
4. Clicking a button updates the background color.

---

# 📦 Backend Requirements (requirements.txt)

```
fastapi
uvicorn
```

---

# 🧠 Features

- Dynamic button rendering from backend
- API-driven UI
- Clean frontend/backend separation
- Easy to extend and scale

---

# 🔮 Future Improvements

- Add database (SQLite / PostgreSQL)
- Add POST API to create new colors
- Add delete/update functionality
- Store selected color in backend
- Add authentication
- Dockerize the project
- Deploy backend and frontend

---

# 🛠 Tech Stack

Backend:
- Python
- FastAPI
- Uvicorn

Frontend:
- React
- Vite
- JavaScript

---

# 👨‍💻 Author

Your Name

---

# 📜 License

Open-source project.