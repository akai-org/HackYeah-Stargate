from typing import List
from pydantic import BaseModel


class Project(BaseModel):
    id: int
    title: str
    description: str
    owner_id: int = None
    created_at: str


class User(BaseModel):
    id: int
    fullname: str
    email: str
    username: str
    projects: List[Project] = None
    role: str
    created_at: str
