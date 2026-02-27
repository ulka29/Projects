# 🎨 BG Changer – Full Stack Application

A simple and clean **Full Stack Web Application** built using:

- ⚡ FastAPI (Backend API)
- ⚛️ React + Vite (Frontend UI)

The backend provides a list of colors via an API, and the frontend dynamically generates buttons. Clicking a button changes the background color of the page.

---

## 📸 Project Overview

- Backend exposes a `/colors` API endpoint
- Frontend fetches colors from backend
- Buttons are generated dynamically
- Background updates instantly on click

This project demonstrates:
- API integration
- Full stack separation
- Dynamic UI rendering
- Clean project structuring

---

# 📂 Project Structure

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
│   ├── vite.config.js
│   ├── index.html
│   ├── eslint.config.js
│   ├── src/
│   └── .gitignore
│
├── .gitignore
└── README.md
```

---

# 🚀 Backend Setup (FastAPI)

## 1️⃣ Navigate to backend

```bash
cd backend
```

## 2️⃣ Create Virtual Environment

```bash
python -m venv myenv
```

## 3️⃣ Activate Virtual Environment

### Windows
```bash
myenv\Scripts\activate
```

### Mac/Linux
```bash
source myenv/bin/activate
```

## 4️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

## 5️⃣ Run the Server

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

### API Endpoint

```
GET /colors
```

Test in browser:

```
http://127.0.0.1:8000/colors
```

---

# 💻 Frontend Setup (React + Vite)

## 1️⃣ Navigate to frontend

```bash
cd frontend
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Start Development Server

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🔄 Application Workflow

1. FastAPI provides color data via `/colors`
2. React fetches color list
3. Buttons render dynamically
4. On click → background color changes

---

# 📦 Backend Dependencies

`requirements.txt`

```
fastapi
uvicorn
```

---

# 🧠 Features

✅ API-driven UI  
✅ Dynamic button rendering  
✅ Instant background color update  
✅ Clean folder structure  
✅ Easy to extend  

---

# 🔮 Future Improvements

- Add Database (SQLite / PostgreSQL)
- Add POST API to add new colors
- Add Update/Delete APIs
- Store selected color in backend
- Add authentication
- Dockerize the application
- Deploy backend + frontend separately

---

# 🛠 Tech Stack

### Backend
- Python
- FastAPI
- Uvicorn

### Frontend
- React
- Vite
- JavaScript

---

# 👨‍💻 Author

**Ulka Patel**  
Full Stack Developer (React + Python)

---

# 📜 License

This project is open-source and available for learning and educational purposes.