# from fastapi import APIRouter, HTTPException
# from pydantic import BaseModel
# import time

# router = APIRouter()

# class TimerRequest(BaseModel):
#     duration: int  # Duration in seconds

# class TimerResponse(BaseModel):
#     message: str

# @router.post("/start-timer", response_model=TimerResponse)
# async def start_timer(timer_request: TimerRequest):
#     duration = timer_request.duration
#     if duration <= 0:
#         raise HTTPException(status_code=400, detail="Duration must be a positive integer.")
    
#     time.sleep(duration)  # Simulate timer delay
#     return TimerResponse(message="Timer completed!")