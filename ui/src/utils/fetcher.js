import {STORAGE_CREDENTIALS} from "./constants.js";
import {NetworkError} from "./errors.js";


export async function fetcher(url, customConfiguration = { public: false, returnVoid: false }) {
    const baseHeaders = {
        'Content-Type': 'application/json',
    };

    const credentials = localStorage.getItem(STORAGE_CREDENTIALS);
    if (credentials && !customConfiguration.public) {
        baseHeaders.Authorization = `Basic ${credentials}`;
    }

    const { headers, ...customConfig } = customConfiguration;
    const configuration = {
        method: customConfig.body ? 'POST' : 'GET',
        headers: { ...baseHeaders, ...headers },
        ...customConfig,
        body: customConfig.body ? JSON.stringify(customConfiguration.body) : undefined,
    };

    const response = await fetch(url, configuration);
    if (response.ok && response.headers.get('Content-Type') === 'application/json') {
        return (await response.json());
    } else if (response.ok) {
        return (await response.text());
    } else {
        const errorMessage = await response.text();
        throw new NetworkError(errorMessage, response.status, response.statusText);
    }
}