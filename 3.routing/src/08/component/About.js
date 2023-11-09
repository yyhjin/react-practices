import React from 'react';
import styles from '../assets/scss/component/About.scss';
import {useNavigate} from 'react-router';

export default function About() {
    const navigate = useNavigate();

    setTimeout(() => {
        // window.location.href = "/error";
        navigate("/error");
    }, 3000);

    return (
            <div className={styles.About}>
                <h2>kickscar 입니다.</h2>
            </div>
    );
}