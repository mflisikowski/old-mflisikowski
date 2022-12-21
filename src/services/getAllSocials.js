import { UseSupabase } from '@/composables/supabase';

export const getAllSocials = async () => {
  const client = UseSupabase();
  const response = await client.from('socials').select('*').order('id');

  return {
    socials: response.data || [],
  };
};
