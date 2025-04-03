/**
 * グラフィックレコーディング画像変換機能
 * HTML2CanvasとFileSaver.jsを使用してHTMLをPNG画像として保存します
 */
document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById("image-convert-button");
  const loadingOverlay = document.getElementById("loading-overlay");
  const container = document.querySelector(".container");

  // フォントが読み込まれたことを確認する
  document.fonts.ready.then(() => {
    console.log("フォントが読み込まれました");
  });

  // 画像変換ボタンのクリックイベント
  convertButton.addEventListener("click", function () {
    // ローディングオーバーレイを表示
    loadingOverlay.style.display = "flex";

    // スクロールを一番上に戻す (綺麗にキャプチャするため)
    window.scrollTo(0, 0);

    // 少し待機してから画像キャプチャを実行 (スクロールとレンダリングが完了するのを待つ)
    setTimeout(() => {
      // HTML2Canvasでコンテナをキャプチャ
      html2canvas(container, {
        scale: 2, // 高解像度でキャプチャ
        useCORS: true, // 外部リソース（フォントなど）の読み込みを許可
        allowTaint: true, // 外部リソースからのキャンバス汚染を許可
        backgroundColor: "#F2F2F2", // 背景色を設定
        logging: false, // ログ出力を無効化
        onclone: function (clonedDoc) {
          // クローンされたドキュメントでスタイルを調整
          const clonedContainer = clonedDoc.querySelector(".container");
          if (clonedContainer) {
            clonedContainer.style.boxShadow = "0 0 30px rgba(0, 0, 0, 0.15)";
            
            // タイトルが見えるようにスタイルを調整
            const title = clonedDoc.querySelector("h1");
            if (title) {
              title.style.color = "#33691E"; // 緑色で明示的に色を設定
              title.style.opacity = "1"; // 不透明度を最大に
              title.style.visibility = "visible"; // 明示的に可視化
              title.style.display = "block"; // 確実に表示
              title.style.position = "relative"; // 位置を相対指定
              title.style.zIndex = "1000"; // 最前面に
            }
            
            // ヘッダー全体の背景を確実に設定
            const header = clonedDoc.querySelector("header");
            if (header) {
              header.style.backgroundColor = "#f2f2f2";
              header.style.padding = "20px";
              header.style.position = "relative";
              header.style.zIndex = "999";
            }
          }
        },
      })
        .then((canvas) => {
          // キャンバスをPNG画像として保存
          canvas.toBlob(function (blob) {
            // タイトルを取得して保存ファイル名に使用
            const title = document.querySelector("h1").textContent.trim();
            const fileName = `${title.substring(0, 30)}_グラレコ.png`;

            // ファイルとして保存
            saveAs(blob, fileName);

            // ローディングオーバーレイを非表示
            loadingOverlay.style.display = "none";
          }, "image/png");
        })
        .catch((error) => {
          console.error("画像の生成に失敗しました:", error);
          alert("画像の生成に失敗しました。もう一度お試しください。");
          loadingOverlay.style.display = "none";
        });
    }, 1000); // 待機時間を長めに設定
  });
});