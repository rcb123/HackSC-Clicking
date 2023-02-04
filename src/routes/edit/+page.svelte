<script lang="ts">
    import { supabase } from '$lib/supabaseClient'
	import { enhance } from '$app/forms';

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
				class="input w-full max-w-xs"
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
				class="w-full max-w-xs"
                rows="4"
			></textarea>
			<label for="description" class="label">
			</label>
		</div>
        <div class="form-control w-full max-w-xs">
			<label for="movie-image" class="label">
				<span class="label-text">Image:</span>
			</label>
			<input
				type="file"
				name="movie-image"
				class="w-full max-w-xs"
			/>
			<label for="movie-image" class="label">
			</label>
		</div>

        <div class="w-full max-w-xs">
			<button class="btn btn-primary w-full" type="submit">Edit </button>
		</div>
	</form>
</div>
