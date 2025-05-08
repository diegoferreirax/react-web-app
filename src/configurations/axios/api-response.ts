export class ApiResponse<T> {
    public result: T = {} as T;
    public errors: any[] = [];
    public warnings: any[] = [];
}