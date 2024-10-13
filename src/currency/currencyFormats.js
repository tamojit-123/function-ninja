//Basic Currency Formatting Function
function formatCurrency(value, locale = 'en-US', currency = 'USD') {
    return new Intl.NumberFormat(locale, {style: 'currency', currency: currency}).format(value);
}

// Example usage:
console.log(formatCurrency(1234.56));  // Output: $1,234.56 (for en-US)
console.log(formatCurrency(1234.56, 'de-DE', 'EUR'));  // Output: 1.234,56 € (for Germany, Euro)

//Currency Formatting Function with Optional Decimals
function formatCurrencyWithDecimals(value, locale = 'en-US', currency = 'USD', decimals = 2) {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value);
}

// Example usage:
console.log(formatCurrencyWithDecimals(1234.567, 'en-US', 'USD', 3));  // Output: $1,234.567
console.log(formatCurrencyWithDecimals(1234.5, 'ja-JP', 'JPY', 0));    // Output: ¥1,235 (no decimals for Japanese Yen)

//Currency Formatting for Multiple Locales
function formatCurrencyAutoLocale(value, currency = 'USD', decimals = 2) {
    const userLocale = navigator.language || 'en-US';  // Detect user's browser locale
    return new Intl.NumberFormat(userLocale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value);
}

// Example usage:
console.log(formatCurrencyAutoLocale(1500.50, 'GBP'));  // Output will vary based on the user's locale

export {formatCurrencyAutoLocale, formatCurrencyWithDecimals, formatCurrency};
