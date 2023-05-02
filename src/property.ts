export function MinLength(length: number): any {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`${key} must be greater than ${length}`);
      }

      val = value;
    };

    Object.defineProperty(target, key, {
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
