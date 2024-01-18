import {IProgram} from './IProgram';

export interface ISummaryLine {
  id: number;
  name?: string;
  programs?: [IProgram];
  cost?: number;
  totalUnits: number;
  totalItems: number;
}
