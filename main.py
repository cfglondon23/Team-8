from flask import Flask, render_template, url_for, request
from src.database import create_database
from src import User
from src import stats


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login', methods = ['POST', 'GET'])
def login():
    db = create_database()
    if request.method == "POST":
        user = User(username='username', password='password')
        db.add(user)
        db.commit()
    
    return render_template('login.html')

@app.route('/track', methods=['POST', 'GET'])
def track():
    if request.method == "POST":
        data = request.data
        values = stats.get_useful_scores(data)
        return render_template('track.html', values)
    return render_template('track.html')




if __name__ == "__main__":
    app.run(debug=True)
    
