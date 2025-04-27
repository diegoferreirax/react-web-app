import { _get } from 'configurations/axios/requests';
import { Client } from '../client';

export const GetClients = async (): Promise<Client[]> => _get<Client[]>('/clients');