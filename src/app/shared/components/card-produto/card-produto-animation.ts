/* eslint-disable prefer-arrow-functions/prefer-arrow-functions */
import {
  trigger,
  animateChild,
  transition,
  query,
  AnimationTriggerMetadata,
  style,
  animate,
} from '@angular/animations';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function cardAnimation(): AnimationTriggerMetadata {
  return trigger('cardAnimation', [transition('* => void', [query('@*', [animateChild()], { optional: true })])]);
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function slideInOut(): AnimationTriggerMetadata {
  return trigger('slideInOut', [
    transition(':leave', [animate('0.4s ease-in-out', style({ transform: 'translateX(100%)' }))]),
  ]);
}
