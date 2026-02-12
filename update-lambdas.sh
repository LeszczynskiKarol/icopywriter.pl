#!/bin/bash
# ============================================================
# UPDATE: Szybka aktualizacja kodu Lambda
# icopywriter.pl
# Użycie: ./update-lambdas.sh [presign|contact|all]
# ============================================================

set -e

REGION="eu-north-1"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TMP_DIR="$SCRIPT_DIR/.tmp"
mkdir -p "$TMP_DIR"

TARGET="${1:-all}"

to_win_path() {
  cygpath -w "$1" 2>/dev/null || echo "$1"
}

make_zip() {
  local src_dir="$1"
  local zip_name="$2"
  local zip_path="$TMP_DIR/$zip_name"
  rm -f "$zip_path"
  if command -v zip &>/dev/null; then
    (cd "$src_dir" && zip -r "$zip_path" . -x "*.git*" > /dev/null 2>&1)
  else
    local win_src win_zip
    win_src=$(to_win_path "$src_dir")
    win_zip=$(to_win_path "$zip_path")
    powershell.exe -NoProfile -Command "Compress-Archive -Path '${win_src}\\*' -DestinationPath '${win_zip}' -Force"
  fi
}

fileb() {
  echo "fileb://$(to_win_path "$1")"
}

update_function() {
  local name="$1"
  local dir="$2"
  local zip="$3"

  echo ">>> Aktualizacja: $name"
  cd "$SCRIPT_DIR/aws-lambdas/$dir"
  npm install --production --silent 2>/dev/null || npm install --production 2>&1 | tail -3
  make_zip "$SCRIPT_DIR/aws-lambdas/$dir" "$zip"
  aws lambda update-function-code \
    --function-name "$name" \
    --zip-file "$(fileb "$TMP_DIR/$zip")" \
    --region "$REGION" \
    --query '{FunctionName:FunctionName,LastModified:LastModified,CodeSize:CodeSize}' \
    --output table
  echo ""
}

if [ "$TARGET" = "presign" ] || [ "$TARGET" = "all" ]; then
  update_function "icopywriter-presign" "presign-upload" "presign-upload.zip"
fi

if [ "$TARGET" = "contact" ] || [ "$TARGET" = "all" ]; then
  update_function "icopywriter-contact" "contact-form" "contact-form.zip"
fi

rm -rf "$TMP_DIR"
echo "Done!"