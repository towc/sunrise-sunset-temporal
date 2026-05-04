/**
 * Time conversion utilities for Solar Position Algorithm
 */

import { limitZero2one } from './math';

/**
 * Convert day fraction to local hour
 * @param dayfrac - Day fraction (0-1)
 * @param timezone - Timezone offset in hours
 * @returns Local hour (0-24)
 */
export function dayfracToLocalHr(dayfrac: number, timezone: number): number {
  return 24.0 * limitZero2one(dayfrac + timezone / 24.0);
}

/**
 * Convert fractional hours to Temporal.Instant
 * @param year - UTC calendar year for the calculated sun time
 * @param month - UTC calendar month for the calculated sun time
 * @param day - UTC calendar day for the calculated sun time
 * @param fractionalHour - Hour as fractional value (relative to UTC midnight, can exceed 24 or be negative)
 * @returns Temporal.Instant representing the time, or null for invalid values
 */
export function fractionalHourToInstant(
  year: number,
  month: number,
  day: number,
  fractionalHour: number
): Temporal.Instant | null {
  if (!isFinite(fractionalHour)) {
    return null;
  }

  const totalNanoseconds = Math.round(fractionalHour * 3_600_000_000_000);
  const duration = Temporal.Duration.from({ nanoseconds: totalNanoseconds });
  const plainDateTime = Temporal.PlainDateTime.from({ year, month, day }).add(duration);

  return plainDateTime.toZonedDateTime('UTC').toInstant();
}

/**
 * Convert fractional hours to time string (HH:MM:SS.mmm)
 * @param fractionalHour - Hour as fractional value (0-24)
 * @returns Formatted time string
 */
export function fractionalHourToString(fractionalHour: number): string {
  if (fractionalHour < 0 || !isFinite(fractionalHour)) {
    return 'N/A';
  }

  const totalSec = Math.round(fractionalHour * 3600);
  const H = Math.floor(totalSec / 3600);
  const rem = totalSec - H * 3600;
  const M = Math.floor(rem / 60);
  const S = rem - M * 60;
  const ms = Math.round(
    (fractionalHour * 3600 - Math.floor(fractionalHour * 3600)) * 1000
  );

  return (
    `${H.toString().padStart(2, '0')}:` +
    `${M.toString().padStart(2, '0')}:` +
    `${S.toString().padStart(2, '0')}.` +
    `${ms.toString().padStart(3, '0')}`
  );
}
