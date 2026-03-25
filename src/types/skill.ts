export type SkillType = "Tool" | "Frontend" | "Backend";

export type Skill = {
	name: string;
	skillType: SkillType;
	percentage: number;
};
