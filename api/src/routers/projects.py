from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlalchemy.orm import Session
from .. import models, schemas, crud
from ..database import get_db

router = APIRouter(prefix="/projects", tags=["projects"])


@router.get("/",
            response_model=List[schemas.ProjectOut])
def read_projects(db: Session = Depends(get_db)):
    project = crud.get_projects(db=db)
    return project


@router.get("/{project_id}",
            response_model=schemas.ProjectOut)
def read_project(db: Session = Depends(get_db), project_id: int = 1):
    project = crud.get_project(db=db, project_id=project_id)
    return project


@router.post("/",
             response_model=schemas.ProjectOut)
def create_project(project: schemas.ProjectCreate, db: Session = Depends(get_db)):
    db_project = crud.get_project_by_title(db, project.title)
    if db_project:
        raise HTTPException(status_code=400, detail="Project already exists")
    return crud.create_project(db=db, project=project)


@router.delete("/{project_id}")
def delete_project(db: Session = Depends(get_db), project_id: int = 1):
    return crud.delete_project(db=db, project_id=project_id)