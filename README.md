# Overview

It is a sample project of Angular + Jest.

# System requirements

* Node.js 10.x
* Yarn 1.12.x

# Used library

* TypeScript 3.2.x
* Angular 7.2.x
* Jest 23.6.x
* ts-jest 23.10.x
* jest-preset-angular 6.0.x
* @angular-builders/jest 7.2.x

# Operation check  

## 1. Download Sample

```
git clone git@github.com:yasu-s/ng-jest-sample.git
```

## 2. Installing packages  

```
cd ng-jest-sample
yarn
```

## 3. Launch sample application  

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
  <td>Execute the tslint.</td>
</tr>
<tr>
  <td>test</td>
  <td>Execute the unit test.(Jest)</td>
</tr>
<tr>
  <td>test:w</td>
  <td>Execute the unit test. Run watch mode.(Jest)</td>
</tr>
<tr>
  <td>test:report</td>
  <td>
    Execute the unit test.(Jest)<br>  
    The HTML report of the unit test is output to ./dist/reports/testResults/jest-html-reporter.html.<br>  
    Output the JUnit format test result file to ./dist/reports/testResults/junit.xml<br>  
    For code coverage also output to the ./dist/reports/coverage directory.
  </td>
</tr>
</table>
