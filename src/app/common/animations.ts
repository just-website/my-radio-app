import { trigger, animateChild, query, animate, group, style, transition, state } from '@angular/animations';

export const AuthAnimation = (triggerName) => {
    return trigger(triggerName, [
        transition('login <=> registration', [
            style({ width: '100%', position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ opacity: '0' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('600ms ease-out', style({ opacity: '0', width: '100%' }))
                ]),
                query(':enter', [
                    animate('600ms  300ms ease-out', style({ opacity: '1' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),

    ]);
}

export const ShowHideAnimation = (triggerName) => {
    return trigger(triggerName, [
        transition(':leave', [
            style({
                height: '*',
                opacity: '1',
                marginTop: '*',
                marginBottom: '*',
                paddingTop: '*',
                paddingBottom: '*',
            }),
            animate('150ms', style({
                height: '0',
                opacity: '0',
                marginTop: '0',
                marginBottom: '0',
                paddingTop: '0',
                paddingBottom: '0',
            }))
        ]),
        transition(':enter', [
            style({
                height: '0',
                opacity: '0',
                marginTop: '0',
                marginBottom: '0',
                paddingTop: '0',
                paddingBottom: '0',
            }),
            animate('150ms', style({
                height: '*',
                opacity: '1',
                marginTop: '*',
                marginBottom: '*',
                paddingTop: '*',
                paddingBottom: '*',
            }))
        ]),
    ])
}