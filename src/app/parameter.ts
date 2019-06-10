export const baseURL = 'http://35.200.221.45:8000/';

// Get ApiURL
export function GetApiurl(path: string) {
    return baseURL + path;
}
