import apiClient from 'configurations/axios/api-client';

export const _get = async <T>(method: string): Promise<T> => {
    return apiClient.get(method);
};

export const _post = async <T>(method: string): Promise<T> => {
    return apiClient.post(method);
};