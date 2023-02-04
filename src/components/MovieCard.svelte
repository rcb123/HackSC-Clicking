<script lang="ts">
    export let movieName: string;
    export let movieDesc: string;
    export let movieCover: string;
</script>

<div class="card w-[23vw] bg-base-100 shadow-xl mb-4">
    <figure>
        <img
            src={movieCover}
            alt="Movie Cover"
        />
    </figure>
    <div class="card-body">
        <h2 class="card-title">{movieName}</h2>
        <p>{movieDesc}</p>
    </div>
</div>