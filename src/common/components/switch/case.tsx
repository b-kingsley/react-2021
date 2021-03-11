import * as React from "react";

type Props = {
    value: Common.Status;
};

//@ts-ignore
export const Case: React.FC<Props> = ({ children }) => {
    return children ?? <></>;
};
