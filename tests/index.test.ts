import { describe, it, expect } from 'vitest';
import {
  getSunrise,
  getSunset,
  getSolarNoon,
  getSolarPosition,
  getTwilight,
  getSunTimes
} from '../src/index';

function instantToEpochMs(instant: Temporal.Instant): number {
  return instant.epochMilliseconds;
}

describe('SunriseSunsetJS library', () => {
  it('should return correct sunrise time for GMT', () => {
    const instant = Temporal.Instant.from('2000-01-21T12:00:00Z');
    const result = getSunrise(51.1788, -1.8262, instant);
    // SPA algorithm gives slightly different but more accurate time
    // Expected: 07:59:50 UTC (±30 seconds)
    expect(result).not.toBeNull();
    const expected = Temporal.Instant.from('2000-01-21T07:59:50Z');
    expect(Math.abs(instantToEpochMs(result!) - instantToEpochMs(expected))).toBeLessThan(30000);
  });

  it('should return null for sunrise in Reine, Norway during polar day', () => {
    // On June 1st at 67.9°N, the sun doesn't set - it's polar day (midnight sun)
    // The sun actually doesn't "rise" in the traditional sense during this period
    // because it never went below the horizon
    const instant = Temporal.Instant.from('2022-06-01T12:00:00Z');
    const result = getSunrise(67.9323866, 13.0887329, instant);
    expect(result).toBeNull();
  });

  it('should return null for sunset in Reine, Norway during polar day', () => {
    // Same location, same date - no sunset either
    const instant = Temporal.Instant.from('2022-06-01T12:00:00Z');
    const result = getSunset(67.9323866, 13.0887329, instant);
    expect(result).toBeNull();
  });

  it('should return valid sunrise/sunset for Reine, Norway outside polar day', () => {
    // Test for a date when sunrise/sunset do occur (e.g., March equinox)
    const instant = Temporal.Instant.from('2022-03-21T12:00:00Z');
    const sunrise = getSunrise(67.9323866, 13.0887329, instant);
    const sunset = getSunset(67.9323866, 13.0887329, instant);
    expect(sunrise).not.toBeNull();
    expect(sunset).not.toBeNull();
  });

  it('should return correct sunset time for GMT', () => {
    const instant = Temporal.Instant.from('2000-01-21T12:00:00Z');
    const result = getSunset(51.1788, -1.8262, instant);
    // SPA algorithm gives slightly different but more accurate time
    // Expected: 16:37:34 UTC (±30 seconds)
    expect(result).not.toBeNull();
    const expected = Temporal.Instant.from('2000-01-21T16:37:34Z');
    expect(Math.abs(instantToEpochMs(result!) - instantToEpochMs(expected))).toBeLessThan(30000);
  });

  it('should return correct sunrise time for CEST', () => {
    const instant = Temporal.Instant.from('2019-04-13T19:51:00Z');
    const result = getSunrise(46.0207, 7.7491, instant);
    // Expected: 06:47:16 local time (04:47:16 UTC) (±30 seconds)
    expect(result).not.toBeNull();
    const expected = Temporal.Instant.from('2019-04-13T04:47:16Z');
    expect(Math.abs(instantToEpochMs(result!) - instantToEpochMs(expected))).toBeLessThan(30000);
  });

  it('should return correct solar noon time', () => {
    const instant = Temporal.Instant.from('2024-06-21T12:00:00Z');
    const result = getSolarNoon(51.5074, -0.1278, instant);
    expect(result).not.toBeNull();
    // Solar noon in London on summer solstice is around 13:00 BST (12:00 UTC)
    const noon = result!.toZonedDateTimeISO('UTC');
    expect(noon.hour).toBeGreaterThanOrEqual(11);
    expect(noon.hour).toBeLessThanOrEqual(13);
  });

  it('should return valid solar position', () => {
    const instant = Temporal.Instant.from('2024-06-21T12:00:00Z');
    const result = getSolarPosition(51.5074, -0.1278, instant);
    expect(result).not.toBeNull();
    expect(result!.zenith).toBeGreaterThan(0);
    expect(result!.zenith).toBeLessThan(180);
    expect(result!.azimuth).toBeGreaterThanOrEqual(0);
    expect(result!.azimuth).toBeLessThan(360);
    expect(result!.elevation).toBeGreaterThan(-90);
    expect(result!.elevation).toBeLessThan(90);
  });

  it('should return twilight times', () => {
    const instant = Temporal.Instant.from('2024-03-21T12:00:00Z');
    const result = getTwilight(51.5074, -0.1278, instant);
    expect(result).not.toBeNull();
    // On equinox, all twilight types should be available at this latitude
    expect(result!.civilDawn).not.toBeNull();
    expect(result!.civilDusk).not.toBeNull();
    expect(result!.nauticalDawn).not.toBeNull();
    expect(result!.nauticalDusk).not.toBeNull();
    expect(result!.astronomicalDawn).not.toBeNull();
    expect(result!.astronomicalDusk).not.toBeNull();

    // Dawn should be before dusk
    expect(instantToEpochMs(result!.civilDawn!)).toBeLessThan(instantToEpochMs(result!.civilDusk!));
  });

  it('should return all sun times in one call', () => {
    const instant = Temporal.Instant.from('2024-06-21T12:00:00Z');
    const result = getSunTimes(51.5074, -0.1278, instant);
    expect(result).not.toBeNull();
    expect(result.sunrise).not.toBeNull();
    expect(result.sunset).not.toBeNull();
    expect(result.solarNoon).not.toBeNull();
    expect(result.twilight).not.toBeNull();

    // Sunrise should be before solar noon, which should be before sunset
    expect(instantToEpochMs(result.sunrise!)).toBeLessThan(instantToEpochMs(result.solarNoon!));
    expect(instantToEpochMs(result.solarNoon!)).toBeLessThan(instantToEpochMs(result.sunset!));
  });

  it('should handle polar night correctly', () => {
    // Tromsø, Norway on December 21st (polar night)
    const instant = Temporal.Instant.from('2024-12-21T12:00:00Z');
    const sunrise = getSunrise(69.6496, 18.9560, instant);
    const sunset = getSunset(69.6496, 18.9560, instant);
    // Both should be null during polar night
    expect(sunrise).toBeNull();
    expect(sunset).toBeNull();
  });

  it('should return correct twilight for New York (the original bug case)', () => {
    // This was the original bug: getSunTimes(40, -70).twilight.civilDusk
    // could return null when server timezone differed from observer timezone
    const instant = Temporal.Instant.from('2024-06-21T12:00:00Z');
    const times = getSunTimes(40, -70, instant);

    expect(times.twilight).not.toBeNull();
    expect(times.twilight!.civilDusk).not.toBeNull();
    expect(times.twilight!.civilDawn).not.toBeNull();
  });

  it('should allow user to convert to any timezone they want', () => {
    const instant = Temporal.Instant.from('2024-06-21T12:00:00Z');
    const times = getSunTimes(40, -70, instant);

    // User can convert to New York time
    const nySunrise = times.sunrise!.toZonedDateTimeISO('America/New_York');
    expect(nySunrise.timeZoneId).toBe('America/New_York');

    // User can convert to Vietnam time
    const vnSunrise = times.sunrise!.toZonedDateTimeISO('Asia/Ho_Chi_Minh');
    expect(vnSunrise.timeZoneId).toBe('Asia/Ho_Chi_Minh');

    // Same instant, different local times
    expect(instantToEpochMs(nySunrise)).toBe(instantToEpochMs(vnSunrise));
  });
});
