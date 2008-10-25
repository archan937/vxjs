<?php

require_once('jsmin.class.php');

$header = "";

function minify($s) {
	return str_replace(';}','}',trim(JSMin::minify($s)));
}

function parsemeta($s) {
	if(!preg_match_all('/\/\*\[([^\|]+)\|(.*?)\]\*\//s',$s,$matches,PREG_SET_ORDER)) return array();
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
$doc = '';
foreach(glob('src/vx.*.js') as $fn) {
	$data = file_get_contents($fn);
	$metadata = parsemeta($data);
	$fn = explode('/',$fn,2);
	$prepared = minify($data);
	if($prepared != @file_get_contents('lib/'.$fn[1])) file_put_contents('lib/'.$fn[1],$prepared);
	$content .= "\n".$data;
	$modname = substr($fn[1],3,strlen($fn[1])-6);
	$lib[$modname] = array(
		'name'	=> @$metadata['name'][0]?$metadata['name'][0]:$modname,
		'desc'	=> @$metadata['desc']?implode('. ',$metadata['desc']):'',
		'note'	=> @$metadata['note']?implode('. ',$metadata['note']):'',
		'dep'	=> @$metadata['dep']?explode(',',implode(',',$metadata['dep'])):array()
	);
	$doc .= '== '.trim(@$metadata['name'][0]?$metadata['name'][0]:$modname).': '.trim(@$metadata['desc']?implode("\n",$metadata['desc']):'').' =='."\n".trim(@$metadata['summary']?implode("\n",$metadata['summary']):'')."\n".'=== Usage ==='."\n".trim(@$metadata['usage']?implode("\n",$metadata['usage']):'')."\n".'=== Example ==='."\n".trim(@$metadata['example']?implode("\n",$metadata['example']):'')."\n\n";
}
$prepared = minify(@file_get_contents('src/vx.js'));
if($prepared != @file_get_contents('lib/vx.js')) file_put_contents('lib/vx.js',$prepared);
$prepared = trim($header.minify($prepared.$content));
if($prepared != @file_get_contents('lib/vx.all.js')) file_put_contents('lib/vx.all.js',$prepared);
$prepared = json_encode($lib);
if($prepared != @file_get_contents('modules.json')) file_put_contents('modules.json',$prepared);
$prepared = trim($doc);
if($prepared != @file_get_contents('doc.wiki')) file_put_contents('doc.wiki',$prepared);
?>
