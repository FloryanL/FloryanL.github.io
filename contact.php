<?php

	if(!empty($errors)) {
		header('Location: index.php');
	}else{
		$to = "floryan.lollivier@gmail.com";
		$sujet = $_POST['nom'] . ' vous a contacté via le portfolio.';
		$message = $_POST['message'];
		$header = 'From : ' . $_POST['email'];
		error_log("Envoi d'un email de ".$_POST['nom']." . ".$_POST['email']." Voici son msg:".$_POST['message']);
		mail($to, $sujet, $message, $header);
	}
	
?>