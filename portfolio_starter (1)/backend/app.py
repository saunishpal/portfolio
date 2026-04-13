from flask import Flask, render_template

app = Flask(__name__)

# Home route
@app.route('/')
def home():
    return render_template('index.html')

# About page
@app.route('/about')
def about():
    return render_template('about.html')

# Projects page
@app.route('/projects')
def projects():
    return render_template('projects.html')

# Contact page
@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    # Debug mode ON only for development
    app.run(debug=True)

