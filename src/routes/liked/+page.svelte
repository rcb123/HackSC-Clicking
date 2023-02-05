<script lang="ts">
	const like_clicked = async () => {
		window.location.href = '/liked';
	};
</script>

<div>
	<h1 class="text-3xl text-center mb-[0%] pt-7 pb-0 tracking-wide font-semibold">It's a match!</h1>
</div>
<div class="w-full text-center mt-3">
	<a class="" href="/chat">
		<button
			class="btn bg-yellow-200 btn-primary rounded-3xl normal-case font-semibold text-base text-black border-none hover:bg-yellow-100"
			>Chat Now!</button
		>
	</a>
</div>

<div class="flex h-[60vh]">
	<div class="flex flex-row justify-center m-auto align-center">
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
					alt="Movie Cover"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">Interstellar</h2>
				<p>I like it!!!</p>
				<div class="card-actions justify-between mt-4">
					<!-- <button class="btn btn-lg btn-success" on:click={like_clicked}>Like</button>
					<button class="btn btn-lg btn-error">Dislike</button> -->
				</div>
			</div>
		</div>
	</div>

	<div class="arrow" />

	<div class="flex flex-row justify-center m-auto align-center">
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
					alt="Movie Cover"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">Interstellar</h2>
				<p>I LOVE THIS MOVIE!!!!!!!!!!!!!!!!!!!</p>
				<div class="card-actions justify-between mt-4">
					<!-- <button class="btn btn-lg btn-success" on:click={like_clicked}>Like</button>
					<button class="btn btn-lg btn-error">Dislike</button> -->
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.arrow {
		width: 5px;
		height: 120px;
		background-color: rgb(96, 93, 93);
		/* Rotate div */
		-ms-transform: rotate(30deg);
		/* IE 9 */
		-webkit-transform: rotate(30deg);
		/* Chrome, Safari, Opera */
		transform: rotate(90deg);
		transform-origin: bottom left;
		position: relative;
		margin-top: 100px;
		margin-left: -110px;
	}
	.arrow:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		border-style: solid;
		transform: translate(-40%, -50%);
		border-width: 0 10px 20px 10px;
		border-color: transparent transparent rgb(96, 93, 93) transparent;
	}
	.arrow:before {
		content: '';
		position: absolute;
		bottom: -6px;
		left: -4px;
		border-style: solid;
		transform: rotate(60deg);
		border-width: 0 10px 20px 10px;
		border-color: transparent transparent rgb(95, 96, 93) transparent;
	}

	.arrow-group {
		display: flex;
		flex-wrap: wrap;
	}
</style>
