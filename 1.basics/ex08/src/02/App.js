import React from "react";

/*
    리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.

    오류:
    return (
        <h2>01</h2>
        <p>특징2 : Single Root</p>
    )

    이유:
    1) transpile 오류
    return (
        React.createElement('h2', null, '01')
        React.createElement('p', null, '특징2 : Single Root')
    );
    
    2)
    return (
        <div>
            <h2>01</h2>
        <p>특징2 : Single Root</p>
        </div>
    )
    
    return (
        React.createElement('div', null, React.createElement('h2', null, '01'), React.createElement('p', null, '특징2 : Single Root'))
    )

*/
function App() {
    return (
        <>
            <div>
                <h1>02</h1>
                <p>특징2 : Single Root</p>
            </div>
            <div></div>
        </>
    );
}

export { App };
