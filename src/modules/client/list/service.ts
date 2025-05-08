import { _get } from 'configurations/axios/requests';
import { ApiResponse } from 'configurations/axios/api-response';
import { Client } from '../models/client';

export const GetClients = async (): Promise<ApiResponse<Client[]>> => _get<Client[]>('/clients');