After click start Training Button it hit 
this endpoint 
http://203.190.12.138:8002/api/train
file : selected merged csv file
 
response:

{
    "ok": true,
    "message": "Training started",
    "job_id": "75c67d1e-ba8b-4d61-ae3b-1b9b822a518c",
    "status": "PENDING",
    "status_url": "http://203.190.12.138:8002/api/train/75c67d1e-ba8b-4d61-ae3b-1b9b822a518c/status",
    "logs_url": "http://203.190.12.138:8002/api/train/75c67d1e-ba8b-4d61-ae3b-1b9b822a518c/logs",
    "info": "Uploaded: koi_train.csv"
}

then it redirect to another page called training

there api continuous hit "status_url" when it get success message then it show

response:
{
    "ok": true,
    "job_id": "a5228547-b27f-4844-9ea6-70c8b0358b5c",
    "status": "SUCCEEDED",
    "params": {
        "data_path": "/home/swe/RayhanDSLab/code/HuntingNew/Hunting_For_Exoplanets_With_AI_Nasa2025/server/media/uploads/koi_train.csv",
        "satellite": "KOI",
        "model": "xgb"
    },
    "result": {
        "accuracy": 0.9297411516111992,
        "cv_mean": 0.9078576462297393,
        "cv_std": 0.034727496499455404,
        "auc_score": 0.984793165817035,
        "cm_image_path": "/home/swe/RayhanDSLab/code/HuntingNew/Hunting_For_Exoplanets_With_AI_Nasa2025/server/media/plots/cm_KOI_xgb_20251002-202836.png",
        "cm_image_url": "/media/plots/cm_KOI_xgb_20251002-202836.png",
        "cm_norm_image_path": "/home/swe/RayhanDSLab/code/HuntingNew/Hunting_For_Exoplanets_With_AI_Nasa2025/server/media/plots/cm_KOI_xgb_20251002-202836_normalized.png",
        "cm_norm_image_url": "/media/plots/cm_KOI_xgb_20251002-202836_normalized.png",
        "model_path": "/home/swe/RayhanDSLab/code/HuntingNew/Hunting_For_Exoplanets_With_AI_Nasa2025/server/media/models/KOI_model_xgb.joblib",
        "model_url": "/media/models/KOI_model_xgb.joblib",
        "elapsed_sec": 13.675935745239258
    },
    "error": null

}

That send request in every 2sec to get response till status not Success other wise it show Running in a capsule

there contain also a progress bar and time count down until it get Success message .

So according to my full project , this page also contain previous style and background photo would be aa.png and color combination 100% align with my project . So this information with a nice and simple animated way. that is given below

Status

Satelite
model

accuracy
cv_means
cv_sta
auc_score
cm_norm_image_path
elapsed_sec