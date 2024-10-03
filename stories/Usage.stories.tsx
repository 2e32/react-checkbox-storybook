import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '@2e32/react-checkbox';

import {
  BadgeCheckbox,
  ColoredCheckbox,
  FilledCheckbox,
  HintCheckbox,
  OutlinedCheckbox,
  RoundedCheckbox,
  SelectableButton,
  TiledCheckbox,
  YesNoCheckbox,
} from './components';
import * as Icon from './assets/icons/svg';
import './assets/css/usage.css';

const meta = {
  title: 'Example/Checkbox/usage',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  render: () => <OutlinedCheckbox>Outlined</OutlinedCheckbox>,
};

export const Filled: Story = {
  render: () => <FilledCheckbox>Filled</FilledCheckbox>,
};

export const Rounded: Story = {
  render: () => <RoundedCheckbox>Rounded</RoundedCheckbox>,
};

export const Colored: Story = {
  render: () => (
    <>
      <ColoredCheckbox>Default</ColoredCheckbox>
      <ColoredCheckbox color="red">Red</ColoredCheckbox>
      <ColoredCheckbox color="orange">Orange</ColoredCheckbox>
      <ColoredCheckbox color="green">Green</ColoredCheckbox>
      <ColoredCheckbox color="purple">Purple</ColoredCheckbox>
    </>
  ),
};

export const Spaced: Story = {
  render: () => (
    <Checkbox labelClassName="ml-auto" block>
      Spaced label
    </Checkbox>
  ),
};

export const TextWrap: Story = {
  name: 'TextWrap',
  render: () => (
    <div className="limited-container">
      <Checkbox>By checking this box, you are agreeing to our terms of service</Checkbox>
    </div>
  ),
};

export const Hint: Story = {
  render: () => <HintCheckbox label="Subscribe" hint="Receive all notifications" />,
};

const YesNoStory = () => {
  const [checked, setChecked] = useState(false);

  return <YesNoCheckbox checked={checked} onChange={setChecked} />;
};

export const YesNo: Story = {
  name: 'YesNo',
  render: () => <YesNoStory />,
};

const BadgeStory = () => {
  const [checked, setChecked] = useState(true);

  return (
    <BadgeCheckbox checked={checked} onChange={setChecked}>
      {checked ? 'Agree' : 'Disagree'}
    </BadgeCheckbox>
  );
};

export const Badge: Story = {
  render: () => <BadgeStory />,
};

export const ButtonSelected: Story = {
  name: 'ButtonSelected',
  render: () => <SelectableButton>Selected button</SelectableButton>,
};

const tiledIconProps = { width: 48, height: 48, fill: 'currentColor' };

const TiledStory = () => {
  return (
    <>
      <TiledCheckbox label="React" icon={<Icon.React {...tiledIconProps} />} />
      <TiledCheckbox label="Vue" icon={<Icon.Vue {...tiledIconProps} />} />
      <TiledCheckbox label="Angular" icon={<Icon.Angular {...tiledIconProps} />} />
    </>
  );
};

export const Tiled: Story = {
  render: () => <TiledStory />,
};

export const Scaled: Story = {
  render: () => (
    <Checkbox className="scaled-checkbox">I agree to the terms and conditions</Checkbox>
  ),
};
