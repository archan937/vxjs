<?php

require_once('jsmin.class.php');

$header = <<<EOT
/* vX Super Lightweight Ajax Library */
EOT;
$content = '';
foreach(glob('src/*.js') as $fn) {
	$data = file_get_contents($fn);
	$fn = explode('/',$fn,2);
	$prepared = trim(JSMin::minify($data));
	if($prepared != @file_get_contents('lib/'.$fn[1])) file_put_contents('lib/'.$fn[1],$prepared);
	$content .= "\n".$data;
}
$prepared = trim($header.JSMin::minify($content));
if($prepared != @file_get_contents('lib/'.$fn[1])) file_put_contents('lib/vx.js',$prepared);

?>
