ex01: js Module 번들링하기

1. 설치 패키지
    $ npm i -D express webpack webpack-cli

2. 스크립팅
    "scripts": {
        "start": "node dev-server",
        "build": "npx webpack ./src/index.js -o ./public"
    }

3. 빌드
    $ npm run build

4. 실행
    $ npm start