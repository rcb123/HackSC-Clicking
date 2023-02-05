<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabaseClient';
	import { page } from '$app/stores';

	import MovieCard from '$components/MovieCard.svelte';
	import Loader from '$components/Loader.svelte';

	let session: AuthSession = $page.data.session;
	const { user } = session;
	let loading = true;
	let username: string = 'User';
	let avatarUrl: string = '';
	let movieCards = [
		{
			id: null,
			created_at: null,
			updated_at: null,
			name: null,
			description: null,
			cover_image: null,
			owner: null
		}
	];

	onMount(async () => {
		getProfile();

		const res = await supabase.from('MovieCards').select('*').eq('owner', user.id);
		if (res.data) {
			movieCards = res.data;
			console.log('Success!');
			console.log(res.data);
		}
		loading = false;
	});

	const getProfile = async () => {
		try {
			const { data, error, status } = await supabase
				.from('profiles')
				.select(`username, avatar_url`)
				.eq('id', user.id)
				.single();

			if (data) {
				username = data.username;
				avatarUrl = data.avatar_url;
			}

			if (error && status !== 406) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		}
	};

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
			window.location.href = '/';
		}
	}
</script>

<div class="flex min-h-[90vh] h-[100%-10vh] pt-[5%]">
	{#if loading}
		<div class="mx-auto mt-[30vh] text-3xl">
			<Loader />
		</div>
	{:else}
		<div class="mx-auto h-fit w-[75vw] bg-white px-6 py-6 rounded-xl shadow-xl">
			<!-- Top div with user avatar and name -->
			<div class="flex flex-row items-center mb-4">
				<div class="avatar">
					<div class="w-12 rounded-full ring ring-yellow-300 ring-offset-base-100 ring-offset-2">
						{#if avatarUrl !== ''}
							<img src={avatarUrl} alt="avatar" />
						{:else}
							<img src="/avatar.svg" alt="avatar" />
						{/if}
					</div>
				</div>
				<h1 class="text-2xl ml-4">Welcome back {username}</h1>
				<button class="btn ml-auto" on:click={signOut} disabled={loading}>Sign Out</button>
			</div>
			<!-- Middle div with movie cards -->
			<div>
				<h1 class="text-2xl mb-4">Your Movie Cards:</h1>
				<div class="carousel carousel-center p-4 space-x-4 rounded-box">
					{#each movieCards as card (card.id)}
						<div class="carousel-item">
							<MovieCard
								movieName={card.name}
								movieDesc={card.description}
								movieCover={card.cover_image}
							/>
						</div>
					{/each}
				</div>
			</div>
			<!-- Bottom div with edit/update buttons -->
			<div class="flex justify-evenly">
				<a href="/create">
					<button class="btn">Create cards</button>
				</a>
				<a href="/edit">
					<button class="btn">Edit cards</button>
				</a>
				<a href="/updateprofile">
					<button class="btn">Update profile</button>
				</a>
			</div>
		</div>
	{/if}
</div>
