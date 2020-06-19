import {pipe} from 'rxjs';
import {Model} from '../models/model';
import {map} from 'rxjs/operators';

export const hydrate = <T extends Model>(model: new (source) => T) =>
  pipe(
    map((data: any) => new model(data))
  );
