import { Annotation } from './annotation';

export interface Source {
  measures: string[];
  annotations: Annotation;
  name: string;
  substitutions: unknown[];
}
