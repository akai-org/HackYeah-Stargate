from typing import List
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from .database import Base

# dane użytkowników
# informacje o projektach


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    fullname: Mapped[str] = mapped_column(String)
    email: Mapped[str] = mapped_column(String)
    username: Mapped[str] = mapped_column(String)
    role: Mapped[str] = mapped_column(String)
    projects: Mapped[List["Project"]] = relationship()
    created_at: Mapped[str] = mapped_column(String)


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String)
    description: Mapped[str] = mapped_column(String)
    owner_id: Mapped[str] = mapped_column(ForeignKey("users.id"))
    created_at: Mapped[str] = mapped_column(String)
