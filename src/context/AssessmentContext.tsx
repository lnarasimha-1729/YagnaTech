import { createContext } from "react";

export interface Assessment {
  assessmentId: string;
  type: string;
  setId: string;
  score: number;
  timer: number;
  // add other assessment fields as needed
}

export interface QuestionSet {
  setId: string;
  setName: string;
  // add other fields as needed
}

export interface Question {
  quesId: string;
  question: string;
  // add other fields as needed
}

export interface AssessmentContextType {
  assessments: Assessment[];
  questionSets: QuestionSet[];
  questions: Question[];
  loading: boolean;
  addAssessment: (data: Partial<Assessment>) => Promise<unknown>;
}

export const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);