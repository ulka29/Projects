from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Shared colors
colors = [
    {"name": "Red", "value": "#E0BDB6"},
    {"name": "Green", "value": "#D3F2D4"},
    {"name": "Yellow", "value": "#DBDEAB"},
    {"name": "Pink", "value": "#F1D3F2"},
]

@app.get("/colors")
def get_colors():
    return colors