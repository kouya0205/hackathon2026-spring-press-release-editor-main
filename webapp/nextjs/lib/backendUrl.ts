function normalizeAbsoluteUrl(url: string): string {
    return url.replace(/\/+$/, '');
}

function isAbsoluteHttpUrl(value: string): boolean {
    return /^https?:\/\//.test(value);
}

export function getBrowserBackendBaseUrl(): string {
    const configured = process.env.NEXT_PUBLIC_BACKEND_URL?.trim();

    if (configured) {
        if (isAbsoluteHttpUrl(configured)) {
            return normalizeAbsoluteUrl(configured);
        }

        if (configured.startsWith('/')) {
            return configured.replace(/\/+$/, '') || '/';
        }
    }

    return '/api-backend';
}

export function getServerBackendBaseUrl(): string {
    const configured =
        process.env.BACKEND_URL ??
        process.env.INTERNAL_BACKEND_URL ??
        process.env.NEXT_PUBLIC_BACKEND_URL;

    if (configured && isAbsoluteHttpUrl(configured)) {
        return normalizeAbsoluteUrl(configured);
    }

    return 'http://127.0.0.1:8080';
}