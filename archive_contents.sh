#!/bin/bash

set -eux

# 実行時刻を取得
timestamp=$(date +"%Y%m%d%H%M%S")

# nodeコマンドを実行
node src/main.js
node src/main.js --png
node src/main.js --video

# 作成されたディレクトリをtarで固める
tar -czf "contents_archive/contents_$timestamp.tar.gz" contents
tar -czf "contents_archive/contents_png_$timestamp.tar.gz" contents_png
tar -czf "contents_archive/contents_video_$timestamp.tar.gz" contents_video

# ディレクトリを削除する
rm -rf contents
rm -rf contents_png
rm -rf contents_video

# 完了メッセージ
echo "コンテンツがcontents_archiveディレクトリに保存されました。"
