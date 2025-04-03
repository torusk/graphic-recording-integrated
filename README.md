# グラフィックレコーディング統合システム

## 概要

このシステムは、URLから内容を分析し、グラフィックレコーディング風の視覚的なサマリーを自動生成するためのフレームワークです。分割処理を採用しており、各ステップを段階的に実行することで、AIの処理限界を回避し、確実に完成度の高いグラフィックレコーディングを生成します。

## システムアーキテクチャ

```
graphic-recording-integrated/
├── README.md                 # このファイル（グランドデザイン）
├── prompts/                  # AIプロンプトファイル
│   ├── 01_analyze.md         # ステップ1: コンテンツ分析プロンプト
│   ├── 02_card_content.md    # ステップ2: カード内容生成プロンプト
│   └── 03_html_generation.md # ステップ3: HTML生成プロンプト
├── templates/                # テンプレートファイル
│   ├── base.html             # 基本HTMLテンプレート
│   └── card.html             # カードテンプレート
├── css/                      # スタイルシートファイル
│   ├── base.css              # 基本スタイル
│   ├── a3-landscape.css      # A3横向きスタイル
│   └── a3-portrait.css       # A3縦向きスタイル
├── js/                       # JavaScriptファイル
│   └── image-converter.js    # 画像変換機能
├── output/                   # 出力ファイルの保存先
├── examples/                 # サンプルファイル
│   ├── sample_analysis.md    # 分析サンプル
│   ├── sample_cards.md       # カード内容サンプル
│   └── sample.html           # 完成例
└── workflow.md               # ワークフロー手順書
```

## 実装計画

システムは以下の順番で実装していきます：

1. **基本構造の作成**
   - フォルダ構造の作成
   - ワークフロー手順書の作成

2. **テンプレートとCSSの設定**
   - 基本HTMLテンプレートの作成
   - カードテンプレートの作成
   - CSSスタイルシートの作成

3. **分析プロンプトの作成**
   - コンテンツ分析プロンプト
   - カード内容生成プロンプト
   - HTML生成プロンプト

4. **画像変換機能の実装**
   - JavaScript画像変換機能

5. **サンプルの作成**
   - 分析サンプル
   - カード内容サンプル
   - 完成例

## ワークフロー概要

1. **コンテンツ分析**
   - URLまたはコンテンツをAIに提供
   - 6つの主要ポイントに整理

2. **カード内容生成**
   - 各ポイントについて、タイトル、アイコン、内容、キーワードを抽出
   - マークダウン形式でカード内容を準備

3. **HTML生成**
   - カード内容をHTMLに変換
   - テンプレートに挿入

4. **視覚化と保存**
   - HTMLをブラウザで表示
   - 画像として保存

## 実装の進め方

各ステップを順番に実装し、そのつど動作確認します。この方法により、大きなプロジェクトを小さく分割し、確実に進めることができます。途中で中断しても、どこまで実装したかが明確になっているため、スムーズに再開できます。

## 使用技術

- HTML/CSS/JavaScript
- Font Awesome（アイコン）
- Google Fonts（手書き風フォント）
- html2canvas（HTML→画像変換）
- FileSaver.js（ファイル保存）