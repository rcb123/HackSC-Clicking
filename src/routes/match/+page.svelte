<script>
	let link = "https://m.media-amazon.com/images/I/51BANINoAxL._AC_.jpg";
	function dislike_clicked() {
		link="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg";
	}
</script>

<div class="flex h-[90vh] bg-slate-200">
	<div class="flex flex-row justify-center m-auto align-center">
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					id="display_card"
					src="{link}"
					alt="Movie Cover"
					class="max-h-64"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">Movie</h2>
				<p>Movie Description</p>
				<div class="card-actions justify-between mt-4">
					<a href="/liked">
						<button class="btn btn-lg btn-success">Like</button>
					</a>
					<button class="btn btn-lg btn-error" on:click={dislike_clicked}>Dislike</button>
				</div>
			</div>
		</div>
	</div>
</div>
