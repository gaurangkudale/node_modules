import { switchMap as higherOrderSwitchMap } from 'rxjs/operators';
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
export function switchMap(project) {
    return higherOrderSwitchMap(project)(this);
}
//# sourceMappingURL=switchMap.js.map