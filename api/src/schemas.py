from typing import List
from pydantic import BaseModel
from datetime import datetime


class Project(BaseModel):
    title: str
    description: str
    owner_id: int
    photo: str = None
    tags: List[str] = None


class ProjectCreate(Project):
    pass


class ProjectOut(Project):
    id: int
    created_at: datetime


class User(BaseModel):
    fullname: str
    email: str
    username: str
    projects: List[Project] = None
    role: str


class UserFromDB(User):
    id: int
    created_at: str