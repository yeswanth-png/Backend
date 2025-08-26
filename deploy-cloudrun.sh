#!/bin/bash
# ============================================
# Deploy Spring Boot backend to Google Cloud Run
# ============================================

# ❗️ Replace with your actual Google Cloud Project ID
PROJECT_ID="your-project-id"
REGION="us-central1"
SERVICE_NAME="online-shopping-backend"

echo "🔹 Step 1: Authenticating Google Cloud..."
gcloud auth login

echo "🔹 Step 2: Setting project to $PROJECT_ID ..."
gcloud config set project $PROJECT_ID

echo "🔹 Step 3: Building Docker image..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME

echo "🔹 Step 4: Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated

echo "✅ Deployment finished! Your service URL:"
gcloud run services describe $SERVICE_NAME --region $REGION --format 'value(status.url)'
