from flask import Flask, render_template, url_for, request
from src.database import create_database
from src import User
from src import stats


app = Flask(__name__)


@app.route('/login.html', methods = ['POST', 'GET'])
def login():
    db = create_database()
    if request.method == "POST":
        user = User(username='username', password='password')
        db.add(user)
        db.commit()
        db.close()
    
    return render_template('login.html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/base.html')
def base():
    return render_template('base.html')


@app.route('/ratings.html')
def ratings():
    return render_template('ratings.html')

@app.route('/track.html', methods=['POST', 'GET'])
def track():
    if request.method == "POST":
        data = request.data
        data_edit = data.decode('ascii')
        data_edt = data_edit[5:]
        values = stats.get_useful_scores(data_edt)
        return values

    return render_template('track.html')


if __name__ == "__main__":
    app.run(debug=True)
    
