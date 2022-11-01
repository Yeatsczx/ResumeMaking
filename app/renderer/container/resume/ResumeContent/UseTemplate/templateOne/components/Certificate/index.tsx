/**
 * @desc 荣誉奖励
 * @author pengdaokuan
 */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../../styles/template-one.scss';

function Certificate() {
  const certificate: string = useSelector((state: any) => state.resumeModel.certificate);
  const certificateList: string[] = useSelector((state: any) => state.resumeModel.certificateList);
  return (
    <div className={styles.container}>
      <p className={styles.title}>荣誉奖励 Certificate</p>
      <ul className={styles.content}>
        {certificate &&
          certificateList.length > 0 &&
          certificateList?.map((value: string, index: number) => {
            return <li key={index}>{value}</li>;
          })}
      </ul>
    </div>
  );
}

export default Certificate;