import requests


class Mailing:
    base_url = 'https://api.go-mailer.com'

    def __init__(self, api_key):
        self.api_key = api_key

    def send_transactional_email(self, template_code, recipient_email, data={}, html_markup='', attachments=[], bcc=''):
        if not template_code:
            raise Exception('Template code is required.')
        elif not recipient_email:
            raise Exception('Recipient email is required')

        body = {
            'template_code': template_code,
            'recipient_email': recipient_email,
            'data': data,
            'html': html_markup,
            'attachments': attachments,
            'bcc': bcc
        }

        headers = {'Authorization': f'Bearer {self.api_key}'}

        response = requests.post(
            f"{self.base_url}/v1/transactionals", json=body, headers=headers)
        return response
