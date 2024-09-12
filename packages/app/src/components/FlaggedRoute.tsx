import React, {ReactElement, ReactNode} from 'react'
import {useFlags} from 'launchdarkly-react-client-sdk'
import {useApp} from '@backstage/core-plugin-api'

export enum LaunchDarklyFlag {
    showTechStack = 'showTechStack'
}

export type FlaggedRouteProps = (
    | {
    flag: LaunchDarklyFlag;
}
    ) & {
    /**
     * The error page to be displayed if the user is not allowed access.
     *
     * Defaults to the `NotFoundErrorPage` app component.
     */
    errorPage?: ReactNode;
    children: ReactNode;
};

export function FlaggedRoute(
    props: FlaggedRouteProps,
): ReactElement | null {
    const flags = useFlags();
    const app = useApp();
    if (flags?.[props.flag] === true) {
        return <>{props.children}</>;
    }
    // If no explicit error element is provided, the not found page is used as fallback.
    const { NotFoundErrorPage } = app.getComponents();
    return <NotFoundErrorPage />;
}
