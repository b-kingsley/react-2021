import * as React from "react";

type Props = {
    test: Common.Status;
};

export const Switch: React.FC<Props> = ({ test, children }) => {
    if (!children) return <></>;

    let child;

    if (!Array.isArray(children)) {
        child = children;
    } else {
        child = (children as any).find((child: any) => {
            return (child as any).props.value === test;
        });
    }

    return child ?? <></>;
};
