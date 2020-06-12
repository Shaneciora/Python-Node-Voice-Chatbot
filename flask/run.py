from flask import Flask, render_template, request
import json
import bot

app = Flask(__name__)

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    resp = {
        'message': bot.runbot(userText),
    }
    return json.dumps(resp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
