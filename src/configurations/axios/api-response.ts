export class ApiResponse<T> {
    public count: number = 0;
    public hasMore: boolean = false;
    public items: T = {} as T;
    public limit: number = 0;
    public links: any[] = [];
    public offset: number = 0;
}