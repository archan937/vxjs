<?php

require_once('jsmin.class.php');

$header = <<<EOT
/* vX Super Lightweight Ajax Library */
EOT;
$content = '';
foreach(glob('*.js') as $fn) {
	if($fn == 'vx.js') continue;
	$content .= "\n".file_get_contents($fn);
}
file_put_contents('vx.js',trim($header.JSMin::minify($content)));

?>
