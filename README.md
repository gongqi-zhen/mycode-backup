# MYCODE Backup Program

## 概要

このプログラムは、MYCODE の遺伝子検査結果を自動的に保存するためのツールです。ご自身のユーザ名、パスワード、および秘密の質問への回答を設定し、プログラムを実行することで、遺伝子検査結果等をローカルに保存できます。

## 利用方法

### 1. リポジトリのクローン

まず、このリポジトリをクローンします：

```bash
git clone https://github.com/gongqi-zhen/mycode-backup.git
cd mycode-backup
```

### 2. 依存パッケージのインストール

次に、必要な依存パッケージをインストールします：

```bash
npm install
```

### 3. 環境変数の設定

.env ファイルを作成し、以下のようにご自身のユーザ名、パスワード、および秘密の質問への回答を記入します：

```bash
cat .env.template

APP_USERNAME="あなたのユーザ名"
APP_PASSWORD="あなたのパスワード"
APP_SECRET_ANSWER="あなたの秘密の質問への回答"

.envファイルに変更し、内容を正しいのものに修正してください
mv .env.template .env
```

### 4. プログラムの実行

src/contentUrls.js を編集し、バックアップを取りたいページ以外はコメントアウトしてください

以下のコマンドで実行します。
CAPCHA が表示される場合は、指定画像を選択してください。

```bash
node src/main.js
```

結果を画像(png)で残す場合は、引数に"--png"を指定してください。
体質と祖先の検査結果などは html で保存するより画像で保存するのがより適切かもしれません。

```bash
node src/main.js --png
```

プログラムが起動すると、指定された MYCODE アカウントにログインし、遺伝子検査結果をローカルフォルダに保存します。

### 5. 結果の確認

保存された遺伝子検査結果は、contents もしくは contents_png フォルダ内に保存されます。index.html ファイルを開くと、各結果へのリンクが一覧表示されます。

```bash
open contents/index.html

or

open contents_png/index.html
```

### 6. 他の環境でのセットアップについて

[Windows 環境のセットアップ手順はこちら](SETUP_WINDOWS.md)

### ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は LICENSE ファイルを参照してください。

## 謝辞

MYCODE のサービスを作り運営してきたすべてのチームの皆様・関係者に感謝の意を表します。
このプログラムが、皆様の大切な遺伝子検査結果を手元に残す一助となれば幸いです。
