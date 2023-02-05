<script lang="ts">
	let movieName: string = '';
	let movieDesc: string = '';
	let movieURL: string = '';

    let comment: string = '';
    let counterColor: string = '';


    $: {
        comment = movieDesc.trim();
        counterColor = comment.length > 100 ? 'red' : '';
    }
    
</script>


<div class="lg:container mx-auto h-[90vh] w-full p-8">
	<form
		
		class="flex flex-col items-center w-full justify-center"
	>
		<h1 class="text-3xl font-medium text-center my-2">Edit A Card! 📝</h1>
		<div class="form-control w-full max-w-xs">
			<label for="card-name" class="label">
				<span class="label-text">Card Name:</span>
			</label>
			<input
				name="card-name"
				class="border-yellow-500 input w-full max-w-xs"
				bind:value={movieName}
			/>
			<label for="card-name" class="label">
			</label>
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
			></textarea>
            <div id="counter" class="text-right" style="color: {counterColor}">{comment.length} / 100</div>
			<label for="description" class="label">
			</label>
		</div>
        <div class="form-control w-full max-w-xs">
			<label for="movie-url" class="label">
				<span class="label-text">Cover URL:</span>
			</label>
			<input name="movie-url" class="border-yellow-500 input w-full max-w-xs" bind:value={movieURL} />
			<label for="movie-url" class="label" />
		</div>

        <div class="w-full max-w-xs">
			<button class="btn w-full bg-yellow-200 btn-primary rounded-3xl normal-case font-semibold text-base text-black border-none hover:bg-yellow-100" type="submit">Edit</button>
		</div>
	</form>
</div>

<style>
	* {
		font-family: Overpass;
	}
</style>