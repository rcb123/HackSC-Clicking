<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabaseClient';
	import { page } from '$app/stores';
	import db, { store } from '../store';

	let msg = '';
	let username: string = '';
	let loading = false;
	let input: HTMLInputElement;
	let session: AuthSession = $page.data.session;

	const handleSendMsg = async () => {
		if (msg.trim() === '') return;
		loading = true;

		const { user } = session;

		const { data, error, status } = await supabase
			.from('profiles')
			.select(`username, avatar_url`)
			.eq('id', user.id)
			.single();

		if (data) {
			username = data.username;
		}

		await db.msg.send({
			username: username,
			text: msg,
            owner: user.id
		});

		msg = '';
		loading = false;
	};

	onMount(() => {
		input.focus();
		const messages = supabase
        .channel('table-db-changes')
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'messages',
            },
			(payload) => {
				store.update((old) => ({
					...old,
					msgs: [...old.msgs, payload.new]
				}));
			})
			.subscribe();
		return () => messages.unsubscribe();
	});
</script>

<form on:submit|preventDefault={handleSendMsg} class="flex flex-row w-[98%]">
	<input
		placeholder="Enter a new message"
		class="rounded-lg px-2 py-1 mr-2 w-full input"
		bind:value={msg}
		bind:this={input}
	/>
	<button
		type="submit"
		disabled={loading}
		class="btn btn-success px-2 py-1 rounded-lg w-[20%]"
	>
		{loading ? 'Sending...' : 'Send'}
	</button>
</form>
