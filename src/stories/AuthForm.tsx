import React from "react";

import {
    Button,
    ButtonKind,
    ButtonProps,
    Checkbox,
    CheckboxProps,
    Form,
    FormProps,
    Link,
    LinkProps,
    TextInput,
    TextInputProps,
} from "carbon-components-react";
import "carbon-components/css/carbon-components.min.css";
import "./authForm.css";

export enum FlowStatus {
    LOGIN,
    REGISTER,
}

export interface AuthFormProps extends FormProps {
    flowStatus: FlowStatus;
}

const EmailAddressInputProps: TextInputProps = {
    className: "ra-input",
    id: "emailAddressInput",
    type: "email",
    required: true,
    labelText: "Email Address",
    placeholder: "Email Address",
};

const NameInputProps: TextInputProps = {
    className: "ra-input",
    id: "nameInput",
    required: true,
    labelText: "Name",
    placeholder: "Marcus Aurelius",
};

const PasswordInputProps: TextInputProps = {
    className: "ra-input",
    id: "passwordInput",
    type: "password",
    required: true,
    labelText: "Password",
    placeholder: "••••••••••••••••••",
};

const rememberDeviceCheckboxProps: CheckboxProps = {
    className: "ra-input",
    id: "rememberDeviceCheckbox",
    labelText: "Remember This Device",
};

interface AuthButtonProps extends ButtonProps {
    kind: ButtonKind;
}

const authButtonProps: AuthButtonProps = {
    className: "ra-input center-children",
    id: "authSubmitButton",
    kind: "tertiary",
    type: "submit",
};

export const AuthForm: React.FC<AuthFormProps> = ({ flowStatus }) => (
    <Form>
        {flowStatus === FlowStatus.LOGIN ? (
            <div className="center-children">
                <p className="ra-input">
                    New Here? <Link>Create an Account</Link>
                </p>
            </div>
        ) : (
            <div className="center-children">
                <p className="ra-input">
                    Already have an account? <Link>Log In</Link>
                </p>
            </div>
        )}
        {flowStatus === FlowStatus.LOGIN ? (
            <TextInput {...NameInputProps} />
        ) : undefined}
        <TextInput {...EmailAddressInputProps} />
        <TextInput {...PasswordInputProps} />
        {flowStatus === FlowStatus.LOGIN ? (
            <div className="some-left-padding">
                <Checkbox {...rememberDeviceCheckboxProps} />
            </div>
        ) : undefined}
        <div className="center-children">
            {flowStatus === FlowStatus.LOGIN ? (
                <Button {...authButtonProps}>Login</Button>
            ) : (
                <Button {...authButtonProps}>Create Your Account</Button>
            )}
        </div>
    </Form>
);
