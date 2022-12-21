import { createClient } from '@supabase/supabase-js';
import getConfig from 'next/config';

export const UseSupabase = () => {
  const { publicRuntimeConfig } = getConfig();

  return createClient(
    publicRuntimeConfig.SUPABASE_URL,
    publicRuntimeConfig.SUPABASE_KEY
  );
};

export const UseSupabaseServer = () => {
  const { serverRuntimeConfig } = getConfig();

  return createClient(
    serverRuntimeConfig.SUPABASE_URL,
    serverRuntimeConfig.SUPABASE_KEY
  );
};
