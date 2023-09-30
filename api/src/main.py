from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import create_all
from .projects import router

app = FastAPI()

origins = [
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(router)

@app.on_event("startup")
def startup_event():
    create_all()

@app.get("/")
def main():
    return {"message": "Hello World!"}
