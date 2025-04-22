# Gemini Chat Backend

A Flask backend that uses Google's Gemini API to handle chat requests.

## Setup

1. Install the required dependencies:
```bash
pip install -r requirements.txt
```

2. Create a `.env` file in the root directory and add your Gemini API key:
```
GOOGLE_API_KEY=your_gemini_api_key_here
```

3. Run the application:
```bash
python app.py
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/chat
Send a chat message to the Gemini API.

Request body:
```json
{
    "message": "Your message here"
}
```

Response:
```json
{
    "response": "Gemini's response"
}
```

## Error Handling
The API will return appropriate error messages if:
- No message is provided
- The API key is invalid
- Any other errors occur during processing 