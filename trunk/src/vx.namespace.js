/*[name|Namespacing]*/
/*[desc|Namespace Generation]*/
/*[fn|N]*/

_.N = function(n,p,r){
  p = n.split('.');
  r = window;
  for(i in p){
    if(!r[p[i]]) r[p[i]]={};
    r = r[p[i]]
  }return r
}

/*[summary|]*/
/*[usage|

]*/
/*[example|

]*/
