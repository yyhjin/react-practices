import React from 'react';

function TitelBar02() {

    const onClickHandler = function() {
        console.log('TitleBar02 Clicked');
    };

    return (
        <div>
            <h1
                onClick={onClickHandler}>
                Function Handler
            </h1>
        </div>
    )
}

export default TitelBar02;