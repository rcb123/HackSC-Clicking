<script lang="ts">
	import MovieCard from '$components/MovieCard.svelte';
	let username = 'User1';

    let cards = [
        {
            name:"Movie1",
            desc:"The first movie",
            cover:"https://i.etsystatic.com/27725708/r/il/008c5a/2904647259/il_570xN.2904647259_ilg7.jpg"
        },
        {
            name:"Movie2",
            desc:"The second movie",
            cover:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
        },
        {
            name:"Movie2",
            desc:"The third movie",
            cover:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540"
        }
    ]
</script>

<div class="flex h-screen bg-slate-200">
	<div class="m-auto w-[75vw] bg-white px-6 py-6 rounded-xl shadow-xl">
        <!-- Top div with user avatar and name -->
		<div class="flex flex-row items-center mb-4">
			<div class="avatar">
				<div class="w-12 rounded-full ring ring-red-400 ring-offset-base-100 ring-offset-2">
					<img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
				</div>
			</div>
			<h1 class="text-2xl ml-4">Welcome back {username}</h1>
		</div>
        <!-- Middle div with movie cards -->
		<div>
			<h1 class="text-2xl mb-4">Your Movie Cards:</h1>
			<div class="grid w-full justify-evenly grid-cols-3">
				{#each cards as card}
                    <MovieCard
                        movieName={card.name}
                        movieDesc={card.desc}
                        movieCover={card.cover}
                    />
                {/each}
			</div>
		</div>
        <!-- Bottom div with edit/update buttons -->
        <div>
            <button class="btn btn-info">Edit your cards</button>
            <button class="btn btn-info">Update your profile</button>
        </div>
	</div>
</div>
