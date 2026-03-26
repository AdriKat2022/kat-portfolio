export type ActionType = 'PLAY-IN-BROWSER' | 'GITHUB' | 'ITCH' | 'GENERAL-LINK-NEW-TAB' | 'DOWNLOAD' | 'UNAVAILABLE' | 'CUSTOM';

import type { Skill } from '@/types/skill';

export interface ProjectAction {
  type: ActionType;
  link: string;
  customDisplay?: LocalizedContent;
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
  additionalLinks?: string[];
  date?: LocalizedContent;
  developmentTime?: LocalizedContent | null;
}
