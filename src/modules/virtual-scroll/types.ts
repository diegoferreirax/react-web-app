export interface Data {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    state: string;
    action: boolean;
}

export interface ColumnData {
    dataKey: keyof Data;
    label: string;
    numeric?: boolean;
    width?: number;
    actions?: boolean;
}