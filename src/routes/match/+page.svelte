<script>
	let link = "https://m.media-amazon.com/images/I/51BANINoAxL._AC_.jpg";
	function dislike_clicked() {
		link="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg";
	}
</script>
<style>
	.mygreybtn {
		background-color: #D6D5D1;
	}
</style>

<div class="flex h-[90vh] bg-slate-200">
	<img class="absolute max-w-md left-0 top-0" src="./vector_1.png" alt=""/>
	<img class="absolute max-w-lg right-0 bottom-[10vh] rotate-180" src="./vector_1.png" alt=""/>

	<div class="flex flex-row justify-center m-auto align-center">
		<div class="card w-96 bg-base-100 shadow-xl bg-yellow-100">
			<figure>
				<img
					id="display_card"
					src="{link}"
					alt="Movie Cover"
					class="max-h-64"
				/>
			</figure>
			<div class="card-body bg-yellow-100">
				<h2 class="card-title">Movie</h2>
				<p>Movie Description</p>
				<div class="card-actions justify-between mt-4">
					<a href="/liked">
						<button class="btn btn-lg btn-success w-28">Like</button>
					</a>
					<button class="btn btn-lg btn-error w-28 mygreybtn border-none" on:click={dislike_clicked}>Dislike</button>
				</div>
			</div>
		</div>
	</div>
</div>
