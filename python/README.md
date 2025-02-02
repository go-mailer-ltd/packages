## **The Go-Mailer Python utility Package**
<hr>
The Python API utility library for the Go-Mailer marketing platform.

This package enables API transactions to the Go-Mailer servers for faster and seamless inter-application communications. It enables you to:
* Synchronize your contact data with Go-Mailer.
* Notify Go-Mailer of any events that occur on your application.
* Send out transactional emails through Go-Mailer.



### **Installation**
<hr>

The API client can be installed using PIP.

```
pip install gomailer
```

### **Basic Usage**
<hr>

#### **Synchronize contacts**
You are able seamlessly synchronize your user's data with Go-Mailer. This helper would create a new Go-Mailer contact if none exists with the specified email address OR it will update the Go-Mailer contact with the necessary data if a Go-Mailer contact exists with the specified email.

**NOTE:**
* Go-Mailer contacts are uniquely identified by their email address in order to avoid duplicate communications.
* You can store any custom attribute.  
```
  import gomailer
  
  data = {
    'firstname': 'John',
    'lastname': 'Doe,
    'last_login': '12-12-2024T12:12:12:0000Z',
    // other attributes
  }
  
  client = Client('YOUR_API_KEY')
  response = client.contacts().synchronize(<email_address>, data)
  
  if (response['status_code'] === 200) {
    // handle success
  }
 
```
You can find more information [here](https://go-mailer.com/developers/reference/contacts)


#### **Send a transactional email**
Quickly and reliably send transactional emails to your users using Go-Mailer. This helper would send a transactional email to the specified recipient.

**NOTE:**
* If no Go-Mailer contact exists for the specified email address, a new one will be created.  

```
import gomailer
  
client = Client('YOUR_API_KEY')
response = client.mailing().send_transactional_email(<template_code>, <recipient_email>, <context data>, <html markup>, <attachments>, <bcc email>)

if (response['status_code'] === 200) {
  // handle success
}
```
You can find more information [here](https://go-mailer.com/developers/reference/transactionals)



#### **Notify Go-Mailer of an event**
Notify Go-Mailer of an event that has occured on your application. This is useful to react to such events such as sending a transactional email, SMS messages etc. You need to pass the event code, the affected user's email and all other relevent context data around the event occurence.

**NOTE:**
* A new event will be created on your Go-Mailer account the event code does not exist.  

```
import gomailer

client = Client('YOUR_API_KEY')
response = client.automation().trigger_event(<event_code>, <user_email>, <context data>)

if (response['status_code'] === 200) {
  // handle success
}
```
You can find more information [here](https://go-mailer.com/developers/reference/automations)

### **License**
<hr>

MIT license. See the [LICENSE](https://github.com/printu/customerio/blob/master/LICENSE) file for more details.
