import requests
import json
import time

lastTimeContext = 0

# def getContext():
#     # Get unix time
#     global timeContext
#     timeContext = int(time.time())
#     timeSinceLastContext = timeContext - lastTimeContext
#     # If it has been more than 30 minutes since the last context, update context
#     if timeSinceLastContext > 1800:
#         response = requests.get("https://api.newscatcherapi.com/v2/latest_headlines?when=48h&countries=US,UK&lang=en&ranked_only=True&page_size=50&page=1", headers={"x-api-key": "x-fEjcp4mvSoQCdSfsMoZCp7msKCnFDzh6Wh37HQmyY"})
#         if response.status_code == 200:
#             # Get articles
#             articles = response.json()["articles"]
#             # Keep titles only
#             titles = ["News Headlines from the past 48 hours:"]
#             for article in articles:
#                 titles.append(article["title"])
#             # Join titles into one string with new line separators
#             context = "\n".join(titles)
#         else:
#             # Print error code
#             print(response.status_code)
#             context = "error getting context"
#     else:
#         context = "error getting context"
#     return context


def prompt(text, user_id):
    response = requests.post("https://api.carterlabs.ai/chat", headers={
        "Content-Type": "application/json"
    }, data=json.dumps({
        "text": text,
        "key": "457771a6-17e8-4ae7-873e-6d46b42c31fe",
        "user_id": user_id, # THIS CAN BE ANYTHING YOU WANT!
        "speak": False, # DEFAULT FALSE | FOR VOICE OUTPUT
    }))

    return response.json()["response"]
