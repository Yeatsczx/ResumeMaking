/**
 * @desc 简单介绍
 * @author pengdaokuan
 */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.scss';

function Synopsis() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const evaluation: string = useSelector((state: any) => state.resumeModel.evaluation);
  const evaluationList: string[] = useSelector((state: any) => state.resumeModel.evaluationList);

  return (
    <div className={styles.content}>
      {base?.username && <p className={styles.name}>{base?.username}</p>}
      {work?.job && <p className={styles.job}>{work?.job}</p>}
      {evaluation && <p className={styles.summary}>{evaluationList?.join('，')}</p>}
    </div>
  );
}

export default Synopsis;
