<script lang="ts">
	import { fly } from 'svelte/transition';
	let matched: boolean = false;
	let first: boolean = true;

	function dislike_clicked() {
		first = false;
	}

	function liked() {
		matched = true;
	}
</script>

{#if !matched}
	{#if first}
		<div class="flex h-[90vh]">
			<div class="flex flex-row justify-center m-auto align-center">
				<div class="card max-w-sm shadow-xl bg-base-100 border">
					<figure>
						<img
							id="display_card"
							src="https://m.media-amazon.com/images/I/71LNVGVpWYL.jpg"
							alt="Movie Cover"
							class="h-64"
						/>
					</figure>
					<div class="card-body pt-2">
						<h2 class="card-title">Interstellar</h2>
						<p class="overflow-y-scroll max-h-36">
							Earth's future has been riddled by disasters, famines, and droughts. There is only one
							way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in
							the far reaches of our solar system allows a team of astronauts to go where no man has
							gone before, a planet that may have the right environment to sustain human life.
						</p>
						<div class="card-actions justify-between mt-4">
							<button class="btn btn-lg btn-success w-28" on:click={liked}>Like</button>
							<button
								class="btn btn-lg btn-error w-28 bg-gray-300 border-none"
								on:click={dislike_clicked}>Dislike</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="flex h-[90vh]">
			<div class="flex flex-row justify-center m-auto align-center">
				<div class="card max-w-sm shadow-xl bg-base-100 border">
					<figure>
						<img
							id="display_card"
							src="https://image.tmdb.org/t/p/w500/o04jZs5SXhbvhqO4981W7KJXOWZ.jpg"
							alt="Movie Cover"
							class="h-64"
						/>
					</figure>
					<div class="card-body pt-2">
						<h2 class="card-title">Shrek</h2>
						<p class="overflow-y-scroll max-h-36">
							Once upon a time, in a far away swamp, there lived an ogre named Shrek whose precious
							solitude is suddenly shattered by an invasion of annoying fairy tale characters. They
							were all banished from their kingdom by the evil Lord Farquaad. Determined to save
							their home -- not to mention his -- Shrek cuts a deal with Farquaad and sets out to
							rescue Princess Fiona to be Farquaad's bride. Rescuing the Princess may be small
							compared to her deep, dark secret.
						</p>
						<div class="card-actions justify-between mt-4">
							<button class="btn btn-lg btn-success w-28" on:click={liked}>Like</button>
							<button
								class="btn btn-lg btn-error w-28 bg-gray-300 border-none"
								on:click={dislike_clicked}>Dislike</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
{:else if matched}
	<div>
		<h1 class="text-3xl text-center mb-[0%] pt-7 pb-0 tracking-wide font-semibold">
			It's a match!
		</h1>
	</div>
	<div class="w-full text-center mt-3">
		<a class="" href="/chat">
			<button
				class="btn bg-yellow-200 btn-primary rounded-3xl normal-case font-semibold text-base text-black border-none hover:bg-yellow-100"
				>Chat Now!</button
			>
		</a>
	</div>

	<div class="flex flex-row h-[60vh] justify-evenly items-center">
		<div class="card max-w-sm h-[30rem] bg-base-100 shadow-xl border mx-4">
			<figure>
				<img
					class="h-64"
					src="https://image.tmdb.org/t/p/w500/o04jZs5SXhbvhqO4981W7KJXOWZ.jpg"
					alt="Movie Cover"
				/>
			</figure>
			<div class="card-body pt-2">
				<h2 class="card-title">Shrek</h2>
				<p class="overflow-y-scroll max-h-36">
					Shrek is a charming and hilarious animated movie that will have you laughing from start to
					finish. With a talented voice cast, catchy music, and a heartwarming message about beauty
					being in the eye of the beholder, this movie is a timeless classic that everyone should
					see.
				</p>
				<div class="card-actions justify-between mt-4">
					<!-- <button class="btn btn-lg btn-success" on:click={like_clicked}>Like</button>
					<button class="btn btn-lg btn-error">Dislike</button> -->
				</div>
			</div>
		</div>

		<div class="text-6xl mx-4">
			<iconify-icon icon="mdi:arrow-left-right" />
		</div>

		<div class="card max-w-sm h-[30rem] bg-base-100 shadow-xl border mx-4">
			<figure>
				<img
					class="h-64"
					src="https://image.tmdb.org/t/p/w500/o04jZs5SXhbvhqO4981W7KJXOWZ.jpg"
					alt="Movie Cover"
				/>
			</figure>
			<div class="card-body pt-2">
				<h2 class="card-title">Shrek</h2>
				<p class="overflow-y-scroll max-h-36">
					Once upon a time, in a far away swamp, there lived an ogre named Shrek whose precious
					solitude is suddenly shattered by an invasion of annoying fairy tale characters. They were
					all banished from their kingdom by the evil Lord Farquaad. Determined to save their home
					-- not to mention his -- Shrek cuts a deal with Farquaad and sets out to rescue Princess
					Fiona to be Farquaad's bride. Rescuing the Princess may be small compared to her deep,
					dark secret.
				</p>
				<div class="card-actions justify-between mt-4">
					<!-- <button class="btn btn-lg btn-success" on:click={like_clicked}>Like</button>
					<button class="btn btn-lg btn-error">Dislike</button> -->
				</div>
			</div>
		</div>
	</div>
{/if}
