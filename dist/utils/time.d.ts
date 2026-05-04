/**
 * Time conversion utilities for Solar Position Algorithm
 */
/**
 * Convert day fraction to local hour
 * @param dayfrac - Day fraction (0-1)
 * @param timezone - Timezone offset in hours
 * @returns Local hour (0-24)
 */
export declare function dayfracToLocalHr(dayfrac: number, timezone: number): number;
/**
 * Convert fractional hours to Temporal.Instant
 * @param year - UTC calendar year for the calculated sun time
 * @param month - UTC calendar month for the calculated sun time
 * @param day - UTC calendar day for the calculated sun time
 * @param fractionalHour - Hour as fractional value (relative to UTC midnight, can exceed 24 or be negative)
 * @returns Temporal.Instant representing the time, or null for invalid values
 */
export declare function fractionalHourToInstant(year: number, month: number, day: number, fractionalHour: number): Temporal.Instant | null;
/**
 * Convert fractional hours to time string (HH:MM:SS.mmm)
 * @param fractionalHour - Hour as fractional value (0-24)
 * @returns Formatted time string
 */
export declare function fractionalHourToString(fractionalHour: number): string;
//# sourceMappingURL=time.d.ts.map