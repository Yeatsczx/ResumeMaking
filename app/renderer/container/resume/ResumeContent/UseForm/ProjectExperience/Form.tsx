import React, { FC } from 'react';
import './index.scss';
import ReInput from '@common/components/ReInput';
import { AdapterExperienceType } from '../WrapperExperience/adapter';

interface IProps {
  isDisable?: boolean;
  currentItem?: AdapterExperienceType;
  onChangeCurrentItem?: (newItem: AdapterExperienceType) => void;
}
const Form: FC<IProps> = ({ isDisable, currentItem, onChangeCurrentItem }) => {
  const onChangeValue = (key: string, value: string) => {
    let newItem = { ...currentItem, [key]: value };
    onChangeCurrentItem?.(newItem);
  };

  return (
    <div styleName="wrapper">
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>项目名 ：
        </div>
        <div styleName="right">
          <ReInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue('title', e.target.value)}
            value={currentItem?.title}
            placeholder="请输入项目名"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>职 位 ：
        </div>
        <div styleName="right">
          <ReInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue('post', e.target.value)}
            value={currentItem?.post}
            placeholder="在项目中担任什么职位"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>时 间 ：
        </div>
        <div styleName="right">
          <ReInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue('beginTime', e.target.value)}
            value={currentItem?.beginTime}
            placeholder="2015.09.01"
            allowClear={!isDisable}
            style={{ width: 290 }}
            disabled={isDisable}
          />
          <span styleName="line">-</span>
          <ReInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue('endTime', e.target.value)}
            value={currentItem?.endTime}
            placeholder="2015.09.01"
            allowClear={!isDisable}
            style={{ width: 290 }}
            disabled={isDisable}
          />
        </div>
      </div>
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>内 容 ：
        </div>
        <div styleName="right">
          <ReInput
            type="textarea"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue('content', e.target.value)}
            rows={5}
            value={currentItem?.content}
            placeholder="你在项目中的主要工作是什么呢？"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
    </div>
  );
};
export default Form;
