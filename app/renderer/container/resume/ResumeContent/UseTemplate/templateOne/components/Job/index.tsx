/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import React from 'react';
import styles from '../../../styles/template-one.scss';
// import './index.scss';

function Job() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>求职意向 Work</p>
      <ul className={styles.content}>
        <li>职位：前端工程师</li>
        <li>城市：广州｜成都｜海口</li>
      </ul>
    </div>
  );
}

export default Job;
