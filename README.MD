# sunset-sunrise-temporal

High-precision sunrise and sunset calculation library using NREL's Solar Position Algorithm (SPA).

This is a fork of [udivankin/sunrise-sunset](https://github.com/udivankin/sunrise-sunset), adapted for Temporal-first usage — all inputs and outputs are `Temporal.Instant`, eliminating the server-timezone dependency that could cause incorrect results in the original. Created to fix [issue #44](https://github.com/udivankin/sunrise-sunset/issues/44).

⚠️ **Vibe-coded**: The updates in this fork were AI-generated. Use at your own risk. Sorry I don't have the time to do this properly myself. If you encounter problems, please don't open a PR or expect an issue to be fixed on github, instead please help the original creator in integrating temporals.

📦 **Install:** `npm install sunset-sunrise-temporal`

🧪 **Tested with Deno only.** Some tweaks may be needed for Node.js.

**Acknowledgments:** Huge thanks to [Aleksei Udivankin](https://github.com/udivankin) for creating [sunrise-sunset](https://github.com/udivankin/sunrise-sunset) and putting in the hard work of implementing the full NREL SPA algorithm in JavaScript. This fork wouldn't exist without that foundation.

[![npm version](https://img.shields.io/npm/v/sunset-sunrise-temporal.svg)](https://www.npmjs.com/package/sunset-sunrise-temporal)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

## [Interactive Demo](https://udivankin.github.io/sunrise-sunset/)

Visualize the annual sun cycle for any location on Earth with our interactive D3.js chart. Features include automatic timezone detection, reverse geocoding, and persistent caching for improved performance.

![Demo Screenshot](https://raw.githubusercontent.com/udivankin/sunrise-sunset/master/demo/screenshot.png)

## Overview

This library provides accurate solar position calculations with uncertainties of ±0.0003 degrees for dates from year -2000 to 6000. It's based on the **National Renewable Energy Laboratory's Solar Position Algorithm (SPA)**, which offers significantly improved accuracy over simplified algorithms.

All inputs and outputs use the [Temporal API](https://tc39.es/proposal-temporal/docs/) — `Temporal.Instant` for absolute points in time. No timezones are involved in the API itself; convert to any timezone you need using Temporal's built-in methods.

### Algorithm Reference

The implementation is based on:

> Reda, I.; Andreas, A. (2004). Solar Position Algorithm for Solar Radiation Applications. *Solar Energy*, Vol. 76(5), pp. 577-589.
>
> NREL Technical Report: TP-560-34302, Revised January 2008

**Distributed by the National Renewable Energy Laboratory**  
Solar Radiation Research Laboratory

## Features

- ✅ **High-precision calculations** (±30 seconds accuracy)
- ✅ **Advanced twilight detection** (Civil, Nautical, Astronomical, Golden, and Blue hours)
- ✅ **Proper high-latitude handling** (returns `null` during polar day/night)
- ✅ **Full TypeScript support** with comprehensive type definitions
- ✅ **ESM and CommonJS** dual package exports
- ✅ **Zero runtime dependencies** (uses native Temporal when available)
- ✅ **Extended solar calculations** (solar noon, solar position, etc.)
- ✅ **Timezone-agnostic API** — all results are `Temporal.Instant` (epoch)
- ✅ **Tree-shakeable** modular architecture

## Installation

```bash
npm install sunset-sunrise-temporal
```

**Requirements:** Node.js ≥18.0.0

When running on a runtime without native Temporal support (e.g. Node.js without `--harmony-temporal`), the `@js-temporal/polyfill` is automatically loaded. Native Temporal is used when available (Deno, Bun, Node.js with `--harmony-temporal`).

## Quick Start

```typescript
import { getSunrise, getSunset } from 'sunset-sunrise-temporal';

// Sunrise/sunset for today at the given coordinates
const sunrise = getSunrise(51.5074, -0.1278);
const sunset = getSunset(51.5074, -0.1278);

// Convert to local time for display
console.log(`Sunrise: ${sunrise?.toZonedDateTimeISO('Europe/London').toString()}`);
console.log(`Sunset: ${sunset?.toZonedDateTimeISO('Europe/London').toString()}`);
```

## API Reference

### `getSunrise(latitude, longitude, instant?, options?)`

Calculate sunrise time for a given location and date.

**Parameters:**

- `latitude` (number): Latitude in decimal degrees (-90 to 90)
- `longitude` (number): Longitude in decimal degrees (-180 to 180)
- `instant` (Temporal.Instant, optional): Point in time to calculate for (defaults to now)
- `options` (SpaOptions, optional): Additional calculation options

**Returns:** `Temporal.Instant | null`

- Returns `Temporal.Instant` representing sunrise time
- Returns `null` during polar night (sun never rises)

**Example:**

```typescript
import { Temporal } from '@js-temporal/polyfill'; // or native Temporal
import { getSunrise } from 'sunset-sunrise-temporal';

// Basic usage — defaults to current moment
const sunrise = getSunrise(40.7128, -74.0060); // New York City

// Specific date
const summerSolstice = getSunrise(
  51.1788,
  -1.8262,
  Temporal.Instant.from('2024-06-21T00:00:00Z')
); // Stonehenge

// High-latitude location during polar night
const arcticWinter = getSunrise(
  69.6496,
  18.9560,
  Temporal.Instant.from('2024-12-21T00:00:00Z')
); // Tromsø, Norway
console.log(arcticWinter); // null (polar night)
```

### `getSunset(latitude, longitude, instant?, options?)`

Calculate sunset time for a given location and date.

**Parameters:** Same as `getSunrise()`

**Returns:** `Temporal.Instant | null`

- Returns `Temporal.Instant` representing sunset time
- Returns `null` during polar day (midnight sun)

**Example:**

```typescript
import { getSunset } from 'sunset-sunrise-temporal';

const sunset = getSunset(40.7128, -74.0060);

// During midnight sun period
const arcticSummer = getSunset(
  67.9323,
  13.0887,
  Temporal.Instant.from('2024-06-21T00:00:00Z')
); // Reine, Norway
console.log(arcticSummer); // null (midnight sun)
```

### `getSolarNoon(latitude, longitude, instant?, options?)`

Calculate solar noon (sun transit) — when the sun reaches its highest point in the sky.

**Returns:** `Temporal.Instant | null`

**Example:**

```typescript
import { getSolarNoon } from 'sunset-sunrise-temporal';

const solarNoon = getSolarNoon(51.5074, -0.1278);
console.log(`Solar noon: ${solarNoon?.toString()}`);
```

### `getSolarPosition(latitude, longitude, instant?, options?)`

Calculate the sun's position in the sky at a given time.

**Returns:** `SolarPosition | null`

```typescript
interface SolarPosition {
  zenith: number;           // Zenith angle (0° = directly overhead)
  azimuth: number;          // Azimuth angle (0° = North, 90° = East)
  azimuthAstro: number;     // Azimuth westward from South (astronomical)
  elevation: number;        // Elevation angle above horizon
  rightAscension: number;   // Right ascension (degrees)
  declination: number;      // Declination (degrees)
  hourAngle: number;        // Local hour angle (degrees)
}
```

**Example:**

```typescript
import { getSolarPosition } from 'sunset-sunrise-temporal';

const position = getSolarPosition(51.5074, -0.1278);

if (position) {
  console.log(`Azimuth: ${position.azimuth.toFixed(2)}°`);
  console.log(`Elevation: ${position.elevation.toFixed(2)}°`);
  console.log(`Zenith: ${position.zenith.toFixed(2)}°`);
}
```

### `getTwilight(latitude, longitude, instant?, options?)`

Calculate twilight times (civil, nautical, and astronomical).

**Returns:** `TwilightTimes | null`

```typescript
interface TwilightTimes {
  civilDawn: Temporal.Instant | null;           // Sun at -6° (before sunrise)
  civilDusk: Temporal.Instant | null;           // Sun at -6° (after sunset)
  nauticalDawn: Temporal.Instant | null;        // Sun at -12°
  nauticalDusk: Temporal.Instant | null;        // Sun at -12°
  astronomicalDawn: Temporal.Instant | null;    // Sun at -18°
  astronomicalDusk: Temporal.Instant | null;    // Sun at -18°
  goldenHour: {                                 // Sun between 6° above and horizon
    morning: { start: Temporal.Instant | null, end: Temporal.Instant | null };
    evening: { start: Temporal.Instant | null, end: Temporal.Instant | null };
  } | null;
  blueHour: {                                   // Sun between horizon and 4° below
    morning: { start: Temporal.Instant | null, end: Temporal.Instant | null };
    evening: { start: Temporal.Instant | null, end: Temporal.Instant | null };
  } | null;
}
```

**Example:**

```typescript
import { getTwilight } from 'sunset-sunrise-temporal';

const twilight = getTwilight(51.5074, -0.1278);

if (twilight) {
  console.log(`Civil dawn: ${twilight.civilDawn?.toString()}`);
  console.log(`Civil dusk: ${twilight.civilDusk?.toString()}`);
  console.log(`Astronomical dawn: ${twilight.astronomicalDawn?.toString()}`);
}
```

### `getSunTimes(latitude, longitude, instant?, options?)`

Get all sun times in a single efficient calculation.

**Returns:** Object with all sun times

```typescript
interface SunTimes {
  sunrise: Temporal.Instant | null;
  sunset: Temporal.Instant | null;
  solarNoon: Temporal.Instant | null;
  twilight: TwilightTimes | null;
}
```

**Example:**

```typescript
import { getSunTimes } from 'sunset-sunrise-temporal';

const times = getSunTimes(51.5074, -0.1278);

console.log('Sunrise:', times.sunrise);
console.log('Solar Noon:', times.solarNoon);
console.log('Sunset:', times.sunset);
console.log('Civil Dawn:', times.twilight?.civilDawn);
console.log('Civil Dusk:', times.twilight?.civilDusk);
```

### Options

All functions accept an optional `SpaOptions` parameter:

```typescript
interface SpaOptions {
  temperature?: number;           // Temperature in °C (default: 15)
  pressure?: number;              // Atmospheric pressure in mbar (default: 1013)
  deltaT?: number;                // Earth rotation correction in seconds (default: 67)
  elevation?: number;             // Observer elevation in meters (default: 0)
  atmosphericRefraction?: number; // Refraction at horizon in degrees (default: 0.5667)
}
```

All returned values are `Temporal.Instant` objects representing absolute points in time (epoch).
To display the result in a specific timezone, convert it with `instant.toZonedDateTimeISO('America/New_York')`.

**Example:**

```typescript
import { getSunrise } from 'sunset-sunrise-temporal';

// Calculate for high-altitude location
const sunrise = getSunrise(
  27.9881, // Everest Base Camp
  86.9250,
  undefined, // use current moment
  {
    elevation: 5364,      // meters above sea level
    temperature: -10,     // °C
    pressure: 500         // mbar (lower at altitude)
  }
);
```

## Usage Examples

### Browser Integration with Geolocation

```typescript
import { getSunrise, getSunset } from 'sunset-sunrise-temporal';

navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  
  const sunrise = getSunrise(latitude, longitude);
  const sunset = getSunset(latitude, longitude);
  
  // Convert to user's local timezone for display
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(`Sunrise: ${sunrise?.toZonedDateTimeISO(tz).toString()}`);
  console.log(`Sunset: ${sunset?.toZonedDateTimeISO(tz).toString()}`);
});
```

### Annual Solar Events

```typescript
import { getSunrise, getSunset, Temporal } from 'sunset-sunrise-temporal';

function getAnnualSolarEvents(latitude: number, longitude: number, year: number) {
  const events = [];
  
  for (let month = 1; month <= 12; month++) {
    for (let day = 1; day <= 31; day++) {
      const date = Temporal.PlainDate.from({ year, month, day });
      const instant = date.toZonedDateTime({ timeZone: 'UTC', plainTime: Temporal.PlainTime.from('12:00') }).toInstant();
      
      const sunrise = getSunrise(latitude, longitude, instant);
      const sunset = getSunset(latitude, longitude, instant);
      
      if (sunrise) events.push({ type: 'sunrise', instant: sunrise });
      if (sunset) events.push({ type: 'sunset', instant: sunset });
    }
  }
  
  return events;
}

// Get all sunrise/sunset times for 2024 in London
const events = getAnnualSolarEvents(51.5074, -0.1278, 2024);
```

### Day Length Calculation

```typescript
import { getSunrise, getSunset, Temporal } from 'sunset-sunrise-temporal';

function getDaylightHours(latitude: number, longitude: number, instant: Temporal.Instant) {
  const sunrise = getSunrise(latitude, longitude, instant);
  const sunset = getSunset(latitude, longitude, instant);
  
  if (!sunrise || !sunset) {
    // Polar day or polar night
    return sunrise === null && sunset === null ? 0 : 24;
  }
  
  const milliseconds = sunset.epochMilliseconds - sunrise.epochMilliseconds;
  return milliseconds / (1000 * 60 * 60); // Convert to hours
}

const instant = Temporal.Instant.from('2024-06-21T00:00:00Z');
const hours = getDaylightHours(51.5074, -0.1278, instant);
console.log(`Daylight hours on summer solstice: ${hours.toFixed(2)}`);
```

### Golden Hour Detection

```typescript
import { getSolarPosition, Temporal } from 'sunset-sunrise-temporal';

function isGoldenHour(latitude: number, longitude: number, instant: Temporal.Instant): boolean {
  const position = getSolarPosition(latitude, longitude, instant);
  
  if (!position) return false;
  
  // Golden hour: sun elevation between 0° and 6° above horizon
  return position.elevation > 0 && position.elevation < 6;
}

const now = Temporal.Now.instant();
if (isGoldenHour(51.5074, -0.1278, now)) {
  console.log('Perfect time for photography! 📸');
}
```

### Converting to Any Timezone

```typescript
import { getSunrise, Temporal } from 'sunset-sunrise-temporal';

const sunrise = getSunrise(40, -70);

// New York time
const ny = sunrise?.toZonedDateTimeISO('America/New_York');
console.log('New York:', ny?.toString());

// Vietnam time
const vn = sunrise?.toZonedDateTimeISO('Asia/Ho_Chi_Minh');
console.log('Vietnam:', vn?.toString());

// Same instant, different local times
console.log('Same moment:', ny?.epochMilliseconds === vn?.epochMilliseconds); // true
```

## Project Structure

```
src/
├── index.ts                    # Main API exports
├── types.ts                    # TypeScript type definitions
├── constants.ts                # Physical constants & periodic terms
├── temporal.ts                 # Temporal API shim (native or polyfill)
├── spa.ts                      # Main SPA calculation orchestrator
├── calculations/
│   ├── earth.ts               # Earth heliocentric position
│   ├── sun.ts                 # Geocentric sun position
│   ├── nutation.ts            # Nutation & obliquity calculations
│   ├── observer.ts            # Topocentric corrections
│   └── rts.ts                 # Rise/Transit/Set calculations
└── utils/
    ├── date.ts                # Julian day conversions
    ├── time.ts                # Time conversion utilities
    └── math.ts                # Mathematical helpers
```

## Testing

The library includes comprehensive test coverage:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

**Test suite includes:**

- ✅ Basic sunrise/sunset calculations
- ✅ High-latitude edge cases (polar day/night)
- ✅ Solar noon calculations
- ✅ Solar position accuracy
- ✅ Twilight time calculations
- ✅ All sun times in single call
- ✅ Timezone conversion by user

## Migration from v3.x

The v4.0.0 release switches to the Temporal API for all inputs and outputs, eliminating the server-timezone bug that could cause incorrect results (e.g. null twilight values for New York when the server runs in Vietnam).

**Breaking changes:**

- All functions now accept `Temporal.Instant` instead of `Date`
- All functions now return `Temporal.Instant` instead of `Date`
- The `timezone` and `timezoneId` options have been removed
- The `date` parameter is now `instant` and defaults to `Temporal.Now.instant()` (the current moment) instead of "today"

**Migration example:**

```typescript
// v3.x — Date-based API (timezone-dependent)
import { getSunrise, getSunset } from 'sunset-sunrise-temporal';

const sunrise = getSunrise(40.7128, -74.0060, new Date('2024-06-21'), { timezoneId: 'America/New_York' });
console.log(sunrise?.toLocaleString({ timeZone: 'America/New_York' }));

// v4.0 — Temporal-based API (timezone-agnostic)
import { Temporal } from '@js-temporal/polyfill';
import { getSunrise, getSunset } from 'sunset-sunrise-temporal';

const instant = Temporal.Instant.from('2024-06-21T00:00:00Z');
const sunrise = getSunrise(40.7128, -74.0060, instant);
console.log(sunrise?.toZonedDateTimeISO('America/New_York').toString());
```

**New features:**

```typescript
// Simple — defaults to current moment
const sunrise = getSunrise(lat, lng);

// All times in one call
const allTimes = getSunTimes(lat, lng);

// Convert to any timezone the user wants
const ny = sunrise?.toZonedDateTimeISO('America/New_York');
const vn = sunrise?.toZonedDateTimeISO('Asia/Ho_Chi_Minh');
```

## Build & Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Type check
npm run type-check

# Run all checks (type-check + build + test)
npm run prepublishOnly
```

**Build outputs:**

- `dist/index.js` - ESM bundle with source maps
- `dist/index.cjs` - CommonJS bundle with source maps
- `dist/index.d.ts` - TypeScript declarations

## Algorithm Details

### Why SPA?

The previous version used a simplified USNO algorithm with ~1-2 minute accuracy. The NREL SPA algorithm provides:

1. **Higher accuracy**: ±30 seconds vs ±1-2 minutes
2. **Wider date range**: Year -2000 to 6000 (vs 1900-2100)
3. **Better high-latitude handling**: Proper polar day/night detection
4. **More comprehensive**: Includes nutation, aberration, atmospheric refraction

### Calculation Flow

```
1. Julian Day Calculation (date.ts)
   ↓
2. Earth Heliocentric Position (earth.ts)
   - Longitude, latitude, radius vector
   - ~250 periodic terms for precision
   ↓
3. Geocentric Sun Position (sun.ts)
   - Apply nutation corrections
   - Calculate apparent position
   ↓
4. Observer Corrections (observer.ts)
   - Topocentric adjustments
   - Atmospheric refraction
   ↓
5. Rise/Transit/Set Times (rts.ts)
   - Solve for horizon crossing
   - Handle polar day/night cases
```

### Accuracy Factors

The algorithm accounts for:

- Earth's elliptical orbit
- Axial precession and nutation
- Atmospheric refraction
- Observer elevation
- Temperature and pressure effects
- Gravitational aberration

### Development

To run the interactive demo locally:

```bash
cd demo
npm install
npm run dev
```

The demo will be available at `http://localhost:5173`.

## License

MIT

## Contributing

Contributions welcome! Please open an issue or submit a pull request.

## Acknowledgments

- **NREL** (National Renewable Energy Laboratory) for the SPA algorithm
- **Ibrahim Reda & Afshin Andreas** for their comprehensive research paper
- Original library contributors for establishing the foundation

## References

1. Reda, I.; Andreas, A. (2004). "Solar Position Algorithm for Solar Radiation Applications." *Solar Energy*, 76(5), 577-589.
2. NREL Technical Report TP-560-34302 (Revised January 2008)
3. [NREL Solar Position Algorithm](https://midcdmz.nrel.gov/spa/)

---

**Version 4.0.0** — Temporal-based API, timezone-agnostic by design.
