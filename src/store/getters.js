export default {
    filterCountryByRegion: (state) => (region) => {
        return state.countryInformation.find(country => country.region === region);
    }
}