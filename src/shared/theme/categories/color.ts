/**
 * IKEA system and brand colors.
 * Expand with new colors as needed (under "custom colors").
 * 
 * System colors sourced from https://skapa.ikea.net/foundations/colour/system-colours
 * Brand colors sourced from https://skapa.ikea.net/foundations/colour/ikea-brand-colours
 */

 const white = '#FFFFFF';
 const grey100 = '#F5F5F5';
 const grey200 = '#DFDFDF';
 const grey300 = '#CCCCCC';
 const grey500 = '#929292';
 const grey600 = '#767676'; // NOTE, 600 is not described in SKAPA specification, but it was used as a text color. Therefore added here
 const grey700 = '#484848';
 const grey900 = '#111111';
 
 const blue = '#0058A3';
 const yellow = '#FFDB00';
 
 export default {
   colors: {
     // System colors
     white,
     grey100,
     grey200,
     grey300,
     grey500,
     grey600,
     grey700,
     grey900,
 
     textDefault: grey700,
     textLightest: grey600,
     textDark: grey900,
     textInverse: white,
 
     bgDefault: white,
     bgAccent: blue,
     bgAlternative: grey100,
     bgInverse: grey900,
 
     border: grey500,
     borderLight: grey200,
     borderDark: grey900,
     borderInverse: white,
 
     iconDefault: white,
     iconLight: grey500,
     iconFavourite: '#E00751',
     iconInverse: white,
 
     backdropLight: '#00000038',
     backdropDark: '#000000B3',
 
     disabledUi: grey200,
 
     // Brand colors
     blue,
     yellow,
 
     primaryAccent: blue,
     primaryAccentDark: '#004F93',
     primaryAccentDarkest: '#003E72',
     
     // Custom colors
     green500: '#0A8A00',
     success: '#45CB5E',
     whiteSmoke: '#F6F5F5',
     caution: '#FFA524',
     error: '#F72E41'
   }
 };