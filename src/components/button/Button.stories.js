import React from 'react';
import Button from './Button';

export default {
  title: 'Example/Button2',
  component: Button,
  parameters: {
    backgrounds: {
      values: [{
          name: 'red',
          value: '#f00',
        },
        {
          name: 'green',
          value: '#0f0',
        },
        {
          name: 'blue',
          value: '#00f',
        },
      ]
    }
  },
}

const Template = (args) => < Button {
  ...args
}
/>

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: '按鈕'
}
