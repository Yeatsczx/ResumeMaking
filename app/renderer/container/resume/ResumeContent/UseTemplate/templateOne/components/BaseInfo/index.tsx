/**
 * @desc 基本信息
 * @author pengdaokuan
 */
import React from 'react';
import styles from '../../../styles/template-one.scss';
import { useSelector } from 'react-redux';

function BaseInfo() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

  return (
    <div className={styles.container}>
      <p className={styles.title}>基本信息 Basic</p>
      <ul className={styles.content}>
        {base?.school && <li>院校：{base?.school}</li>}
        {base?.major && <li>专业：{base?.major}</li>}
        {base?.degree && <li>学历：{base?.degree}</li>}
        {base?.onSchoolTime && base?.onSchoolTime?.beginTime && base?.onSchoolTime?.endTime && (
          <li>
            学年：{base?.onSchoolTime?.beginTime} - {base?.onSchoolTime?.endTime}
          </li>
        )}
        {base?.hometown && <li>籍贯：{base?.hometown}</li>}
      </ul>
    </div>
  );
}

export default BaseInfo;
