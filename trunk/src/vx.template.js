/*[name|Templates]*/
/*[desc|Templates]*/

_.M=function(t,d,x){for(x in d)t=t.split("{"+x+"}").join(d[x])}

/*[summary|Simple string templating]*/
/*[usage|
`_.M(string, vars);`
  * string: the string template
  * vars: an object with the variables to replace
]*/
/*[example|
var template = "hello {name}! I {verb} you! No, not really, I actually {verb2} you.";
var variables = {
  name: "Bob",
  verb: "love",
  verb: "want to kill"
}

_.M(template, variables);
//hello Bob! I love you! No, not really, I actually want to kill you.

]*/
