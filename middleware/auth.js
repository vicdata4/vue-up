import fetch, { http } from "../components/utils/fetch.config";

export default async function ({ redirect, store }) {
    const response = await fetch(http.get(), "/home");
    const isLogged = Array.isArray(response);

    if (!isLogged) {
        redirect({ name: '/' });
    }
}