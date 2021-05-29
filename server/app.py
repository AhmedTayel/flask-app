from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from random import randint

from flask_cors import CORS, cross_origin

import os

# Init app
app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))

# Init database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


# Create database model
class Number(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  number = db.Column(db.Integer)

  def __init__(self, number):
    self.number = number


def seed():
  if len(Number.query.all()) == 0:
    for x in range(100):
      db.session.add(Number(randint(1,99)))
    db.session.commit()

seed()

@app.route('/number/<id>', methods=["GET"])
@cross_origin()
def get_number(id):
  number = Number.query.get(id)
  return jsonify(number=number.number)

@app.route('/execute', methods=["GET"])
def execute():
  input = request.args.get('input_number', type=int, default=1)
  db_input = request.args.get("db_number", type=int, default=1)

  result = (input * 100) / db_input
  
  return jsonify(result=result)

if __name__ == '__main__':
  app.run(debug=True)