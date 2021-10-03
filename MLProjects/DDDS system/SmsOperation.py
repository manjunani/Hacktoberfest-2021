from twilio.rest import Client
def sms_thread(y):
    print("sending sms")
    account_sid = "AC832f36d3b92c1f07cd05b5eb1ec4aff4"
    auth_token = "5286426be6bab9e009acfc8bb73867bf"
    client = Client(account_sid, auth_token)
    message = client.messages \
                .create(
                     body="Your Driver is drowsy",
                     from_='+15138663014',
                     to='+923319839543'
                 )
    print("sms sent")
    y=0
