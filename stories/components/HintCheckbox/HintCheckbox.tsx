import cn from 'classnames';
import Checkbox, { type CheckboxProps, type RenderIconProps } from '@2e32/react-checkbox';

import './styles.css';

interface HintProps {
  label: React.ReactNode;
  hint: React.ReactNode;
}

type HintCheckboxProps = Omit<
  CheckboxProps,
  'children' | 'className' | 'checkmarkAlign' | 'renderIcon'
> &
  HintProps;

const renderIcon = ({ checked }: RenderIconProps) => (
  <span className={cn('hint-checkbox__icon', { 'hint-checkbox__icon--checked': checked })} />
);

const HintCheckbox = ({ label, hint, ...rest }: HintCheckboxProps) => (
  <Checkbox {...rest} className="hint-checkbox" checkmarkAlign="start" renderIcon={renderIcon}>
    <span className="hint-checkbox__label">{label}</span>
    <small className="hint-checkbox__hint">{hint}</small>
  </Checkbox>
);

export default HintCheckbox;
