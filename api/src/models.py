from datetime import datetime
from typing import List
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, PickleType, Float
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from .database import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    fullname: Mapped[str] = mapped_column(String)
    email: Mapped[str] = mapped_column(String)
    username: Mapped[str] = mapped_column(String)
    role: Mapped[str] = mapped_column(String)
    created_at: Mapped[str] = mapped_column(DateTime, default=datetime.now())


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String)
    description: Mapped[str] = mapped_column(String)
    long_description: Mapped[str] = mapped_column(String)
    photo: Mapped[str] = mapped_column(String)
    tags: Mapped[List[str]] = mapped_column(PickleType)
    what_to_learn: Mapped[List[str]] = mapped_column(PickleType)
    contents: Mapped[List[str]] = mapped_column(PickleType)
    owner_id: Mapped[str] = mapped_column(ForeignKey("users.id"))
    created_at: Mapped[str] = mapped_column(DateTime, default=datetime.now())


class Courses(Base):
    __tablename__ = "courses"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String)
    image: Mapped[str] = mapped_column(String)
    author: Mapped[str] = mapped_column(String)
    rating: Mapped[float] = mapped_column(Float)
    rating_count: Mapped[int] = mapped_column(Integer)
    tags: List[str] = mapped_column(PickleType)
    level: Mapped[int] = mapped_column(Integer)
