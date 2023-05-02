import { Log } from "./factories";

function setAPIVersion(apiVersion: string): (propertyKey: any) => any {
  return (propertyKey: any) => {
    return class APIVersion extends propertyKey {
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
