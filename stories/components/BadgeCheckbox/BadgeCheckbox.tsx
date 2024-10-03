import Checkbox, { type CheckboxProps, type RenderIconProps } from '@2e32/react-checkbox';

import { ReactComponent as CheckIcon } from './check.svg';

import './styles.css';

type BadgeCheckboxProps = Omit<
  CheckboxProps,
  'className' | 'boxClassName' | 'labelClassName' | 'renderIcon'
>;

const renderIcon = ({ checked }: RenderIconProps) => checked && <CheckIcon />;

const BadgeCheckbox = (props: BadgeCheckboxProps) => (
  <Checkbox
    {...props}
    className="badge-checkbox"
    boxClassName="badge-checkbox__box"
    labelClassName="badge-checkbox__label"
    renderIcon={renderIcon}
  />
);

export default BadgeCheckbox;
