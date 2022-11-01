/**
 * @desc 联系方式
 * @author pengdaokuan
 */
import React from 'react';
import styles from '../../../styles/template-one.scss';
import { useSelector } from 'react-redux';

function Contact() {
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);

  return (
    <div className={styles.container}>
      <p className={styles.title}>联系方式 Contact</p>
      <ul className={styles.content}>
        {contact?.phone && <li>电话：{contact?.phone}</li>}
        {contact?.email && <li>邮箱：{contact?.email}</li>}
      </ul>
    </div>
  );
}

export default Contact;