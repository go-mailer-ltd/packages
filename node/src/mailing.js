const axios = require("axios");

class Mailing {
  base_url = "https://mailing.go-mailer.com";

  constructor(api_key) {
    this.api_key = api_key;
  }

  async sendTransactionalEmail({
    template_code,
    recipient_email,
    data = {},
    html_markup = "",
    bcc = "",
    attachments = [],
  }) {
    if (!template_code) throw new Error("Event code is required.");
    if (!recipient_email) throw new Error("Recipient email is required.");

    const body = { template_code, recipient_email, data, html: html_markup, bcc, attachments };
    const { data: response } = await axios.post(`${this.base_url}/api/v1/transactionals/dispatch`, body, {
      headers: { Authorization: `Bearer ${this.api_key}` },
    });

    return response;
  }
}

module.exports = { Mailing };
