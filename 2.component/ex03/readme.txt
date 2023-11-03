ex03: React Event
1) Inline Handler
2) Function Handler
3) Synthetic Event 객체(DOM Event 합성)
4) Event Handler  예제
5) ref 사용하기: function 컴포넌트
6) ref 사용하기: Class 컴포넌트

====================================================================================

1.  설치
    1)  개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    2)  라이브러리
        $ npm i react react-dom prop-types styled-components

2.  설정
    1)  webpack.config.js
    2)  babel.config.json

3.  스트립팅
    "scripts": {
        "debug": "npx webpack serve --progress --env",
        "build": "npx webpack"
    }

4.  테스트 서버 실행
    $ npm run debug src=(01|02|03|04|...)