from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess
import pickle
import cv2
import numpy as np
import mediapipe as mp
import arabic_reshaper
from bidi.algorithm import get_display

app = Flask(__name__)
CORS(app)

try:
    with open('./model.p', 'rb') as f:
        model_dict = pickle.load(f)
    model = model_dict['model']
except Exception as e:
    print(f"Error loading model: {e}")
    exit()


mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=False, min_detection_confidence=0.3)


labels_dict = {0: 'ا', 1: 'ب', 2: 'ت', 3:'ث', 4:'ج', 5:'ح', 6:'خ', 7:'د', 8:'ذ', 9:'ر', 10:'ز', 11:'س', 12:'ش', 13:'ص', 14:'ض', 15:'ط', 
               16:'ظ', 17:'ع', 18:'غ', 19:'ف', 20:'ق', 21:'ك', 22:'ل', 23:'م', 24:'ن', 25:'ه', 26:'و', 27:'ي', 28:'ة', 29:'ء'}

@app.route('/collect_images', methods=['GET'])
def collect_images():
    try:
        subprocess.Popen(['python3', 'collect_imgs.py'])
        return jsonify({'message': 'Collecting images started.'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/create_dataset', methods=['GET'])
def create_dataset():
    try:
        subprocess.Popen(['python3', 'create_dataset.py'])
        return jsonify({'message': 'Creating dataset started.'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/train_classifier', methods=['GET'])
def train_classifier():
    try:
        subprocess.Popen(['python3', 'train_classifier.py'])
        return jsonify({'message': 'Training classifier started.'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/detect', methods=['POST'])
def detect():
    try:
        file = request.files['frame'].read()
        npimg = np.frombuffer(file, np.uint8)
        img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

        H, W, _ = img.shape
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        results = hands.process(img_rgb)
        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                data_aux = []
                x_ = []
                y_ = []

                for i in range(len(hand_landmarks.landmark)):
                    x = hand_landmarks.landmark[i].x
                    y = hand_landmarks.landmark[i].y
                    x_.append(x)
                    y_.append(y)

                x_min, y_min = min(x_), min(y_)

                for i in range(len(hand_landmarks.landmark)):
                    x = hand_landmarks.landmark[i].x
                    y = hand_landmarks.landmark[i].y
                    data_aux.append(x - x_min)
                    data_aux.append(y - y_min)

                prediction = model.predict([np.asarray(data_aux)])
                predicted_character = labels_dict[int(prediction[0])]


                return jsonify({'predicted_character':predicted_character}), 200

        return jsonify({'predicted_character': ' '}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
