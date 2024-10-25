import { Source } from './source';

export interface ApiResponse<Data> {
  data: Data[];
  source: Source[];
}
