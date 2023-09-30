from fastapi import FastAPI
from .database import create_all
from .projects import router

app = FastAPI()

app.include_router(router)

@app.on_event("startup")
def startup_event():
    create_all()

@app.get("/")
def main():
    return {"message": "Hello World!"}
