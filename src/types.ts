
export interface Solution {
    id: string;
    title: string;
    csesLink: string;
    cppCode: string;
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Varies';
    notes?: string;
  }
  
  export interface ProblemCategory {
    name: string;
    problems: Solution[];
  }
  
  export type ProblemSet = ProblemCategory[];
      