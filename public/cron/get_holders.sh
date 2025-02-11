#!/bin/bash

# URL API
URL="https://gnosis.blockscout.com/api/v2/tokens/0x2f4eb11627bd3726003eb7040517dd6a9fd05187/counters"
# Файл для сохранения результата
OUTPUT_FILE="/home/coins/web/gnom.one/private/nodeapp/public/cron"

# Отправка запроса и сохранение ответа
response=$(curl -s -w "%{http_code}" -H "accept: application/json" "$URL")
http_code="${response: -3}" # Последние 3 символа — это код ответа
json_body="${response:0:${#response}-3}" # Остальная часть — тело JSON

# Проверяем HTTP-статус
if [ "$http_code" -eq 200 ]; then
    echo "$json_body" > "$OUTPUT_FILE"
    echo "Ответ успешно сохранён в файл $OUTPUT_FILE"
else
    echo "Ошибка запроса. Код статуса: $http_code"
fi
