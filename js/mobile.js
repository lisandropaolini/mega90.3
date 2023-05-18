//  function detectMob() {
//   return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
// }

// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// console.log(navigator.userAgent);

//if (isMobile) {
if ( ( window.innerWidth <= 800 ) || ( window.innerHeight <= 600 ) ){
 /* your code here */
  //location.href = "https://streaminglocucionar.com.ar/reproductor/streamhd2/?port=8162#megafm";

  // var content = '<object data="https://streaminglocucionar.com.ar/reproductor/streamhd2/?port=8162#megafm" width="600" height="400"><embed src="https://streaminglocucionar.com.ar/reproductor/streamhd2/?port=8162#megafm" width="600" height="400"> </embed>Error: Embedded data could not be displayed.</object>';
  // document.getElementsByTagName('body')[0].innerHTML = content;

  var Str = 
'<!DOCTYPE HTML><html><head><title>Mega 90.3 FM</title></head><body style = "text-align:center;">'+
'<object data="https://streaminglocucionar.com.ar/reproductor/streamhd2/?port=8162#megafm" width="600" height="400"><embed src="https://streaminglocucionar.com.ar/reproductor/streamhd2/?port=8162#megafm" width="600" height="400"> </embed>Error: Embedded data could not be displayed.</object>'+
                '</body>  </html>';
            $('html').html(Str);
}
