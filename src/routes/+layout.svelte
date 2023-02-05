<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';
	import Icon from '@iconify/svelte';

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
</script>

<title>Clicking</title>

<div class="pb-[10vh] bg-slate-200 z-10">
	<img class="absolute max-w-md z-0" src="./vector_1.png" alt="" />
	<img class="absolute max-w-lg right-0 bottom-[10vh] rotate-180 z-0" src="./vector_1.png" alt="" />
	<slot />
</div>

<div class="btm-nav h-[10vh]">
	<a href="/">
		<button class="btn btn-link text-warning rounded-none w-full h-full text-3xl">
			<Icon icon="mdi:home" />
		</button>
	</a>
	<a href="/match">
		<button class="btn btn-link text-warning rounded-none w-full h-full text-3xl">
			<Icon icon="mdi:movie-open" />
		</button>
	</a>
	<a href="/account">
		<button class="btn btn-link text-warning rounded-none w-full h-full text-3xl">
			<Icon icon="mdi:user" />
		</button>
	</a>
</div>
