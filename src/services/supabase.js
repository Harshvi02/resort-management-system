import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ushmzqgchhiqfgjacevw.supabase.co";
const supabaseKey = "sb_publishable_hXOg6yaJ9OLSMiaC8WLDZQ_lHAQL7FS";

export const supabase = createClient(supabaseUrl, supabaseKey);