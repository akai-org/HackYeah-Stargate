export class NetworkError extends Error {
    status;
    statusText;
    constructor(errorMessage, status, statusText) {
        super(errorMessage);
        this.status = status;
        this.statusText = statusText;
    }
}