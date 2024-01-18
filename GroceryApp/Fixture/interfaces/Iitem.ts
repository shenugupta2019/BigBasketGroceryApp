export interface IItem {
    push(item: IItem): unknown;
    id: number;
    year: number;
    quarter: string;
    startTime: string;
    endTime: string;
    cost: number;
    totalUnits: number;
    programIds: number[];
    itemGroupId: number | null;
}