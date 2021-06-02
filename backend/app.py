# save this as app.py
from flask import Flask

app = Flask("Surfe")

@app.route("/")
def hello():
    return "Hello, World!"