import * as React from 'react';
import { IProjectWindow, TO_STRING, JSTypeofEnum, TFunction } from './definitions';

// ---------------------------------------------------------------------------- //
// @begin: pre defined values

export const isProduction = process.env.NODE_ENV === 'production';

export const isDevelopment = process.env.NODE_ENV === 'development';

export const isBrowser = typeof window !== 'undefined';

const localWindow = isBrowser ? window : {};
const { CSS = {} } = localWindow as IProjectWindow;

export const hasCssVariablesSupport = isBrowser && CSS && CSS.supports && CSS.supports('(--a: 0)');

// @end: pre defined values
// ---------------------------------------------------------------------------- //
// @begin: check values

export const isFunction = <T extends TFunction>(value: any): value is T =>
	value !== null && typeof value === JSTypeofEnum.FUNCTION;

export const isUndefined = <T extends object>(value: any): value is T =>
	value !== null && typeof value === JSTypeofEnum.UNDEFINED;

const isObjectBasicCheck = <T extends object>(value: any): value is T =>
	value !== null && typeof value === JSTypeofEnum.OBJECT;

export const isObject = <T extends object>(value: any): value is T =>
	isObjectBasicCheck(value) && TO_STRING.call(value) === '[object Object]';

export const isString = <T extends string>(value: any): value is T =>
	value !== null && typeof value === JSTypeofEnum.STRING && TO_STRING.call(value) === '[object String]';

export const isReactElement = <T extends React.ReactNode>(value: any): value is T =>
	isObjectBasicCheck(value) && '$$typeof' in value;

export const isEmptyChildren = (children: React.ReactNode) => React.Children.count(children) === 0;

// @end: check values
// ---------------------------------------------------------------------------- //