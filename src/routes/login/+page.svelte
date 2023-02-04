<script lang="ts">
    import { supabase } from '$lib/supabaseClient'
    import Button from "./Button.svelte"
  
    let loading = false
    let email: string
    let password: string
  
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
  </script>

  <div class="flex h-[90vh] bg-slate-200">
	<div
		class="bg-white m-auto w-[75vw] max-w-2xl shadow-xl rounded-2xl px-10 py-10 overflow-auto"
	>
		<h1 class="text-3xl text-center mb-[3%] tracking-wide font-semibold">Login Here! 🍿</h1>
        <div class="text-justify">
            <form class="row flex-center flex" on:submit|preventDefault="{handleLogin}">
                <div class="col-6 form-widget">
                    <h1 class="header">Email:</h1>
                    <!-- <p class="description">Sign in via magic link with your email below</p> -->
                    <div>
                        <input class="inputField" type="email" placeholder="Your email" bind:value="{email}" />
                    </div>

                    <h1 class="header">Password:</h1>
                    <!-- <p class="description">Sign in via magic link with your email below</p> -->
                    <div>
                        <input class="inputField" type="password" placeholder="Your password" bind:value="{password}" />
                    </div>

                    <div>
                        <!-- <input type="submit" class="button block" value={loading ? 'Loading' : 'Send magic link'}
                        disabled={loading} /> -->
                        <button class="button">Login</button>
                    </div>
                </div>
            </form>
    </div>
	</div>
</div>