export interface ExpertiseItem {
    icon: string;
    title: string;
    description: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    category: string;
    problem: string;
    solution: string;
    highlights: string[];
    impact: string[];
    tags: string[];
}

export interface TechCategory {
    name: string;
    items: string[];
}

export interface PhilosophyItem {
    principle: string;
    description: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface DiagramNode {
    id: string;
    label: string;
    x: number;
    y: number;
    type: 'branch' | 'server' | 'cloud';
}
