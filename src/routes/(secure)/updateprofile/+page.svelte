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
					class="input input-bordered w-full"
				/>
			</div>

			<div class="my-4 w-[30vw]">
				<label for="username">Username</label>
				<input
					id="username"
					type="text"
					bind:value={username}
					class="input input-bordered w-full"
				/>
			</div>

            <div class="my-4 w-[30vw]">
				<label for="avatar_url">Avatar URL</label>
				<input
					id="avatar_url"
					type="text"
					bind:value={avatarURL}
					class="input input-bordered w-full"
				/>
			</div>

			<div class="my-4 w-[30vw]">
				<input
					type="submit"
					class="btn btn-block btn-primary"
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