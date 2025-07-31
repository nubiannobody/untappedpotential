import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iyepojfwpwmtwaicrjiw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5ZXBvamZ3cHdtdHdhaWNyaml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NDM4ODcsImV4cCI6MjA2OTUxOTg4N30._iYQkf1XTw56y4n209AaYRw2bXOYwthV1YUXBt1osHs';

export const supabase = createClient(supabaseUrl, supabaseKey);
