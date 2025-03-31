from fastapi import FastAPI
from .api.routes import router as timer_router

app = FastAPI()

app.include_router(timer_router)