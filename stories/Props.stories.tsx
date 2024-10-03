import React, { useState, useEffect, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox, { type RenderIconProps } from '@2e32/react-checkbox';
import '@2e32/react-checkbox/css';

import { log } from './utils';

import * as Icon from './assets/icons/svg';

import './assets/css/props.css';

const meta = {
  title: 'Example/Checkbox/props',
  component: Checkbox,
  args: {
    children: 'Checkbox',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const CheckedStory = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((currentChecked) => !currentChecked);
  };

  return (
    <>
      <Checkbox checked={checked}>Label</Checkbox>
      <br />
      <br />
      <button onClick={handleClick}>Click to change checked state</button>
    </>
  );
};

export const Checked: Story = {
  name: 'checked',
  render: () => <CheckedStory />,
};

export const DefaultChecked: Story = {
  name: 'defaultChecked',
  args: {
    defaultChecked: true,
    onChange: (checked) => log(`Changed ${checked}`),
  },
};

const IndeterminateStory = () => {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;

  const renderedItems = ['A', 'B', 'C'].map((label, index) => {
    return (
      <li key={label}>
        <Checkbox
          checked={checkedItems[index]}
          onChange={(checked) => {
            setCheckedItems((currItems) => {
              const clone = [...currItems];
              clone[index] = checked;

              return clone;
            });
          }}
        >
          {label}
        </Checkbox>
      </li>
    );
  });

  const handleAllChange = (checked: boolean) => {
    setCheckedItems((currItems) => currItems.map(() => checked));
  };

  return (
    <>
      <ul className="indeterminate-list">
        <li>
          <Checkbox checked={allChecked} indeterminate={indeterminate} onChange={handleAllChange}>
            All
          </Checkbox>
        </li>
        {renderedItems}
      </ul>
    </>
  );
};

export const Indeterminate: Story = {
  name: 'indeterminate',
  render: () => <IndeterminateStory />,
};

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

const CheckedValueStory = () => {
  const [checked, setChecked] = useState(0);
  const [theme, setTheme] = useState(Theme.Light);

  return (
    <>
      <div>
        Используйте свойства <code>checkedValue</code> и <code>uncheckedValue</code> для случая,
        когда значение свойства <code>checked</code> отличается от <code>true/false</code>.
        Например, если сервер хранит данные не в логическом виде и в интерфейсе требуется
        переключать это значение.
        <br />
        При отсутствии этих свойств пришлось бы делать преобразование данных:
        <ul>
          <li>
            при получении от сервера преобразовывать их в логическое значение для компонента
            Checkbox;
          </li>
          <li>
            при отсылке на сервер преобразовывать логическое значение Checkbox в тот формат, который
            принимает сервер.
          </li>
        </ul>
        Эти свойста можно использовать для избежания парсинга и сериализации значения, которое
        передается между клиентом и сервером. Т.е. значение в нужном виде переключается прямо на
        форме.
      </div>

      <p>Channel state: {JSON.stringify(checked)}</p>
      <Checkbox checked={checked} checkedValue={1} uncheckedValue={0} onChange={setChecked}>
        Enable channel
      </Checkbox>

      <p>Theme: {JSON.stringify(theme)}</p>
      <Checkbox
        checked={theme}
        checkedValue={Theme.Dark}
        uncheckedValue={Theme.Light}
        onChange={(newTheme) => setTheme(newTheme)}
      >
        Use Dark theme
      </Checkbox>
    </>
  );
};

export const CheckedValue: Story = {
  name: 'checkedValue',
  render: () => <CheckedValueStory />,
};

type OnOffType = {
  id: number;
  name: string;
};

const on: OnOffType = { id: 1, name: 'On' };
const off: OnOffType = { id: 2, name: 'Off' };

const isValueChecked = (currentChecked: OnOffType | undefined, checkedValue: OnOffType) =>
  currentChecked?.id === checkedValue.id;

const IsValueCheckedStory = () => {
  const [checked, setChecked] = useState<OnOffType>(off);

  const handleChange = (newChecked: OnOffType) => {
    // Изменяем ссылку у checked. Она будет не равна checkedValue (объекту on)
    setChecked({ ...newChecked });
  };

  return (
    <>
      <p>
        Если свойства <code>checkedValue</code> и <code>uncheckedValue</code> представлены
        объектами, то используйте <code>isValueChecked</code> для корректного определения должен ли
        Checkbox отмечен галочкой. Т.е. равны ли <code>checked</code> и <code>checkedValue</code>.
        По умолчанию эти значения сравниваются с помощью <code>Object.is</code>. При сравнении
        ссылочных значений может возникнуть проблема, если они представлены разными объектами.
      </p>

      <p>Checked: {JSON.stringify(checked)}</p>
      <Checkbox
        checked={checked}
        checkedValue={on}
        uncheckedValue={off}
        isValueChecked={isValueChecked}
        onChange={handleChange}
      >
        {checked.name}
      </Checkbox>
    </>
  );
};

export const IsValueChecked: Story = {
  name: 'isValueChecked',
  render: () => <IsValueCheckedStory />,
};

const NameStory = () => {
  const [notification, setNotification] = useState({
    sms: true,
    email: false,
    push: false,
  });

  const handleChange = (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
    setNotification((current) => ({
      ...current,
      [e.target.name]: checked,
    }));
  };

  return (
    <>
      <p>Selected notification: {JSON.stringify(notification)}</p>
      <Checkbox checked={notification.sms} name="sms" onChange={handleChange}>
        SMS
      </Checkbox>
      <Checkbox checked={notification.email} name="email" onChange={handleChange}>
        Email
      </Checkbox>
      <Checkbox checked={notification.push} name="push" onChange={handleChange}>
        Push
      </Checkbox>
    </>
  );
};

export const Name: Story = {
  name: 'name',
  render: () => <NameStory />,
};

const ValueStory = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    for (const [name, value] of formData.entries()) {
      log(`${name}, ${value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Choose your favorite dramatic genre</p>
      <Checkbox name="genre" value="comedy">
        Comedy
      </Checkbox>
      <Checkbox name="genre" value="tragedy">
        Tragedy
      </Checkbox>
      <Checkbox name="genre" value="tragicomedy">
        Tragicomedy
      </Checkbox>
      <br />
      <button type="submit">Submit (see console)</button>
    </form>
  );
};

export const Value: Story = {
  name: 'value',
  render: () => <ValueStory />,
};

const RefStory = () => {
  const ref = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    alert(`Checkbox text: "${ref.current?.textContent}"`);
  }, []);

  return (
    <Checkbox ref={ref}>
      <strong>Accept all cookies</strong>
    </Checkbox>
  );
};

export const Ref: Story = {
  name: 'ref',
  render: () => <RefStory />,
};

export const Children: Story = {
  name: 'children',
  render: () => (
    <>
      <Checkbox>
        I read this <a href="#">terms</a> and agree
      </Checkbox>
      <br />
      <Checkbox>Turbo mode ⚡</Checkbox>
    </>
  ),
};

export const ClassName: Story = {
  name: 'className',
  args: { className: 'bordered' },
};

export const Style: Story = {
  name: 'style',
  args: { style: { color: 'red' } },
};

export const BoxClassName: Story = {
  name: 'boxClassName',
  args: { boxClassName: 'mr-40' },
};

export const LabelClassName: Story = {
  name: 'labelClassName',
  args: { labelClassName: 'link' },
};

export const CheckmarkPosition: Story = {
  name: 'checkmarkPosition',
  render: () => (
    <div className="checkmark-position">
      <Checkbox checkmarkPosition="left">Left</Checkbox>
      <Checkbox checkmarkPosition="right">Right</Checkbox>
      <Checkbox checkmarkPosition="top">Top</Checkbox>
      <Checkbox checkmarkPosition="bottom">Bottom</Checkbox>
    </div>
  ),
};

export const CheckmarkAlign: Story = {
  name: 'checkmarkAlign',
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Checkbox checkmarkAlign="start">
        React is a JavaScript library for building user interfaces.
      </Checkbox>
      <hr />
      <Checkbox checkmarkAlign="center">
        Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the
        web.
      </Checkbox>
      <hr />
      <Checkbox checkmarkAlign="end">
        Angular is a development platform for building mobile and desktop web applications using
        TypeScript/JavaScript and other languages.
      </Checkbox>
    </div>
  ),
};

export const Disabled: Story = {
  name: 'disabled',
  render: () => (
    <>
      <Checkbox disabled>Unchecked</Checkbox>
      <Checkbox checked disabled>
        Checked
      </Checkbox>
      <Checkbox indeterminate disabled>
        Indeterminate
      </Checkbox>
    </>
  ),
};

export const ReadOnly: Story = {
  name: 'readOnly',
  render: () => (
    <>
      <Checkbox readOnly>Unchecked</Checkbox>
      <Checkbox checked readOnly>
        Checked
      </Checkbox>
      <Checkbox indeterminate readOnly>
        Indeterminate
      </Checkbox>
    </>
  ),
};

export const AutoFocus: Story = {
  name: 'autoFocus',
  args: { autoFocus: true, onFocus: () => log('Focus') },
};

const loremIpsumText =
  // eslint-disable-next-line max-len
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const Block: Story = {
  name: 'block',
  args: { block: true },
  render: () => (
    <>
      <span>{loremIpsumText}</span>
      <Checkbox block>Checkbox block</Checkbox>
      <span>{loremIpsumText}</span>
    </>
  ),
};

const getColor = (disabled: boolean, readOnly: boolean) => {
  if (disabled) return '#bdbdbd';
  if (readOnly) return '#ffab91';

  return '#f24e23';
};

const renderFilledIcon = ({ checked, indeterminate, disabled, readOnly }: RenderIconProps) => {
  let CheckIcon = null;

  if (indeterminate) CheckIcon = Icon.CheckboxIntermediate;
  else if (checked) CheckIcon = Icon.CheckboxMarked;
  else CheckIcon = Icon.CheckboxBlank;

  return <CheckIcon fill={getColor(disabled, readOnly)} />;
};

export const RenderIcon: Story = {
  name: 'renderIcon',
  args: {
    renderIcon: renderFilledIcon,
    indeterminate: false,
    disabled: false,
    readOnly: false,
  },
};

const OnChangeStory = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const handleThirdChange = (checked: boolean) => {
    setThird(checked);
  };

  return (
    <>
      <Checkbox checked={first} onChange={setFirst}>
        First
      </Checkbox>
      <Checkbox checked={second} onChange={(checked) => setSecond(checked)}>
        Second
      </Checkbox>
      <Checkbox checked={third} onChange={handleThirdChange}>
        Third
      </Checkbox>
    </>
  );
};

export const OnChange: Story = {
  name: 'onChange',
  render: () => <OnChangeStory />,
};

export const OnFocus: Story = {
  name: 'onFocus',
  args: {
    onFocus: () => log('Focus'),
    disabled: false,
    readOnly: false,
  },
};

export const OnBlur: Story = {
  name: 'onBlur',
  args: {
    onBlur: () => log('Blur'),
    disabled: false,
    readOnly: false,
  },
};
