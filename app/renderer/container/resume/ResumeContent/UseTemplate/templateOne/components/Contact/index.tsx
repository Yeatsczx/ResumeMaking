/**
 * @desc 联系方式
 * @author pengdaokuan
 */
import React from 'react';
import styles from '../../../styles/template-one.scss';

function Contact() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>联系方式 Contact</p>
      <ul className={styles.content}>
        <li>电话：176****2612</li>
        <li>邮箱：1063137960@qq.com</li>
      </ul>
    </div>
  );
}

export default Contact;
