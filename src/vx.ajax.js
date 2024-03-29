/*[name|Ajax]*/
/*[desc|AJAX Query]*/
/*[fn|X]*/

_.ajax=_.X=function(u,f,d,x){
  x=new(window.ActiveXObject||XMLHttpRequest)('Microsoft.XMLHTTP')//if there's the MS XHR, use it, else use stnadards
  x.open(d?'POST':'GET',u,1); //switch between post and get
  x.setRequestHeader('Content-type','application/x-www-form-urlencoded'); //for post.
  x.onreadystatechange = function(){
    x.readyState>3&&f&&f(x.responseText,x)
  };
  x.send(d)
}

/*[summary|AJAX is a staple of the "Web 2.0" world. vX provides an extremely lightweight module to perform simple asynchronous GET/POST requests.]*/

/*[usage|
`_.X(url,callback[,query]);`
  * url: the URL to query
  * callback: function that is called when the query returns
  * query: query string, sets POST mode when specified
]*/

/*[example|
{{{
// perform a GET request
_.X("ajax.php?you=suck&howmuch=alot",function(response){alert(response);})

// perform a POST request
_.X("ajax.php",function(response){alert(response)},"you=suck&howmuch=alot")
}}}
]*/
