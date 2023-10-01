from sqlalchemy.orm import Session
from .database import engine
from .models import User, Project, Course, Hackathon


def populate_all():
    populate_users()
    populate_projects()
    populate_courses()
    populate_hackathons()


def populate_users():
    with Session(engine) as db:
        db.add_all([
            User(
                fullname="John Doe",
                email="john@gmail.com",
                username="johndoe",
                role="admin"
            ),
            User(
                fullname="Mary Jane",
                email="mary@wp.pl",
                username="maryjane",
                role="user"
            ),
        ])
        db.commit()


def populate_projects():
    with Session(engine) as db:
        db.add_all([
            Project(
                title="Project planer-podrozy",
                description="Go around the world",
                long_description="App lets you plan your trip, with all the details",
                photo="https://cdn.mos.cms.futurecdn.net/kHGBAaGn2sbVhGnSuFNpQa.jpg",
                tags=["good for beginners", "python", "javascript"],
                what_to_learn=["teamwork", "react", "FastAPI"],
                contents=["i", "dont", "know"],
                owner_id=1
            ),
            Project(
                title="Project 2",
                description="Description 2",
                long_description="Long description 2",
                photo="https://picsum.photos/200/300",
                tags=["tag1", "tag2", "tag3"],
                what_to_learn=["learn1", "learn2", "learn3"],
                contents=["content1", "content2", "content3"],
                owner_id=2
            ),
        ])
        db.commit()


def populate_courses():
    with Session(engine) as db:
        db.add_all([
            Course(
                title="FastApi Course for beginners",
                image="https://tone-and-tighten.com/wp-content/uploads/2014/12/Beginner-Bootcamp-Workout-on-Tone-and-Tighten-682x1024.jpg",
                author="Benjamin Franklin",
                rating=4.5,
                rating_count=100,
                tags=["python", "FastAPI", "beginner"],
                level=1
            ),
            Course(
                title="Rust Advanced Course",
                image="https://logos-world.net/wp-content/uploads/2021/02/Rust-Logo.png",
                author="",
                rating=2.5,
                rating_count=2,
                tags=["rust", "advanced"],
                level=3
            ),
        ])
        db.commit()


def populate_hackathons():
    with Session(engine) as db:
        db.add_all([
            Hackathon(
                title="Hackyeah 2023",
                description="Best hackathon ever",
                long_description="challenge yourself for 24h in the best hackathon ever",
                photo="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9SGgykm0XIH8xqB-0FGl9wHaEK%26pid%3DApi&f=1&ipt=ee8f7d1e0d4781fc109a8c60e67434cb9d218adccceb65c43d78de1e47a34135&ipo=images",
                tags=["beginner", "teamwork", "free"],
            )
        ])
        db.commit()
