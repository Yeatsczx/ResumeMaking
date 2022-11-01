/**
 * @desc 在校经历
 * @author pengdaokuan
 */
import styles from './index.scss';
import React from 'react';
import { useSelector } from 'react-redux';

function Post() {
  const schoolExperience: TSResume.SchoolExperience[] = useSelector((state: any) => state.resumeModel.schoolExperience);

  return (
    <div className={styles.content}>
      <p className={styles.label}>在校经历 Post</p>
      <ul className={styles.list}>
        {!!schoolExperience?.length &&
          schoolExperience?.map((experience: TSResume.SchoolExperience, index: number) => {
            return (
              <li className={styles.flex} key={index}>
                <div className={styles.left}>
                  <p>
                    {experience?.beginTime}-{experience?.endTime}
                  </p>
                  <p>{experience?.post}</p>
                </div>
                <div className={styles.right}>
                  <p>{experience?.department}</p>
                  <p>{experience?.content}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Post;