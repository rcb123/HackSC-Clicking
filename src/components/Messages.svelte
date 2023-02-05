<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import db, { store } from '../store';
	import Message from './Message.svelte';
	let loading = false;

	// handle auto scroll
	let div: HTMLDivElement;
	let autoscroll: boolean;

	beforeUpdate(() => {
		autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
	});
	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});
	onMount(async () => {
		loading = true;
		const res = await db.msg.getAll();
		store.update((oldStore) => ({
			...oldStore,
			msgs: res
		}));
		loading = false;
	});

	$: console.log($store.msgs);
</script>

<div class="flex-1 overflow-x-hidden overflow-y-auto mt-[4px]" bind:this={div} in:fade>
	{#if $store.msgs.length}
		{#each $store.msgs as msg (msg.id)}
			<Message {msg} />
		{/each}
	{:else if loading}
		<p class="text-xl tracking-wide text-gray-400 text-center">Loading...</p>
	{:else}
		<p class="text-xl text-center tracking-wide text-gray-400">No Messages</p>
	{/if}
</div>
