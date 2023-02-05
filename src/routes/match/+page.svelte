<script lang="ts">
    const like_clicked = async () => {
    	window.location.href = '/liked';
	}
</script>

<div class="flex h-[90vh] bg-slate-200">
	<div class="flex flex-row justify-center m-auto align-center">
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
					alt="Movie Cover"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">Movie</h2>
				<p>Movie Description</p>
				<div class="card-actions justify-between mt-4">
					<button class="btn btn-lg btn-success" on:click={like_clicked}>Like</button>
					<button class="btn btn-lg btn-error">Dislike</button>
				</div>
			</div>
		</div>
	</div>
</div>
