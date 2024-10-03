import Checkbox, { type CheckboxProps } from '@2e32/react-checkbox';

import './styles.css';

interface ColoredCheckboxProps extends Omit<CheckboxProps, 'boxClassName'> {
  color?: 'red' | 'orange' | 'green' | 'purple';
}

const ColoredCheckbox = ({ color, ...rest }: ColoredCheckboxProps) => (
  <Checkbox {...rest} boxClassName={color && `e-checkbox__box--${color}`} />
);

export default ColoredCheckbox;
