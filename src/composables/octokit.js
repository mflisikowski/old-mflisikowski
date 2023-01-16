import { Octokit } from 'octokit';
import { GITHUB } from '@/components/env';

export const octokit = new Octokit({ auth: GITHUB.TOKEN });
