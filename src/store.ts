import { writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';
import { supabase } from '$lib/supabaseClient';

const defaultStore: Store = {
	user: null,
	msgs: []
};

export type Store = {
	user: User | null;
	msgs: Msg[];
};

export type Msg = {
	id: number;
	text: string;
	username: string;
	owner: string;
};

export const store = writable<Store>(defaultStore);

supabase.auth.onAuthStateChange((event, session) => {
	if (event == 'SIGNED_IN' && session) {
		store.update((oldStore) => {
			return {
				...oldStore,
				user: session.user
			};
		});
	} else if (event == 'SIGNED_OUT') {
		store.set(defaultStore);
	}
});

export default {
	msg: {
		send: async ({ username, text, owner }: { username: string; text: string; owner: string }) =>
			await supabase.from('clicking_messages').insert([{ username, text, owner }]),

		getAll: async (): Promise<Msg[]> => {
			const res = await supabase.from('clicking_messages').select().order('timestamp', {
				ascending: true
			});
			if (res.data) {
				return res.data;
			}
			return [{ id: 1, text: 'error', username: 'error', owner: '1' }];
		}
	}
};
