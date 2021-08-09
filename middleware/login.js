import fetch, { http } from "/components/utils/fetch.config";

export default async function ({ redirect, store }) {
    const response = await fetch(http.get(), "/access");
    const isLogged = !response.error;

    if (isLogged) {
        store.commit('setIsLogged', true);
    }
}