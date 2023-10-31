ex06: React JSX 기반의 애플리케이션 리팩토링

1. 설치
    1) 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    2) 라이브러리
        $ npm i react react-dom

2. 설정
    1) webpack.config.js
    2) babel.config.json

3. 스크립팅
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }

4. 테스트 서버 실행
    $ npm start

5. 빌드
    $ npm run build