from sqlalchemy.orm import Session
from .database import engine
from .models import User

def create_test_data():
    with Session(engine) as session:
        somone = User(name="somone",
                      fullname="somone",
                        email="somo@so.pl",
                        )
        session.add(somone)
        session.commit()

