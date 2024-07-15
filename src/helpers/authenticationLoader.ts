import { redirect } from "react-router-dom"

export type AuthenticationLoader = {
    pathRedirect: string,
    requiredAuthentication: boolean
}

export default ({
    pathRedirect,
    requiredAuthentication
}: AuthenticationLoader) => {

    const userAuthorized = Boolean(localStorage.getItem('key'));

     // auth is required and the user is not authorized
    if (requiredAuthentication && !userAuthorized) {
        return redirect(pathRedirect);
    }

    // auth is not required, but the user is authorized
    if (!requiredAuthentication && !!pathRedirect && userAuthorized) {
        return redirect(pathRedirect);
    }

    return null;
}