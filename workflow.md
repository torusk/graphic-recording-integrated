# グラフィックレコーディング統合システム 使用手順書

このドキュメントでは、URLからグラフィックレコーディングを生成するまでの手順を説明します。

## 前提条件

- モダンブラウザ（Chrome、Firefox、Edgeなど）がインストールされていること
- AIツール（ChatGPTなど）へのアクセスがあること

## 基本ワークフロー

グラフィックレコーディングの生成は、以下の3つのステップで行います：

1. **コンテンツ分析**: URLの内容を分析し、6つの主要ポイントに整理
2. **カード内容生成**: 各ポイントの詳細なコンテンツをマークダウン形式で作成
3. **HTML生成と表示**: マークダウンをHTMLに変換し、ブラウザで表示・画像保存

## ステップ1: コンテンツ分析

1. `prompts/01_analyze.md`ファイルを開く
2. プロンプト内の`[URLまたはコンテンツをここに貼り付け]`部分を実際のURLまたはコンテンツに置き換える
3. 修正したプロンプトをAIツールに貼り付ける
4. AIから返された分析結果を`output/analysis.md`として保存する

**例**:
```
# グラフィックレコーディング コンテンツ分析プロンプト

以下のURLまたはコンテンツを分析して、グラフィックレコーディング用の6つの主要ポイントを抽出してください。

## 分析対象

https://example.com/article-about-wifi-technology

## 指示

1. 内容を6つの主要ポイントに整理してください
...
```

## ステップ2: カード内容生成

1. `prompts/02_card_content.md`ファイルを開く
2. プロンプト内の`[前のステップの分析結果をここに貼り付け]`部分を、ステップ1で得た分析結果で置き換える
3. 修正したプロンプトをAIツールに貼り付ける
4. AIから返されたカード内容を`output/cards.md`として保存する

**例**:
```
# グラフィックレコーディング カード内容作成プロンプト

前のステップで分析した内容をもとに、グラフィックレコーディングのカード内容を作成してください。

## 分析結果

## 全体タイトル
Wi-Fiの基礎知識と活用法

## メタデータ
- source: Spotify Creators - フリーアジェンダ第363回
...
```

## ステップ3: HTML生成と表示

1. `prompts/03_html_generation.md`ファイルを開く
2. プロンプト内の`[前のステップで作成したカード内容をここに貼り付け]`部分を、ステップ2で得たカード内容で置き換える
3. 修正したプロンプトをAIツールに貼り付ける
4. AIから返されたHTMLコードを取得する
5. `templates/base.html`をコピーして`output/index.html`を作成する
6. `output/index.html`内の`{{TITLE}}`、`{{SUBTITLE}}`などのプレースホルダーをカード内容のメタデータに基づいて置き換える
7. `{{CONTENT}}`部分をAIから返されたHTMLコードで置き換える
8. `{{FOOTER_ICONS}}`部分を適切なアイコンHTMLで置き換える
9. ブラウザで`output/index.html`を開く
10. 「画像として保存」ボタンをクリックしてPNG画像として保存する

**例**:
```html
<!-- 元の部分 -->
<div class="content">
  {{CONTENT}}
</div>

<!-- 置き換え後 -->
<div class="content">
  <!-- カード1 -->
  <div class="card">
    <div class="card-icon">
      <i class="fas fa-network-wired"></i>
    </div>
    <h2>
      <i class="fas fa-info-circle"></i>
      Wi-Fiの基本
    </h2>
    <div class="card-content">
      <!-- カード1の内容 -->
      ...
    </div>
  </div>
  
  <!-- 他のカード -->
  ...
</div>
```

## トラブルシューティング

### HTML生成時に一部のコンテンツが切れる場合

AIの出力制限により、長いHTMLが切れることがあります。その場合は、以下の方法を試してください：

1. カード内容を2つか3つずつに分割し、複数回に分けてHTMLを生成する
2. 各部分のHTMLを組み合わせて完全なコンテンツを作成する

### 画像が正しく表示されない場合

1. すべてのCSSファイルが正しく読み込まれているか確認する
2. ブラウザのキャッシュをクリアしてから再読み込みする
3. 別のブラウザで試してみる

### 画像保存ボタンが機能しない場合

1. ブラウザのコンソールでエラーがないか確認する
2. HTML2CanvasとFileSaver.jsが正しく読み込まれているか確認する
3. 外部のCDNからのスクリプト読み込みが遮断されていないか確認する

## サンプルファイル

`examples/`フォルダには以下のサンプルファイルがあります：

- `sample_analysis.md`: 分析結果のサンプル
- `sample_cards.md`: カード内容のサンプル
- `sample.html`: 完成したHTMLのサンプル

これらのファイルを参考にして、実際のグラフィックレコーディングを作成してください。

## ヒントとコツ

- 分析対象が長い場合は、要約してからAIツールに入力すると良いでしょう
- カード内容では、視覚的に表現しやすいキーワードや概念を強調してください
- アイコンは内容に適したものを選び、Font Awesome 6のアイコン名を使用してください
- HTML生成時は、視覚的な構造を重視して、アイコンや強調表示を適切に配置してください