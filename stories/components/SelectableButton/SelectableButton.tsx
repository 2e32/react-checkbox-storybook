import cn from 'classnames';
import Checkbox, { type CheckboxProps } from '@2e32/react-checkbox';

import './styles.css';

type SelectableButtonProps = Omit<CheckboxProps, 'className'>;

const SelectableButton = (props: SelectableButtonProps) => (
  <Checkbox {...props} className={cn('selectable-button button-ripple')} />
);

export default SelectableButton;
