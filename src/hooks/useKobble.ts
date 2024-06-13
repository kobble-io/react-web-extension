import { KobbleWebExtensionClient } from '@kobbleio/javascript';
import { useKobbleContext } from '../context/kobble/KobbleContext.tsx';

export type UseKobbleReturn = {
	kobble: KobbleWebExtensionClient | null | undefined;
	isLoading: boolean | undefined;
	error: Error | null | undefined;
};

export const useKobble = (): UseKobbleReturn => {
	const ctx = useKobbleContext();

	if (!ctx) {
		throw new Error('KobbleContext not initialized. Are you using useKobbleClient outside of the KobbleProvider?');
	}

	const kobble = ctx.client;
	const isLoading = ctx.isLoading;
	const error = ctx.error;

	return {
		kobble,
		isLoading,
		error
	};
};
