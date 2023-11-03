import React from 'react';
import styles from './assets/scss/Header.scss';

function Header(props) {
    return (
        <div>
            <h1 className={styles.Header}>CSS in JS: Styled Component</h1>
        </div>
    );
}

export default Header;