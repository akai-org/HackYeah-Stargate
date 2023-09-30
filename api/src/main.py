from fastapi import FastAPI
from .database import create_all
from .test_create import create_test_data

app = FastAPI()


@app.on_event("startup")
def startup_event():
    create_all()
    create_test_data()


@app.get("/")
def main():
    return {"message": "Hello World!"}

