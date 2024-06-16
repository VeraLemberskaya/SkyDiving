import { request } from '@api/client';

import { KnowledgeBaseResponse } from './types';

const KNOWLEDGE_BASE_url = '/knowledge-base';

export const getKnowledgeBase = () => {
  return request<KnowledgeBaseResponse>({
    url: KNOWLEDGE_BASE_url,
    method: 'get',
  });
};
