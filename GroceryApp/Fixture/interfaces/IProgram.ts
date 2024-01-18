export interface IProgram {
    push(program: IProgram): unknown;
    id: number;
    name: string;
}    