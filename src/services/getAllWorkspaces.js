import { database } from '@/database';

export const getAllWorkspaces = async () => {
  const response = await database.from('workplaces').select('*').order('id');

  return {
    workplaces: response.data || [],
  };
};
