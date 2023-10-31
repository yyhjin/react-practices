import React from 'react';

function Clock(props) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return (
        /*
            commnet01: JSX 밖은 JavaScript 구문(주석 구문)이 가능하다.
        */       
        <div
            /*
                comment02: JSX 엘리먼트 태그 안에도 주석은 가능하다.(비추)
            */
            className='clock'
            title='시계'>
            {/*
                comment03: 이런 방식으로 표현식이 실행되는 블록 안에서 주석을 단다(강추)            
            */}
            {('0'+(hours > 12 ? hours-12 : hours)).slice(-2)}
            {/*
                comment04:  JSX는 HTML이 아니다!
                            따라서 <!-- --> HTML 주석은 사용할 수 없다. 
            */}
            {':'}
            // comment05: JSX 안에서 javascript 주석 구문(/* */ 포함)를 사용하면 화면에 그대로 나온다.
            {('0'+minutes).slice(-2)}
            {':'}
            {('0' + seconds).slice(-2)}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    );
}

export default Clock;