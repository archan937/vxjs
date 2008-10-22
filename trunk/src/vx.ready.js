/*[dep|event]*/
/*[name|Document onReady]*/
/*[ref|based on http://muffinresearch.co.uk/archives/2008/02/15/does-settimeout-solve-the-domcontentloaded-problem/]*/

_.R=function(f){
  if (/(?!.*?ati|.*?kit)^moz|ope/i.test(navigator.userAgent))
    _.E(document,'DOMContentLoaded',f);
  else setTimeout(f,0)
}
