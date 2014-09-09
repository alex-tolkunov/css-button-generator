<?php

    if($_POST) {
    require("lib/mail/PHPMailerAutoload.php");
    require 'lib/mail/class.smtp.php';

    $mail = new PHPMailer();

    $mail->IsSMTP();
    $mail->Host       = "smtp.yandex.ru";
    $mail->SMTPAuth   = true;
    $mail->SMTPSecure = "ssl";
    $mail->Port       = 465;
    $mail->Charset    = "UTF-8";
    $mail->Username   = "AlexDefay@yandex.ru";
    $mail->Password   = "54xadluc65754535";
    $mail->From       = "AlexDefay@yandex.ru";
    $mail->FromName   = "CSS Button";
    $email = $_POST['email'] ; 
    $html = trim(htmlspecialchars($_POST['htmlcode'])) ;
    $css = trim(htmlspecialchars($_POST['csscode'])) ;
    $mail->AddAddress($email);
    $mail->Subject    = 'CSS3 Button';
    $mail->MsgHTML('You code button:</br>HTML:</br>'.$html.'<br /> CSS</br>'.$css);
    $mail->isHTML(true); 
    
    
    
    if(!$mail->Send()) {
      echo 'Message was not sent.';
      echo 'Mailer error: ' . $mail->ErrorInfo;
    } else {
      echo 'OK';
    };
};

?>