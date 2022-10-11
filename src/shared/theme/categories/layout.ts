/**
 * Theme properties for padding, margins, responsiveness, etc.
 * 
 * "mediaQueries" exist as util object. May be used like
 *    const styledComponent = styled.div`
 *      ${props => props.theme.mediaQueries[0]} {
 *        // your css properties
 *      }
 *    `
 * 
 * Sourced from https://skapa.ikea.net/foundations/layout-and-spacing/spacing
 */

 const breakpoints = [ '600px', '900px', '1200px', '1600px' ];

 const mediaQueries = breakpoints.reduce(
   (acc, breakpoint, index) => {
     acc[index] = `@media screen and (min-width: ${breakpoint})`;
     return acc;
   },
   {} as Record<number, string>
 );
 
 export default {
   space: [
     0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 88, 120, 160, 216
   ].map(value => `${value}px`), // Makes sure values are treated as pixels and not em/rem values
   breakpoints,
   mediaQueries
};
 