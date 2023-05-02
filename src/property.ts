export function MinLength(length: number): any {
  return (target: any, propertyKey: string) => {
    let val = target[propertyKey];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`${propertyKey} must be greater than ${length}`);
      }

      val = value;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

export class Category {
  @MinLength(5)
  private title: string;

  constructor(title: string) {
    this.title = title;
  }
}

new Category("mobile");
new Category("ti");
