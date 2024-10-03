import cn from 'classnames';
import Checkbox, { type CheckboxProps, type RenderIconProps } from '@2e32/react-checkbox';

import Icon from './Icon';

import './styles.css';

type OutlinedCheckboxProps = Omit<CheckboxProps, 'renderIcon'>;

const renderIcon = ({ checked }: RenderIconProps) => (
  <Icon className={cn('outlined-icon', { 'outlined-icon--selected': checked })} />
);

const OutlinedCheckbox = (props: OutlinedCheckboxProps) => (
  <Checkbox {...props} renderIcon={renderIcon} />
);

export default OutlinedCheckbox;
