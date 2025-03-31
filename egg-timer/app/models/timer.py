from pydantic import BaseModel
from datetime import timedelta

class TimerCreate(BaseModel):
    duration: int  # duration in seconds

class TimerResponse(BaseModel):
    id: int
    duration: int
    remaining_time: int
    is_running: bool

class TimerUpdate(BaseModel):
    duration: int = None
    is_running: bool = None

class Timer:
    def __init__(self, id: int, duration: int):
        self.id = id
        self.duration = duration
        self.remaining_time = duration
        self.is_running = False

    def start(self):
        self.is_running = True

    def stop(self):
        self.is_running = False

    def reset(self):
        self.remaining_time = self.duration
        self.is_running = False

    def tick(self):
        if self.is_running and self.remaining_time > 0:
            self.remaining_time -= 1

    def to_response(self) -> TimerResponse:
        return TimerResponse(
            id=self.id,
            duration=self.duration,
            remaining_time=self.remaining_time,
            is_running=self.is_running
        )