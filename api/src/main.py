from fastapi import FastAPI
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from .add_data import populate_all
from .database import create_all, engine
from .routers import projects, users, courses, hackathons
from .crud import get_users

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


app.include_router(projects.router)
app.include_router(users.router)
app.include_router(courses.router)
app.include_router(hackathons.router)

@app.on_event("startup")
def startup_event():
    create_all()
    with Session(engine) as session:
        if not get_users(session):
            populate_all()


@app.get("/")
def main():
    return {"message": "Hello World!"}
