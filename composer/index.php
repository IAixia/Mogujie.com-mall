<?php	
	include "vendor/Gregwar/Captcha/autoload.php";
	session_start();
	use Gregwar\Captcha\CaptchaBuilder;
	//use Gregwar\Captcha\CaptchaBuilder;
	$builder = new CaptchaBuilder;
	$builder->build(); 

?>

