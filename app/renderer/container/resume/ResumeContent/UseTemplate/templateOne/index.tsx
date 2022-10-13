/**
 * @desc 模板1
 * @author pengdaokuan
 */
import React from 'react';
import styles from './index.scss';
import { useSelector } from 'react-redux';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import Contact from './components/Contact';
import Job from './components/Job';
import Certificate from './components/Certificate';
import Synopsis from './components/Synopsis';
import Skill from './components/Skill';
import Post from './components/Post';
import Project from './components/Project';
import Work from './components/Work';

function TemplateOne() {
  // 👇 获取简历信息数据
  // const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  // 👇 获取工具条模块 keys
  const resumeToolbarKeys: string[] = useSelector((state: any) => state.resumeToolbarKeys.resumeToolbarKeys);

  // 必须带有id，以方便导出时获取DOM元素内容
  return (
    <div className={styles.a4_box}>
      <div className={styles.container} id="visPdf">
        {/* 左侧 */}
        <div className={styles.left}>
          <div className={styles.avatar}>
            <Avatar />
          </div>
          <div className={styles.fillColor} />
          <div className={styles.baseData}>
            <BaseInfo />
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <Contact />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <Job />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate />}
          </div>
        </div>
        {/* 内容 */}
        <div className={styles.center}>
          {(resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.evaluation)) && <Synopsis />}
          <div className={styles.listData}>
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;
