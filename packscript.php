<?php

require_once('jsmin.class.php');

$header = <<<EOT
/* vX Super Lightweight Ajax Library */

EOT;

function minify($s) {
	return str_replace(';}','}',trim(JSMin::minify($s)));
}

function parsecomments($s) {
	if(!preg_match_all('/\/\*\[([^\|]+)\|([^\]]+)\]\*\//',$s,$matches,PREG_SET_ORDER)) return array();
	$ret = array();
	foreach($matches as $m) {
		$k = trim(strtolower($m[1]));
		if(!isset($ret[$k])) $ret[$k] = array();
		$ret[$k][] = trim($m[2]);
	}
	return $ret;
}

$content = '';
$lib = array();
foreach(glob('src/vx.*.js') as $fn) {
	$data = file_get_contents($fn);
	$metadata = parsecomments($data);
	$fn = explode('/',$fn,2);
	$prepared = minify($data);
	if($prepared != @file_get_contents('lib/'.$fn[1])) file_put_contents('lib/'.$fn[1],$prepared);
	$content .= "\n".$data;
	if(preg_match('/vx\.([^\.]+)\.js/',$fn[1],$m)) $lib[$m[1]] = array(
		'name'	=> @$metadata['name']?$metadata['name']:$m[1],
		'desc'	=> @$metadata['desc']?$metadata['desc']:'',
		'note'	=> @$metadata['note']?$metadata['note']:'',
		'dep'	=> @$metadata['dep']?explode(',',implode(',',$metadata['dep'])):array()
	);
}
$prepared = minify(@file_get_contents('src/vx.js'));
if($prepared != @file_get_contents('lib/vx.js')) file_put_contents('lib/vx.js',$prepared);
$prepared = trim($header.minify($prepared.$content));
if($prepared != @file_get_contents('lib/vx.all.js')) file_put_contents('lib/vx.all.js',$prepared);
$prepared = json_encode($lib);
if($prepared != @file_get_contents('modules.json')) file_put_contents('modules.json',$prepared);
?>
