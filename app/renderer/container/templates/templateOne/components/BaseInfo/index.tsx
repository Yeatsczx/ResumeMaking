/**
 * @desc 基本信息
 * @author Yeats
 */
import { FC } from 'react';
import '../../../styles/template-one.scss';

const BaseInfo: FC = () => {
  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        <li>院校：西南石油大学</li>
        <li>专业：软件工程</li>
        <li>学历：本科</li>
        <li>学年：2021.09 - 2025.06</li>
        <li>籍贯：四川·成都</li>
      </ul>
    </div>
  );
};

export default BaseInfo;
