from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('spotify.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    return render_template('bleep.html', say=request.form['say'])

if __name__ == "__main__":
    app.run()
