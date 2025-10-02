
BACKEND API LINK: http://203.190.12.138:8001

Training API:

API: 
1) {ip}/api/train: post

When call you will get:
{
    "ok": true,
    "message": "Training started",
    "job_id": "f3a0f9a9-0f63-4368-ae55-a9e9944e175e",
    "status": "PENDING",
    "status_url": "http://127.0.0.1:8000/api/train/f3a0f9a9-0f63-4368-ae55-a9e9944e175e/status",
    "logs_url": "http://127.0.0.1:8000/api/train/f3a0f9a9-0f63-4368-ae55-a9e9944e175e/logs",
    "info": "File exists. Using existing: koi_train.csv"
}

2) With this status_url(get) redirect to another page, status_url contain and fetch this realtime
{
    "ok": true,
    "job_id": "f3a0f9a9-0f63-4368-ae55-a9e9944e175e",
    "status": "SUCCEEDED",
    "params": {
        "data_path": "E:/Nasa Space App 2025/Hunting_For_Exoplanets_With_AI_Nasa2025/server/media/uploads/koi_train.csv",
        "satellite": "KOI",
        "model": "xgb"
    },
    "result": {
        "accuracy": 0.9318541996830428,
        "cv_mean": 0.9054270266889587,
        "cv_std": 0.03624467283763157,
        "auc_score": 0.985092085852421,
        "cm_image_path": "E:\\Nasa Space App 2025\\Hunting_For_Exoplanets_With_AI_Nasa2025\\server\\media\\plots\\cm_KOI_xgb_20250930-012804.png",
        "cm_image_url": "/media/plots/cm_KOI_xgb_20250930-012804.png",
        "cm_norm_image_path": "E:\\Nasa Space App 2025\\Hunting_For_Exoplanets_With_AI_Nasa2025\\server\\media\\plots\\cm_KOI_xgb_20250930-012804_normalized.png",
        "cm_norm_image_url": "/media/plots/cm_KOI_xgb_20250930-012804_normalized.png",
        "model_path": "E:\\Nasa Space App 2025\\Hunting_For_Exoplanets_With_AI_Nasa2025\\server\\media\\models\\KOI_model_xgb.joblib",
        "model_url": "/media/models/KOI_model_xgb.joblib",
        "elapsed_sec": 70.54479122161865
    },
    "error": null
}



3) Train with 2 file, simply take 2 csv input with model name and satellite name

URL: api/predict

Response: after prediction user also can download the CSV

{
    "ok": true,
    "satellite": "KOI",
    "from_row": 0,
    "to_row": 1,
    "total_predicted": 2,
    "csv_file": "http://127.0.0.1:8000/media/uploads/koi_test_raw__pred_KOI_20250930-014418.csv",
    "results": [
        {
            "Row_Number": 0,
            "KEP_ID": 9777089,
            "KOI_Name": "K07962.01",
            "Kepler_Name": null,
            "Actual_Class": "FALSE POSITIVE",
            "Predicted_Class": "FALSE POSITIVE",
            "Confidence": 0.9954034090042114,
            "Match": "Yes",
            "Prob_CANDIDATE": 0.003210674272850156,
            "Prob_CONFIRMED": 0.0013858899474143982,
            "Prob_FALSE POSITIVE": 0.9954034090042114
        },
        {
            "Row_Number": 1,
            "KEP_ID": 11918793,
            "KOI_Name": "K08069.01",
            "Kepler_Name": null,
            "Actual_Class": "FALSE POSITIVE",
            "Predicted_Class": "FALSE POSITIVE",
            "Confidence": 0.9952402114868164,
            "Match": "Yes",
            "Prob_CANDIDATE": 0.003774491371586919,
            "Prob_CONFIRMED": 0.0009853403316810727,
            "Prob_FALSE POSITIVE": 0.9952402114868164
        }
    ]
}





5. Merger and Train, take 2 csv input with satellite and model

First merge the file
URL: http://127.0.0.1:8000/api/merge
 
{
    "ok": true,
    "message": "Merge complete",
    "merged_filename": "merged__koi_train-4__koi_test_raw__pred_koi_20250928-171133__20250930-021008.csv",
    "merged_rows": 9564,
    "merged_url": "http://127.0.0.1:8000/media/mergefiles/merged__koi_train-4__koi_test_raw__pred_koi_20250928-171133__20250930-021008.csv",
    "merge_token": "{\"rel\": \"mergefiles/merged__koi_train-4__koi_test_raw__pred_koi_20250928-171133__20250930-021008.csv\"}:1v3KCG:HzlQdWamhRazRCBEGWKXLjLv259ctk3i69JXp_PB6vQ",
    "expires_in": 1800
}

Show  the csv file and make an options choose, then hit in this API for same train API
http://127.0.0.1:8000/api/train then same process redirect to progress page, as you did before



After click merger, the file name will appear in left side, if click use then this options come



If click train, the process same for training you did in before

