/**
 * @desc 简单介绍
 * @author Yeats
 */
import { FC } from 'react';
import './index.scss';

const Synopsis: FC = () => {
  return (
    <div styleName="content">
      <p styleName="name">Yeats</p>
      <p styleName="job">前端工程师</p>
      <p styleName="summary">
        {[
          '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。',
          '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
        ].join('，')}
      </p>
    </div>
  );
};

export default Synopsis;
