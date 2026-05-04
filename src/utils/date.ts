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
export function julianDay(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  deltaUt1: number,
  timezone: number
): number {
  let y = year;
  let m = month;

  const dayDecimal =
    day + (hour - timezone + (minute + (second + deltaUt1) / 60.0) / 60.0) / 24.0;

  if (m < 3) {
    m += 12;
    y--;
  }

  let jd =
    Math.floor(365.25 * (y + 4716.0)) +
    Math.floor(30.6001 * (m + 1)) +
    dayDecimal -
    1524.5;

  if (jd > 2299160.0) {
    const a = Math.floor(y / 100);
    jd += 2 - a + Math.floor(a / 4);
  }

  return jd;
}

/**
 * Calculate Julian Century from Julian Day
 * @param jd - Julian Day
 * @returns Julian Century
 */
export function julianCentury(jd: number): number {
  return (jd - 2451545.0) / 36525.0;
}

/**
 * Calculate Julian Ephemeris Day
 * @param jd - Julian Day
 * @param deltaT - Difference between earth rotation time and terrestrial time (seconds)
 * @returns Julian Ephemeris Day
 */
export function julianEphemerisDay(jd: number, deltaT: number): number {
  return jd + deltaT / 86400.0;
}

/**
 * Calculate Julian Ephemeris Century
 * @param jde - Julian Ephemeris Day
 * @returns Julian Ephemeris Century
 */
export function julianEphemerisCentury(jde: number): number {
  return (jde - 2451545.0) / 36525.0;
}

/**
 * Calculate Julian Ephemeris Millennium
 * @param jce - Julian Ephemeris Century
 * @returns Julian Ephemeris Millennium
 */
export function julianEphemerisMillennium(jce: number): number {
  return jce / 10.0;
}

/**
 * Resolve date/time components from a Temporal.Instant.
 * Uses UTC date components and timezone offset of 0.
 *
 * This replaces the old approach of extracting components from a Date object,
 * which was buggy because it depended on the server's local timezone.
 */
export function resolveDateTimeComponents(
  instant: Temporal.Instant
): DateTimeComponents & { timezone: number } {
  const zdt = instant.toZonedDateTimeISO('UTC');

  return {
    year: zdt.year,
    month: zdt.month,
    day: zdt.day,
    hour: 0,
    minute: 0,
    second: 0,
    timezone: 0,
  };
}
