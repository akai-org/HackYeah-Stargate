from fastapi import APIRouter, Depends
from typing import List
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import get_db

router = APIRouter(prefix="/projects", tags=["projects"])


@router.get("/",
            response_model=List[schemas.Project])
def read_projects(db: Session = Depends(get_db)):
    project = crud.get_projects(db=db)
    return project


@router.post("/",
             response_model=schemas.Project)
def create_project(project: schemas.Project, db: Session = Depends(get_db)):
    return crud.create_project(db=db, project=project)

