from sqlalchemy.orm import Session

from . import models, schemas


def get_project(db: Session, project_id: int):
    return db.query(models.Project).filter(models.Project.id == project_id).first()


def get_project_by_title(db: Session, title: str):
    return db.query(models.Project).filter(models.Project.title == title).first()


def get_projects(db: Session):
    return db.query(models.Project).all()


def create_project(db: Session, project: schemas.Project):
    db_project = models.Project(**project.model_dump())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project


def delete_project(db: Session, project_id: int):
    db.query(models.Project).filter(models.Project.id == project_id).delete()
    db.commit()
    return {"message": "Project deleted"}
