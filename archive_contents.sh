#!/bin/bash

set -eux

# 実行時刻を取得
timestamp=$(date +"%Y%m%d%H%M%S")

# nodeコマンドを実行
node src/main.js
node src/main.js --png

# 作成されたディレクトリをtarで固める
tar -czf "contents_archive/contents_$timestamp.tar.gz" contents
tar -czf "contents_archive/contents_png_$timestamp.tar.gz" contents_png

# ディレクトリを削除する
rm -rf contents
rm -rf contents_png

# 完了メッセージ
echo "コンテンツがcontents_archiveディレクトリに保存されました。"
