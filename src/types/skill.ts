export type SkillType = 'tool' | 'skill' | 'frontend' | 'backend' | 'language';

export interface Skill {
	id: string;
	name: string;
	skillType: SkillType;
	percentage: number;
	showInAbout: boolean;
}
