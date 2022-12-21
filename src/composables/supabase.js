import { createClient } from '@supabase/supabase-js';
import getConfig from 'next/config';

const UseSupabase = () => {
  const { publicRuntimeConfig } = getConfig();

  return createClient(
    publicRuntimeConfig.SUPABASE_URL,
    publicRuntimeConfig.SUPABASE_KEY
  );
};

export default UseSupabase;
