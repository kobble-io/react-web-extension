import { createContextAndHook } from '../../shared/createContextAndHook.ts';
import { KobbleWebExtensionClient } from '@kobbleio/javascript';

export type KobbleContextState = {
	client: KobbleWebExtensionClient | null | undefined;
	isLoading: boolean | undefined;
	error: Error | null | undefined;
};

export const [KobbleContext, useKobbleContext] = createContextAndHook<KobbleContextState>('KobbleContext');
