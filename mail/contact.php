<?php
if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo "Please fill out all required fields and provide a valid email address.";
  exit;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = "info@example.com" // replace this email id where you want to get update of new registration
$subject = "$m_subject: $name";
$body = "You have received a new message from your website contact form.\n\n".
        "Here are the details:\n\nName: $name\n\nEmail: $email\n\nSubject: $m_subject\n\nMessage:\n$message";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

if(mail($to, $subject, $body, $headers)) {
  http_response_code(200);
  echo "Thank you! Your message has been sent.";
} else {
  http_response_code(500);
  echo "Oops! Something went wrong and we couldn't send your message.";
}
?>
