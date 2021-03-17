declare namespace Common {
    export type Status = "loading" | "loaded" | "init" | "error" | "cancelled";
    export interface MetaState {
        status: Status;
        message: string;
        lastUpdated?: number;
    }
}
