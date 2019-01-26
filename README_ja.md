# 概要

Angular + Jest のサンプルプロジェクトです。

# 実行環境

* Node.js 10.x
* Yarn 1.12.x

# 使用ライブラリ

* TypeScript 3.2.x
* Angular 7.2.x
* Jest 23.6.x
* ts-jest 23.10.x
* jest-preset-angular 6.0.x
* @angular-builders/jest 7.2.x

# 動作確認

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/ng-jest-sample.git
```

## 2. パッケージインストール  

```
cd ng-jest-sample
yarn
```

## 3. サンプルの起動  

```
yarn test
```

# NPM Script list

<table>
<tr>
  <th>script</th>
  <th>overview</th>
</tr>
<tr>
  <td>start</td>
  <td>ng serve</td>
</tr>
<tr>
  <td>lint</td>
  <td> 	TSLintを実行します。</td>
</tr>
<tr>
  <td>test</td>
  <td>単体テストを実行します。(Jest)</td>
</tr>
<tr>
  <td>test:report</td>
  <td>
    単体テストを実行します。(Jest)<br>  
    単体テストのHTMLレポートは ./dist/reports/testResults/jest-html-reporter.html に出力します。<br>  
    JUnit形式のテスト結果ファイルを ./dist/reports/testResults/junit.xml に出力します。<br>  
    コードカバレッジについても ./dist/reports/coverage ディレクトリに出力します。
  </td>
</tr>
</table>
