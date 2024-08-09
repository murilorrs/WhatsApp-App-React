import { Meta, StoryFn } from "@storybook/react";
import ChatListItem, { ItemProps } from "./ChatListItem";

export default {
  title: "Components/ChatListItem",
  component: ChatListItem,
  argTypes: {
    profilePicture: { control: 'text' },
    name: { control: 'text' },
    lastMessage: { control: 'text' },
    lastMessageTime: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ItemProps> = (args) => <ChatListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "John Doe",
  lastMessage: "Hello there!",
  lastMessageTime: "10:30 AM",
  profilePicture: "https://via.placeholder.com/150",
};

export const AnotherExample = Template.bind({});
AnotherExample.args = {
  name: "Jane Smith",
  lastMessage: "How are you?",
  lastMessageTime: "2:15 PM",
  profilePicture: "https://via.placeholder.com/150",
};
