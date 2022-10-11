/**
 * Theme values for transitions, durations and delays, etc. 
 * Anything pertaining to movement or change.
 * 
 * Sourced from https://skapa.ikea.net/foundations/motion-tokens
 */

 export default {
    easings: {
      easy: 'cubic-bezier(0.4, 0.0, 0.4, 1.0)',
      expressive: 'cubic-bezier(0.8, 0.0, 0.0, 1.0)',
      enter: 'cubic-bezier(0.0, 0.0, 0.1, 1.0)',
      exit: 'cubic-bezier(0.9, 0.0, 1.0, 1.0)',
      bob: 'cubic-bezier(0.45, 1.45, 0.65, 1.0)',
      linear: 'cubic-bezier(0, 0, 1, 1)'
    },
  
    durations: {
      instant: '0ms',
      quick: '100ms',
      standard: '200ms',
      slow: '250ms'
    },
  
    iconDurations: {
      simple: '150ms',
      average: '300ms',
      complex: '600ms'
    },
  
    delays: {
      tight: '33ms',
      standard: '100ms',
      emphasised: '150ms'
    }
};