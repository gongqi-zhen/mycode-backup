# Windows 環境でのセットアップ手順

このドキュメントは、Windows 環境でプロジェクトをセットアップするための手順を説明しています。

## 手順

### 1. GitHub からダウンロード

まず、GitHub からプロジェクトをクローンまたはダウンロードします。

```bash
git clone https://github.com/gongqi-zhen/mycode-backup.git
cd mycode-backup
```

### 2. .env の雛形準備

.env ファイルを準備します。
.env.template を.env に変更し、自分のパスワード等に値を修正する。

### 3. Node.js のインストール

Node.js をインストールします。Windows の場合、以下のコマンドを使用して winget を使ってインストールできます。

```bash
winget.exe install --source winget "Node.js"
```

### 4. PowerShell を立ち上げ直す

インストール後、PowerShell を再起動します。これは、Node.js のパスが通るようにするためです。

### 5. 必要なパッケージをインストール

プロジェクトのルートディレクトリで以下のコマンドを実行し、必要なパッケージをインストールします。

```bash
npm install
```

### 6. Playwright のインストール

以下のコマンドを実行して Playwright をインストールします。

```bash
npx playwright install
```

### 7. プロジェクトの実行

プロジェクトを実行するには、以下のコマンドを使用します。

```bash
node src/main.js --png
```

これで、Windows 環境でプロジェクトをセットアップして実行することができます。
