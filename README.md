# Line Bot on Cloud Cuntions
Simple echo line bot on Google Cloud Functions

## Preparation
- Replace `<CHANNEL ACCESS TOKEN>` in `index.js` with your token from Line Channel settings
- Install `gcloud` cli
- Repace `<YOUR-GCP-PROJECT>` in `deploy.sh` with your GCP project
- Replace `<YOUR-GCS-BUCKET>` in `deploy.sh` with your GCS bucket


## Deploy
You can deploy by running `deploy.sh` or using the command below


```
gcloud beta functions deploy line-bot --project <YOUR-GCP-PROJECT> --stage-bucket <YOUR-GCS-BUCKET> --entry-point hook --trigger-http
```

Your bot will be available for Line Messaging API to access via

```
https://us-central1-<YOUR-GCP-PROJECT>.cloudfunctions.net/line-bot
```

## Disclaimer
Google Cloud Functions is still in `beta` during this publish. Please use with caution.