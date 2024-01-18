export interface IGroup {
    id: number;
    name: string;
    isRequired: boolean;
    itemIds: number[];
    isRead: boolean;
    isOwnGroup: boolean;
}
