import { Annotations } from "./annotations"

export interface Source {
  measures: string[]
  annotations: Annotations
  name: string
  substitutions: any[]
}
