import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
