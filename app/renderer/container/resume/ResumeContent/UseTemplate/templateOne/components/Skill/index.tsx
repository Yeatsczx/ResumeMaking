/**
 * @desc 技能
 * @author pengdaokuan
 */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.scss';

function Skill() {
  const skill: string = useSelector((state: any) => state.resumeModel.skill);
  const skillList: string[] = useSelector((state: any) => state.resumeModel.skillList);

  return (
    <div className={styles.content}>
      <p className={styles.label}>技能证书 Skill</p>
      <ul className={styles.skill}>
        {skill &&
          skillList?.length > 0 &&
          skillList?.map((skill: string, index: number) => {
            return (
              <li className={styles.item} key={index}>
                {skill}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Skill;
