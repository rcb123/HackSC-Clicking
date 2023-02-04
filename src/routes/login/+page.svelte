<script lang="ts">
    import { supabase } from '$lib/supabaseClient'
	import { enhance } from '$app/forms';

  
    let loading = false
	let email: string | null = null;
	let password: string | null = null;
  
    const handleLogin = async () => {
      try {
        loading = true
        const { error } = await supabase.auth.signInWithOtp({ email })
        if (error) throw error
        alert('Check your email for the login link!')
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        loading = false
      }
    }




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
  </script>


<div class="lg:container mx-auto h-full w-full p-8">
	<form
		
		class="flex flex-col items-center w-full justify-center"
	>
		<h1 class="text-3xl font-medium text-center my-2">Login Here! 🍿</h1>
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
        <div class="w-full max-w-xs">
			<button class="btn btn-primary w-full" type="submit">Log In</button>
		</div>
	</form>
</div>
