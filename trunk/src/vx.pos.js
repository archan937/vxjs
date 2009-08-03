/*[name|Position]*/
/*[desc|Element Position]*/
/*[fn|P]*/
/*[ref|http://www.quirksmode.org/js/findpos.html]*/

_.position=_.P=function(e,a){
  a={l:0,t:0,w:e.offsetWidth,h:e.offsetHeight};
  do{
    a.l += e.offsetLeft;
    a.t += e.offsetTop
  }while(o=o.offsetParent)return a
}


/*[summary|Sometimes it's important to get the location and size of an element.]*/

/*[usage|
`_.P(element);`
  * element: the HTML element to get
  * returns object with l, t, w and h.
]*/

/*[example|
{{{
var pos = _.P(_.G("el"));
alert("Width: "+pos.w);
alert("Height:"+pos.h);
alert("Top:"+pos.t);
alert("Left:"+pos.l);
}}}
]*/

