<?php

// URL API
$url = "https://gnosis.blockscout.com/api/v2/tokens/0x2f4eb11627bd3726003eb7040517dd6a9fd05187/counters";

// Инициализация cURL
$ch = curl_init();

// Настройки cURL
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/json"
]);

// Выполнение запроса
$response = curl_exec($ch);

// Проверка на ошибки
if (curl_errno($ch)) {
    echo "Ошибка запроса: " . curl_error($ch);
} else {
    // Декодируем JSON-ответ
    $data = json_decode($response, true);

    // Запись в файл result.json
    file_put_contents("result.json", json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    echo "Данные успешно сохранены в result.json";
}

// Закрытие cURL-сессии
curl_close($ch);
?>
