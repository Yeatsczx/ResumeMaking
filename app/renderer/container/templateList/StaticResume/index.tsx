/*
 * @Description:
 * @Author: Yeats
 */
import React, { FC } from 'react';
import { shell } from 'electron';
import './index.scss';
import UseTemplateOne from '@src/container/templates/templateOne';
import Footer from '../Footer';
import ReScrollBox from '@common/components/ReScrollBox';
import { useSelector } from 'react-redux';
import ReEmpty from '@common/components/ReEmpty';
import EmptyPng from '@assets/icon/empty.png';
import ReButton from '@common/components/ReButton';

// 合法且存在的简历模版
const VALID_TEMPLATE = [0];
const LackDesc = React.memo(({ label }: { label: string }) => {
  return (
    <div styleName="empty">
      <ReEmpty imgSrc={EmptyPng} label={label} />
      <div styleName="footer">
        <ReButton
          size="middle"
          className="use-btn"
          onClick={() => {
            shell.openExternal('https://github.com/Yeatsczx/ResumeMaking');
          }}
        >
          贡献模版
        </ReButton>
      </div>
    </div>
  );
});

const StaticResume: FC = () => {
  const HEADER_HEIGHT = 76; // 距离头部距离
  const height = document.documentElement.clientHeight;
  const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.resumeTemplateModel.selectTemplate);

  const isIncludeTemplate = VALID_TEMPLATE.includes(selectTemplate.templateIndex);
  const isValidTemplate = selectTemplate.templateId && selectTemplate.templateIndex !== -1;

  return (
    <div styleName="container">
      <ReScrollBox maxHeight={height - HEADER_HEIGHT}>
        {isValidTemplate && isIncludeTemplate && (
          <>
            {selectTemplate.templateIndex === 0 && <UseTemplateOne />}
            <Footer />
          </>
        )}

        {isValidTemplate && !isIncludeTemplate && <LackDesc label="暂未开发此模版，欢迎点击下方按钮进行模版贡献" />}
        {!isValidTemplate && <LackDesc label="暂无模版数据，欢迎点击下方按钮进行模版贡献" />}
      </ReScrollBox>
    </div>
  );
};

export default StaticResume;
