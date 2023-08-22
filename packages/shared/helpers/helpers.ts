export function assertUnreachable(_: never): never {
    throw new Error('Enum not valid');
}

export const getDownloadOrigin =
    import.meta.env?.REACT_APP_MERCHANT_ENVIRONMENT === 'development'
        ? import.meta.env?.REACT_APP_BNPL_API_BASE_URL
        : '';


export const posthogEnabled = () => {
    return (
        import.meta.env.REACT_APP_POSTHOG_API_HOST &&
        import.meta.env.REACT_APP_POSTHOG_PROJECT_KEY &&
        !isDevelopment()
    );
};

export const isDevelopment = () => {
    return (
        import.meta.env.REACT_APP_MERCHANT_ENVIRONMENT === 'development' ||
        import.meta.env.REACT_APP_BUYER_ENVIRONMENT === 'development' ||
        import.meta.env.REACT_APP_ENV === 'dev-hosted-checkout'
    );
};

export const con = () => {
    console.log('test');
}

export const getDisplayableValue = (text: string) => {
    if (!text?.length) return '';

    return text
        .toLowerCase()
        .replace(/[_-]/g, ' ')
        .replace(/(?: |\b)(\w)/g, function (key) {
            return key;
        });
};
