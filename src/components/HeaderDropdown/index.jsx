import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Dropdown } from 'antd';
import classNames from 'classnames';

const HeaderDropdown = ({ overlayClassName: cls, ...restProps }) => {
  const className = useEmotionCss(({ token }) => {
    return {
      [`@media screen and (max-width: ${token.screenXS}px)`]: {
        width: '100%',
      },
    };
  });
  return <Dropdown overlayClassName={classNames(className, cls)} {...restProps} />;
};

export default HeaderDropdown;
