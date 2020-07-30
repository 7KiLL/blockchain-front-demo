import {ChartConfiguration} from 'chart.js';

export interface ChartOptionsExtended  extends ChartConfiguration {
  centerText?: {
    display?: boolean;
    text?: string;
  };
}
