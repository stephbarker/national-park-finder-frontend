const BASE_URL = "https://developer.nps.gov/api/v1";

// get all the starship resources
export function getParks() {
    return fetch(BASE_URL + `/parks?stateCode=CA&api_key=JWkmRC9OEJWeiiMPC4okAXHqDui0dpi8z4bGVZVb`).then(res => res.json());
}
