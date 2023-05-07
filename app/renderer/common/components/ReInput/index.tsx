import React, { FC, useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import './index.scss';

const TYPE = {
  text: 'text',
  textarea: 'textarea',
};

export type SizeType = 'normal' | 'large';
export type Type = 'text' | 'textarea' | '';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * @description 自动获取焦点
   */
  autoFocus?: boolean;
  /**
   * @description 控件类型
   */
  type?: Type;
  /**
   * @description 控件大小
   */
  size?: SizeType;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 设置前置标签
   */
  addonBefore?: React.ReactNode;
  /**
   * @description 设置后置标签
   */
  addonAfter?: React.ReactNode;
  /**
   * @description 可以计数
   */
  allowCount?: boolean;
  /**
   * @description 可以点击清除图标删除内容
   */
  allowClear?: boolean;
  /**
   * @description textarea行数，默认3
   */
  rows?: number;
  /**
   * @description 动态样式
   */
  style?: React.CSSProperties;
  /**
   * @description 输入框内容
   */
  value?: string | number | undefined;
  /**
   * @description 输入框占位符
   */
  placeholder?: string;
  /**
   * @description 输入框id
   */
  id?: string;
  /**
   * @description 最大长度
   */
  maxLength?: number;
  /**
   * @description 是否背景透明
   */
  bgTransparent?: boolean;
  /**
   * @description 毁掉函数
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface InputState {
  focus: boolean;
  text: string | number;
}

const ReInput: FC<InputProps> = ({
  autoFocus,
  type,
  size,
  disabled,
  addonBefore,
  addonAfter,
  allowCount,
  allowClear,
  rows,
  style,
  value,
  placeholder,
  id,
  maxLength,
  bgTransparent = false,
  onChange,
}) => {
  // input: HTMLInputElement | HTMLTextAreaElement | undefined;
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState(value || '');
  const input = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
  useEffect(() => {
    if (value) {
      setText(value);
    }
  }, [value]);

  // 模拟change事件
  const actionChange = (e: any) => {
    const target = input as any;
    const event = Object.create(e);
    // 如果是点击清除按钮，则需要改target指向input，value清空
    if (e.type === 'click') {
      target.value = '';
      event.target = target;
      event.currentTarget = target;
    }
    onChange?.(event);
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const onInput = (e: any) => {
    setText(e.target.value);
    actionChange(e);
  };

  const onClear = (e: any) => {
    setText('');
    actionChange(e);
  };

  const renderBefore = () => {
    return !!addonBefore && <div styleName="my-input-center">{addonBefore}</div>;
  };

  const renderAfter = () => {
    return !!addonAfter && <div styleName="my-input-center">{addonAfter}</div>;
  };

  const renderClear = () => {
    return !!allowClear && text && <i styleName="my-input-clear" onClick={onClear} />;
  };

  const renderInput = () => {
    size = 'normal';
    return (
      <div
        styleName={classnames(`my-input-input`, {
          [`${size}`]: true,
        })}
      >
        <input
          {...{ placeholder, maxLength, id, disabled, autoFocus }}
          value={text}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          ref={input as any}
        />
        {renderClear()}
      </div>
    );
  };

  const renderTextarea = () => {
    maxLength = 1000;
    allowCount = true;
    const _rows = rows || 3;
    return (
      <div styleName="my-input-textarea" style={{ height: 24 * _rows }}>
        <textarea
          {...{ placeholder, maxLength, id, disabled, autoFocus }}
          rows={_rows}
          value={text}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          ref={input as any}
        />
        {renderClear()}
        {allowCount && (
          <div styleName="my-input-textarea-footer">
            <span
              styleName={classnames({
                'max-length-text': !!maxLength && text && String(text).length >= maxLength,
              })}
            >
              {String(text).length}
            </span>
            {!!maxLength && (
              <>
                <span>/</span>
                <span>{maxLength}</span>
              </>
            )}
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      style={style}
      styleName={classnames('my-input', {
        normal: !bgTransparent,
        focus: focus,
        'allow-clear': allowClear,
      })}
    >
      {renderBefore()}
      {TYPE.textarea === type ? renderTextarea() : renderInput()}
      {renderAfter()}
    </div>
  );
};

export default ReInput;
