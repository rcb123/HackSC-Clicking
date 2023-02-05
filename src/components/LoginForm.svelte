<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let success: boolean = false;
	let email: string | null;
	let password: string | null;
	let signInError: string | null = null;

	let validEmail: 'Email must be a valid email address' | 'Email is required' | 'Email must be less than 64 characters' | null = null;
	let validPassword: 'Password must be at least 6 characters' | 'Password must be less than 32 characters' | 'Password is required' | null = null;

	const isValidEmail = (email: string | null) => {
		// eslint-disable-next-line no-useless-escape
		const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (email) {
			if (!email?.match(format)) {
				return 'Email must be a valid email address';
			}
			if (email?.length < 1) {
				return 'Email is required';
			}
			if (email?.length > 64) {
				return 'Email must be less than 64 characters';
			}
			return null;
		} else return 'Email is required';
	};

	const isValidPassword = (password: string | null) => {
		if (password) {
			if (password?.length < 6) {
				return 'Password must be at least 6 characters';
			} else if (password?.length > 32) {
				return 'Password must be less than 32 characters';
			} else {
				return null;
			}
		} else {
			return 'Password is required';
		}
	};

	const login = async () => {
		success = false;
		loading = true;
		validEmail = isValidEmail(email);
		validPassword = isValidPassword(password);
		const validationError = validEmail || validPassword;

		if (validationError) {
			console.log(validEmail)
			console.log(validPassword)
			loading = false;
			return;
		}

		if (!email || !password) {
			loading = false;
			return;
		}

		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		});

		if (error) {
			signInError = String(error);
			validEmail = null;
			validPassword = null;
			loading = false;
			return;
		}

		validEmail = null;
		validPassword = null;
		loading = false;
		success = true;
		return;
	};

	$: if (success) {
		window.location.href = '/account';
	}
</script>

<div class="lg:container mx-auto h-[90vh] w-full p-8">
	<form on:submit|preventDefault={login} class="flex flex-col items-center w-full justify-center">
		<h1 class="text-3xl my-2 font-extrabold">WELCOME BACK! 🍿</h1>
		<p>
			Don't have an account? <a href="/signup" class="link link-warning font-bold!important"
				>Sign up here.</a
			>
		</p>
		<div class="form-control w-full max-w-xs">
			<label for="email" class="label">
				<span class="label-text font-semibold">Email</span>
			</label>
			<input
				type="email"
				name="email"
				class="input w-full max-w-xs {validEmail ? 'input-error' : 'border-yellow-500'}"
				bind:value={email}
			/>
			<label for="email" class="label">
				{#if validEmail}
					<span class="label-text-alt text-error">{validEmail}</span>
				{/if}
			</label>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="password" class="label">
				<span class="label-text font-semibold">Password</span>
			</label>
			<input
				type="password"
				name="password"
				class="input w-full max-w-xs {validPassword ? 'input-error' : 'border-yellow-500'}"
				bind:value={password}
			/>
			<label for="password" class="label">
				{#if validPassword}
					<span class="label-text-alt text-error">{validPassword}</span>
				{/if}
			</label>
		</div>
		<div class="w-full max-w-xs">
			<input
				class="btn w-full bg-yellow-200 btn-primary rounded-3xl normal-case font-semibold text-base text-black border-none hover:bg-yellow-100"
				type="submit"
				value={loading ? 'Loading...' : 'Log In'}
				disabled={loading}
			/>
		</div>
	</form>
	{#if signInError}
		<div class="mt-10 bg-slate-50 rounded-xl p-6 shadow-lg w-fit mx-auto">
			<p class="text-lg text-center font-medium text-error">{signInError}</p>
		</div>
	{/if}
</div>

<style>
	* {
		font-family: Overpass;
	}
</style>
