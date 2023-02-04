<script lang="ts">
    import Icon from '@iconify/svelte';
    import "$root/styles.css"
</script>

<title>Clicking</title>

<slot />

<div class="btm-nav">
	<a href="/">
		<button class="btn rounded-none w-full h-full text-2xl">
			<Icon icon="mdi:home" />
		</button>
	</a>
	<a href="/match">
		<button class="btn rounded-none w-full h-full text-2xl">
			<Icon icon="mdi:movie-open" />
		</button>
	</a>
	<a href="/account">
		<button class="btn rounded-none w-full h-full text-2xl">
            <Icon icon="mdi:user" />
		</button>
	</a>
</div>