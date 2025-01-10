import { Contact } from "./contacts";
import { Automation } from "./automation";
import { Mailing } from "./mailing";

class Client {
  automation() {
    return new Automation(this.api_key);
  }

  contacts() {
    return new Contact(this.api_key);
  }

  mailing() {
    return new Mailing(this.api_key);
  }

  setAPIKey(api_key) {
    this.api_key = api_key;
  }
}

export const GMClient = Object.freeze(new Client());
