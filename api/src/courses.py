from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import get_db

router = APIRouter(prefix="/courses", tags=["courses"])


@router.get("/",
            response_model=List[schemas.CourseOut])
def read_courses(db: Session = Depends(get_db)):
    course = crud.get_courses(db=db)
    return course


@router.get("/{project_id}",
            response_model=schemas.ProjectOut)
def read_course(db: Session = Depends(get_db), course_id: int = 1):
    project = crud.get_course(db=db, course_id=course_id)
    return project


@router.post("/",
             response_model=schemas.ProjectOut)
def create_course(course: schemas.CourseCreate, db: Session = Depends(get_db)):
    db_course = crud.get_course_by_title(db, course.title)
    if db_course:
        raise HTTPException(status_code=400, detail="Course already exists")
    return crud.create_course(db=db, course=course)


@router.delete("/{project_id}")
def delete_project(db: Session = Depends(get_db), project_id: int = 1):
    return crud.delete_project(db=db, project_id=project_id)