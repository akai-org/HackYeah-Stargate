from fastapi import APIRouter, Depends
from typing import List
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import get_db

router = APIRouter(prefix="/users", tags=["users"])


@router.get("/",
            response_model=List[schemas.UserFromDB])
def read_users(db: Session = Depends(get_db)):
    user = crud.get_users(db=db)
    return user


@router.post("/",
             response_model=schemas.UserFromDB)
def create_user(user: schemas.User, db: Session = Depends(get_db)):
    return crud.create_user(db=db, user=user)