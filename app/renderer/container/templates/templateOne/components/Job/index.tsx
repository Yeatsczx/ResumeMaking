/**
 * @desc 求职意向
 * @author Yeats
 */
import { FC } from 'react';
import '../../../styles/template-one.scss';

const Job: FC = () => {
  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        <li style={{ margin: '0 6px' }}>职位：前端工程师</li>
        <li style={{ margin: '0 6px' }}>城市：上海｜成都｜北京</li>
      </ul>
    </div>
  );
};

export default Job;
