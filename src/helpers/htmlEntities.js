
// https://ourcodeworld.com/articles/read/188/encode-and-decode-html-entities-using-pure-javascript

export const htmlEncode = ( str = '' ) => {

  let buf = [];
  
  for ( let i = str.length - 1; i >= 0; i-- ) {
    buf.unshift( [ '&#', str[i].charCodeAt(), ';' ].join('') );
  }
  
  return buf.join('');

};

export const htmlDecode = ( str = '' ) => {
  return str.replace( /&#(\d+);/g, ( match, dec ) => {
    return String.fromCharCode(dec);
  } );
}
