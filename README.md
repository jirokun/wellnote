# 概要
wellnoteのデータエクスポートを行うソフトウェア

下記のExportが可能です。

1. ホームの投稿とコメント
2. アルバムの画像・動画

# ダウンロード
- [Windows](https://github.com/jirokun/wellnote/releases/download/pre-release/wellnote-0.1.exe)
   - DLしたexeを実行してください
- [Mac](https://github.com/jirokun/wellnote/releases/download/pre-release/wellnote-darwin-arm64-0.1.zip)
   - zipを解凍してwellnoteを実行してください

# 使い方
起動するとwellnoteのログイン画面が表示されます。
<img width="1312" alt="login" src="https://user-images.githubusercontent.com/1380767/205961981-845e53ed-99e2-4157-9bf8-a611fc00dc62.png">

ログインするとHTMLの保存開始メッセージが表示されるのでOKを押してそのまましばらくお待ちください。
<img width="1312" alt="スクリーンショット 2022-12-07 1 49 34" src="https://user-images.githubusercontent.com/1380767/205973017-3cce9bca-dd35-4a6c-9a7a-432af3cfebd0.png">

エクスポートが終わるとダイアログが表示されます
<img width="1268" alt="スクリーンショット 2022-12-07 1 50 28" src="https://user-images.githubusercontent.com/1380767/205973611-feda8661-36d5-4be4-aec6-ae0a3cc398c2.png">

下記の場所にwellnote_exportフォルダが作成されデータがエクスポートされます。
- Mac: 「書類」フォルダ
- Windows: 「ドキュメント」フォルダ

# 出力データについて
<img width="1032" alt="スクリーンショット 2022-12-07 1 07 36" src="https://user-images.githubusercontent.com/1380767/205962906-3b6feeea-055f-48ac-95d0-6e607912927f.png">
上記のようにhtmlファイルは中身はレイアウトやコメントが保持された状態でexportされます。
<img width="1046" alt="スクリーンショット 2022-12-07 1 13 18" src="https://user-images.githubusercontent.com/1380767/205964747-2e975bb6-6a3a-4170-9d06-7df5747a0bdd.png">

HTMLファイルは投稿が100件ごと1ファイル出来上がります。

アルバムに関しては下記のようにalbumsフォルダ以下に年月毎にファイルが作成されます。
<img width="1032" alt="スクリーンショット 2022-12-07 1 10 40" src="https://user-images.githubusercontent.com/1380767/205963600-7999a316-3ff2-40bd-8386-fda8a71acfbd.png">
