/**
 * Date and Julian day calculation utilities for Solar Position Algorithm
 */
export interface DateTimeComponents {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
}
/**
 * Calculate Julian Day from calendar date and time
 * @param year - 4-digit year
 * @param month - Month (1-12)
 * @param day - Day of month (1-31)
 * @param hour - Hour (0-24)
 * @param minute - Minute (0-59)
 * @param second - Second (0-59.999...)
 * @param deltaUt1 - Fractional second difference between UTC and UT
 * @param timezone - Timezone offset in hours (negative west of Greenwich)
 * @returns Julian Day number
 */
export declare function julianDay(year: number, month: number, day: number, hour: number, minute: number, second: number, deltaUt1: number, timezone: number): number;
/**
 * Calculate Julian Century from Julian Day
 * @param jd - Julian Day
 * @returns Julian Century
 */
export declare function julianCentury(jd: number): number;
/**
 * Calculate Julian Ephemeris Day
 * @param jd - Julian Day
 * @param deltaT - Difference between earth rotation time and terrestrial time (seconds)
 * @returns Julian Ephemeris Day
 */
export declare function julianEphemerisDay(jd: number, deltaT: number): number;
/**
 * Calculate Julian Ephemeris Century
 * @param jde - Julian Ephemeris Day
 * @returns Julian Ephemeris Century
 */
export declare function julianEphemerisCentury(jde: number): number;
/**
 * Calculate Julian Ephemeris Millennium
 * @param jce - Julian Ephemeris Century
 * @returns Julian Ephemeris Millennium
 */
export declare function julianEphemerisMillennium(jce: number): number;
/**
 * Resolve date/time components from a Temporal.Instant.
 * Uses UTC date components and timezone offset of 0.
 *
 * This replaces the old approach of extracting components from a Date object,
 * which was buggy because it depended on the server's local timezone.
 */
export declare function resolveDateTimeComponents(instant: Temporal.Instant): DateTimeComponents & {
    timezone: number;
};
//# sourceMappingURL=date.d.ts.map