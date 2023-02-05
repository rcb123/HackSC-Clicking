<script lang="ts">
	import type { AuthSession } from '@supabase/supabase-js';
	import { store } from '$root/store';
	import { fly } from 'svelte/transition';
	import type { Msg } from '$root/store';
	import { page } from '$app/stores';

	let session: AuthSession = $page.data.session;

	let { user } = session;

	export let msg: Msg;
	let personal = msg.owner === user.id;
</script>

<li class="chat mb-1 {personal ? 'chat-end' : 'chat-start'}" in:fly={{ y: 20, duration: 200 }}>
	<div class="chat-header">{msg.username}</div>
	<div class="chat-bubble text-white {personal ? 'chat-bubble-info' : 'chat-bubble-primary'}">
		{msg.text}
	</div>
</li>
