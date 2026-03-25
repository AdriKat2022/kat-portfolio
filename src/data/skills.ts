import type { Skill } from '@/types/skill';

export const skills: Skill[] = [
  // Languages
  { id: 'cpp', name: 'C++', skillType: 'language', percentage: 90, showInAbout: true },
  { id: 'csharp', name: 'C#', skillType: 'language', percentage: 92, showInAbout: true },
  { id: 'c', name: 'C', skillType: 'language', percentage: 75, showInAbout: true },
  { id: 'python', name: 'Python', skillType: 'language', percentage: 82, showInAbout: true },
  { id: 'java', name: 'Java', skillType: 'language', percentage: 78, showInAbout: true },
  { id: 'bash', name: 'Bash', skillType: 'language', percentage: 70, showInAbout: true },
  { id: 'dart', name: 'Dart', skillType: 'language', percentage: 72, showInAbout: false },

  // Frontend
  { id: 'html', name: 'HTML', skillType: 'frontend', percentage: 80, showInAbout: true },
  { id: 'css', name: 'CSS', skillType: 'frontend', percentage: 78, showInAbout: true },
  { id: 'javascript', name: 'JavaScript', skillType: 'frontend', percentage: 76, showInAbout: true },
  { id: 'flutter', name: 'Flutter', skillType: 'frontend', percentage: 70, showInAbout: false },

  // Backend
  { id: 'php', name: 'PHP', skillType: 'backend', percentage: 65, showInAbout: true },
  { id: 'symfony', name: 'Symfony', skillType: 'backend', percentage: 62, showInAbout: true },
  { id: 'mirror-networking', name: 'Mirror Networking', skillType: 'backend', percentage: 72, showInAbout: false },

  // Tools
  { id: 'unity', name: 'Unity', skillType: 'tool', percentage: 90, showInAbout: true },
  { id: 'unreal-engine-5', name: 'Unreal Engine 5', skillType: 'tool', percentage: 70, showInAbout: true },
  { id: 'flame', name: 'Flame', skillType: 'tool', percentage: 68, showInAbout: false },
  { id: 'linux', name: 'Linux', skillType: 'tool', percentage: 80, showInAbout: true },
  { id: 'ci-cd', name: 'CI/CD', skillType: 'tool', percentage: 74, showInAbout: false },
  { id: 'git', name: 'GIT', skillType: 'tool', percentage: 88, showInAbout: true },
  { id: 'git-lfs', name: 'GIT LFS', skillType: 'tool', percentage: 70, showInAbout: true },
  { id: 'nav-mesh', name: 'Nav-Mesh', skillType: 'tool', percentage: 68, showInAbout: false },
  { id: 'microsoft-office', name: 'Microsoft Office Suite', skillType: 'tool', percentage: 85, showInAbout: true },
  { id: 'google-suite', name: 'Google Suite', skillType: 'tool', percentage: 82, showInAbout: true },

  // General skills
  { id: 'vm-scripting', name: 'VM Scripting', skillType: 'skill', percentage: 70, showInAbout: false },
  { id: 'tool-programming', name: 'Tool Programming', skillType: 'skill', percentage: 72, showInAbout: false },
  { id: 'problem-solving', name: 'Problem Solving', skillType: 'skill', percentage: 86, showInAbout: false },
  { id: 'leadership', name: 'Leadership', skillType: 'skill', percentage: 80, showInAbout: false },
  { id: 'encapsulation', name: 'Encapsulation', skillType: 'skill', percentage: 78, showInAbout: false },
  { id: 'gameplay-programming', name: 'Gameplay Programming', skillType: 'skill', percentage: 82, showInAbout: false }
];

const skillMap = new Map(skills.map((skill) => [skill.id, skill]));

export const getSkillsByIds = (skillIds: string[]): Skill[] => {
  return skillIds
    .map((id) => skillMap.get(id))
    .filter((skill): skill is Skill => Boolean(skill));
};

export const aboutSkills = skills.filter((skill) => skill.showInAbout);
