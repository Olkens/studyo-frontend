export type ID = string;

export interface Column {
    id: ID;
    title: string;
    tasks: Task[]
}

export interface TaskGroup {
    title: string;
}

export interface Task {
    id?: ID;
    title?: string;
    createdAt?: Date;
    dueDate?: Date;
}