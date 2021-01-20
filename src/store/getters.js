export default {
    filterCountryByRegion: (state) => (region) => {
        return state.countryInformation.filter(country => country.region === region);
    }
}