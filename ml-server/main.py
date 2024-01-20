import numpy as np
from flask import Flask, jsonify, request
from flask_cors import CORS
from model import model_output

app = Flask(__name__)
CORS(app, origins="*")


@app.route("/", methods=["POST"])
def predict():
    # receive the base64 encoded image
    datetime_str = request.get_json()['datetimeString']

    output = model_output(datetime_str)

    return jsonify(prediction=output)


if __name__ == "__main__":
    app.run(debug=True)
