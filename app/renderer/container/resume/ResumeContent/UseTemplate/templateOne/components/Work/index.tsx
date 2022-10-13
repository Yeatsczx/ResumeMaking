/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import styles from './index.scss';
import React from 'react';

function Work() {
  return (
    <div className={styles.content}>
      <p className={styles.label}>工作经历 Post</p>
      <ul className={styles.list}>
        <li className={styles.flex}>
          <div className={styles.left}>
            <p>2019.07-至今</p>
            <p>前端工程师</p>
          </div>
          <div className={styles.right}>
            <p>CVTE</p>
            <p>就职于CVTE，部门人送广州彭于晏，其他的没啥介绍了</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Work;
