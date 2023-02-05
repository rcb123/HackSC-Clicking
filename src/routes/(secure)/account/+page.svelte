<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabaseClient';
	import { page } from '$app/stores';

	import MovieCard from '$components/MovieCard.svelte';
	import Loader from '$components/Loader.svelte';

	let session: AuthSession = $page.data.session;
	let loading = false;
	let username: string = 'User';
	let avatarUrl: string = '';

	let cards = [
		{
			name: 'Avatar',
			desc: 'Avatar is a visually stunning sci-fi movie that takes you to the beautiful world of Pandora. The special effects and 3D technology are breathtaking, creating an immersive experience. The story is well-crafted, touching on themes of environmentalism, cultural conflict, and love. Sam Worthingtons performance as Jake Sully is outstanding, making this a must-watch for sci-fi fans and anyone who loves stunning visual storytelling.',
			cover: 'https://i.etsystatic.com/27725708/r/il/008c5a/2904647259/il_570xN.2904647259_ilg7.jpg'
		},
		{
			name: 'Interstellar',
			desc: 'Interstellar is a stunning and thought-provoking sci-fi movie that takes you on a journey through space and time. With a strong cast, beautiful cinematography, and a thought-provoking storyline, this movie is a must-watch for anyone who loves science fiction and philosophical exploration.',
			cover: 'https://m.media-amazon.com/images/I/71LNVGVpWYL.jpg'
		},
		{
			name: 'Avengers: Endgame',
			desc: 'Avengers: Endgame is a cinematic masterpiece that will leave you in awe. The conclusion to the Marvel Cinematic Universes story is an emotional rollercoaster, filled with epic action scenes and heartfelt moments that will have you on the edge of your seat until the very end.',
			cover:
				'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543'
		},
		{
			name: 'Dunkirk',
			desc: 'Dunkirk is a powerful and intense war movie that brings the horrors of the battle to life. The breathtaking cinematography and heart-pumping score will keep you on the edge of your seat as you witness the bravery of the soldiers and civilians during the evacuation of Dunkirk.',
			cover:
				'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540'
		},
		{
			name: 'Puss in Boots: The Last Wish',
			desc: 'Puss in Boots: The Last Wish is a delightful and charming adventure that will have you grinning from ear to ear. With its whimsical storyline, lovable characters, and gorgeous animation, this movie is the perfect family-friendly escape that will leave you feeling entertained and uplifted.',
			cover: 'https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg'
		},
		{
			name: 'Black Panther: Wakanda Forever',
			desc: 'Black Panther: Wakanda Forever is a powerful and emotional tribute to the late Chadwick Boseman and the beloved world of Wakanda. The movie is full of action, drama, and heart, and the new characters introduced add even more depth to the already rich world created in the first Black Panther movie.',
			cover: 'https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg'
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
					{#each cards as card}
						<div class="carousel-item">
							<MovieCard movieName={card.name} movieDesc={card.desc} movieCover={card.cover} />
						</div>
					{/each}
				</div>
			</div>
			<!-- Bottom div with edit/update buttons -->
			<div class="flex justify-evenly">
				<a href="/create">
					<button class="btn">Create new cards</button>
				</a>
				<a href="/edit">
					<button class="btn">Edit your cards</button>
				</a>
				<a href="/updateprofile">
					<button class="btn">Update your profile</button>
				</a>
			</div>
		</div>
	{/if}
</div>
