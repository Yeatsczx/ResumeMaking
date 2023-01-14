import { FC } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import ReButton from '@common/components/ReButton';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { ROUTER_KEY } from '@common/constants/router';
import { compilePath } from '@common/utils/router';
import ROUTER from '@common/constants/router';

const Footer: FC = () => {
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
    <div styleName="footer">
      <ReButton size="middle" className="use-btn" onClick={onMadeResume}>
        以此模版前往制作简历
      </ReButton>
    </div>
  );
};

export default CSSModules(Footer, styles);
