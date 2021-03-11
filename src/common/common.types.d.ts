declare namespace Common {
    export type Status = "loading" | "loaded" | "init" | "error";

    export interface MetaState {
        status: Status;
        message: string;
    }
}
