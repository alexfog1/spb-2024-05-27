<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Path to the Composer 'vendor' folder

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;
    $mail->Username = 'watsonpsn@yandex.ru';  // SMTP username
    $mail->Password = 'DTFP0ssw0rd';  // SMTP password
    $mail->SMTPSecure = 'ssl';  // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;  // TCP port to connect to

    // Recipients
    $mail->setFrom('watsonpsn@yandex.ru', 'Mailer');
    $mail->addAddress('zhanbyrbaevalikhan@yandex.ru', 'Joe User');  // Add a recipient

    // Content
    $mail->isHTML(true);  // Set email format to HTML
    $mail->Subject = 'New Podcast Studio Booking';

    // Collect and sanitize input data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);
    $studio = htmlspecialchars($_POST['studio']);
    $microphones = htmlspecialchars($_POST['microphones']);
    $cameras = htmlspecialchars($_POST['cameras']);
    $totalCost = $studio + $microphones + $cameras;

    // Prepare email body
    $body = "<h1>New Booking</h1>";
    $body .= "<p><strong>Name:</strong> {$name}</p>";
    $body .= "<p><strong>Phone:</strong> {$phone}</p>";
    $body .= "<p><strong>Date:</strong> {$date}</p>";
    $body .= "<p><strong>Time:</strong> {$time}</p>";
    $body .= "<p><strong>Studio:</strong> {$studio}</p>";
    $body .= "<p><strong>Microphones:</strong> {$microphones}</p>";
    $body .= "<p><strong>Cameras:</strong> {$cameras}</p>";
    $body .= "<p><strong>Total Cost:</strong> {$totalCost}</p>";

    $mail->Body = $body;
    $mail->AltBody = strip_tags(str_replace("<br>", "\n", $body));

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>