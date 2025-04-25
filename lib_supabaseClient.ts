import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://<your-supabase-url>';
const supabaseAnonKey = '<your-supabase-anon-key>';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
