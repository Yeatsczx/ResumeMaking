import React, { Fragment } from 'react';
import styles from './index.scss';
import { shell } from 'electron';
import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../../counterSlice'
// import mo from './mo.svg';
// import { isHttpOrHttpsUrl } from '@common/utils/router';

function Root() {
    const navigate = useNavigate();
    // const count = useSelector((state: any) => state.counter.value);
    // const dispatch = useDispatch();
    return (
        <div className={styles.czx}>
            <div className={styles.main}>
                <div onClick={() => navigate('/resume')}>123</div>
                {/* <button onClick={() => dispatch(increment())}></button> */}
                <div className={styles.container}>
                    <div className={styles.title}>ResumeMaking</div>
                    <div className={styles.tips}>一个模板简历制作平台, 让你的简历更加出众 ~</div>
                    <div className={styles.action}>
                        {['介绍', '简历', '源码'].map((text, index) => {
                            return (
                                <div key={index} className={styles.item} >
                                    {text}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.bubbles} id="bubbles">
                    {
                        new Array(128).fill(1).map((item) => (<div className={styles.bubble} ></div>)
                        )
                    }
                </div>
                <p className={styles.copyright}>
                    Copyright © 2022-{new Date().getFullYear()} All Rights Reserved. Copyright By Yeats
                </p>
            </div>
            <svg style={{ position: "fixed", top: "100vh" }}>
                <defs>
                    <filter id="blob">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob">
                        </feColorMatrix>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
export default Root;