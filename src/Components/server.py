from flask import Flask, render_template_string, request
import os

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# Hardcoded extracted text
EXTRACTED_TEXT = """INVOICE

ITEMS       QUANTITY   PRICE
--------------------------------
CHICKEN     1          200
TOMATO      2          400
POTATO      3          500
ONION       4          600
GARLIC      5          700
CHILLI      6          800
"""

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OCR Invoice Extractor</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        .container { max-width: 600px; margin: auto; }
        .box { padding: 10px; border: 1px solid #ddd; margin-top: 20px; background: #f9f9f9; }
        .upload-btn { padding: 10px; border: none; background: #007bff; color: white; cursor: pointer; }
    </style>
</head>
<body>

    <div class="container">
        <h2>Upload Invoice Image</h2>
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="file" required>
            <button class="upload-btn" type="submit">Upload & Extract</button>
        </form>

        {% if extracted_text %}
            <div class="box">
                <h3>Extracted Text</h3>
                <pre>{{ extracted_text }}</pre>
            </div>
        {% endif %}
    </div>

</body>
</html>"""

@app.route("/", methods=["GET", "POST"])
def index():
    extracted_text = None
    if request.method == "POST":
        file = request.files.get("file")
        if file:
            file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
            file.save(file_path)
            extracted_text = EXTRACTED_TEXT  # Always returns the hardcoded text
    return render_template_string(HTML_TEMPLATE, extracted_text=extracted_text)

if __name__ == "__main__":
    app.run(debug=True)