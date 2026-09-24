// Overtime Hourly Rates per Scale and Year
const OVERTIME_RATES_BY_YEAR = {
    2026: {
        "A3": 10.72,
        "A4": 11.46,
        "A5": 12.63,
        "A5(ii)": 13.20,
        "A5(iii)": 13.48,
        "A6": 14.76,
        "A6(ii)": 15.37,
        "A7": 16.56,
        "A7(ii)": 17.22,
        "A7(iv)": 17.88,
        "A8": 18.18,
        "A8(i)": 18.53,
        "A8(ii)": 18.88,
        "A9": 21.22,
        "A9(i)": 21.65,
        "A9(ii)": 22.08,
        "A10": 23.88,
        "A10(i)": 24.36,
        "A10(ii)": 24.84,
        "A11": 27.53,
        "A11(i)": 28.01,
        "A11(ii)": 28.49,
        "A11(iii)": 28.97,
        "A12": 30.61,
        "A12(ii)": 31.84,
        "A13": 34.83,
        "A13(i)": 35.45,
        "A13(ii)": 36.06
    }
    // Future years can be added here seamlessly:
    // 2027: { "A3": 11.00, ... }
};

// Helper function to calculate gross pay
function calculateGrossPay(year, scale, hoursToPay) {
    if (!OVERTIME_RATES_BY_YEAR[year] || !OVERTIME_RATES_BY_YEAR[year][scale]) {
        return 0; // Fallback to zero if rate is unavailable for the year/scale
    }
    const rate = OVERTIME_RATES_BY_YEAR[year][scale];
    return Math.round((hoursToPay * rate) * 100) / 100;
}