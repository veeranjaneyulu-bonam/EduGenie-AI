from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from gemini import ask_gemini, generate_quiz, generate_roadmap

app = FastAPI()

# Mount static folder
app.mount("/static", StaticFiles(directory="static"), name="static")

# Templates folder
templates = Jinja2Templates(directory="templates")


# Home Page
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html"
    )


# Ask AI
@app.get("/ask")
async def ask(question: str):
    answer = ask_gemini(question)
    return {
        "answer": answer
    }


# Quiz Generator
@app.get("/quiz")
async def quiz(topic: str):
    quiz = generate_quiz(topic)
    return {
        "quiz": quiz
    }


# Roadmap Generator
@app.get("/roadmap")
async def roadmap(career: str):
    roadmap = generate_roadmap(career)
    return {
        "roadmap": roadmap
    }