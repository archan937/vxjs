/*[name|Script Include]*/
/*[desc|Dynamically load a script]*/
/*[fn|N]*/

_.include=_.N=function(s,e){
  e=document.createElement('script');
  e.src=s;
  document.body.appendChild(e)
}

/*[summary|Dynamic loading scripts are an Ajax design pattern.]*/
/*[usage|
`_.N('vx.index.js');`
  * location: the location of the js file to load from

]*/
/*[example|
{{{
_.N('vx.index.js');
}}}
]*/
