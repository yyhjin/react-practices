ex05: Component Lifecycle
01. Class Component
    01) LifecycleI: mount
        1. constructor
        2. getDerivedStateFromProps
        3. render ***
        4. componentDidMount ***
    02) LifecycleII: update
        1. getDerivedStateFromProps
        2. shouldComponentUpdate*
        3. render ***
        4. getSnapshotBeforeUpdate
        5. componentDidUpdate ***
    
    03) LifecycleIII unmount
        1. componentWillUnmount() ***

02. Functional Component : Alternative(대체) - useEffect
        1. getDerivedStateFromProps 대체
        2. After Rendering (componentDidUpdate 대체)
        3. componentDidMount, componentWillUnmount
        4. 변경된 상태에 의존적으로 코드 실행
        
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
