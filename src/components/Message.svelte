<script lang="ts">
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabaseClient';
	import { fly } from 'svelte/transition';
	import type { Msg } from '$root/store';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let session: AuthSession = $page.data.session;

	let { user } = session;

	export let msg: Msg;
	let personal = msg.owner === user.id;
	let avatarURL: string = '';

	onMount(() => {
		getProfile();
	});

	const getProfile = async () => {
		try {
			const { user } = session;

			const { data, error, status } = await supabase
				.from('profiles')
				.select(`avatar_url`)
				.eq('id', msg.owner)
				.single();

			if (data) {
				avatarURL = data.avatar_url;
			}

			if (error && status !== 406) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		}
	};
</script>

<li class="chat mb-1 {personal ? 'chat-end' : 'chat-start'}" in:fly={{ y: 20, duration: 200 }}>
	<div class="chat-header">{msg.username}</div>
	<div class="chat-image avatar">
		<div class="w-12 rounded-full">
			{#if avatarURL !== ''}
				<img src={avatarURL} alt="avatar" />
			{:else}
				<img src="/avatar.svg" alt="avatar" />
			{/if}
		</div>
	</div>
	<div class="chat-bubble text-white {personal ? 'chat-bubble-info' : 'chat-bubble-primary'}">
		{msg.text}
	</div>
</li>
