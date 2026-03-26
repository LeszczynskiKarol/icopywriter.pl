#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# Deploy script for icopywriter.pl
# Usage: ./deploy.sh
# ═══════════════════════════════════════════════════════════════════════════════

set -e

S3_BUCKET="www.icopywriter.pl"
CLOUDFRONT_ID="EPCWYAAW20KBV"

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  🚀 Deploying icopywriter.pl"
echo "═══════════════════════════════════════════════════════════════"

echo "📦 Pushing to GitHub..."
git add .
git commit -m "git push from local"
git push origin main

if [ $? -ne 0 ]; then
  echo "❌ Git push failed!"
  exit 1
fi


# Build
echo ""
echo "📦 Building..."
npm run build

# Upload to S3
echo ""
echo "☁️  Uploading to S3..."
aws s3 sync dist/ s3://$S3_BUCKET --delete

# Invalidate CloudFront
echo ""
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*" --query 'Invalidation.Id' --output text

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  ✅ Done! https://icopywriter.pl"
echo "═══════════════════════════════════════════════════════════════"
echo ""