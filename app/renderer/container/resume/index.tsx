import React from 'react';
import styles from './index.scss';
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';

function Resume() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ResumeAction />
      </div>
      <div className={styles.content}>
        <ResumeContent />
      </div>
      <div className={styles.toolbar}>
        <ResumeToolbar />
      </div>
    </div>
  );
}
export default Resume;
