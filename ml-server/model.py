import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
from sklearn.preprocessing import MinMaxScaler
import joblib

# Load the model and scalers
model = load_model('watt_a_saver_model.h5')
feature_scaler = joblib.load('feature_scaler.pkl')
target_scaler = joblib.load('target_scaler.pkl')

def model_output(datetime_str, time_steps=10):
    # Parse datetime string
    datetime_obj = pd.to_datetime(datetime_str)
    year = datetime_obj.year
    month = datetime_obj.month
    day = datetime_obj.day
    hour = datetime_obj.hour
    day_of_week = datetime_obj.dayofweek
    is_weekend = int(day_of_week >= 5)

    # Create a DataFrame
    input_df = pd.DataFrame({
        "Year": [year],
        "Month": [month],
        "Day": [day],
        "Hour": [hour],
        "DayOfWeek": [day_of_week],
        "IsWeekend": [is_weekend]
    })

    # Scale features
    input_scaled = feature_scaler.transform(input_df)

    # Reshape input for LSTM
    input_scaled = np.repeat(input_scaled[np.newaxis, :, :], time_steps, axis=0)
    input_scaled = input_scaled.reshape(1, time_steps, -1)

    # Predict and inverse transform the prediction
    prediction_scaled = model.predict(input_scaled)
    prediction = target_scaler.inverse_transform(prediction_scaled)

    return prediction[0, 0]
