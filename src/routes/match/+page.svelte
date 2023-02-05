<script>
	let link = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg';
	function dislike_clicked() {
		link =
			'https://image.tmdb.org/t/p/w500/o04jZs5SXhbvhqO4981W7KJXOWZ.jpg';
	}
</script>

<div class="flex h-[90vh]">
	<div class="flex flex-row justify-center m-auto align-center">
		<div class="card w-fit shadow-xl">
			<figure>
				<img id="display_card" src={link} alt="Movie Cover" class="max-h-64" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Movie</h2>
				<p>Description</p>
				<div class="card-actions justify-between mt-4">
					<a href="/liked">
						<button class="btn btn-lg btn-success w-28">Like</button>
					</a>
					<button class="btn btn-lg btn-error w-28 mygreybtn border-none" on:click={dislike_clicked}
						>Dislike</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.mygreybtn {
		background-color: #d6d5d1;
	}
</style>
