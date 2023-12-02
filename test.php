<?php
$blocks = explode(',', $_GET['blocks']); ?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Основы WEB-технологий</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div class="page">
        <?php foreach ($blocks as $block) {
            if (!$block) continue;
            echo file_get_contents(__DIR__ . '/areas/' . $block . '.tpl');
        } ?>

        <div class="popup">
            <div class="popup__container">
                <div class="popup__content"></div>
                <button class="popup__close">✖</button>
            </div>
        </div>
    </div>
</body>