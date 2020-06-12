

from flask import Flask, render_template, request
import json

app = Flask(__name__)

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    resp = {
        'message': userText,
    }
    return json.dumps(resp)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
