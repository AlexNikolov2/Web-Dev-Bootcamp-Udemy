import { getCountries } from "../services/gameService";

export const getTotalCountries = async () => {
    const countries = await getCountries();
    return countries.length;
}