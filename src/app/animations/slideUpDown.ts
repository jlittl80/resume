import { state, style, animate, transition, query, stagger } from '@angular/animations';

export function slideUpDown(duration = 100) {
  return [
    state('true', style({ 'height': '*', 'paddingBottom': '5px' })),
    state('false', style({ 'height': '0px', 'paddingBottom': '0px' })),
    transition('* <=> *', animate(duration+'ms ease-in-out')),
  ];
}
