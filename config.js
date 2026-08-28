// Global Configuration for Overtime Tracker

// Allowed navigation year limits
const MIN_ALLOWED_YEAR = 2025;
const MAX_ALLOWED_YEAR = 2027;

// Fixed annual holidays defined once (MM-DD)
const FIXED_HOLIDAYS_MD = [
    "01-01",
    "01-06",
    "03-25",
    "04-01",
    "05-01",
    "08-15",
    "10-01",
    "10-28",
    "12-25",
    "12-26"
];

// Movable holidays specifically for ΓΡΑΦΕΙΑΚΟ only (YYYY-MM-DD)
const GRAFEIAKO_ONLY_HOLIDAYS = [
    "2025-06-09", //agiou pnevmatos - deftera kataklismou 2025
    "2026-06-01", //agiou pnevmatos - deftera kataklismou 2026
    "2027-06-21"  //agiou pnevmatos - deftera kataklismou 2027
];

// Movable holidays per year (YYYY-MM-DD)
const MOVABLE_HOLIDAYS = [
    // 2025
    "2025-03-03", // kathara deftera
    "2025-04-18", // megali paraskevi
    "2025-04-19", // megalo savvato
    "2025-04-20", // kiriaki tou pasxa
    "2025-04-21", // deftera tou pasxa

    // 2026
    "2026-02-23", // kathara deftera
    "2026-04-10", // megali paraskevi
    "2026-04-11", // megalo savvato
    "2026-04-12", // kiriaki tou pasxa
    "2026-04-13", // deftera tou pasxa

    // 2027
    "2027-03-15", // kathara deftera
    "2027-04-30", // megali paraskevi
    "2027-05-01", // megalo savvato
    "2027-05-02", // kiriaki tou pasxa
    "2027-05-03"  // deftera tou pasxa
];

// Automatically build full fixed holiday dates for all allowed years
const generatedFixedHolidays = [];
for (let year = MIN_ALLOWED_YEAR; year <= MAX_ALLOWED_YEAR; year++) {
    FIXED_HOLIDAYS_MD.forEach(md => {
        generatedFixedHolidays.push(`${year}-${md}`);
    });
}

// Master HOLIDAYS array used by index.html calculation logic
const HOLIDAYS = [
    ...generatedFixedHolidays,
    ...MOVABLE_HOLIDAYS,
];
