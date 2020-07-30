import * as Chart from 'chart.js';
import {ChartOptionsExtended} from './chart-options-extended';

export interface ChartExtended extends Chart {
  config: ChartOptionsExtended;
  chart: any;
}


