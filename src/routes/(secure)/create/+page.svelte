<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { page } from '$app/stores';

	let movieName: string = '';
	let movieDesc: string = '';
	let comment: string = '';
	let movieURL: string = '';

	let errorMessage: string = '';
	let loading: boolean = false;
	let success: boolean = false;

	let counterColor = movieDesc.length > 500 ? 'red' : '';

	$: {
		comment = movieDesc.trim();
		counterColor = comment.length > 500 ? 'red' : '';
	}

	const createMovieCard = async () => {
		loading = true;
		success = false;
		errorMessage = '';
		if (movieName == '' || movieDesc == '' || movieURL == '') {
			if (movieName == '') {
				errorMessage = 'Please enter a movie name!';
			}
			if (movieDesc == '') {
				errorMessage = 'Please enter a movie description!';
			}
			if (movieURL == '') {
				errorMessage = 'Please enter a movie URL!';
			}
			loading = false;
			return;
		}

		const { data, error } = await supabase.from('MovieCards').insert([
			{
				name: movieName,
				description: movieDesc,
				cover_image: movieURL,
				owner: $page.data.session.user.id
			}
		]);

		if (error) {
			errorMessage = String(error);
			loading = false;
			return;
		}

		movieName = '';
		movieDesc = '';
		movieURL = '';
		success = true;
		loading = false;
		return;
	};
</script>

<div class="lg:container mx-auto h-[90vh] w-full p-8">
	<form
		class="flex flex-col items-center w-full justify-center"
		on:submit|preventDefault|trusted={createMovieCard}
	>
		<h1 class="text-3xl font-medium text-center my-2">Create A Card! 🔥</h1>
		<div class="form-control w-full max-w-xs">
			<label for="card-name" class="label">
				<span class="label-text">Movie Name:</span>
			</label>
			<input name="card-name" class="border-yellow-500 input w-full max-w-xs" bind:value={movieName} />
			<label for="card-name" class="label" />
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="description" class="label">
				<span class="label-text">Description:</span>
			</label>
			<textarea
				name="description"
				id="description"
				class="border-yellow-500 w-full max-w-xs rounded-lg input input-lg h-24"
				rows="4"
				bind:value={movieDesc}
			/>
			<div id="counter" class="text-right" style="color: {counterColor}">
				{movieDesc.length} / 500
			</div>
			<label for="description" class="label" />
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="movie-url" class="label">
				<span class="label-text">Cover URL:</span>
			</label>
			<input name="movie-url" class="border-yellow-500 input w-full max-w-xs" bind:value={movieURL} />
			<label for="movie-url" class="label" />
		</div>

		<div class="w-full max-w-xs">
			<input
				class="btn w-full bg-yellow-200 btn-primary rounded-3xl normal-case font-semibold text-base text-black border-none hover:bg-yellow-100"
				type="submit"
				value={loading ? 'Loading...' : 'Create'}
				disabled={loading}
			/>
		</div>
	</form>
	{#if errorMessage != ''}
		<div class="mt-10 bg-slate-50 rounded-xl p-6 shadow-lg w-fit mx-auto">
			<p class="text-lg text-center font-medium text-error">{errorMessage}</p>
		</div>
	{/if}
	{#if success}
		<div class="mt-10 bg-slate-50 rounded-xl p-6 shadow-lg w-fit mx-auto">
			<p class="text-lg text-center font-medium text-success">Successfully created movie card!</p>
		</div>
	{/if}
</div>

<style>
	* {
		font-family: Overpass;
	}
</style>