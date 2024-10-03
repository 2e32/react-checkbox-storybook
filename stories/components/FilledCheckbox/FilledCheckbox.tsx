import cn from 'classnames';
import Checkbox, { type CheckboxProps, type RenderIconProps } from '@2e32/react-checkbox';

import './styles.css';

type FilledCheckboxProps = Omit<CheckboxProps, 'renderIcon'>;

const renderIcon = ({ checked }: RenderIconProps) => (
  <span className={cn('filled-checkbox', { 'filled-checkbox--selected': checked })}></span>
);

const FilledCheckbox = (props: FilledCheckboxProps) => (
  <Checkbox {...props} renderIcon={renderIcon} />
);

export default FilledCheckbox;
