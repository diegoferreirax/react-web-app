export type IResponseContract<T> = {
    isLoading: boolean;
    data: T | null;
    error: boolean;
};