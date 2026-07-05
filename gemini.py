import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def ask_gemini(question):
    try:
        response = model.generate_content(question)
        return response.text
    except Exception as e:
        return str(e)


def generate_quiz(topic, num_questions=10):
    prompt = f"""
Generate {num_questions} multiple-choice questions on {topic}.

For each question:
- Provide 4 options (A, B, C, D)
- Mention the correct answer
- Format clearly.

Example:

1. Question?

A.
B.
C.
D.

Answer: B
"""

    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return str(e)
def generate_roadmap(career):
    prompt = f"""
Create a detailed learning roadmap for becoming a {career}.

Include:

1. Beginner Topics
2. Intermediate Topics
3. Advanced Topics
4. Recommended Projects
5. Tools & Technologies
6. Free Resources
7. Estimated Learning Time
8. Career Tips

Format the output using headings and bullet points.
"""

    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return str(e)