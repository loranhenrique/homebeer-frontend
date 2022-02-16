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
export function modalAnimation(): AnimationTriggerMetadata {
  return trigger('modalAnimation', [transition('* => void', [query('@*', [animateChild()], { optional: true })])]);
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function fadeInOut(): AnimationTriggerMetadata {
  return trigger('fadeInOut', [
    transition(':enter', [style({ opacity: 0 }), animate('0.4s ease-in-out')]),
    transition(':leave', [animate('0.4s ease-in-out', style({ opacity: 0 }))]),
  ]);
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function slideInOut(): AnimationTriggerMetadata {
  return trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('0.4s ease-in-out', style({ transform: 'translateY(0%)' })),
    ]),
    transition(':leave', [animate('0.4s ease-in-out', style({ transform: 'translateY(100%)' }))]),
  ]);
}
