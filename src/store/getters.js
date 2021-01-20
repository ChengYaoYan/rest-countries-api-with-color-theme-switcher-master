export default {
    filterCountryByRegion: (state) => (region) => {
        return state.countryInformation.filter(country => country.region === region);
    },
    getCountryByName: (state) => (name) => {
        return state.countryInformation.find(country => country.nativeName === name);
    }
}