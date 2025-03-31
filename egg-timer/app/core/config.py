from pydantic import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Egg Timer"
    admin_email: str = "admin@example.com"
    items_per_page: int = 10
    debug: bool = False

    class Config:
        env_file = ".env"

settings = Settings()