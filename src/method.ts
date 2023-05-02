export function Get(route: string): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    const currentRoute = "/test";

    if (route !== currentRoute) {
      originalMethod.apply();
    }

    return;
  };
}

export class HomeController {
  @Get("/")
  public static index(): void {
    console.log("HomeController@index");
  }

  @Get("/contact")
  public static contact(): void {
    console.log("HomeController@contact");
  }

  @Get("/test")
  public static test(): void {
    console.log("HomeController@test");
  }

  @Get("/test")
  public static debug(): void {
    console.log("HomeController@debug");
  }
}

// HomeController.index();
// HomeController.contact();
