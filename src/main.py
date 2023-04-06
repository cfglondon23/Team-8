from flask import Flask, render_template, url_for
import src


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/base.html')
def base():
    return render_template('base.html')

@app.route('/track.html')
def track():
    return render_template('track.html')

@app.route('/ratings.html')
def ratings():
    return render_template('ratings.html')

@app.route('/login.html')
def login():
    return render_template('login.html')

if __name__ == "__main__":
    app.run(debug=True)