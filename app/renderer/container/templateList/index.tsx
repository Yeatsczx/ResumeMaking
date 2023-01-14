import { FC, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import ReRectSize from '../../common/components/ReRectSize'
import Header from './Header';
import Navigation from './Navigation';
import StaticResume from './StaticResume';
import styles from './index.scss';

const TemplateList: FC = () => {
  return (
    <div styleName="container">
      <Header />
      <div styleName="content">
        <ReRectSize>
          <ReRectSize.Left>
            <Navigation />
          </ReRectSize.Left>
          <ReRectSize.Right>
            <StaticResume />
          </ReRectSize.Right>
        </ReRectSize>
      </div>
    </div>
  );
};

export default CSSModules(TemplateList, styles);
