/*[dep|short]*/
/*[name|Script Include]*/
/*[desc|Dynamically load a script]*/
/*[fn|N]*/

_.include=_.N=function(s,e){
  e=_.d.createElement('script');
  e.src=s;
  _.d.body.appendChild(e)
}

/*[summary|Dynamic loading scripts are an Ajax design pattern.]*/
/*[usage|
`_.N('vx.index.js');`
  * location: the location of the js file to load from
  * Note: it can be across a different domain.
]*/
/*[example|
{{{
_.N('vx.index.js');
}}}
]*/
