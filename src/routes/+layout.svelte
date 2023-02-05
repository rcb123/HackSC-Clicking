<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';
    import Icon from '@iconify/svelte';

	import { onMount } from 'svelte';
    import "$root/styles.css"

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

<!-- <img src="vector_1.png"/> -->

<div class="pb-[10vh] bg-slate-200">
	<slot />
</div>

<div class="btm-nav h-[10vh]">
	<a href="/">
		<button class="btn btn-link rounded-none w-full h-full text-3xl">
			<Icon icon="mdi:home" />
		</button>
	</a>
	<a href="/match">
		<button class="btn btn-link rounded-none w-full h-full text-3xl">
			<Icon icon="mdi:movie-open" />
		</button>
	</a>
	<a href="/account">
		<button class="btn btn-link rounded-none w-full h-full text-3xl">
            <Icon icon="mdi:user" />
		</button>
	</a>
</div>