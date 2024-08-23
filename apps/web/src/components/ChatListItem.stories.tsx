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

export const NoMessage = Template.bind({});
NoMessage.args = {
  name: "Jane Smith",
  lastMessage: "",
  lastMessageTime: "2:15 PM",
  profilePicture: "https://via.placeholder.com/150",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  name: "Error User",
  lastMessage: "Failed to load message.",
  lastMessageTime: "Unknown",
  profilePicture: "https://via.placeholder.com/150",
};

export const WithCustomProfilePicture = Template.bind({});
WithCustomProfilePicture.args = {
  name: "Alice Johnson",
  lastMessage: "Just checking in!",
  lastMessageTime: "4:45 PM",
  profilePicture: "https://randomuser.me/api/portraits/women/45.jpg",
};

export const LoadingState = () => (
  <div className="flex p-2 border-b border-none items-center pb-4">
    <div className="w-14 h-14 rounded-full bg-gray-200 mr-3 animate-pulse"></div>
    <div className="flex-1 pl-1.5">
      <div className="text-lg bg-gray-200 w-24 h-5 animate-pulse"></div>
      <div className="text-gray-400 text-sm bg-gray-200 w-48 h-4 mt-1 animate-pulse"></div>
    </div>
    <div className="text-gray-400 text-sm bg-gray-200 w-16 h-4 mt-1 animate-pulse"></div>
  </div>
);

LoadingState.parameters = {
  controls: { disabled: true },
};
