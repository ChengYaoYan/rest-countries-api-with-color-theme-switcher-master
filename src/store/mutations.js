export default {
    updateCountryInformation: (state, countryInformation) => {
        state.countryInformation = countryInformation;
    },
    updateThemeMode: (state, modeCode) => {
        state.themeMode = modeCode;
    }

}