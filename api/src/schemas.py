from typing import List
from pydantic import BaseModel
from datetime import datetime


class Project(BaseModel):
    title: str
    description: str
    long_description: str = None
    photo: str = None
    tags: List[str] = None
    what_to_learn: List[str] = None
    contents: List[str] = None
    owner_id: int


class ProjectCreate(Project):
    pass


class ProjectOut(Project):
    id: int
    created_at: datetime


class User(BaseModel):
    fullname: str
    email: str
    username: str
    role: str


class UserFromDB(User):
    id: int
    created_at: datetime


class Course(BaseModel):
    title: str
    image: str
    author: str
    level: int


class CourseCreate(Course):
    pass


class CourseOut(Course):
    id: str
    rating: float
    rating_count: int
    tags: List[str]
    created_at: datetime
