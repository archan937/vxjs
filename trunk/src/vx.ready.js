/*[dep|event]*/
/*[name|Document onReady]*/

_.R=function(f){
  /(?!.*?ati|.*?kit)^moz|ope/i.test(navigator.userAgent)?
    _.E(document,'DOMContentLoaded',f):
    setTimeout(f,0)
}

/*[desc|]*/
/*[summary|]*/
/*[usage|

]*/
/*[example|

]*/
/*[ref|based on http://muffinresearch.co.uk/archives/2008/02/15/does-settimeout-solve-the-domcontentloaded-problem/]*/
