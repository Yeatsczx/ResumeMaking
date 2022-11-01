/**
 * @description 弹窗组件
 */
import React from 'react';
import styles from './index.scss';
import MyButton from '@common/components/MyButton';
import classNames from 'classnames/bind';
import { IConfirmModal } from '../types';

function MyConfirm({ title, width, className, description, renderFooter, config = {}, eleRef }: IConfirmModal) {
  const { deleteBtn = { isShow: false }, cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
  let cx = classNames.bind(styles);
  return (
    <div className={styles.vis_mask}>
      <div className={styles.center}>
        <div className={cx(className, {
          'vis_confirm_box': true,
        })} style={{ width: width || 440 }} ref={eleRef}>
          <div className={styles.vis_confirm_content}>
            <p className={styles.vis_confirm_content_title}>{title || '友情提示'}</p>
            {description && <p className={styles.vis_confirm_content_desc}>{description}</p>}
          </div>
          {renderFooter || (
            <div className={styles.vis_confirm_footer}>
              {cancelBtn?.isShow && (
                <MyButton
                  size="middle"
                  className={cx({
                    'vis_confirm_footer_btn': true,
                    'vis_confirm_footer_cancel_btn': true,
                  })}
                  onClick={() => {
                    cancelBtn?.callback && cancelBtn.callback();
                  }}
                >
                  {cancelBtn?.text || '取消'}
                </MyButton>
              )}
              {submitBtn?.isShow && (
                <MyButton
                  size="middle"
                  className={cx({
                    'vis_confirm_footer_btn': true,
                    'vis_confirm_footer_submit_btn': true,
                  })}
                  onClick={() => {
                    submitBtn?.callback && submitBtn.callback();
                  }}
                >
                  {submitBtn?.text || '确定'}
                </MyButton>
              )}
              {deleteBtn?.isShow && (
                <MyButton
                  size="middle"
                  className={cx({
                    'vis_confirm_footer_btn': true,
                    'vis_confirm_footer_delete_btn': true,
                  })}
                  onClick={() => {
                    deleteBtn?.callback && deleteBtn.callback();
                  }}
                >
                  {deleteBtn?.text || '退出'}
                </MyButton>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyConfirm;
