// Ganti dengan data project Supabase Anda

const SUPABASE_URL = "https://xxxxxxxxxxxxx.supabase.co";

const SUPABASE_ANON_KEY =
"eyJxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// Dashboard aktif default
let currentDashboard = "BEM";

// Waktu UTC
function getUTCDate() {
    return new Date().toISOString().split("T")[0];
}
