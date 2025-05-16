import apiClient from 'configurations/axios/api-client';
import { IResponseContract } from 'configurations/response-contract/type';
import { Observable } from 'rxjs';

export const _get = <T>(method: string): Observable<IResponseContract<T>> => {
    const observable: Observable<IResponseContract<T>> = new Observable(
        (subscriber) => {
            subscriber.next({ data: null, isLoading: true, error: false });
            
            apiClient.get(method)
                .then((response) => {
                    subscriber.next({ data: response.data, isLoading: false, error: false });
                    subscriber.complete();
                })
                .catch(error => {
                    console.error(error);
                    subscriber.next({ data: null, isLoading: false, error: false });
                    subscriber.complete();
                });
        });
    return observable;
};
