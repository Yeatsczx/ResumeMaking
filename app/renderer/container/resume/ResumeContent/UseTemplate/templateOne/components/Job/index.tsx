/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import React from 'react';
import styles from '../../../styles/template-one.scss';
import styles1 from './index.scss';
import { useSelector } from 'react-redux';

function Job() {
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const cityList = (work && work?.cityList) || [];
  return (
    <div className={styles.container}>
      <p className={styles.title}>求职意向 Work</p>
      <ul className={styles.content}>
        {work?.job && <li>职位：{work?.job}</li>}
        {work?.city && cityList?.length > 0 && (
          <li>
            城市：
            {cityList?.map((city: string, index: number) => {
              return (
                <span key={index}>
                  {city}
                  {cityList.length - 1 !== index && <span className={styles1.line}>|</span>}
                </span>
              );
            })}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Job;