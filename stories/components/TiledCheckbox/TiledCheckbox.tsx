import Checkbox, { type CheckboxProps } from '@2e32/react-checkbox';

import './styles.css';

interface TileProps {
  label: string;
  icon: JSX.Element;
}

type TiledCheckboxProps = Omit<CheckboxProps, 'children' | 'className' | 'tabIndex'> & TileProps;

const Tile = ({ label, icon }: TileProps) => (
  <div className="tile" tabIndex={1}>
    <span className="tile__check" />
    <span className="tile__icon">{icon}</span>
    <span className="tile__label">{label}</span>
  </div>
);

const TiledCheckbox = ({ label, icon, ...rest }: TiledCheckboxProps) => (
  <Checkbox {...rest} className="tiled-checkbox" tabIndex={-1}>
    <Tile label={label} icon={icon} />
  </Checkbox>
);

export default TiledCheckbox;
