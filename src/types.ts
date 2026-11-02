export type ProjectKind = "ai" | "company" | "academic" | "team";

export interface Project {
  id: string;
  title: string;
  kind: ProjectKind;
  /** Short label shown on the card badge */
  kindLabel: string;
  when: string;
  inProgress?: boolean;
  role: string;
  stack: string[];
  /** Mini flow diagram on the card. Words in **double asterisks** are highlighted. */
  flow: string[];
  summary: string;
  problem: string;
  built: string[];
  result: string;
  confidential?: boolean;
}

export interface SkillGroup {
  title: string;
  skills: { name: string; familiar?: boolean }[];
}

export interface TimelineEntry {
  when: string;
  title: string;
  org: string;
  points: string[];
}
