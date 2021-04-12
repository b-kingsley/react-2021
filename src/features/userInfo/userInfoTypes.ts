declare namespace UserInfo {
    export interface State {
        user: User | null;
        meta: Common.MetaState;
    }

    export interface User {
        id: number;
        name: string;
        email: string;
    }
}
