<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabaseClient';
	import { page } from '$app/stores';

	import MovieCard from '$components/MovieCard.svelte';
	import Loader from '$components/Loader.svelte';

	let session: AuthSession = $page.data.session;
	let loading = false;
	let username: string | null = 'User';
	let avatarUrl: string | null = 'https://www.w3schools.com/howto/img_avatar.png';

	let cards = [
		{
			name: 'Movie1',
			desc: 'The first movie',
			cover: 'https://i.etsystatic.com/27725708/r/il/008c5a/2904647259/il_570xN.2904647259_ilg7.jpg'
		},
		{
			name: 'Movie2',
			desc: 'The second movie',
			cover:
				'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543'
		},
		{
			name: 'Movie2',
			desc: 'The third movie',
			cover:
				'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540'
		}
	];

	onMount(() => {
		getProfile();
	});

	const getProfile = async () => {
		try {
			loading = true;
			const { user } = session;

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
		} finally {
			loading = false;
		}
	};

	async function updateProfile() {
		try {
			loading = true;
			const { user } = session;

			const updates = {
				id: user.id,
				username,
				avatar_url: avatarUrl,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates);

			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}

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

<div class="flex min-h-[90vh] h-[100%-10vh] pt-[5%] bg-slate-200 ">
	{#if loading}
		<div class="mx-auto mt-[30vh] text-3xl">
			<Loader />
		</div>
	{:else}
		<div class="mx-auto h-fit w-[75vw] bg-white px-6 py-6 rounded-xl shadow-xl">
			<!-- Top div with user avatar and name -->
			<div class="flex flex-row items-center mb-4">
				<div class="avatar">
					<div class="w-12 rounded-full ring ring-red-400 ring-offset-base-100 ring-offset-2">
						<img src={avatarUrl} alt="avatar" />
					</div>
				</div>
				<h1 class="text-2xl ml-4">Welcome back {username}</h1>
				<button class="btn ml-auto" on:click={signOut} disabled={loading}>Sign Out</button>
			</div>
			<!-- Middle div with movie cards -->
			<div>
				<h1 class="text-2xl mb-4">Your Movie Cards:</h1>
				<div class="grid w-full justify-evenly grid-cols-3">
					{#each cards as card}
						<MovieCard movieName={card.name} movieDesc={card.desc} movieCover={card.cover} />
					{/each}
				</div>
			</div>
			<!-- Bottom div with edit/update buttons -->
			<div>
				<a href="/create">
					<button class="btn">Create new cards</button>
				</a>
				<a href="/edit">
					<button class="btn" on:click={edit}>Edit your cards</button>
				</a>
				<button class="btn">Update your profile</button>
			</div>

			<form class="form-widget" on:submit|preventDefault={updateProfile}>
				<div>
					<label for="email">Email</label>
					<input id="email" type="text" value={session.user.email} disabled />
				</div>
				<div>
					<label for="username">Name</label>
					<input id="username" type="text" bind:value={username} />
				</div>

				<div>
					<input
						type="submit"
						class="button block primary"
						value={loading ? 'Loading...' : 'Update'}
						disabled={loading}
					/>
				</div>
			</form>
		</div>
	{/if}
</div>
