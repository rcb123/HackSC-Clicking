<script lang="ts">
	export let movieName: string;
	export let movieDesc: string;
	export let movieCover: string;
</script>

<div class="card w-[50vw] max-w-xs bg-slate-900 shadow-xl border mb-2 image-full">
	<figure>
		<img src={movieCover} alt="Movie Cover" class="overflow-hidden" />
	</figure>
	<div class="card-body px-4 py-4">
		<div class="p-4 rounded-xl h-full">
			<h2 class="card-title text-2xl mb-2">{movieName}</h2>
			<p>{movieDesc}</p>
		</div>
	</div>
</div>
