import apiClient from 'configurations/axios/api-client';
import { ApiResponse } from './api-response';

export const _get = async <T>(method: string): Promise<ApiResponse<T>> => {
    return apiClient.get(method);
};

export const _post = async <T>(method: string, data: any): Promise<ApiResponse<T>> => {
    return apiClient.post(method, data);
};