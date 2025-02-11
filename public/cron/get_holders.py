#!/usr/bin/env python3
import requests

url = "https://gnosis.blockscout.com/api/v2/tokens/0x2f4eb11627bd3726003eb7040517dd6a9fd05187/counters"
headers = {"accept": "application/json"}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    with open("/home/coins/web/gnom.one/public_html/cron/holders.json", "w", encoding="utf-8") as f:
        f.write(response.text)
    print("Ответ успешно сохранён в файл holders.json")
else:
    print(f"Ошибка запроса. Код статуса: {response.status_code}")