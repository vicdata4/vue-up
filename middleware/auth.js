import fetch, { http } from "/components/utils/fetch.config";

export default async function ({ redirect, store }) {
    const response = await fetch(http.get(), "/home");
    const isLogged = !response.error;

    if (!isLogged) {
        redirect({ name: '/' });
        alert('You need to be logged in');
    }
}