import { _get } from 'configurations/axios/requests-configurations';
import { Client } from '../models/client';
import { Observable } from 'rxjs';
import { IResponseContract } from 'configurations/response-contract/type';

export const GetClients = (): Observable<IResponseContract<Client[]>> => _get<Client[]>('/clients');
