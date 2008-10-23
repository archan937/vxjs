/*[dep|event]*/
/*[name|Ready]*/
/*[desc|Document onReady]*/

_.R=function(f){
  /(?!.*?ati|.*?kit)^moz|ope/i.test(navigator.userAgent)?
    _.E(document,'DOMContentLoaded',f):
    setTimeout(f,0)
}

/*[summary| Many people use Window.onLoad to execute their scripts after the page has loaded. But, there is only 1 window.onload function you can set, and it happens after the images and etc are loaded. Document onReady allows you to execute javascript immediately when the document is ready for manipulation, before images are loaded and you can use it with multiple functions.]*/
/*[usage|
`_.R(function);`
  * function: A javascript function to execute after the DOM is ready for manipulation
]*/
/*[example|

]*/
/*[ref|based on http://muffinresearch.co.uk/archives/2008/02/15/does-settimeout-solve-the-domcontentloaded-problem/]*/
