import { Contact } from "./contacts";
import { Automation } from "./automation";
import { Mailing } from "./mailing";

export class Client {
  constructor(api_key) {
    this.api_key = api_key;
  }

  automation() {
    return new Automation(this.api_key);
  }

  contacts() {
    return new Contact(this.api_key);
  }

  mailing() {
    return new Mailing(this.api_key);
  }
}
