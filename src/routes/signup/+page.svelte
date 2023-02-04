<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let email: string | null = null;
	let password: string | null = null;
	let passwordConfirm: string | null = null;
	let terms: boolean = false;
	let status: number | null = null;

	let validEmail: 'Email must be a valid email address' | 'Email is required' | 'Email must be less than 64 characters' | null = null;
	let validPassword: 'Password must be at least 6 characters' | 'Password must be less than 32 characters' | 'Password is required' | null = null;
	let passwordMatch: 'Confirm Password is required' | 'Password and Confirm Password must match' | null = null;
	let acceptedTerms: 'You must accept the terms before proceeding' | null = null;

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

	const isPasswordMatch = (password: string | null, confirmPassword: string | null) => {
		if (!confirmPassword) {
			return 'Confirm Password is required';
		} else if (password != confirmPassword) {
			return 'Password and Confirm Password must match';
		} else {
			return null;
		}
	};

	const isAcceptingTerms = (terms: boolean) => {
		if (!terms) {
			return 'You must accept the terms before proceeding';
		} else {
			return null;
		}
	};

	const signup = async () => {
		if (!email || !password) {
			status = 500;
			return;
		}
		status = null;
		validEmail = isValidEmail(email);
		validPassword = isValidPassword(password);
		passwordMatch = isPasswordMatch(password, passwordConfirm);
		acceptedTerms = isAcceptingTerms(terms);
		let validationError = (validEmail || validPassword || passwordMatch || acceptedTerms) != null;

		if (validationError) {
			status = 500;
			return;
		}

		const { data, error } = await supabase.auth.signUp({
			email: email,
			password: password
		});

		if (error) {
			status = 500;
			return;
		}

		email = null;
		password = null;
		passwordConfirm = null;
		terms = false;
		status = 200
		return;
	};
</script>

<div class="lg:container mx-auto pt-[5%] h-[90vh] w-full p-8">
	<form
		on:submit|preventDefault={signup}
		class="flex flex-col items-center w-full justify-center"
	>
		<h1 class="text-3xl font-medium text-center my-2">Sign Up</h1>
		<div class="form-control w-full max-w-xs">
			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				type="email"
				name="email"
				class="input w-full max-w-xs {validEmail ? 'input-error' : 'input-bordered'}"
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
				<span class="label-text">Password</span>
			</label>
			<input
				type="password"
				name="password"
				class="input w-full max-w-xs {validPassword ? 'input-error' : 'input-bordered'}"
				bind:value={password}
			/>
			<label for="password" class="label">
				{#if validPassword}
					<span class="label-text-alt text-error">{validPassword}</span>
				{/if}
			</label>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="passwordConfirm" class="label">
				<span class="label-text">Confirm Password</span>
			</label>
			<input
				type="password"
				name="passwordConfirm"
				class="input w-full max-w-xs {passwordMatch
					? 'input-error'
					: 'input-bordered'}"
				bind:value={passwordConfirm}
			/>
			<label for="passwordConfirm" class="label">
				{#if passwordMatch}
					<span class="label-text-alt text-error">{passwordMatch}</span>
				{/if}
			</label>
		</div>
		<div class="form-control w-full max-w-xs pb-2">
			<label class="label cursor-pointer justify-start space-x-4">
				<input
					type="checkbox"
					name="terms"
					class="checkbox checkbox-primary {acceptedTerms ? 'border-error' : ''}"
					bind:value={terms}
				/>
				<span class="label-text">I accept the terms and conditions</span>
			</label>
			<label for="terms" class="label">
				{#if acceptedTerms}
					<span class="label-text-alt text-error">{acceptedTerms}</span>
				{/if}
			</label>
		</div>
		<div class="w-full max-w-xs">
			<button class="btn btn-primary w-full" type="submit">Register</button>
		</div>
	</form>
	{#if status == 200}
		<div>
			<p>Verification email sent!</p>
			<p>Please check your email</p>
		</div>
	{/if}
</div>
