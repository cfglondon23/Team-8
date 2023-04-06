from flask import Flask, render_template, url_for
import src


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/track.html')
def track():
    return render_template('track.html')

if __name__ == "__main__":
    app.run(debug=True)