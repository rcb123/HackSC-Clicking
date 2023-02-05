<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';

	import { onMount } from 'svelte';
	import '$root/styles.css';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});

	function matchButton() {
		window.location.href = '/match';
	}
</script>

<title>Clicking</title>

<div class="pb-[10vh]">
	<img class="fixed max-w-[50vw] -z-50 top-0 left-0" src="./vector_1.png" alt="" />
	<span class="z-10">
		<slot />
	</span>
	<img
		class="fixed max-w-[50vw] right-0 bottom-[10vh] rotate-180 -z-50"
		src="./vector_1.png"
		alt=""
	/>
</div>

<div class="btm-nav h-[10vh] z-50 border">
	<a href="/">
		<button class="btn btn-link text-warning rounded-none w-full h-full text-3xl">
			<iconify-icon icon="mdi:home" />
		</button>
	</a>
	<div>
		<button
			class="btn btn-link text-warning rounded-none w-full h-full text-3xl"
			on:click={matchButton}
		>
			<iconify-icon icon="mdi:movie-open" />
		</button>
	</div>
	<a href="/account">
		<button class="btn btn-link text-warning rounded-none w-full h-full text-3xl">
			<iconify-icon icon="mdi:user" />
		</button>
	</a>
</div>
