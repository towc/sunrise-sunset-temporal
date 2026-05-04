/**
 * Solar Position Algorithm Constants
 * Based on NREL's Solar Position Algorithm for Solar Radiation Applications
 *
 * @module sunrise-sunset
 */

import 'temporal-polyfill/global';
import {
  SpaOptions,
  SolarPosition,
  TwilightTimes,
} from './types';
import {
  ZENITH_CIVIL_TWILIGHT,
  ZENITH_NAUTICAL_TWILIGHT,
  ZENITH_ASTRONOMICAL_TWILIGHT,
  ZENITH_GOLDEN_HOUR,
  ZENITH_BLUE_HOUR,
} from './constants';
import { fractionalHourToInstant } from './utils/time';
import {
  initSpaFromTemporal,
  spaCalculate,
  isValidSunTime,
} from './spa';
import { calculateCustomZenithTimes } from './calculations/rts';

// Re-export types for consumers
export type { SpaOptions, SolarPosition, TwilightTimes } from './types';

/**
 * Get the sunrise time for a given location and date
 * 
 * @param latitude - Observer latitude in degrees (positive north)
 * @param longitude - Observer longitude in degrees (positive east)
 * @param instant - Point in time to calculate for (defaults to current moment)
 * @param options - Optional SPA calculation options
 * @returns Temporal.Instant representing sunrise time, or null if sun doesn't rise (polar night)
 * 
 * @example
 * ```typescript
 * const sunrise = getSunrise(40.7128, -74.0060);
 * console.log(sunrise?.toString());
 * ```
 */
export function getSunrise(
  latitude: number,
  longitude: number,
  instant: Temporal.Instant = Temporal.Now.instant(),
  options?: SpaOptions
): Temporal.Instant | null {
  const spa = initSpaFromTemporal(instant, latitude, longitude, options);
  const result = spaCalculate(spa);

  if (result !== 0 || !isValidSunTime(spa.sunrise)) {
    return null;
  }

  return fractionalHourToInstant(
    spa.year,
    spa.month,
    spa.day,
    spa.sunrise
  );
}

/**
 * Get the sunset time for a given location and date
 * 
 * @param latitude - Observer latitude in degrees (positive north)
 * @param longitude - Observer longitude in degrees (positive east)
 * @param instant - Point in time to calculate for (defaults to current moment)
 * @param options - Optional SPA calculation options
 * @returns Temporal.Instant representing sunset time, or null if sun doesn't set (polar day)
 * 
 * @example
 * ```typescript
 * const sunset = getSunset(40.7128, -74.0060);
 * console.log(sunset?.toString());
 * ```
 */
export function getSunset(
  latitude: number,
  longitude: number,
  instant: Temporal.Instant = Temporal.Now.instant(),
  options?: SpaOptions
): Temporal.Instant | null {
  const spa = initSpaFromTemporal(instant, latitude, longitude, options);
  const result = spaCalculate(spa);

  if (result !== 0 || !isValidSunTime(spa.sunset)) {
    return null;
  }

  return fractionalHourToInstant(
    spa.year,
    spa.month,
    spa.day,
    spa.sunset
  );
}

/**
 * Get the solar noon (sun transit) time for a given location and date
 * 
 * @param latitude - Observer latitude in degrees (positive north)
 * @param longitude - Observer longitude in degrees (positive east)
 * @param instant - Point in time to calculate for (defaults to current moment)
 * @param options - Optional SPA calculation options
 * @returns Temporal.Instant representing solar noon time, or null on calculation error
 * 
 * @example
 * ```typescript
 * const noon = getSolarNoon(40.7128, -74.0060);
 * console.log(noon?.toString());
 * ```
 */
export function getSolarNoon(
  latitude: number,
  longitude: number,
  instant: Temporal.Instant = Temporal.Now.instant(),
  options?: SpaOptions
): Temporal.Instant | null {
  const spa = initSpaFromTemporal(instant, latitude, longitude, options);
  const result = spaCalculate(spa);

  if (result !== 0 || !isValidSunTime(spa.suntransit)) {
    return null;
  }

  return fractionalHourToInstant(
    spa.year,
    spa.month,
    spa.day,
    spa.suntransit
  );
}

/**
 * Get the current solar position (zenith, azimuth, elevation, etc.)
 * 
 * @param latitude - Observer latitude in degrees (positive north)
 * @param longitude - Observer longitude in degrees (positive east)
 * @param instant - Point in time to calculate for (defaults to current moment)
 * @param options - Optional SPA calculation options
 * @returns Solar position object with zenith, azimuth, elevation, etc.
 * 
 * @example
 * ```typescript
 * const position = getSolarPosition(40.7128, -74.0060);
 * console.log(`Sun is at ${position.elevation}° elevation, ${position.azimuth}° azimuth`);
 * ```
 */
export function getSolarPosition(
  latitude: number,
  longitude: number,
  instant: Temporal.Instant = Temporal.Now.instant(),
  options?: SpaOptions
): SolarPosition | null {
  const spa = initSpaFromTemporal(instant, latitude, longitude, options);
  const result = spaCalculate(spa);

  if (result !== 0) {
    return null;
  }

  return {
    zenith: spa.zenith,
    azimuth: spa.azimuth,
    azimuthAstro: spa.azimuthAstro,
    elevation: spa.e,
    rightAscension: spa.alpha,
    declination: spa.delta,
    hourAngle: spa.h,
  };
}

/**
 * Get civil, nautical, and astronomical twilight times
 * 
 * Civil twilight: Sun is 6° below the horizon
 * Nautical twilight: Sun is 12° below the horizon
 * Astronomical twilight: Sun is 18° below the horizon
 * 
 * @param latitude - Observer latitude in degrees (positive north)
 * @param longitude - Observer longitude in degrees (positive east)
 * @param instant - Point in time to calculate for (defaults to current moment)
 * @param options - Optional SPA calculation options
 * @returns Twilight times object, with null values for polar conditions
 * 
 * @example
 * ```typescript
 * const twilight = getTwilight(40.7128, -74.0060);
 * console.log(`Civil dawn: ${twilight.civilDawn?.toString()}`);
 * console.log(`Civil dusk: ${twilight.civilDusk?.toString()}`);
 * ```
 */
export function getTwilight(
  latitude: number,
  longitude: number,
  instant: Temporal.Instant = Temporal.Now.instant(),
  options?: SpaOptions
): TwilightTimes | null {
  const spa = initSpaFromTemporal(instant, latitude, longitude, options);
  const result = spaCalculate(spa);

  if (result !== 0 || !isValidSunTime(spa.suntransit)) {
    return null;
  }

  // Calculate twilight times using custom zenith angles
  const civil = calculateCustomZenithTimes(
    latitude,
    spa.delta,
    spa.suntransit,
    ZENITH_CIVIL_TWILIGHT
  );

  const nautical = calculateCustomZenithTimes(
    latitude,
    spa.delta,
    spa.suntransit,
    ZENITH_NAUTICAL_TWILIGHT
  );

  const astronomical = calculateCustomZenithTimes(
    latitude,
    spa.delta,
    spa.suntransit,
    ZENITH_ASTRONOMICAL_TWILIGHT
  );

  const golden = calculateCustomZenithTimes(
    latitude,
    spa.delta,
    spa.suntransit,
    ZENITH_GOLDEN_HOUR
  );

  const blue = calculateCustomZenithTimes(
    latitude,
    spa.delta,
    spa.suntransit,
    ZENITH_BLUE_HOUR
  );

  // Convert fractional hours to Instants
  const toInstant = (hours: number | null): Temporal.Instant | null => {
    if (hours === null || !isFinite(hours)) {
      return null;
    }
    return fractionalHourToInstant(
      spa.year,
      spa.month,
      spa.day,
      hours
    );
  };

  return {
    civilDawn: toInstant(civil.sunrise),
    civilDusk: toInstant(civil.sunset),
    nauticalDawn: toInstant(nautical.sunrise),
    nauticalDusk: toInstant(nautical.sunset),
    astronomicalDawn: toInstant(astronomical.sunrise),
    astronomicalDusk: toInstant(astronomical.sunset),
    goldenHour: {
      morning: { start: toInstant(spa.sunrise), end: toInstant(golden.sunrise) },
      evening: { start: toInstant(golden.sunset), end: toInstant(spa.sunset) },
    },
    blueHour: {
      morning: { start: toInstant(blue.sunrise), end: toInstant(spa.sunrise) },
      evening: { start: toInstant(spa.sunset), end: toInstant(blue.sunset) },
    },
  };
}

/**
 * Get all sun times for a given location and date in a single call
 * More efficient than calling individual functions separately
 * 
 * @param latitude - Observer latitude in degrees (positive north)
 * @param longitude - Observer longitude in degrees (positive east)
 * @param instant - Point in time to calculate for (defaults to current moment)
 * @param options - Optional SPA calculation options
 * @returns Object containing sunrise, sunset, solar noon, and twilight times
 * 
 * @example
 * ```typescript
 * const times = getSunTimes(40.7128, -74.0060);
 * console.log(`Sunrise: ${times.sunrise?.toString()}`);
 * console.log(`Sunset: ${times.sunset?.toString()}`);
 * console.log(`Solar noon: ${times.solarNoon?.toString()}`);
 * ```
 */
export function getSunTimes(
  latitude: number,
  longitude: number,
  instant: Temporal.Instant = Temporal.Now.instant(),
  options?: SpaOptions
): {
  sunrise: Temporal.Instant | null;
  sunset: Temporal.Instant | null;
  solarNoon: Temporal.Instant | null;
  twilight: TwilightTimes | null;
} {
  const spa = initSpaFromTemporal(instant, latitude, longitude, options);
  const result = spaCalculate(spa);

  if (result !== 0) {
    return {
      sunrise: null,
      sunset: null,
      solarNoon: null,
      twilight: null,
    };
  }

  const toInstant = (hours: number): Temporal.Instant | null => {
    if (!isValidSunTime(hours)) {
      return null;
    }
    return fractionalHourToInstant(
      spa.year,
      spa.month,
      spa.day,
      hours
    );
  };

  // Calculate twilight times
  let twilight: TwilightTimes | null = null;
  if (isValidSunTime(spa.suntransit)) {
    const civil = calculateCustomZenithTimes(
      latitude,
      spa.delta,
      spa.suntransit,
      ZENITH_CIVIL_TWILIGHT
    );

    const nautical = calculateCustomZenithTimes(
      latitude,
      spa.delta,
      spa.suntransit,
      ZENITH_NAUTICAL_TWILIGHT
    );

    const astronomical = calculateCustomZenithTimes(
      latitude,
      spa.delta,
      spa.suntransit,
      ZENITH_ASTRONOMICAL_TWILIGHT
    );

    const golden = calculateCustomZenithTimes(
      latitude,
      spa.delta,
      spa.suntransit,
      ZENITH_GOLDEN_HOUR
    );

    const blue = calculateCustomZenithTimes(
      latitude,
      spa.delta,
      spa.suntransit,
      ZENITH_BLUE_HOUR
    );

    const twilightToInstant = (hours: number | null): Temporal.Instant | null => {
      if (hours === null || !isFinite(hours)) {
        return null;
      }
      return fractionalHourToInstant(
        spa.year,
        spa.month,
        spa.day,
        hours
      );
    };

    twilight = {
      civilDawn: twilightToInstant(civil.sunrise),
      civilDusk: twilightToInstant(civil.sunset),
      nauticalDawn: twilightToInstant(nautical.sunrise),
      nauticalDusk: twilightToInstant(nautical.sunset),
      astronomicalDawn: twilightToInstant(astronomical.sunrise),
      astronomicalDusk: twilightToInstant(astronomical.sunset),
      goldenHour: {
        morning: { start: twilightToInstant(spa.sunrise), end: twilightToInstant(golden.sunrise) },
        evening: { start: twilightToInstant(golden.sunset), end: twilightToInstant(spa.sunset) },
      },
      blueHour: {
        morning: { start: twilightToInstant(blue.sunrise), end: twilightToInstant(spa.sunrise) },
        evening: { start: twilightToInstant(spa.sunset), end: twilightToInstant(blue.sunset) },
      },
    };
  }

  return {
    sunrise: toInstant(spa.sunrise),
    sunset: toInstant(spa.sunset),
    solarNoon: toInstant(spa.suntransit),
    twilight,
  };
}
