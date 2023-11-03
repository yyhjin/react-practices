import React from 'react';
import Incrementor01 from './Incrementor01';
import Incrementor02 from './Incrementor02';

export default function () {
    return (
        <>
            <h2>ex04 - 기본 개념</h2>
            <Incrementor01 begin={1} step={1}/>
            <br/>
            <Incrementor02 begin={10} step={10}/>
        </>
    );
}