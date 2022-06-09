const { REACT_APP_SITE_URL } = process.env;
const scope = "/api/v1";
export const apiOriginUrl = `${REACT_APP_SITE_URL}${scope}`;
