import cn from 'classnames';
import Checkbox, { type CheckboxProps, type RenderIconProps } from '@2e32/react-checkbox';

import { ReactComponent as CheckIcon } from './icon.svg';

import './styles.css';

type RoundedCheckboxProps = Omit<CheckboxProps, 'renderIcon'>;

const renderIcon = ({ checked }: RenderIconProps) => (
  <span className={cn('rounded-checkbox', { 'rounded-checkbox--selected': checked })}>
    <CheckIcon className="rounded-checkbox__cherkmark" />
  </span>
);

const RoundedCheckbox = (props: RoundedCheckboxProps) => (
  <Checkbox {...props} renderIcon={renderIcon} />
);

export default RoundedCheckbox;
