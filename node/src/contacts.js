const axios = require("axios");

class Contact {
  base_url = "https://api.go-mailer.com";

  constructor(api_key) {
    this.api_key = api_key;
  }

  async synchronize(email, data = {}) {
    if (!email) throw new Error("User email is required.");
    if (!Object.keys(data).length) throw new Error("User data is empty.");

    const body = { ...data, email };
    const { data: response } = await axios.post(`${this.base_url}/v1/contacts`, body, {
      headers: { Authorization: `Bearer ${this.api_key}` },
    });

    return response;
  }
}

module.exports = { Contact };
