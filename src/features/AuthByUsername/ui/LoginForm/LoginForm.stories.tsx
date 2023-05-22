import React from 'react';import { ComponentStory, ComponentMeta } from '@storybook/react';import LoginForm  from './LoginForm';import {StoreDecorator} from "shared/config/storyBook/StoreDecorator/StoreDecorator";export default {    title: 'features/LoginForm',    component: LoginForm,    argTypes: {        backgroundColor: { control: 'color' },    },} as ComponentMeta<typeof LoginForm>;const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;export const Primary = Template.bind({});Primary.args = {};Primary.decorators = [    StoreDecorator({        loginForm: {            username: 'admin',            password: '123456',        }    }, {})]export const WithError = Template.bind({});WithError.args = {};WithError.decorators = [    StoreDecorator({        loginForm: {            username: 'admin',            password: '123456',            error: 'Ошибка',        }    }, {})]export const Loading = Template.bind( {});Loading.args = {};Loading.decorators = [    StoreDecorator({        loginForm: {         isLoading: true,        }    }, {})]