<?php

require_once('jsmin.class.php');

$header = <<<EOT
/* vX Super Lightweight Ajax Library */
EOT;
$content = '';
foreach(glob('src/*.js') as $fn) {
	$data = file_get_contents($fn);
	$fn = explode('/',$fn,2);
	file_put_contents('lib/'.$fn[1],trim(JSMin::minify($data)));
	$content .= "\n".$data;
}
file_put_contents('lib/vx.js',trim($header.JSMin::minify($content)));

?>
