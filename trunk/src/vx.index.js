/*[name|Index]*/
/*[desc|Array IndexOf]*/
/*[fn|I]*/

_.I = function(/*Value*/v,/*Array*/a  /*[USELESS VAR*/,i){
  for(i = a.length; i-- && a[i] != v;);
  return i;
}

/*[summary|Often, you need to check whether a string or object is in a specified array - something like with how strings have their indexOf property. ]*/
/*[usage|
`_.I(obj, array);`
  * obj: object to search for
  * array: the array to search in
  * Note that it only gets the first occurance and ignores the following
]*/
/*[example|
{{{
_.I("ham", ["bacon", "trees", "cows", "nuclear-pests"]);
//-1
var breakfast = ["bacon", "ham", "eggs", "javascript"]
_.I("ham", breakfast);
//1
}}}
]*/
/*[ref|based on http://snippets.dzone.com/posts/show/2437]*/
