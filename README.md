# Line Bot on Cloud Funtions
Simple echo line bot on Google Cloud Functions

## Preparation
- Replace `<CHANNEL ACCESS TOKEN>` in `index.js` with your token from the Line Channel settings page
- Create GCP account and install `gcloud` cli
- Enable `Cloud Functions API` in GCP Console
- Repace `<YOUR-GCP-PROJECT>` in `deploy.sh` with your GCP Project ID
- Replace `<YOUR-GCS-BUCKET>` in `deploy.sh` with your GCS Bucket


## Deploy
You can deploy by running `deploy.sh` or using the command below


```
gcloud beta functions deploy line-bot --project <YOUR-GCP-PROJECT> --stage-bucket <YOUR-GCS-BUCKET> --entry-point hook --trigger-http
```

Your bot will or may be available for Line Messaging API to access via

```
https://us-central1-<YOUR-GCP-PROJECT>.cloudfunctions.net/line-bot
```

You can enter the above URL to `Webhook URL` in the Line Channel settings page

## Disclaimer
Google Cloud Functions is still in `beta` during this publish. Please use with caution.