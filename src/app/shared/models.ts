export interface Action {
    title: string;
    document: string;
    operationType: string;
    url: string;
}

export interface Task {
    id?: string;
    createdBy: string;
    userAssignedTo: string;
    description: string;
    title: string;
    status: string;
    actions: Action[];
}
