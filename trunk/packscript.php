<?php

require_once('jsmin.class.php');

$header = <<<EOT
/* vX Super Lightweight Ajax Library */

EOT;

function minify($s) {
	return str_replace(';}','}',trim(JSMin::minify($s)));
}

$content = '';
foreach(glob('src/vx.*.js') as $fn) {
	$data = file_get_contents($fn);
	$fn = explode('/',$fn,2);
	$prepared = minify($data);
	if($prepared != @file_get_contents('lib/'.$fn[1])) file_put_contents('lib/'.$fn[1],$prepared);
	$content .= "\n".$data;
}
$prepared = minify(@file_get_contents('src/vx.js'));
if($prepared != @file_get_contents('lib/vx.js')) file_put_contents('lib/vx.js',$prepared);
$prepared = trim($header.minify($prepared.$content));
if($prepared != @file_get_contents('lib/vx.all.js')) file_put_contents('lib/vx.all.js',$prepared);

?>
