/*[name|Namespacing]*/
/*[desc|Namespace Generation]*/
/*[fn|N]*/

_.ns=_.N = function(n,p,r){
  p = n.split('.');
  r = window;
  for(i in p){
    if(!r[p[i]]) r[p[i]]={};
    r = r[p[i]]
  }return r
}

/*[summary|Generate long namespaces (objects) chained together somehow.]*/
/*[usage|
`_.N(namespace string);`
  * namespace: a string with names split by periods
]*/
/*[example|
_.N('com.vxjs.beta.application.longname.library.core') = 42;
com.vx.beta.applciation.longname.library.core
//42
]*/
