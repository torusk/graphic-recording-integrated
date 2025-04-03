# グラフィックレコーディング HTML生成プロンプト

前のステップで作成したカード内容をHTML形式に変換してください。

## カード内容（マークダウン）

```markdown
[前のステップで作成したカード内容をここに貼り付け]
```

## 指示

1. マークダウン形式のカード内容をHTML形式に変換してください
2. Font Awesomeアイコンを適切に配置してください
3. キーワードや重要な部分を視覚的に強調してください
4. カードごとにdiv.cardとして分けてください
5. HTML内の余計なコメントは省略してください

## 出力形式

HTML形式のカードコンテンツのみを出力してください。ヘッダーやフッター、ドキュメント宣言などは含めないでください。

```html
<!-- カード1 -->
<div class="card">
  <div class="card-icon">
    <i class="[カードアイコン]"></i>
  </div>
  <h2>
    <i class="[タイトルアイコン]"></i>
    [タイトル]
  </h2>
  <div class="card-content">
    <!-- カード1の内容 -->
    [HTML形式に変換されたコンテンツ]
  </div>
</div>

<!-- カード2 -->
...

<!-- カード6 -->
...
```

## 変換ルール

1. **強調キーワード**:
   ```markdown
   **キーワード**
   ```
   を以下のHTMLに変換:
   ```html
   <span class="keyword"><i class="fas fa-関連アイコン"></i>キーワード</span>
   ```

2. **特に強調するフレーズ**:
   ```markdown
   **強調フレーズ**
   ```
   を以下のHTMLに変換:
   ```html
   <span class="highlight"><i class="fas fa-関連アイコン"></i>強調フレーズ</span>
   ```

3. **箇条書きリスト**:
   ```markdown
   - 項目1
   - 項目2
   ```
   を以下のHTMLに変換:
   ```html
   <ul style="list-style: none; padding-left: 10px;">
     <li><i class="fas fa-check-circle" style="color: var(--color-green-2);"></i> 項目1</li>
     <li><i class="fas fa-check-circle" style="color: var(--color-green-2);"></i> 項目2</li>
   </ul>
   ```

4. **アイコンボックス**:
   複数の関連項目がある場合:
   ```html
   <div class="icon-box">
     <div class="icon-item">
       <i class="fas fa-アイコン fa-2x"></i>
       <span>テキスト</span>
     </div>
     ...
   </div>
   ```

5. **注釈ボックス**:
   ```html
   <div class="note-box">
     <i class="fas fa-lightbulb"></i>
     <div>
       注釈内容
     </div>
   </div>
   ```

この変換されたHTMLは、次のステップでテンプレートに挿入します。