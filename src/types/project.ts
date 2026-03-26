export type ActionType = 'LINK-NT' | 'DOWNLOAD' | 'UNAVAILABLE';

import type { Skill } from '@/types/skill';

export interface ProjectAction {
  type: ActionType;
  link: string;
}

export interface LocalizedContent {
  en: string;
  fr: string;
}

export interface Project {
  id: string;
  pinned: boolean;
  cover_img: string;
  imgs: string[];
  technologies: Skill[];
  actions: ProjectAction[];
  title: LocalizedContent;
  description: LocalizedContent;
  date?: LocalizedContent;
  developmentTime?: LocalizedContent | null;
}
