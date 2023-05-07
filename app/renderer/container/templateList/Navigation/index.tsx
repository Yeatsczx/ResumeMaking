/*
 * @Description: 模版列表侧边栏
 * @Author: Yeats
 */
import { FC } from 'react';
import './index.scss';
import UseIcon from '@assets/icon/use.png';
import ReScrollBox from '@common/components/ReScrollBox';
import ReButton from '@common/components/ReButton';
import { useDispatch, useSelector } from 'react-redux';

const Navigation: FC = () => {
  const dispatch = useDispatch();
  const HEADER_HEIGHT = 92;
  const height = document.documentElement.clientHeight;
  const templateList: TSTemplate.Item[] = useSelector((state: any) => state.resumeTemplateModel.templateList);
  const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.resumeTemplateModel.selectTemplate);

  const onSelect = (template: TSTemplate.Item) => {
    dispatch({
      type: 'resumeTemplateModel/changeTemplateModel',
      payload: [
        {
          key: 'selectTemplate',
          values: template,
        },
      ],
    });
  };

  return (
    <div styleName="navigation">
      <ReScrollBox maxHeight={height - HEADER_HEIGHT}>
        {templateList &&
          templateList.length > 0 &&
          templateList.map((template: TSTemplate.Item) => {
            return (
              <div styleName="template" key={template?.templateId}>
                <img styleName="cover" src={template?.templateCover} />
                <div styleName="mask">
                  {selectTemplate?.templateId === template?.templateId && <img styleName="use" src={UseIcon} />}
                  {selectTemplate?.templateId !== template?.templateId && (
                    <ReButton size="middle" className="view-btn" onClick={() => onSelect(template)}>
                      预览模版
                    </ReButton>
                  )}
                </div>
              </div>
            );
          })}
      </ReScrollBox>
    </div>
  );
};

export default Navigation;
