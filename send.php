<?php
session_start();
if (!isset($_SESSION['send'])) $_SESSION['send'] = 0;
if ($_SESSION['send'] == 1) return;
$subject = "Вам письмо с сайта";

$name = trim($_POST['name']); 
$email = trim($_POST['email']); 
$city = trim($_POST['city']); 
$status = trim($_POST['status']);

$to = $email;

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= 'From: Test <example@example.ru>\r\n';

$body = "Имя: " . $name . "\n";
$body .= "Email: ". $email . "\n";
if ($city) $body .= "Город: " . $city . "\n";
if ($status) $body .= "Статус: " . $status . "\n";


if(mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else { 
    echo json_encode(['success' => false]);
}

$_SESSION['send'] += 1;