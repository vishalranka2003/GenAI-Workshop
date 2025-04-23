from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Gemini API
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)

# Initialize Gemini model with specific configuration for resume analysis
model = genai.GenerativeModel('gemini-2.0-flash')

# Resume analysis system prompt
RESUME_SYSTEM_PROMPT = """You are an expert resume reviewer and career advisor. Your task is to:
1. Analyze resume content for strengths and weaknesses
2. Provide specific feedback on formatting, content, and impact
3. Suggest improvements for better presentation
4. Identify key achievements and skills
5. Provide actionable recommendations

Please provide detailed, constructive feedback that helps improve the resume."""

@app.route('/', methods=['GET'])
def get():
    return "Hello World"

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message')
        resume_text = data.get('resume_text', '')
        
        if not user_message:
            return jsonify({'error': 'No message provided'}), 400
        
        # Combine system prompt with user message and resume text
        full_prompt = f"{RESUME_SYSTEM_PROMPT}\n\nResume Text:\n{resume_text}\n\nUser Query: {user_message}"
        
        # Generate response using Gemini
        response = model.generate_content(full_prompt)
        
        return jsonify({
            'response': response.text
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000) 