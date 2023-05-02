import { Log } from "./factories";

function setAPIVersion(apiVersion: string): (constructor: any) => any {
  return (constructor: any) => {
    return class APIVersion extends constructor {
      public version: string = apiVersion;
    };
  };
}

@Log("info", "API instanced successfully")
@setAPIVersion("v1.0.1")
export class API {}

@Log("info", "API instanced successfully")
@setAPIVersion("v2.1.4")
export class Webhook {}

console.log(new API());
console.log(new Webhook());
