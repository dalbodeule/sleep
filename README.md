# sleep

[![npm version](https://badge.fury.io/js/sleeps.svg)](https://badge.fury.io/js/sleeps)

[![NPM](https://nodei.co/npm/sleeps.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/sleeps/)

Promise 및 Async/Await 를 지원하는 setTimeout 모듈입니다.

## 필요 모듈

Node.js 6.0 이상

## 사용법

```javascript
const sleep = require('sleep');

(async() => {
    await sleep(500);
})();
```

위와 같은 방법으로 사용하시면 됩니다.

## 함수 목록

```javascript
require('sleep')((time));
```

## 반환

Promise 가 반환됩니다.