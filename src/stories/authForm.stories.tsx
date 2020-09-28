import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { AuthForm, AuthFormProps, FlowStatus } from "./AuthForm";
import { LoggedIn } from "./Page.stories";

export default {
    title: "AuthFlow/AuthForm",
    component: AuthForm,
} as Meta;

const Template: Story<AuthFormProps> = (args) => <AuthForm {...args} />;

export const Login = Template.bind({});
Login.args = {
    flowStatus: FlowStatus.LOGIN,
};

export const Register = Template.bind({});
Register.args = {
    flowStatus: FlowStatus.REGISTER,
};
