const axios = require("axios");

class Automation {
  base_url = "https://api.go-mailer.com";

  constructor(api_key) {
    this.api_key = api_key;
  }

  async triggerEvent(event_code, user_email, context = {}) {
    if (!event_code) throw new Error("Event code is required.");
    if (!user_email) throw new Error("User email is required.");
    if (!Object.keys(context).length) throw new Error("Context is required. Please provide relevant context data.");

    const body = { event_code, contact_email: user_email, context };
    const { data: response } = await axios.post(`${this.base_url}/v1/automations`, body, {
      headers: { Authorization: `Bearer ${this.api_key}` },
    });

    return response;
  }
}

module.exports = { Automation };
