import { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example title',
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The Heading will always be an `h2` by default, can be changed with `as` property',
      },
    },
  },
};
