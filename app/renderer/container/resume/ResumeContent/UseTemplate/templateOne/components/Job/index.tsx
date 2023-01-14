/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../../styles/template-one.scss';
import CSSModules from 'react-css-modules';

const Job: FC = () => {
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const cityList = (work && work?.cityList) || [];
  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        {work?.job && <li>职位：{work?.job}</li>}
        {work?.city && cityList?.length > 0 && (
          <li>
            城市：
            {cityList?.map((city: string, index: number) => {
              return (
                <span key={index}>
                  {city}
                  {cityList.length - 1 !== index && <span style={{ margin: '0 6px' }}>|</span>}
                </span>
              );
            })}
          </li>
        )}
      </ul>
    </div>
  );
};

export default CSSModules(Job, styles);
