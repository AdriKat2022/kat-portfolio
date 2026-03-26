export type SkillType = 'tool' | 'skill' | 'language' | 'framework';

export interface Skill {
	id: string;
	name: string;
	skillType: SkillType;
	percentage: number;
	showInAbout: boolean;
}
