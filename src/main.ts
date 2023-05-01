export function Log(target: unknown) {
  console.log(target);
}

@Log
export class Example {}
