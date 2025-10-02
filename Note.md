Here at first need to select Satelite the select model then enter range which is option then upload the data csv then click Predict button
model drop down select options contain this
xgb as XGB BOOST
gb as Gradient Boosting
rf as Random Forest
dt as Decision Tree
svm as SVM
lr as Logistic Regression

here request url :
BACKEND_API_LINK: http://203.190.12.138:8002


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

