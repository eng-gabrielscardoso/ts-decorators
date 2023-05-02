function Log(type: "error" | "warning" | "info", message: string): (target: unknown) => void {
  return (target: unknown) => {
    console.log(`[${type.toUpperCase()}] - ${message}`);
  };
}

@Log("error", "my error message beautiful")
export class Example {}
