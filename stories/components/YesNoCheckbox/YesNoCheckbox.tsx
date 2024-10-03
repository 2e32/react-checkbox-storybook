import Checkbox, { type CheckboxProps, type RenderIconProps } from '@2e32/react-checkbox';

import { CheckCircle as YesIcon, MinusCircle as NoIcon } from '../../assets/icons/svg';

type YesNoCheckboxProps = Omit<CheckboxProps, 'children' | 'renderIcon'>;

const renderIcon = ({ checked }: RenderIconProps) => (checked ? <YesIcon /> : <NoIcon />);

const YesNoCheckbox = ({ checked, ...rest }: YesNoCheckboxProps) => (
  <Checkbox {...rest} checked={checked} renderIcon={renderIcon}>
    {checked ? 'Yes' : 'No'}
  </Checkbox>
);

export default YesNoCheckbox;
