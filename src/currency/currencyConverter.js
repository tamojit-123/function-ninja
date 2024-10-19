async function fetchExchangeRate(apiKey, fromCurrency, toCurrency) {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "error") {
            throw new Error(data['error-type']);
        }

        const rate = data.conversion_rates[toCurrency];
        if (!rate) {
            throw new Error(`Unable to find rate for ${toCurrency}`);
        }

        return rate;
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
    }
}

// Example usage:
/**
 * const apiKey = 'YOUR_API_KEY'; // Replace with your API key
 * fetchExchangeRate(apiKey, 'USD', 'EUR').then(rate => {
 *     console.log(`Exchange Rate: 1 USD = ${rate} EUR`);
 * });
 * @type {string}
 */


export default fetchExchangeRate;