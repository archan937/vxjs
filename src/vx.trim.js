/*[name|Trim String]*/
/*[desc|Remove leading and ending whitespace]*/
/*[fn|TM]*/

_.trim = _.TM = function(t){
  return t.replace(/^\s+|\s+$/g,'')
}

/*[summary|Remove leading and ending whitespace]*/
/*[usage|
`_.TM(string);`
  * string: a block of text
]*/
/*[example|
{{{
_.trim("   i am a blob of     text       ")
//i am a blob of     text
}}}
]*/
