import React from 'react';
import styles from './index.scss';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { ROUTER_KEY } from '@common/constants/router';
import { compilePath } from '@common/utils/router';
import MyButton from '@common/components/MyButton';
import ROUTER from '@common/constants/router';

function Footer() {
  const Navigate = useNavigate();
  const selectTemplate = useSelector((state: any) => state.resumeTemplateModel.selectTemplate);
  const onMadeResume = () => {
    Navigate(
      compilePath(ROUTER.resume, {
        fromPath: ROUTER_KEY.templateList,
        templateId: selectTemplate?.templateId,
        templateIndex: selectTemplate?.templateIndex,
      })
    );
  };
  return (
    <div className={styles.footer}>
      <MyButton size="middle" className="use-btn" onClick={onMadeResume}>
        以此模版前往制作简历
      </MyButton>
    </div>
  );
}

export default Footer;
