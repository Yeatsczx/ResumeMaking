import React from 'react';
import styles from './index.scss';
import { useNavigate } from 'react-router';

function Header() {
  const Navigate = useNavigate();
  const goBack = () => Navigate('/');
  return (
    <div className={styles.header}>
      <div className={styles.back} onClick={goBack}>
        返回
      </div>
      <p className={styles.title}>简历模版仓库</p>
    </div>
  );
}
export default Header;
