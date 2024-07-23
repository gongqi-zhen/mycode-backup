# 実行時刻を取得
$timestamp = Get-Date -Format "yyyyMMddHHmmss"

# nodeコマンドを実行
node src/main.js
node src/main.js --png
# node src/main.js --video

# 作成されたディレクトリをzipで固める
Compress-Archive -Path "contents" -DestinationPath "contents_archive/contents_$timestamp.zip"
Compress-Archive -Path "contents_png" -DestinationPath "contents_archive/contents_png_$timestamp.zip"
# Compress-Archive -Path "contents_video" -DestinationPath "contents_archive/contents_video_$timestamp.zip"

# ディレクトリを削除する
Remove-Item -Recurse -Force "contents"
Remove-Item -Recurse -Force "contents_png"
# Remove-Item -Recurse -Force "contents_video"

# 完了メッセージ
Write-Host "コンテンツがcontents_archiveディレクトリに保存されました。"