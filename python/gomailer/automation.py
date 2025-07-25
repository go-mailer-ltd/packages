import requests


class Automation:
    base_url = 'https://api.go-mailer.com'

    def __init__(self, api_key):
        self.api_key = api_key

    def trigger_event(self, event_code, contact_email, context={}):
        if not event_code:
            raise Exception('Event code is required.')
        elif not contact_email:
            raise Exception('Contact email is not required.')
        elif not bool(context):
            raise Exception('No context data provided.')

        body = {
            'event_code': event_code,
            'contact_email': contact_email,
            'context': context
        }
        headers = {'Authorization': f'Bearer {self.api_key}'}

        response = requests.post(
            f"{self.base_url}/v1/automations'", json=body, headers=headers)
        return response
