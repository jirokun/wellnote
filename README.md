# 概要
wellnoteのデータエクスポートを行うソフトウェア

下記のExportが可能です。

1. ホームの一覧とコメント
2. アルバムの画像・動画

# 使い方
起動するとwellnoteのログイン画面が表示されます。
<img width="1312" alt="login" src="https://user-images.githubusercontent.com/1380767/205961981-845e53ed-99e2-4157-9bf8-a611fc00dc62.png">

ログインするとHTMLの保存開始メッセージが表示されるのでOKを押してそのまましばらくお待ちください。
<img width="1312" alt="confirm" src="https://user-images.githubusercontent.com/1380767/205962078-18540455-909b-48f7-995b-0476db5b610d.png">

すべて保存し終わると下記の場所にwellnote_exportフォルダが作成されデータがエクスポートされます。
- Mac: 「書類」フォルダ
- Windows: 「ドキュメント」フォルダ

# 出力データについて
<img width="1032" alt="スクリーンショット 2022-12-07 1 07 36" src="https://user-images.githubusercontent.com/1380767/205962906-3b6feeea-055f-48ac-95d0-6e607912927f.png">
上記のようにhtmlファイルは中身はレイアウトやコメントが保持された状態でexportされます。
<img width="1046" alt="スクリーンショット 2022-12-07 1 09 05" src="https://user-images.githubusercontent.com/1380767/205963310-4b7e5dcf-b7e5-4ffb-b487-8a2c134cf4c5.png">
HTMLファイルは投稿が100件ごと1ファイル出来上がります。

アルバムに関しては下記のようにalbumsフォルダ以下に年月毎にファイルが作成されます。
<img width="1032" alt="スクリーンショット 2022-12-07 1 10 40" src="https://user-images.githubusercontent.com/1380767/205963600-7999a316-3ff2-40bd-8386-fda8a71acfbd.png">
