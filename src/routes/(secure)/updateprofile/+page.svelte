<script lang="ts">
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabaseClient';
	import { page } from '$app/stores';

	let loading: boolean = false;
	let session: AuthSession = $page.data.session;
	let username: string | null = 'User';
	let avatarURL: string | null = 'https://www.w3schools.com/howto/img_avatar.png';

	async function updateProfile() {
		try {
			loading = true;
			const { user } = session;

			const updates = {
				id: user.id,
				username,
				avatar_url: avatarURL,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates);

			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}

    console.log(session);
</script>

<img class="absolute max-w-md left-0 top-0" src="./vector_1.png" alt=""/>
<img class="absolute max-w-lg right-0 bottom-[10vh] rotate-180" src="./vector_1.png" alt=""/>

<div class="h-[90vh] w-full bg-slate-200">
	<div class="h-full mx-auto pt-[20vh] w-[30vw] ">
		<div>
			<h1 class="text-2xl font-semibold text-center">Update your profile</h1>
		</div>
		<form
			class="flex flex-col items-center w-full justify-center"
			on:submit|preventDefault={updateProfile}
		>
			<div class="my-4 w-[30vw]">
				<label for="email">Email</label>
				<input
					id="email"
					type="text"
					value={session.user.email}
					disabled
					class="border-yellow-500 input input-bordered w-full"
				/>
			</div>

			<div class="my-4 w-[30vw]">
				<label for="username">Username</label>
				<input
					id="username"
					type="text"
					bind:value={username}
					class="border-yellow-500 input input-bordered w-full"
				/>
			</div>

            <div class="my-4 w-[30vw]">
				<label for="avatar_url">Avatar URL</label>
				<input
					id="avatar_url"
					type="text"
					bind:value={avatarURL}
					class="border-yellow-500 input input-bordered w-full"
				/>
			</div>

			<div class="my-4 w-[30vw]">
				<input
					type="submit"
					class="btn w-full bg-yellow-200 btn-primary rounded-3xl normal-case font-semibold text-base text-black border-none hover:bg-yellow-100"
					value={loading ? 'Loading...' : 'Update'}
					disabled={loading}
				/>
			</div>
		</form>
	</div>
</div>

<style>
    * {
        font-family: Overpass;
    }
</style>