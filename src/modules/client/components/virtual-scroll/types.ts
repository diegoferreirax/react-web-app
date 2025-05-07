import { Client } from "modules/client/client";

export interface ColumnData {
    dataKey: keyof Client;
    label: string;
    numeric?: boolean;
    width?: number;
    actions?: boolean;
};

export const columns: ColumnData[] = [
    {
        width: 100,
        label: 'First Name',
        dataKey: 'name',
    },
    {
        width: 100,
        label: 'Last Name',
        dataKey: 'surname',
    },
    {
        width: 50,
        label: 'Age',
        dataKey: 'age',
        numeric: true,
    },
];