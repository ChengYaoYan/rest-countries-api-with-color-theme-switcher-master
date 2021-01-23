const axios = require('axios').default;

export default {
    fetchCountryInformation: ({commit}, countryName) => {
        axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(function (response) {
                const data = response.data;
                const countryInformation = [];

                for (let country of data) {
                    const {
                        flag,
                        nativeName,
                        population,
                        region,
                        subRegion,
                        capital,
                        topLevelDomain,
                        currencies,
                        languages,
                        borderCountries
                    } = country;
                    let eachCountryInformation = {
                        flag,
                        nativeName,
                        population,
                        region,
                        subRegion,
                        capital,
                        topLevelDomain,
                        currencies,
                        languages,
                        borderCountries
                    }
                    countryInformation.push(eachCountryInformation);
                }
                commit("updateCountryInformation", countryInformation);
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    changeThemeMode: ({commit}, modeCode) => {
        commit("updateThemeMode", modeCode)
    }
}