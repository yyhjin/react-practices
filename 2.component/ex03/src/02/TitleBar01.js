import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler() {
        console.log('TitleBar01 Clicked');
    };    

    render() {
        return (
            <div>
                <h1
                    onClick={this.onClickHandler}>
                    Function Handler
                </h1>
            </div>
        );
    }
}