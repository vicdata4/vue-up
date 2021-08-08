import fetch, { http } from "../components/utils/fetch.config";

export default async function ({ redirect, store }) {
    const response = await fetch(http.get(), "/home");

    if (!Array.isArray(response)) {
        redirect({ name: '/' });
    }
}