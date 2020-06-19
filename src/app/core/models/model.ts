export abstract class Model {
  constructor(input?: any) {
    this.hydrate(input);
  }

  static create<T extends Model>(this: new(input) => T, input: any | any[]) {
    if (Array.isArray(input)) {
      return input.map(item => {
        return new this(item);
      });
    }
    return new this(input);
  }

  hydrate(input: any): this {
    return Object.assign(this, input);
  }
}
