# Overview

It is a sample project of Angular + Jest.

# System requirements

* Node.js - 10.x
* Yarn - 1.12.x

# Used library

* TypeScript - 3.5.x
* Angular - 8.2.x
* Jest - 24.9.x
* ts-jest - 24.0.x
* jest-preset-angular - 7.1.x
* @angular-builders/jest - 8.2.x

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
