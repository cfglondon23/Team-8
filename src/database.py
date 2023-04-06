from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

def create_database():
    # Create a database engine
    engine = create_engine('sqlite:///C:\\Users\\aadhi\\Desktop\\Programming\\Team-8\\src\\login.db', echo=True)

    # Create a session
    Session = sessionmaker(bind=engine)
    session = Session()

    # Create a base class for declarative models
    Base = declarative_base()

    # Define a User model
    
    # Create the users table
    Base.metadata.create_all(engine)
    return session


