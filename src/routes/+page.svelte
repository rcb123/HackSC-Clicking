<script>
	import { page } from '$app/stores';
</script>

<div class="flex h-[90vh] bg-slate-200">
	<div class="bg-white m-auto w-[75vw] max-w-2xl shadow-xl rounded-2xl px-10 py-10 overflow-auto">
		<h1 class="text-4xl tracking-wider font-bold">Clicking 🍿</h1>
		<h2 class="text-2xl mb-[3%] tracking-wide font-semibold">Find your movie soulmate</h2>
		<div class="text-justify">
			<p class="mb-2">Welcome to Clicking, the ultimate platform for movie lovers!</p>
			<p class="mb-2">
				Find your movie soulmate by creating and swiping movie cards. Our sophisticated algorithms
				pair you with users who share your tastes. Start exploring the world of cinema like never
				before and discover hidden gems you may have never known existed.
			</p>
			<p>
				Join the Clicking community today and never watch a bad movie!
			</p>
		</div>
		<div class="mt-6">
			{#if !$page.data.session}
				<a href="/signup">
					<button class="btn btn-primary rounded-3xl normal-case font-semibold text-base">Sign up</button>
				</a>
				<a href="/login">
					<button class="btn btn-primary rounded-3xl normal-case font-semibold text-base">Login</button>
				</a>
			{:else}
				<a href="/match">
					<button class="btn btn-primary rounded-3xl normal-case font-semibold text-base">Start matching</button>
				</a>
			{/if}
		</div>
	</div>
</div>
