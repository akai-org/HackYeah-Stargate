from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlalchemy.orm import Session
from .. import models, schemas, crud
from ..database import get_db

router = APIRouter(prefix="/hackathons", tags=["hackathons"])


@router.get("/",
            response_model=List[schemas.HackathonOut])
def read_hackathons(db: Session = Depends(get_db)):
    hackathon = crud.get_hackathons(db=db)
    return hackathon


@router.get("/{hackathon_id}",
            response_model=schemas.HackathonOut)
def read_hackathon(db: Session = Depends(get_db), hackathon_id: int = 1):
    hackathon = crud.get_hackathon(db=db, hackathon_id=hackathon_id)
    return hackathon


@router.post("/",
             response_model=schemas.HackathonOut)
def create_hackathon(hackathon: schemas.HackathonCreate, db: Session = Depends(get_db)):
    db_hackathon = crud.get_hackathon_by_title(db, hackathon.title)
    if db_hackathon:
        raise HTTPException(status_code=400, detail="Hackathon already exists")
    return crud.create_hackathon(db=db, hackathon=hackathon)


@router.delete("/{hackathon_id}")
def delete_hackathon(db: Session = Depends(get_db), hackathon_id: int = 1):
    return crud.delete_hackathon(db=db, hackathon_id=hackathon_id)
