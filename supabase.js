const SUPABASE_URL = 'https://trvszihtgbhkrftycbro.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ak-ShPKYQnMl0uOrbS7pBA_qUpSKDNz';

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

window.db = db;
