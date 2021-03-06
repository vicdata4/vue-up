import fetch, { http } from "/components/utils/fetch.config";

export default async function ({ redirect, store }) {
    const response = await fetch(http.get(), "/access");
    const isLogged = !response.error;

    if (!isLogged) {
        redirect({ name: '/' });
        alert('You need to be logged in');
    } else {
        store.commit('setIsLogged', true);
    }
}