import { FC } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
export type SizeType = 'small' | 'big';

interface IEmptyProps {
  imgSrc: string;
  size?: SizeType;
  label?: string;
  style?: React.CSSProperties;
}

const Empty: FC<IEmptyProps> = ({ imgSrc, size = 'small', style, label }) => {
  return (
    <div styleName="empty">
      <img src={imgSrc} style={style} styleName={`img-${size}`} />
      {label && <p styleName="label">{label}</p>}
    </div>
  );
};

export default CSSModules(Empty, styles);
