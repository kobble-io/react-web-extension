import React, { FC, PropsWithChildren } from 'react';
import { useAssertWrappedByKobbleProvider } from '../hooks/useAssertWrappedByKobbleProvider';
import { assertSingleChild } from '../shared/assertSingleChild';
import { useKobble } from '../hooks/useKobble';
import { executeFunctionSafely } from '../shared/executeFunctionSafely';
import { defaultButtonIfNoChild } from './utils/defaultButtonIfNoChild';

const LOGIN_BUTTON_NAME = 'LoginButton';
export const LoginButton: FC<PropsWithChildren> = ({ children, ...rest }) => {
	useAssertWrappedByKobbleProvider(LOGIN_BUTTON_NAME);

	const { kobble } = useKobble();

	const defaultChildren = defaultButtonIfNoChild(children, 'Login');
	const child = assertSingleChild(LOGIN_BUTTON_NAME, defaultChildren);

	const ourClickHandler = async () => {
		await executeFunctionSafely((child as any).props.onClick);

		if (!kobble) {
			throw new Error('Kobble client not initialized. Are you using LoginButton outside of the KobbleProvider?');
		}

		return await kobble.loginWithRedirect();
	};

	const childProps = { ...rest, onClick: ourClickHandler };

	return React.cloneElement(child as React.ReactElement<unknown>, childProps);
};
