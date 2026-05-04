//#region node_modules/temporal-polyfill/chunks/internal.js
function clampProp(e$1, n$1, t$1, o$1, r$1) {
	return ba(n$1, ((e$2, n$2) => {
		const t$2 = e$2[n$2];
		if (void 0 === t$2) throw new TypeError(missingField(n$2));
		return t$2;
	})(e$1, n$1), t$1, o$1, r$1);
}
function ba(e$1, n$1, t$1, o$1, r$1, i$1) {
	const a$1 = clampNumber(n$1, t$1, o$1);
	if (r$1 && n$1 !== a$1) throw new RangeError(numberOutOfRange(e$1, n$1, t$1, o$1, i$1));
	return a$1;
}
function s(e$1) {
	return null !== e$1 && /object|function/.test(typeof e$1);
}
function on(e$1, n$1 = Map) {
	const t$1 = new n$1();
	return (n$2, ...o$1) => {
		if (t$1.has(n$2)) return t$1.get(n$2);
		const r$1 = e$1(n$2, ...o$1);
		return t$1.set(n$2, r$1), r$1;
	};
}
function r(e$1) {
	return n({ name: e$1 }, 1);
}
function n(n$1, t$1) {
	return e(((e$1) => ({
		value: e$1,
		configurable: 1,
		writable: !t$1
	})), n$1);
}
function t(n$1) {
	return e(((e$1) => ({
		get: e$1,
		configurable: 1
	})), n$1);
}
function o(e$1) {
	return { [Symbol.toStringTag]: {
		value: e$1,
		configurable: 1
	} };
}
function zipProps(e$1, n$1) {
	const t$1 = {};
	let o$1 = e$1.length;
	for (const r$1 of n$1) t$1[e$1[--o$1]] = r$1;
	return t$1;
}
function e(e$1, n$1, t$1) {
	const o$1 = {};
	for (const r$1 in n$1) o$1[r$1] = e$1(n$1[r$1], r$1, t$1);
	return o$1;
}
function P(e$1, n$1, t$1) {
	const o$1 = {};
	for (let r$1 = 0; r$1 < n$1.length; r$1++) {
		const i$1 = n$1[r$1];
		o$1[i$1] = e$1(i$1, r$1, t$1);
	}
	return o$1;
}
function remapProps(e$1, n$1, t$1) {
	const o$1 = {};
	for (let r$1 = 0; r$1 < e$1.length; r$1++) o$1[n$1[r$1]] = t$1[e$1[r$1]];
	return o$1;
}
function nn(e$1, n$1) {
	const t$1 = Object.create(null);
	for (const o$1 of e$1) t$1[o$1] = n$1[o$1];
	return t$1;
}
function hasAnyPropsByName(e$1, n$1) {
	for (const t$1 of n$1) if (t$1 in e$1) return 1;
	return 0;
}
function allPropsEqual(e$1, n$1, t$1) {
	for (const o$1 of e$1) if (n$1[o$1] !== t$1[o$1]) return 0;
	return 1;
}
function zeroOutProps(e$1, n$1, t$1) {
	const o$1 = { ...t$1 };
	for (let t$2 = 0; t$2 < n$1; t$2++) o$1[e$1[t$2]] = 0;
	return o$1;
}
function gt(e$1, ...n$1) {
	return (...t$1) => e$1(...n$1, ...t$1);
}
function noop() {}
function capitalize(e$1) {
	return e$1[0].toUpperCase() + e$1.substring(1);
}
function sortStrings(e$1) {
	return e$1.slice().sort();
}
function padNumber(e$1, n$1) {
	return String(n$1).padStart(e$1, "0");
}
function compareNumbers(e$1, n$1) {
	return Math.sign(e$1 - n$1);
}
function clampNumber(e$1, n$1, t$1) {
	return Math.min(Math.max(e$1, n$1), t$1);
}
function divModFloor(e$1, n$1) {
	return [Math.floor(e$1 / n$1), modFloor(e$1, n$1)];
}
function modFloor(e$1, n$1) {
	return (e$1 % n$1 + n$1) % n$1;
}
function divModTrunc(e$1, n$1) {
	return [divTrunc(e$1, n$1), modTrunc(e$1, n$1)];
}
function divTrunc(e$1, n$1) {
	return Math.trunc(e$1 / n$1) || 0;
}
function modTrunc(e$1, n$1) {
	return e$1 % n$1 || 0;
}
function hasHalf(e$1) {
	return .5 === Math.abs(e$1 % 1);
}
function givenFieldsToBigNano(e$1, n$1, t$1) {
	let o$1 = 0, r$1 = 0;
	for (let i$2 = 0; i$2 <= n$1; i$2++) {
		const n$2 = e$1[t$1[i$2]], a$2 = Zu[i$2], [c$1, u$1] = divModTrunc(n$2, go / a$2);
		o$1 += u$1 * a$2, r$1 += c$1;
	}
	const [i$1, a$1] = divModTrunc(o$1, go);
	return [r$1 + i$1, a$1];
}
function nanoToGivenFields(e$1, n$1, t$1) {
	const o$1 = {};
	for (let r$1 = n$1; r$1 >= 0; r$1--) {
		const n$2 = Zu[r$1];
		o$1[t$1[r$1]] = divTrunc(e$1, n$2), e$1 = modTrunc(e$1, n$2);
	}
	return o$1;
}
function m(e$1) {
	if (void 0 !== e$1) return d(e$1);
}
function g(e$1) {
	if (void 0 !== e$1) return h(e$1);
}
function S(e$1) {
	if (void 0 !== e$1) return T(e$1);
}
function h(e$1) {
	return requireNumberIsPositive(T(e$1));
}
function T(e$1) {
	return _e(rl(e$1));
}
function requirePropDefined(e$1, n$1) {
	if (null == n$1) throw new RangeError(missingField(e$1));
	return n$1;
}
function oa(e$1) {
	if (!s(e$1)) throw new TypeError(ru);
	return e$1;
}
function requireType(e$1, n$1, t$1 = e$1) {
	if (typeof n$1 !== e$1) throw new TypeError(invalidEntity(t$1, n$1));
	return n$1;
}
function _e(e$1, n$1 = "number") {
	if (!Number.isInteger(e$1)) throw new RangeError(expectedInteger(n$1, e$1));
	return e$1 || 0;
}
function requireNumberIsPositive(e$1, n$1 = "number") {
	if (e$1 <= 0) throw new RangeError(expectedPositive(n$1, e$1));
	return e$1;
}
function tu(e$1) {
	if ("symbol" == typeof e$1) throw new TypeError(ou);
	return String(e$1);
}
function toStringViaPrimitive(e$1, n$1) {
	return s(e$1) ? String(e$1) : d(e$1, n$1);
}
function toBigInt(e$1) {
	if ("string" == typeof e$1) return BigInt(e$1);
	if ("bigint" != typeof e$1) throw new TypeError(invalidBigInt(e$1));
	return e$1;
}
function toNumber(e$1, n$1 = "number") {
	if ("bigint" == typeof e$1) throw new TypeError(forbiddenBigIntToNumber(n$1));
	if (e$1 = Number(e$1), !Number.isFinite(e$1)) throw new RangeError(expectedFinite(n$1, e$1));
	return e$1;
}
function Za(e$1, n$1) {
	return Math.trunc(toNumber(e$1, n$1)) || 0;
}
function Ba(e$1, n$1) {
	return _e(toNumber(e$1, n$1), n$1);
}
function toPositiveInteger(e$1, n$1) {
	return requireNumberIsPositive(Za(e$1, n$1), n$1);
}
function createBigNano(e$1, n$1) {
	let [t$1, o$1] = divModTrunc(n$1, go), r$1 = e$1 + t$1;
	const i$1 = Math.sign(r$1);
	return i$1 && i$1 === -Math.sign(o$1) && (r$1 -= i$1, o$1 += i$1 * go), [r$1, o$1];
}
function so(e$1, n$1, t$1 = 1) {
	return createBigNano(e$1[0] + n$1[0] * t$1, e$1[1] + n$1[1] * t$1);
}
function Ta(e$1, n$1) {
	return createBigNano(e$1[0], e$1[1] + n$1);
}
function va(e$1, n$1) {
	return so(n$1, e$1, -1);
}
function pa(e$1, n$1) {
	return compareNumbers(e$1[0], n$1[0]) || compareNumbers(e$1[1], n$1[1]);
}
function bigNanoOutside(e$1, n$1, t$1) {
	return -1 === pa(e$1, n$1) || 1 === pa(e$1, t$1);
}
function bigIntToBigNano(e$1, n$1 = 1) {
	const t$1 = BigInt(go / n$1);
	return [Number(e$1 / t$1), Number(e$1 % t$1) * n$1];
}
function Ge(e$1, n$1 = 1) {
	const [o$1, r$1] = divModTrunc(e$1, go / n$1);
	return [o$1, r$1 * n$1];
}
function bigNanoToBigInt(e$1, n$1 = 1) {
	const [t$1, o$1] = e$1, r$1 = Math.floor(o$1 / n$1), i$1 = go / n$1;
	return BigInt(t$1) * BigInt(i$1) + BigInt(r$1);
}
function La(e$1, n$1 = 1, t$1) {
	const [o$1, r$1] = e$1, [i$1, a$1] = divModTrunc(r$1, n$1);
	return o$1 * (go / n$1) + (i$1 + (t$1 ? a$1 / n$1 : 0));
}
function Oa(e$1) {
	return e$1[0] + e$1[1] / go;
}
function divModBigNano(e$1, n$1, t$1 = divModFloor) {
	const [o$1, r$1] = e$1, [i$1, a$1] = t$1(r$1, n$1);
	return [o$1 * (go / n$1) + i$1, a$1];
}
function checkIsoYearMonthInBounds(e$1) {
	return clampProp(e$1, "isoYear", Nl, yl, 1), e$1.isoYear === Nl ? clampProp(e$1, "isoMonth", 4, 12, 1) : e$1.isoYear === yl && clampProp(e$1, "isoMonth", 1, 9, 1), e$1;
}
function To(e$1) {
	return Do({
		...e$1,
		...At,
		isoHour: 12
	}), e$1;
}
function Do(e$1) {
	const n$1 = clampProp(e$1, "isoYear", Nl, yl, 1), t$1 = n$1 === Nl ? 1 : n$1 === yl ? -1 : 0;
	return t$1 && io(ma({
		...e$1,
		isoDay: e$1.isoDay + t$1,
		isoNanosecond: e$1.isoNanosecond - t$1
	})), e$1;
}
function io(e$1) {
	if (!e$1 || bigNanoOutside(e$1, Ml, Tl)) throw new RangeError(Mu);
	return e$1;
}
function isoTimeFieldsToNano(e$1) {
	return givenFieldsToBigNano(e$1, 5, w)[1];
}
function nanoToIsoTimeAndDay(e$1) {
	const [n$1, t$1] = divModFloor(e$1, go);
	return [nanoToGivenFields(t$1, 5, w), n$1];
}
function epochNanoToSec(e$1) {
	return epochNanoToSecMod(e$1)[0];
}
function epochNanoToSecMod(e$1) {
	return divModBigNano(e$1, oo);
}
function isoToEpochMilli(e$1) {
	return isoArgsToEpochMilli(e$1.isoYear, e$1.isoMonth, e$1.isoDay, e$1.isoHour, e$1.isoMinute, e$1.isoSecond, e$1.isoMillisecond);
}
function ma(e$1) {
	const n$1 = isoToEpochMilli(e$1);
	if (void 0 !== n$1) {
		const [t$1, o$1] = divModTrunc(n$1, Cu);
		return [t$1, o$1 * Ke + (e$1.isoMicrosecond || 0) * ro + (e$1.isoNanosecond || 0)];
	}
}
function isoToEpochNanoWithOffset(e$1, n$1) {
	const [t$1, o$1] = nanoToIsoTimeAndDay(isoTimeFieldsToNano(e$1) - n$1);
	return io(ma({
		...e$1,
		isoDay: e$1.isoDay + o$1,
		...t$1
	}));
}
function isoArgsToEpochSec(...e$1) {
	return isoArgsToEpochMilli(...e$1) / ku;
}
function isoArgsToEpochMilli(...e$1) {
	const [n$1, t$1] = isoToLegacyDate(...e$1), o$1 = n$1.valueOf();
	if (!isNaN(o$1)) return o$1 - t$1 * Cu;
}
function isoToLegacyDate(e$1, n$1 = 1, t$1 = 1, o$1 = 0, r$1 = 0, i$1 = 0, a$1 = 0) {
	const s$1 = e$1 === Nl ? 1 : e$1 === yl ? -1 : 0, c$1 = /* @__PURE__ */ new Date();
	return c$1.setUTCHours(o$1, r$1, i$1, a$1), c$1.setUTCFullYear(e$1, n$1 - 1, t$1 + s$1), [c$1, s$1];
}
function So(e$1, n$1) {
	let [t$1, o$1] = Ta(e$1, n$1);
	o$1 < 0 && (o$1 += go, t$1 -= 1);
	const [r$1, i$1] = divModFloor(o$1, Ke), [a$1, s$1] = divModFloor(i$1, ro);
	return Pa(t$1 * Cu + r$1, a$1, s$1);
}
function Pa(e$1, n$1 = 0, t$1 = 0) {
	const o$1 = Math.ceil(Math.max(0, Math.abs(e$1) - gl) / Cu) * Math.sign(e$1), r$1 = new Date(e$1 - o$1 * Cu);
	return zipProps(pl, [
		r$1.getUTCFullYear(),
		r$1.getUTCMonth() + 1,
		r$1.getUTCDate() + o$1,
		r$1.getUTCHours(),
		r$1.getUTCMinutes(),
		r$1.getUTCSeconds(),
		r$1.getUTCMilliseconds(),
		n$1,
		t$1
	]);
}
function hashIntlFormatParts(e$1, n$1) {
	if (n$1 < -gl) throw new RangeError(Mu);
	const t$1 = e$1.formatToParts(n$1), o$1 = {};
	for (const e$2 of t$1) o$1[e$2.type] = e$2.value;
	return o$1;
}
function computeIsoDay(e$1) {
	return e$1.isoDay;
}
function computeIsoDateParts(e$1) {
	return [
		e$1.isoYear,
		e$1.isoMonth,
		e$1.isoDay
	];
}
function computeIsoMonthCodeParts(e$1, n$1) {
	return [n$1, 0];
}
function computeIsoYearMonthForMonthDay(e$1, n$1) {
	if (!n$1) return [Pl, e$1];
}
function computeIsoFieldsFromParts(e$1, n$1, t$1) {
	return {
		isoYear: e$1,
		isoMonth: n$1,
		isoDay: t$1
	};
}
function fo() {
	return 7;
}
function computeIsoMonthsInYear() {
	return Fl;
}
function computeIsoDaysInMonth(e$1, n$1) {
	switch (n$1) {
		case 2: return computeIsoInLeapYear(e$1) ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
function computeIsoDaysInYear(e$1) {
	return computeIsoInLeapYear(e$1) ? 366 : 365;
}
function computeIsoInLeapYear(e$1) {
	return e$1 % 4 == 0 && (e$1 % 100 != 0 || e$1 % 400 == 0);
}
function Ha(e$1) {
	const [n$1, t$1] = isoToLegacyDate(e$1.isoYear, e$1.isoMonth, e$1.isoDay);
	return modFloor(n$1.getUTCDay() - t$1, 7) || 7;
}
function computeIsoEraParts(e$1) {
	return this.id === Xu ? (({ isoYear: e$2 }) => e$2 < 1 ? ["gregory-inverse", 1 - e$2] : ["gregory", e$2])(e$1) : this.id === el ? Ol(e$1) : [];
}
function computeJapaneseEraParts(e$1) {
	const n$1 = isoToEpochMilli(e$1);
	if (n$1 < El) {
		const { isoYear: n$2 } = e$1;
		return n$2 < 1 ? ["japanese-inverse", 1 - n$2] : ["japanese", n$2];
	}
	const { era: o$1, eraYear: r$1 } = parseIntlYear(hashIntlFormatParts(bf(el), n$1), el);
	return [o$1, r$1];
}
function checkIsoDateTimeFields(e$1) {
	return checkIsoDateFields(e$1), constrainIsoTimeFields(e$1, 1), e$1;
}
function checkIsoDateFields(e$1) {
	return constrainIsoDateFields(e$1, 1), e$1;
}
function isIsoDateFieldsValid(e$1) {
	return allPropsEqual(ml, e$1, constrainIsoDateFields(e$1));
}
function constrainIsoDateFields(e$1, n$1) {
	const { isoYear: t$1 } = e$1, o$1 = clampProp(e$1, "isoMonth", 1, computeIsoMonthsInYear(), n$1);
	return {
		isoYear: t$1,
		isoMonth: o$1,
		isoDay: clampProp(e$1, "isoDay", 1, computeIsoDaysInMonth(t$1, o$1), n$1)
	};
}
function constrainIsoTimeFields(e$1, n$1) {
	return zipProps(w, [
		clampProp(e$1, "isoHour", 0, 23, n$1),
		clampProp(e$1, "isoMinute", 0, 59, n$1),
		clampProp(e$1, "isoSecond", 0, 59, n$1),
		clampProp(e$1, "isoMillisecond", 0, 999, n$1),
		clampProp(e$1, "isoMicrosecond", 0, 999, n$1),
		clampProp(e$1, "isoNanosecond", 0, 999, n$1)
	]);
}
function dt(e$1) {
	return void 0 === e$1 ? 0 : Gl(oa(e$1));
}
function je(e$1, n$1 = 0) {
	e$1 = normalizeOptions(e$1);
	const t$1 = Vl(e$1), o$1 = _l(e$1, n$1);
	return [
		Gl(e$1),
		o$1,
		t$1
	];
}
function refineDiffOptions(e$1, n$1, t$1, o$1 = 9, r$1 = 0, i$1 = 4) {
	n$1 = normalizeOptions(n$1);
	let a$1 = $l(n$1, o$1, r$1), s$1 = parseRoundingIncInteger(n$1), c$1 = Xl(n$1, i$1);
	const u$1 = xl(n$1, o$1, r$1, 1);
	return null == a$1 ? a$1 = Math.max(t$1, u$1) : checkLargestSmallestUnit(a$1, u$1), s$1 = refineRoundingInc(s$1, u$1, 1), e$1 && (c$1 = ((e$2) => e$2 < 4 ? (e$2 + 2) % 4 : e$2)(c$1)), [
		a$1,
		u$1,
		s$1,
		c$1
	];
}
function refineRoundingOptions(e$1, n$1 = 6, t$1) {
	let o$1 = parseRoundingIncInteger(e$1 = normalizeOptionsOrString(e$1, bl));
	const r$1 = Xl(e$1, 7);
	let i$1 = xl(e$1, n$1);
	return i$1 = requirePropDefined(bl, i$1), o$1 = refineRoundingInc(o$1, i$1, void 0, t$1), [
		i$1,
		o$1,
		r$1
	];
}
function refineDateDisplayOptions(e$1) {
	return Jl(normalizeOptions(e$1));
}
function refineTimeDisplayOptions(e$1, n$1) {
	return refineTimeDisplayTuple(normalizeOptions(e$1), n$1);
}
function Ze(e$1) {
	const t$1 = refineChoiceOption(kl, Wl, normalizeOptionsOrString(e$1, kl), 0);
	if (!t$1) throw new RangeError(invalidEntity(kl, t$1));
	return t$1;
}
function refineTimeDisplayTuple(e$1, n$1 = 4) {
	const t$1 = refineSubsecDigits(e$1);
	return [Xl(e$1, 4), ...refineSmallestUnitAndSubsecDigits(xl(e$1, n$1), t$1)];
}
function refineSmallestUnitAndSubsecDigits(e$1, n$1) {
	return null != e$1 ? [Zu[e$1], e$1 < 4 ? 9 - 3 * e$1 : -1] : [void 0 === n$1 ? 1 : 10 ** (9 - n$1), n$1];
}
function parseRoundingIncInteger(e$1) {
	const n$1 = e$1[Bl];
	return void 0 === n$1 ? 1 : Za(n$1, Bl);
}
function refineRoundingInc(e$1, n$1, t$1, o$1) {
	const r$1 = o$1 ? go : Zu[n$1 + 1];
	if (r$1) {
		const t$2 = Zu[n$1];
		if (r$1 % ((e$1 = ba(Bl, e$1, 1, r$1 / t$2 - (o$1 ? 0 : 1), 1)) * t$2)) throw new RangeError(invalidEntity(Bl, e$1));
	} else e$1 = ba(Bl, e$1, 1, t$1 ? 10 ** 9 : 1, 1);
	return e$1;
}
function refineSubsecDigits(e$1) {
	let n$1 = e$1[Yl];
	if (void 0 !== n$1) {
		if ("number" != typeof n$1) {
			if ("auto" === tu(n$1)) return;
			throw new RangeError(invalidEntity(Yl, n$1));
		}
		n$1 = ba(Yl, Math.floor(n$1), 0, 9, 1);
	}
	return n$1;
}
function normalizeOptions(e$1) {
	return void 0 === e$1 ? {} : oa(e$1);
}
function normalizeOptionsOrString(e$1, n$1) {
	return "string" == typeof e$1 ? { [n$1]: e$1 } : oa(e$1);
}
function fabricateOverflowOptions(e$1) {
	return { overflow: Rl[e$1] };
}
function refineUnitOption(e$1, n$1, t$1 = 9, o$1 = 0, r$1) {
	let i$1 = n$1[e$1];
	if (void 0 === i$1) return r$1 ? o$1 : void 0;
	if (i$1 = tu(i$1), "auto" === i$1) return r$1 ? o$1 : null;
	let a$1 = Bu[i$1];
	if (void 0 === a$1 && (a$1 = ul[i$1]), void 0 === a$1) throw new RangeError(invalidChoice(e$1, i$1, Bu));
	return ba(e$1, a$1, o$1, t$1, 1, Yu), a$1;
}
function refineChoiceOption(e$1, n$1, t$1, o$1 = 0) {
	const r$1 = t$1[e$1];
	if (void 0 === r$1) return o$1;
	const i$1 = tu(r$1), a$1 = n$1[i$1];
	if (void 0 === a$1) throw new RangeError(invalidChoice(e$1, i$1, n$1));
	return a$1;
}
function checkLargestSmallestUnit(e$1, n$1) {
	if (n$1 > e$1) throw new RangeError(Eu);
}
function xe(e$1) {
	return {
		branding: Re,
		epochNanoseconds: e$1
	};
}
function Xe(e$1, n$1, t$1) {
	return {
		branding: _,
		calendar: t$1,
		timeZone: n$1,
		epochNanoseconds: e$1
	};
}
function jt(e$1, n$1 = e$1.calendar) {
	return {
		branding: x,
		calendar: n$1,
		...nn(Il, e$1)
	};
}
function W(e$1, n$1 = e$1.calendar) {
	return {
		branding: G,
		calendar: n$1,
		...nn(Ca, e$1)
	};
}
function createPlainYearMonthSlots(e$1, n$1 = e$1.calendar) {
	return {
		branding: Qt,
		calendar: n$1,
		...nn(Ca, e$1)
	};
}
function createPlainMonthDaySlots(e$1, n$1 = e$1.calendar) {
	return {
		branding: qt,
		calendar: n$1,
		...nn(Ca, e$1)
	};
}
function St(e$1) {
	return {
		branding: ft,
		...nn(hl, e$1)
	};
}
function pe(e$1) {
	return {
		branding: A,
		sign: computeDurationSign(e$1),
		...nn(il, e$1)
	};
}
function I(e$1) {
	return divModBigNano(e$1.epochNanoseconds, Ke)[0];
}
function b(e$1) {
	return bigNanoToBigInt(e$1.epochNanoseconds);
}
function fa(e$1) {
	return e$1.epochNanoseconds;
}
function J(e$1, n$1, t$1, o$1, r$1) {
	const i$1 = getMaxDurationUnit(o$1), [a$1, s$1] = ((e$2, n$2) => {
		const t$2 = n$2((e$2 = normalizeOptionsOrString(e$2, Sl))[Cl]);
		let o$2 = Hl(e$2);
		return o$2 = requirePropDefined(Sl, o$2), [o$2, t$2];
	})(r$1, e$1);
	if (!s$1 && isUniformUnit(Math.max(a$1, i$1), s$1)) return totalDayTimeDuration(o$1, a$1);
	if (!s$1) throw new RangeError(vu);
	if (!o$1.sign) return 0;
	const [u$1, l$1, f$1] = createMarkerSystem(n$1, t$1, s$1), d$1 = createMarkerToEpochNano(f$1), m$1 = createMoveMarker(f$1), p$1 = createDiffMarkers(f$1), h$1 = m$1(l$1, u$1, o$1);
	isZonedEpochSlots(s$1) || (Do(u$1), Do(h$1));
	const I$1 = p$1(l$1, u$1, h$1, a$1);
	return isUniformUnit(a$1, s$1) ? totalDayTimeDuration(I$1, a$1) : ya(I$1, d$1(h$1), a$1, l$1, u$1, d$1, m$1);
}
function ya(e$1, n$1, t$1, o$1, r$1, i$1, a$1) {
	const s$1 = computeDurationSign(e$1), [c$1, u$1] = clampRelativeDuration(o$1, dl(t$1, e$1), t$1, s$1, r$1, i$1, a$1), l$1 = ja(n$1, c$1, u$1);
	return e$1[O[t$1]] + l$1 * s$1;
}
function totalDayTimeDuration(e$1, n$1) {
	return La(durationFieldsToBigNano(e$1), Zu[n$1], 1);
}
function clampRelativeDuration(e$1, n$1, t$1, o$1, r$1, i$1, a$1) {
	const s$1 = O[t$1], c$1 = {
		...n$1,
		[s$1]: n$1[s$1] + o$1
	}, u$1 = a$1(e$1, r$1, n$1), l$1 = a$1(e$1, r$1, c$1);
	return [i$1(u$1), i$1(l$1)];
}
function ja(e$1, n$1, t$1) {
	const o$1 = La(va(n$1, t$1));
	if (!o$1) throw new RangeError(du);
	return La(va(n$1, e$1)) / o$1;
}
function Le(e$1, n$1) {
	const [t$1, o$1, r$1] = refineRoundingOptions(n$1, 5, 1);
	return xe(roundBigNano(e$1.epochNanoseconds, t$1, o$1, r$1, 1));
}
function Ie(e$1, n$1, t$1) {
	let { epochNanoseconds: o$1, timeZone: r$1, calendar: i$1 } = n$1;
	const [a$1, s$1, c$1] = refineRoundingOptions(t$1);
	if (0 === a$1 && 1 === s$1) return n$1;
	const u$1 = e$1(r$1);
	if (6 === a$1) o$1 = uo(computeDayInterval, u$1, n$1, c$1);
	else {
		const e$2 = u$1.N(o$1);
		o$1 = getMatchingInstantFor(u$1, roundDateTime(So(o$1, e$2), a$1, s$1, c$1), e$2, 2, 0, 1);
	}
	return Xe(o$1, r$1, i$1);
}
function bt(e$1, n$1) {
	return jt(roundDateTime(e$1, ...refineRoundingOptions(n$1)), e$1.calendar);
}
function lt(e$1, n$1) {
	const [t$1, o$1, r$1] = refineRoundingOptions(n$1, 5);
	var i$1;
	return St((i$1 = r$1, roundTimeToNano(e$1, computeNanoInc(t$1, o$1), i$1)[0]));
}
function Te(e$1, n$1) {
	const t$1 = e$1(n$1.timeZone), [r$1, i$1] = computeDayInterval(he(n$1, t$1)), a$1 = La(va(getStartOfDayInstantFor(t$1, r$1), getStartOfDayInstantFor(t$1, i$1)), no, 1);
	if (a$1 <= 0) throw new RangeError(du);
	return a$1;
}
function be(e$1, n$1) {
	const { timeZone: t$1, calendar: o$1 } = n$1;
	return Xe(lo(ho, e$1(t$1), n$1), t$1, o$1);
}
function lo(e$1, n$1, t$1) {
	return getStartOfDayInstantFor(n$1, e$1(he(t$1, n$1)));
}
function uo(e$1, n$1, t$1, o$1) {
	const [i$1, a$1] = e$1(he(t$1, n$1)), s$1 = t$1.epochNanoseconds, c$1 = getStartOfDayInstantFor(n$1, i$1), u$1 = getStartOfDayInstantFor(n$1, a$1);
	if (bigNanoOutside(s$1, c$1, u$1)) throw new RangeError(du);
	return Ea(ja(s$1, c$1, u$1), o$1) ? u$1 : c$1;
}
function roundDateTime(e$1, n$1, t$1, o$1) {
	return roundDateTimeToNano(e$1, computeNanoInc(n$1, t$1), o$1);
}
function roundDateTimeToNano(e$1, n$1, t$1) {
	const [o$1, r$1] = roundTimeToNano(e$1, n$1, t$1);
	return Do({
		...Ua(e$1, r$1),
		...o$1
	});
}
function roundTimeToNano(e$1, n$1, t$1) {
	return nanoToIsoTimeAndDay(Da(isoTimeFieldsToNano(e$1), n$1, t$1));
}
function roundToMinute(e$1) {
	return Da(e$1, ao, 7);
}
function computeNanoInc(e$1, n$1) {
	return Zu[e$1] * n$1;
}
function computeDayInterval(e$1) {
	const n$1 = ho(e$1);
	return [n$1, Ua(n$1, 1)];
}
function ho(e$1) {
	return Ra(6, e$1);
}
function roundDayTimeDurationByInc(e$1, n$1, t$1) {
	const o$1 = Math.min(getMaxDurationUnit(e$1), 6);
	return nanoToDurationDayTimeFields(Ya(durationFieldsToBigNano(e$1, o$1), n$1, t$1), o$1);
}
function roundRelativeDuration(e$1, n$1, t$1, o$1, r$1, i$1, a$1, s$1, c$1, u$1) {
	if (0 === o$1 && 1 === r$1) return e$1;
	let [f$1, d$1, m$1] = (isUniformUnit(o$1, s$1) ? isZonedEpochSlots(s$1) && o$1 < 6 && t$1 >= 6 ? nudgeZonedTimeDuration : nudgeDayTimeDuration : nudgeRelativeDuration)(e$1, n$1, t$1, o$1, r$1, i$1, a$1, s$1, c$1, u$1);
	return m$1 && 7 !== o$1 && (f$1 = ((e$2, n$2, t$2, o$2, r$2, i$2, a$2, s$2) => {
		const c$2 = computeDurationSign(e$2);
		for (let u$2 = o$2 + 1; u$2 <= t$2; u$2++) {
			if (7 === u$2 && 7 !== t$2) continue;
			const o$3 = dl(u$2, e$2);
			o$3[O[u$2]] += c$2;
			const l$1 = La(va(a$2(s$2(r$2, i$2, o$3)), n$2));
			if (l$1 && Math.sign(l$1) !== c$2) break;
			e$2 = o$3;
		}
		return e$2;
	})(f$1, d$1, t$1, Math.max(6, o$1), a$1, s$1, c$1, u$1)), f$1;
}
function roundBigNano(e$1, n$1, t$1, o$1, r$1) {
	return 6 === n$1 ? [Da(Oa(e$1), t$1, o$1), 0] : Ya(e$1, computeNanoInc(n$1, t$1), o$1, r$1);
}
function Ya(e$1, n$1, t$1, o$1) {
	let [r$1, i$1] = e$1;
	o$1 && i$1 < 0 && (i$1 += go, r$1 -= 1);
	const [a$1, s$1] = divModFloor(Da(i$1, n$1, t$1), go);
	return createBigNano(r$1 + a$1, s$1);
}
function Da(e$1, n$1, t$1) {
	return Ea(e$1 / n$1, t$1) * n$1;
}
function Ea(e$1, n$1) {
	return ef[n$1](e$1);
}
function nudgeDayTimeDuration(e$1, n$1, t$1, o$1, r$1, i$1) {
	const a$1 = computeDurationSign(e$1), s$1 = durationFieldsToBigNano(e$1), c$1 = roundBigNano(s$1, o$1, r$1, i$1), u$1 = va(s$1, c$1), l$1 = Math.sign(c$1[0] - s$1[0]) === a$1, f$1 = nanoToDurationDayTimeFields(c$1, Math.min(t$1, 6));
	return [
		{
			...e$1,
			...f$1
		},
		so(n$1, u$1),
		l$1
	];
}
function nudgeZonedTimeDuration(e$1, n$1, t$1, o$1, r$1, i$1, a$1, s$1, c$1, u$1) {
	const l$1 = computeDurationSign(e$1) || 1, f$1 = La(durationFieldsToBigNano(e$1, 5)), d$1 = computeNanoInc(o$1, r$1);
	let m$1 = Da(f$1, d$1, i$1);
	const [p$1, h$1] = clampRelativeDuration(a$1, {
		...e$1,
		...fl
	}, 6, l$1, s$1, c$1, u$1), I$1 = m$1 - La(va(p$1, h$1));
	let D$1 = 0;
	I$1 && Math.sign(I$1) !== l$1 ? n$1 = Ta(p$1, m$1) : (D$1 += l$1, m$1 = Da(I$1, d$1, i$1), n$1 = Ta(h$1, m$1));
	const g$1 = nanoToDurationTimeFields(m$1);
	return [
		{
			...e$1,
			...g$1,
			days: e$1.days + D$1
		},
		n$1,
		Boolean(D$1)
	];
}
function nudgeRelativeDuration(e$1, n$1, t$1, o$1, r$1, i$1, a$1, s$1, c$1, u$1) {
	const l$1 = computeDurationSign(e$1), f$1 = O[o$1], d$1 = dl(o$1, e$1);
	7 === o$1 && (e$1 = {
		...e$1,
		weeks: e$1.weeks + Math.trunc(e$1.days / 7)
	});
	const m$1 = divTrunc(e$1[f$1], r$1) * r$1;
	d$1[f$1] = m$1;
	const [p$1, h$1] = clampRelativeDuration(a$1, d$1, o$1, r$1 * l$1, s$1, c$1, u$1), I$1 = m$1 + ja(n$1, p$1, h$1) * l$1 * r$1, D$1 = Da(I$1, r$1, i$1), g$1 = Math.sign(D$1 - I$1) === l$1;
	return d$1[f$1] = D$1, [
		d$1,
		g$1 ? h$1 : p$1,
		g$1
	];
}
function ke(e$1, n$1, t$1, o$1) {
	const [r$1, i$1, a$1, s$1] = ((e$2) => {
		const n$2 = refineTimeDisplayTuple(e$2 = normalizeOptions(e$2));
		return [e$2.timeZone, ...n$2];
	})(o$1), c$1 = void 0 !== r$1;
	return ((e$2, n$2, t$2, o$2, r$2, i$2) => {
		t$2 = Ya(t$2, r$2, o$2, 1);
		const a$2 = n$2.N(t$2);
		return formatIsoDateTimeFields(So(t$2, a$2), i$2) + (e$2 ? Se(roundToMinute(a$2)) : "Z");
	})(c$1, n$1(c$1 ? e$1(r$1) : nf), t$1.epochNanoseconds, i$1, a$1, s$1);
}
function Fe(e$1, n$1, t$1) {
	const [o$1, r$1, i$1, a$1, s$1, c$1] = ((e$2) => {
		e$2 = normalizeOptions(e$2);
		const n$2 = Jl(e$2), t$2 = refineSubsecDigits(e$2), o$2 = Ql(e$2), r$2 = Xl(e$2, 4), i$2 = xl(e$2, 4);
		return [
			n$2,
			Kl(e$2),
			o$2,
			r$2,
			...refineSmallestUnitAndSubsecDigits(i$2, t$2)
		];
	})(t$1);
	return ((e$2, n$2, t$2, o$2, r$2, i$2, a$2, s$2, c$2, u$1) => {
		o$2 = Ya(o$2, c$2, s$2, 1);
		const l$1 = e$2(t$2).N(o$2);
		return formatIsoDateTimeFields(So(o$2, l$1), u$1) + Se(roundToMinute(l$1), a$2) + ((e$3, n$3) => 1 !== n$3 ? "[" + (2 === n$3 ? "!" : "") + e$3 + "]" : "")(t$2, i$2) + formatCalendar(n$2, r$2);
	})(e$1, n$1.calendar, n$1.timeZone, n$1.epochNanoseconds, o$1, r$1, i$1, a$1, s$1, c$1);
}
function Ft(e$1, n$1) {
	const [t$1, o$1, r$1, i$1] = ((e$2) => (e$2 = normalizeOptions(e$2), [Jl(e$2), ...refineTimeDisplayTuple(e$2)]))(n$1);
	return a$1 = e$1.calendar, s$1 = t$1, c$1 = i$1, formatIsoDateTimeFields(roundDateTimeToNano(e$1, r$1, o$1), c$1) + formatCalendar(a$1, s$1);
	var a$1, s$1, c$1;
}
function ce(e$1, n$1) {
	return t$1 = e$1.calendar, o$1 = e$1, r$1 = refineDateDisplayOptions(n$1), formatIsoDateFields(o$1) + formatCalendar(t$1, r$1);
	var t$1, o$1, r$1;
}
function Ht(e$1, n$1) {
	return formatDateLikeIso(e$1.calendar, formatIsoYearMonthFields, e$1, refineDateDisplayOptions(n$1));
}
function Jt(e$1, n$1) {
	return formatDateLikeIso(e$1.calendar, formatIsoMonthDayFields, e$1, refineDateDisplayOptions(n$1));
}
function ct(e$1, n$1) {
	const [t$1, o$1, r$1] = refineTimeDisplayOptions(n$1);
	return i$1 = r$1, formatIsoTimeFields(roundTimeToNano(e$1, o$1, t$1)[0], i$1);
	var i$1;
}
function k(e$1, n$1) {
	const [t$1, o$1, r$1] = refineTimeDisplayOptions(n$1, 3);
	return o$1 > 1 && checkDurationUnits(e$1 = {
		...e$1,
		...roundDayTimeDurationByInc(e$1, o$1, t$1)
	}), ((e$2, n$2) => {
		const { sign: t$2 } = e$2, o$2 = -1 === t$2 ? negateDurationFields(e$2) : e$2, { hours: r$2, minutes: i$1 } = o$2, [a$1, s$1] = divModBigNano(durationFieldsToBigNano(o$2, 3), oo, divModTrunc);
		checkDurationTimeUnit(a$1);
		const c$1 = formatSubsecNano(s$1, n$2), u$1 = n$2 >= 0 || !t$2 || c$1;
		return (t$2 < 0 ? "-" : "") + "P" + formatDurationFragments({
			Y: formatDurationNumber(o$2.years),
			M: formatDurationNumber(o$2.months),
			W: formatDurationNumber(o$2.weeks),
			D: formatDurationNumber(o$2.days)
		}) + (r$2 || i$1 || a$1 || u$1 ? "T" + formatDurationFragments({
			H: formatDurationNumber(r$2),
			M: formatDurationNumber(i$1),
			S: formatDurationNumber(a$1, u$1) + c$1
		}) : "");
	})(e$1, r$1);
}
function formatDateLikeIso(e$1, n$1, t$1, o$1) {
	return 1 === o$1 ? e$1 === l ? n$1(t$1) : formatIsoDateFields(t$1) : o$1 > 1 || 0 === o$1 && e$1 !== l ? formatIsoDateFields(t$1) + formatCalendarId(e$1, 2 === o$1) : n$1(t$1);
}
function formatDurationFragments(e$1) {
	const n$1 = [];
	for (const t$1 in e$1) {
		const o$1 = e$1[t$1];
		o$1 && n$1.push(o$1, t$1);
	}
	return n$1.join("");
}
function formatIsoDateTimeFields(e$1, n$1) {
	return formatIsoDateFields(e$1) + "T" + formatIsoTimeFields(e$1, n$1);
}
function formatIsoDateFields(e$1) {
	return formatIsoYearMonthFields(e$1) + "-" + wu(e$1.isoDay);
}
function formatIsoYearMonthFields(e$1) {
	const { isoYear: n$1 } = e$1;
	return (n$1 < 0 || n$1 > 9999 ? getSignStr(n$1) + padNumber(6, Math.abs(n$1)) : padNumber(4, n$1)) + "-" + wu(e$1.isoMonth);
}
function formatIsoMonthDayFields(e$1) {
	return wu(e$1.isoMonth) + "-" + wu(e$1.isoDay);
}
function formatIsoTimeFields(e$1, n$1) {
	const t$1 = [wu(e$1.isoHour), wu(e$1.isoMinute)];
	return -1 !== n$1 && t$1.push(wu(e$1.isoSecond) + ((e$2, n$2, t$2, o$1) => formatSubsecNano(e$2 * Ke + n$2 * ro + t$2, o$1))(e$1.isoMillisecond, e$1.isoMicrosecond, e$1.isoNanosecond, n$1)), t$1.join(":");
}
function Se(e$1, n$1 = 0) {
	if (1 === n$1) return "";
	const [t$1, o$1] = divModFloor(Math.abs(e$1), no), [r$1, i$1] = divModFloor(o$1, ao), [a$1, s$1] = divModFloor(i$1, oo);
	return getSignStr(e$1) + wu(t$1) + ":" + wu(r$1) + (a$1 || s$1 ? ":" + wu(a$1) + formatSubsecNano(s$1) : "");
}
function formatCalendar(e$1, n$1) {
	return 1 !== n$1 && (n$1 > 1 || 0 === n$1 && e$1 !== l) ? formatCalendarId(e$1, 2 === n$1) : "";
}
function formatCalendarId(e$1, n$1) {
	return "[" + (n$1 ? "!" : "") + "u-ca=" + e$1 + "]";
}
function formatSubsecNano(e$1, n$1) {
	let t$1 = padNumber(9, e$1);
	return t$1 = void 0 === n$1 ? t$1.replace(af, "") : t$1.slice(0, n$1), t$1 ? "." + t$1 : "";
}
function getSignStr(e$1) {
	return e$1 < 0 ? "-" : "+";
}
function formatDurationNumber(e$1, n$1) {
	return e$1 || n$1 ? e$1.toLocaleString("fullwide", { useGrouping: 0 }) : "";
}
function _zonedEpochSlotsToIso(e$1, n$1) {
	const { epochNanoseconds: t$1 } = e$1, o$1 = (n$1.N ? n$1 : n$1(e$1.timeZone)).N(t$1), r$1 = So(t$1, o$1);
	return {
		calendar: e$1.calendar,
		...r$1,
		offsetNanoseconds: o$1
	};
}
function getMatchingInstantFor(e$1, n$1, t$1, o$1 = 0, r$1 = 0, i$1, a$1) {
	if (void 0 !== t$1 && 1 === o$1 && (1 === o$1 || a$1)) return isoToEpochNanoWithOffset(n$1, t$1);
	const s$1 = e$1.v(n$1);
	if (void 0 !== t$1 && 3 !== o$1) {
		const e$2 = ((e$3, n$2, t$2, o$2) => {
			const r$2 = ma(n$2);
			o$2 && (t$2 = roundToMinute(t$2));
			for (const n$3 of e$3) {
				let e$4 = La(va(n$3, r$2));
				if (o$2 && (e$4 = roundToMinute(e$4)), e$4 === t$2) return n$3;
			}
		})(s$1, n$1, t$1, i$1);
		if (void 0 !== e$2) return e$2;
		if (0 === o$1) throw new RangeError(gu);
	}
	return a$1 ? ma(n$1) : $o(e$1, n$1, r$1, s$1);
}
function $o(e$1, n$1, t$1 = 0, o$1 = e$1.v(n$1)) {
	if (1 === o$1.length) return o$1[0];
	if (1 === t$1) throw new RangeError(Tu);
	if (o$1.length) return o$1[3 === t$1 ? 1 : 0];
	const r$1 = ma(n$1), a$1 = ((e$2, n$2) => {
		const t$2 = e$2.N(Ta(n$2, -go));
		return ((e$3) => {
			if (e$3 > go) throw new RangeError(Du);
			return e$3;
		})(e$2.N(Ta(n$2, go)) - t$2);
	})(e$1, r$1) * (2 === t$1 ? -1 : 1);
	return (o$1 = e$1.v(So(r$1, a$1)))[2 === t$1 ? 0 : o$1.length - 1];
}
function getStartOfDayInstantFor(e$1, n$1) {
	const t$1 = e$1.v(n$1);
	if (t$1.length) return t$1[0];
	const o$1 = Ta(ma(n$1), -go);
	return e$1.l(o$1, 1);
}
function Ye(e$1, n$1, t$1) {
	return xe(io(so(n$1.epochNanoseconds, ((e$2) => {
		if (durationHasDateParts(e$2)) throw new RangeError(Pu);
		return durationFieldsToBigNano(e$2, 5);
	})(e$1 ? negateDurationFields(t$1) : t$1))));
}
function Oe(e$1, n$1, t$1, o$1, r$1, i$1 = Object.create(null)) {
	const a$1 = n$1(o$1.timeZone), s$1 = e$1(o$1.calendar);
	return {
		...o$1,
		...Fa(a$1, s$1, o$1, t$1 ? negateDurationFields(r$1) : r$1, i$1)
	};
}
function wt(e$1, n$1, t$1, o$1, r$1 = Object.create(null)) {
	const { calendar: i$1 } = t$1;
	return jt(ka(e$1(i$1), t$1, n$1 ? negateDurationFields(o$1) : o$1, r$1), i$1);
}
function ne(e$1, n$1, t$1, o$1, r$1) {
	const { calendar: i$1 } = t$1;
	return W(moveDate(e$1(i$1), t$1, n$1 ? negateDurationFields(o$1) : o$1, r$1), i$1);
}
function Gt(e$1, n$1, t$1, o$1, r$1) {
	const i$1 = t$1.calendar, a$1 = e$1(i$1);
	let s$1 = To(Na(a$1, t$1));
	n$1 && (o$1 = B(o$1)), o$1.sign < 0 && (s$1 = a$1.P(s$1, {
		...ll,
		months: 1
	}), s$1 = Ua(s$1, -1));
	return createPlainYearMonthSlots(Na(a$1, a$1.P(s$1, o$1, r$1)), i$1);
}
function at(e$1, n$1, t$1) {
	return St(moveTime(n$1, e$1 ? negateDurationFields(t$1) : t$1)[0]);
}
function Fa(e$1, n$1, t$1, o$1, r$1) {
	const i$1 = durationFieldsToBigNano(o$1, 5);
	let a$1 = t$1.epochNanoseconds;
	if (durationHasDateParts(o$1)) {
		const s$1 = he(t$1, e$1);
		a$1 = so($o(e$1, {
			...moveDate(n$1, s$1, {
				...o$1,
				...fl
			}, r$1),
			...nn(w, s$1)
		}), i$1);
	} else a$1 = so(a$1, i$1), dt(r$1);
	return { epochNanoseconds: io(a$1) };
}
function ka(e$1, n$1, t$1, o$1) {
	const [r$1, i$1] = moveTime(n$1, t$1);
	return Do({
		...moveDate(e$1, n$1, {
			...t$1,
			...fl,
			days: t$1.days + i$1
		}, o$1),
		...r$1
	});
}
function moveDate(e$1, n$1, t$1, o$1) {
	if (t$1.years || t$1.months || t$1.weeks) return e$1.P(n$1, t$1, o$1);
	dt(o$1);
	const r$1 = t$1.days + durationFieldsToBigNano(t$1, 5)[0];
	return r$1 ? To(Ua(n$1, r$1)) : n$1;
}
function Na(e$1, n$1, t$1 = 1) {
	return Ua(n$1, t$1 - e$1.day(n$1));
}
function moveTime(e$1, n$1) {
	const [t$1, o$1] = durationFieldsToBigNano(n$1, 5), [r$1, i$1] = nanoToIsoTimeAndDay(isoTimeFieldsToNano(e$1) + o$1);
	return [r$1, t$1 + i$1];
}
function nativeDateAdd(e$1, n$1, t$1) {
	const o$1 = dt(t$1);
	let r$1, { years: i$1, months: a$1, weeks: s$1, days: c$1 } = n$1;
	if (c$1 += durationFieldsToBigNano(n$1, 5)[0], i$1 || a$1) r$1 = wa(this, e$1, i$1, a$1, o$1);
	else {
		if (!s$1 && !c$1) return e$1;
		r$1 = isoToEpochMilli(e$1);
	}
	if (void 0 === r$1) throw new RangeError(Mu);
	return r$1 += (7 * s$1 + c$1) * Cu, To(Pa(r$1));
}
function wa(e$1, n$1, t$1, o$1, r$1) {
	let [i$1, a$1, s$1] = e$1.u(n$1);
	if (t$1) {
		const [n$2, o$2] = e$1.m(i$1, a$1);
		i$1 += t$1, a$1 = monthCodeNumberToMonth(n$2, o$2, e$1.F(i$1)), a$1 = ba("month", a$1, 1, e$1.O(i$1), r$1);
	}
	return o$1 && ([i$1, a$1] = e$1.p(i$1, a$1, o$1)), s$1 = ba("day", s$1, 1, e$1.B(i$1, a$1), r$1), e$1.M(i$1, a$1, s$1);
}
function isoMonthAdd(e$1, n$1, t$1) {
	return e$1 += divTrunc(t$1, Fl), (n$1 += modTrunc(t$1, Fl)) < 1 ? (e$1--, n$1 += Fl) : n$1 > Fl && (e$1++, n$1 -= Fl), [e$1, n$1];
}
function intlMonthAdd(e$1, n$1, t$1) {
	if (t$1) {
		if (n$1 += t$1, !Number.isSafeInteger(n$1)) throw new RangeError(Mu);
		if (t$1 < 0) for (; n$1 < 1;) n$1 += computeIntlMonthsInYear.call(this, --e$1);
		else {
			let t$2;
			for (; n$1 > (t$2 = computeIntlMonthsInYear.call(this, e$1));) n$1 -= t$2, e$1++;
		}
	}
	return [e$1, n$1];
}
function Ua(e$1, n$1) {
	return n$1 ? {
		...e$1,
		...Pa(isoToEpochMilli(e$1) + n$1 * Cu)
	} : e$1;
}
function createMarkerSystem(e$1, n$1, t$1) {
	const o$1 = e$1(t$1.calendar);
	return isZonedEpochSlots(t$1) ? [
		t$1,
		o$1,
		n$1(t$1.timeZone)
	] : [{
		...t$1,
		...At
	}, o$1];
}
function createMarkerToEpochNano(e$1) {
	return e$1 ? fa : ma;
}
function createMoveMarker(e$1) {
	return e$1 ? gt(Fa, e$1) : ka;
}
function createDiffMarkers(e$1) {
	return e$1 ? gt(diffZonedEpochsExact, e$1) : diffDateTimesExact;
}
function isZonedEpochSlots(e$1) {
	return e$1 && e$1.epochNanoseconds;
}
function isUniformUnit(e$1, n$1) {
	return e$1 <= 6 - (isZonedEpochSlots(n$1) ? 1 : 0);
}
function E(e$1, n$1, t$1, o$1, r$1, i$1, a$1) {
	const s$1 = e$1(normalizeOptions(a$1).relativeTo), c$1 = Math.max(getMaxDurationUnit(r$1), getMaxDurationUnit(i$1));
	if (isUniformUnit(c$1, s$1)) return pe(checkDurationUnits(((e$2, n$2, t$2, o$2) => {
		const r$2 = so(durationFieldsToBigNano(e$2), durationFieldsToBigNano(n$2), o$2 ? -1 : 1);
		if (!Number.isFinite(r$2[0])) throw new RangeError(Mu);
		return {
			...ll,
			...nanoToDurationDayTimeFields(r$2, t$2)
		};
	})(r$1, i$1, c$1, o$1)));
	if (!s$1) throw new RangeError(vu);
	o$1 && (i$1 = negateDurationFields(i$1));
	const [u$1, l$1, f$1] = createMarkerSystem(n$1, t$1, s$1), d$1 = createMoveMarker(f$1);
	return pe(createDiffMarkers(f$1)(l$1, u$1, d$1(l$1, d$1(l$1, u$1, r$1), i$1), c$1));
}
function V(e$1, n$1, t$1, o$1, r$1) {
	const i$1 = getMaxDurationUnit(o$1), [a$1, s$1, c$1, u$1, l$1] = ((e$2, n$2, t$2) => {
		e$2 = normalizeOptionsOrString(e$2, bl);
		let o$2 = $l(e$2);
		const r$2 = t$2(e$2[Cl]);
		let i$2 = parseRoundingIncInteger(e$2);
		const a$2 = Xl(e$2, 7);
		let s$2 = xl(e$2);
		if (void 0 === o$2 && void 0 === s$2) throw new RangeError(Fu);
		if (s$2 ??= 0, o$2 ??= Math.max(s$2, n$2), checkLargestSmallestUnit(o$2, s$2), i$2 = refineRoundingInc(i$2, s$2, 1), i$2 > 1 && s$2 > 5 && o$2 !== s$2) throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
		return [
			o$2,
			s$2,
			i$2,
			a$2,
			r$2
		];
	})(r$1, i$1, e$1);
	if (!l$1 && Math.max(i$1, a$1) <= 6) return pe(checkDurationUnits(((e$2, n$2, t$2, o$2, r$2) => {
		const i$2 = roundBigNano(durationFieldsToBigNano(e$2), t$2, o$2, r$2);
		return {
			...ll,
			...nanoToDurationDayTimeFields(i$2, n$2)
		};
	})(o$1, a$1, s$1, c$1, u$1)));
	if (!isZonedEpochSlots(l$1) && !o$1.sign) return o$1;
	if (!l$1) throw new RangeError(vu);
	const [d$1, m$1, p$1] = createMarkerSystem(n$1, t$1, l$1), h$1 = createMarkerToEpochNano(p$1), I$1 = createMoveMarker(p$1), D$1 = createDiffMarkers(p$1), g$1 = I$1(m$1, d$1, o$1);
	isZonedEpochSlots(l$1) || (Do(d$1), Do(g$1));
	let T$1 = D$1(m$1, d$1, g$1, a$1);
	const M$1 = o$1.sign, y$1 = computeDurationSign(T$1);
	if (M$1 && y$1 && M$1 !== y$1) throw new RangeError(du);
	return T$1 = roundRelativeDuration(T$1, h$1(g$1), a$1, s$1, c$1, u$1, m$1, d$1, h$1, I$1), pe(T$1);
}
function Y(e$1) {
	return -1 === e$1.sign ? B(e$1) : e$1;
}
function B(e$1) {
	return pe(negateDurationFields(e$1));
}
function negateDurationFields(e$1) {
	const n$1 = {};
	for (const t$1 of O) n$1[t$1] = -1 * e$1[t$1] || 0;
	return n$1;
}
function y(e$1) {
	return !e$1.sign;
}
function computeDurationSign(e$1, n$1 = O) {
	let t$1 = 0;
	for (const o$1 of n$1) {
		const n$2 = Math.sign(e$1[o$1]);
		if (n$2) {
			if (t$1 && t$1 !== n$2) throw new RangeError(Nu);
			t$1 = n$2;
		}
	}
	return t$1;
}
function checkDurationUnits(e$1) {
	for (const n$1 of cl) ba(n$1, e$1[n$1], -sf, sf, 1);
	return checkDurationTimeUnit(La(durationFieldsToBigNano(e$1), oo)), e$1;
}
function checkDurationTimeUnit(e$1) {
	if (!Number.isSafeInteger(e$1)) throw new RangeError(yu);
}
function durationFieldsToBigNano(e$1, n$1 = 6) {
	return givenFieldsToBigNano(e$1, n$1, O);
}
function nanoToDurationDayTimeFields(e$1, n$1 = 6) {
	const [t$1, o$1] = e$1, r$1 = nanoToGivenFields(o$1, n$1, O);
	if (r$1[O[n$1]] += t$1 * (go / Zu[n$1]), !Number.isFinite(r$1[O[n$1]])) throw new RangeError(Mu);
	return r$1;
}
function nanoToDurationTimeFields(e$1, n$1 = 5) {
	return nanoToGivenFields(e$1, n$1, O);
}
function durationHasDateParts(e$1) {
	return Boolean(computeDurationSign(e$1, sl));
}
function getMaxDurationUnit(e$1) {
	let n$1 = 9;
	for (; n$1 > 0 && !e$1[O[n$1]]; n$1--);
	return n$1;
}
function createSplitTuple(e$1, n$1) {
	return [e$1, n$1];
}
function computePeriod(e$1) {
	const n$1 = Math.floor(e$1 / tf) * tf;
	return [n$1, n$1 + tf];
}
function We(e$1) {
	const n$1 = parseDateTimeLike(e$1 = toStringViaPrimitive(e$1));
	if (!n$1) throw new RangeError(failedParse(e$1));
	let t$1;
	if (n$1.C) t$1 = 0;
	else {
		if (!n$1.offset) throw new RangeError(failedParse(e$1));
		t$1 = parseOffsetNano(n$1.offset);
	}
	return n$1.timeZone && parseOffsetNanoMaybe(n$1.timeZone, 1), xe(isoToEpochNanoWithOffset(checkIsoDateTimeFields(n$1), t$1));
}
function $(e$1) {
	const n$1 = parseDateTimeLike(d(e$1));
	if (!n$1) throw new RangeError(failedParse(e$1));
	if (n$1.timeZone) return finalizeZonedDateTime(n$1, n$1.offset ? parseOffsetNano(n$1.offset) : void 0);
	if (n$1.C) throw new RangeError(failedParse(e$1));
	return finalizeDate(n$1);
}
function Ne(e$1, n$1) {
	const t$1 = parseDateTimeLike(d(e$1));
	if (!t$1 || !t$1.timeZone) throw new RangeError(failedParse(e$1));
	const { offset: o$1 } = t$1, r$1 = o$1 ? parseOffsetNano(o$1) : void 0, [, i$1, a$1] = je(n$1);
	return finalizeZonedDateTime(t$1, r$1, i$1, a$1);
}
function parseOffsetNano(e$1) {
	const n$1 = parseOffsetNanoMaybe(e$1);
	if (void 0 === n$1) throw new RangeError(failedParse(e$1));
	return n$1;
}
function Bt(e$1) {
	const n$1 = parseDateTimeLike(d(e$1));
	if (!n$1 || n$1.C) throw new RangeError(failedParse(e$1));
	return jt(finalizeDateTime(n$1));
}
function me(e$1, n$1, t$1) {
	let o$1 = parseDateTimeLike(d(e$1));
	if (!o$1 || o$1.C) throw new RangeError(failedParse(e$1));
	return n$1 ? o$1.calendar === l && (o$1 = -271821 === o$1.isoYear && 4 === o$1.isoMonth ? {
		...o$1,
		isoDay: 20,
		...At
	} : {
		...o$1,
		isoDay: 1,
		...At
	}) : t$1 && o$1.calendar === l && (o$1 = {
		...o$1,
		isoYear: Pl
	}), W(o$1.k ? finalizeDateTime(o$1) : finalizeDate(o$1));
}
function Xt(e$1, n$1) {
	const t$1 = parseYearMonthOnly(d(n$1));
	if (t$1) return requireIsoCalendar(t$1), createPlainYearMonthSlots(checkIsoYearMonthInBounds(checkIsoDateFields(t$1)));
	const o$1 = me(n$1, 1);
	return createPlainYearMonthSlots(Na(e$1(o$1.calendar), o$1));
}
function requireIsoCalendar(e$1) {
	if (e$1.calendar !== l) throw new RangeError(invalidSubstring(e$1.calendar));
}
function xt(e$1, n$1) {
	const t$1 = parseMonthDayOnly(d(n$1));
	if (t$1) return requireIsoCalendar(t$1), createPlainMonthDaySlots(checkIsoDateFields(t$1));
	const o$1 = me(n$1, 0, 1), { calendar: r$1 } = o$1, i$1 = e$1(r$1), [a$1, s$1, c$1] = i$1.u(o$1), [u$1, l$1] = i$1.m(a$1, s$1), [f$1, m$1] = i$1.R(u$1, l$1, c$1);
	return createPlainMonthDaySlots(To(i$1.U(f$1, m$1, c$1)), r$1);
}
function ht(e$1) {
	let n$1, t$1 = ((e$2) => {
		const n$2 = Tf.exec(e$2);
		return n$2 ? (organizeAnnotationParts(n$2[10]), organizeTimeParts(n$2)) : void 0;
	})(d(e$1));
	if (!t$1) {
		if (t$1 = parseDateTimeLike(e$1), !t$1) throw new RangeError(failedParse(e$1));
		if (!t$1.k) throw new RangeError(failedParse(e$1));
		if (t$1.C) throw new RangeError(invalidSubstring("Z"));
		requireIsoCalendar(t$1);
	}
	if ((n$1 = parseYearMonthOnly(e$1)) && isIsoDateFieldsValid(n$1)) throw new RangeError(failedParse(e$1));
	if ((n$1 = parseMonthDayOnly(e$1)) && isIsoDateFieldsValid(n$1)) throw new RangeError(failedParse(e$1));
	return St(constrainIsoTimeFields(t$1, 1));
}
function R(e$1) {
	const n$1 = ((e$2) => {
		const n$2 = Nf.exec(e$2);
		return n$2 ? ((e$3) => {
			function parseUnit(e$4, r$2, i$1) {
				let a$1 = 0, s$1 = 0;
				if (i$1 && ([a$1, o$1] = divModFloor(o$1, Zu[i$1])), void 0 !== e$4) {
					if (t$1) throw new RangeError(invalidSubstring(e$4));
					s$1 = ((e$5) => {
						const n$4 = parseInt(e$5);
						if (!Number.isFinite(n$4)) throw new RangeError(invalidSubstring(e$5));
						return n$4;
					})(e$4), n$3 = 1, r$2 && (o$1 = parseSubsecNano(r$2) * (Zu[i$1] / oo), t$1 = 1);
				}
				return a$1 + s$1;
			}
			let n$3 = 0, t$1 = 0, o$1 = 0, r$1 = {
				...zipProps(O, [
					parseUnit(e$3[2]),
					parseUnit(e$3[3]),
					parseUnit(e$3[4]),
					parseUnit(e$3[5]),
					parseUnit(e$3[6], e$3[7], 5),
					parseUnit(e$3[8], e$3[9], 4),
					parseUnit(e$3[10], e$3[11], 3)
				]),
				...nanoToGivenFields(o$1, 2, O)
			};
			if (!n$3) throw new RangeError(noValidFields(O));
			return parseSign(e$3[1]) < 0 && (r$1 = negateDurationFields(r$1)), r$1;
		})(n$2) : void 0;
	})(d(e$1));
	if (!n$1) throw new RangeError(failedParse(e$1));
	return pe(checkDurationUnits(n$1));
}
function f(e$1) {
	const n$1 = parseDateTimeLike(e$1) || parseYearMonthOnly(e$1) || parseMonthDayOnly(e$1);
	return n$1 ? n$1.calendar : e$1;
}
function M(e$1) {
	const n$1 = parseDateTimeLike(e$1);
	return n$1 && (n$1.timeZone || n$1.C && nf || n$1.offset) || e$1;
}
function finalizeZonedDateTime(e$1, n$1, t$1 = 0, o$1 = 0) {
	const r$1 = Z(e$1.timeZone), i$1 = L(r$1);
	let a$1;
	return checkIsoDateTimeFields(e$1), a$1 = e$1.k ? getMatchingInstantFor(i$1, e$1, n$1, t$1, o$1, !i$1.j, e$1.C) : getStartOfDayInstantFor(i$1, e$1), Xe(a$1, r$1, u(e$1.calendar));
}
function finalizeDateTime(e$1) {
	return resolveSlotsCalendar(Do(checkIsoDateTimeFields(e$1)));
}
function finalizeDate(e$1) {
	return resolveSlotsCalendar(To(checkIsoDateFields(e$1)));
}
function resolveSlotsCalendar(e$1) {
	return {
		...e$1,
		calendar: u(e$1.calendar)
	};
}
function parseDateTimeLike(e$1) {
	const n$1 = gf.exec(e$1);
	return n$1 ? ((e$2) => {
		const n$2 = e$2[10], t$1 = "Z" === (n$2 || "").toUpperCase();
		return {
			isoYear: organizeIsoYearParts(e$2),
			isoMonth: parseInt(e$2[4]),
			isoDay: parseInt(e$2[5]),
			...organizeTimeParts(e$2.slice(5)),
			...organizeAnnotationParts(e$2[16]),
			k: Boolean(e$2[6]),
			C: t$1,
			offset: t$1 ? void 0 : n$2
		};
	})(n$1) : void 0;
}
function parseYearMonthOnly(e$1) {
	const n$1 = If.exec(e$1);
	return n$1 ? ((e$2) => ({
		isoYear: organizeIsoYearParts(e$2),
		isoMonth: parseInt(e$2[4]),
		isoDay: 1,
		...organizeAnnotationParts(e$2[5])
	}))(n$1) : void 0;
}
function parseMonthDayOnly(e$1) {
	const n$1 = Df.exec(e$1);
	return n$1 ? ((e$2) => ({
		isoYear: Pl,
		isoMonth: parseInt(e$2[1]),
		isoDay: parseInt(e$2[2]),
		...organizeAnnotationParts(e$2[3])
	}))(n$1) : void 0;
}
function parseOffsetNanoMaybe(e$1, n$1) {
	const t$1 = Mf.exec(e$1);
	return t$1 ? ((e$2, n$2) => {
		const t$2 = e$2[4] || e$2[5];
		if (n$2 && t$2) throw new RangeError(invalidSubstring(t$2));
		return ((e$3) => {
			if (Math.abs(e$3) >= go) throw new RangeError(Iu);
			return e$3;
		})((parseInt0(e$2[2]) * no + parseInt0(e$2[3]) * ao + parseInt0(e$2[4]) * oo + parseSubsecNano(e$2[5] || "")) * parseSign(e$2[1]));
	})(t$1, n$1) : void 0;
}
function organizeIsoYearParts(e$1) {
	const n$1 = parseSign(e$1[1]), t$1 = parseInt(e$1[2] || e$1[3]);
	if (n$1 < 0 && !t$1) throw new RangeError(invalidSubstring(-0));
	return n$1 * t$1;
}
function organizeTimeParts(e$1) {
	const n$1 = parseInt0(e$1[3]);
	return {
		...nanoToIsoTimeAndDay(parseSubsecNano(e$1[4] || ""))[0],
		isoHour: parseInt0(e$1[1]),
		isoMinute: parseInt0(e$1[2]),
		isoSecond: 60 === n$1 ? 59 : n$1
	};
}
function organizeAnnotationParts(e$1) {
	let n$1, t$1;
	const o$1 = [];
	if (e$1.replace(yf, ((e$2, r$1, i$1) => {
		const a$1 = Boolean(r$1), [s$1, c$1] = i$1.split("=").reverse();
		if (c$1) {
			if ("u-ca" === c$1) o$1.push(s$1), n$1 || (n$1 = a$1);
			else if (a$1 || /[A-Z]/.test(c$1)) throw new RangeError(invalidSubstring(e$2));
		} else {
			if (t$1) throw new RangeError(invalidSubstring(e$2));
			t$1 = s$1;
		}
		return "";
	})), o$1.length > 1 && n$1) throw new RangeError(invalidSubstring(e$1));
	return {
		timeZone: t$1,
		calendar: o$1[0] || l
	};
}
function parseSubsecNano(e$1) {
	return parseInt(e$1.padEnd(9, "0"));
}
function createRegExp(e$1) {
	return new RegExp(`^${e$1}$`, "i");
}
function parseSign(e$1) {
	return e$1 && "+" !== e$1 ? -1 : 1;
}
function parseInt0(e$1) {
	return void 0 === e$1 ? 0 : parseInt(e$1);
}
function Me(e$1) {
	return Z(d(e$1));
}
function Z(e$1) {
	const n$1 = getTimeZoneEssence(e$1);
	return "number" == typeof n$1 ? Se(n$1) : n$1 ? ((e$2) => {
		if (Ff.test(e$2)) throw new RangeError(F(e$2));
		if (Pf.test(e$2)) throw new RangeError(hu);
		return e$2.toLowerCase().split("/").map(((e$3, n$2) => (e$3.length <= 3 || /\d/.test(e$3)) && !/etc|yap/.test(e$3) ? e$3.toUpperCase() : e$3.replace(/baja|dumont|[a-z]+/g, ((e$4, t$1) => e$4.length <= 2 && !n$2 || "in" === e$4 || "chat" === e$4 ? e$4.toUpperCase() : e$4.length > 2 || !t$1 ? capitalize(e$4).replace(/island|noronha|murdo|rivadavia|urville/, capitalize) : e$4)))).join("/");
	})(e$1) : nf;
}
function getTimeZoneAtomic(e$1) {
	const n$1 = getTimeZoneEssence(e$1);
	return "number" == typeof n$1 ? n$1 : n$1 ? n$1.resolvedOptions().timeZone : nf;
}
function getTimeZoneEssence(e$1) {
	const n$1 = parseOffsetNanoMaybe(e$1 = e$1.toUpperCase(), 1);
	return void 0 !== n$1 ? n$1 : e$1 !== nf ? vf(e$1) : void 0;
}
function He(e$1, n$1) {
	return pa(e$1.epochNanoseconds, n$1.epochNanoseconds);
}
function Be(e$1, n$1) {
	return pa(e$1.epochNanoseconds, n$1.epochNanoseconds);
}
function H(e$1, n$1, t$1, o$1, r$1, i$1) {
	const a$1 = e$1(normalizeOptions(i$1).relativeTo), s$1 = Math.max(getMaxDurationUnit(o$1), getMaxDurationUnit(r$1));
	if (allPropsEqual(O, o$1, r$1)) return 0;
	if (isUniformUnit(s$1, a$1)) return pa(durationFieldsToBigNano(o$1), durationFieldsToBigNano(r$1));
	if (!a$1) throw new RangeError(vu);
	const [c$1, u$1, l$1] = createMarkerSystem(n$1, t$1, a$1), f$1 = createMarkerToEpochNano(l$1), d$1 = createMoveMarker(l$1);
	return pa(f$1(d$1(u$1, c$1, o$1)), f$1(d$1(u$1, c$1, r$1)));
}
function Yt(e$1, n$1) {
	return te(e$1, n$1) || Dt(e$1, n$1);
}
function te(e$1, n$1) {
	return compareNumbers(isoToEpochMilli(e$1), isoToEpochMilli(n$1));
}
function Dt(e$1, n$1) {
	return compareNumbers(isoTimeFieldsToNano(e$1), isoTimeFieldsToNano(n$1));
}
function Ve(e$1, n$1) {
	return !He(e$1, n$1);
}
function ve(e$1, n$1) {
	return !Be(e$1, n$1) && !!isTimeZoneIdsEqual(e$1.timeZone, n$1.timeZone) && e$1.calendar === n$1.calendar;
}
function vt(e$1, n$1) {
	return !Yt(e$1, n$1) && e$1.calendar === n$1.calendar;
}
function re(e$1, n$1) {
	return !te(e$1, n$1) && e$1.calendar === n$1.calendar;
}
function zt(e$1, n$1) {
	return !te(e$1, n$1) && e$1.calendar === n$1.calendar;
}
function Lt(e$1, n$1) {
	return !te(e$1, n$1) && e$1.calendar === n$1.calendar;
}
function st(e$1, n$1) {
	return !Dt(e$1, n$1);
}
function isTimeZoneIdsEqual(e$1, n$1) {
	if (e$1 === n$1) return 1;
	try {
		return getTimeZoneAtomic(e$1) === getTimeZoneAtomic(n$1);
	} catch (e$2) {}
}
function Ee(e$1, n$1, t$1, o$1) {
	const r$1 = refineDiffOptions(e$1, o$1, 3, 5), i$1 = diffEpochNanos(n$1.epochNanoseconds, t$1.epochNanoseconds, ...r$1);
	return pe(e$1 ? negateDurationFields(i$1) : i$1);
}
function we(e$1, n$1, t$1, o$1, r$1, i$1) {
	const a$1 = ha(o$1.calendar, r$1.calendar), [s$1, c$1, u$1, l$1] = refineDiffOptions(t$1, i$1, 5), f$1 = o$1.epochNanoseconds, d$1 = r$1.epochNanoseconds, m$1 = pa(d$1, f$1);
	let p$1;
	if (m$1) if (s$1 < 6) p$1 = diffEpochNanos(f$1, d$1, s$1, c$1, u$1, l$1);
	else {
		const t$2 = n$1(ga(o$1.timeZone, r$1.timeZone)), f$2 = e$1(a$1);
		p$1 = diffZonedEpochsBig(f$2, t$2, o$1, r$1, m$1, s$1, i$1), p$1 = roundRelativeDuration(p$1, d$1, s$1, c$1, u$1, l$1, f$2, o$1, fa, gt(Fa, t$2));
	}
	else p$1 = ll;
	return pe(t$1 ? negateDurationFields(p$1) : p$1);
}
function It(e$1, n$1, t$1, o$1, r$1) {
	const i$1 = ha(t$1.calendar, o$1.calendar), [a$1, s$1, c$1, u$1] = refineDiffOptions(n$1, r$1, 6), l$1 = ma(t$1), f$1 = ma(o$1), d$1 = pa(f$1, l$1);
	let m$1;
	if (d$1) if (a$1 <= 6) m$1 = diffEpochNanos(l$1, f$1, a$1, s$1, c$1, u$1);
	else {
		const n$2 = e$1(i$1);
		m$1 = diffDateTimesBig(n$2, t$1, o$1, d$1, a$1, r$1), m$1 = roundRelativeDuration(m$1, f$1, a$1, s$1, c$1, u$1, n$2, t$1, ma, ka);
	}
	else m$1 = ll;
	return pe(n$1 ? negateDurationFields(m$1) : m$1);
}
function oe(e$1, n$1, t$1, o$1, r$1) {
	const i$1 = ha(t$1.calendar, o$1.calendar);
	return diffDateLike(n$1, (() => e$1(i$1)), t$1, o$1, ...refineDiffOptions(n$1, r$1, 6, 9, 6));
}
function _t(e$1, n$1, t$1, o$1, r$1) {
	const i$1 = ha(t$1.calendar, o$1.calendar), a$1 = refineDiffOptions(n$1, r$1, 9, 9, 8), s$1 = e$1(i$1), c$1 = Na(s$1, t$1), u$1 = Na(s$1, o$1);
	return c$1.isoYear === u$1.isoYear && c$1.isoMonth === u$1.isoMonth && c$1.isoDay === u$1.isoDay ? pe(ll) : diffDateLike(n$1, (() => s$1), To(c$1), To(u$1), ...a$1, 8);
}
function diffDateLike(e$1, n$1, t$1, o$1, r$1, i$1, a$1, s$1, c$1 = 6) {
	const u$1 = ma(t$1), l$1 = ma(o$1);
	if (void 0 === u$1 || void 0 === l$1) throw new RangeError(Mu);
	let f$1;
	if (pa(l$1, u$1)) if (6 === r$1) f$1 = diffEpochNanos(u$1, l$1, r$1, i$1, a$1, s$1);
	else {
		const e$2 = n$1();
		f$1 = e$2.h(t$1, o$1, r$1), i$1 === c$1 && 1 === a$1 || (f$1 = roundRelativeDuration(f$1, l$1, r$1, i$1, a$1, s$1, e$2, t$1, ma, moveDate));
	}
	else f$1 = ll;
	return pe(e$1 ? negateDurationFields(f$1) : f$1);
}
function it(e$1, n$1, t$1, o$1) {
	const [r$1, i$1, a$1, s$1] = refineDiffOptions(e$1, o$1, 5, 5), c$1 = Da(diffTimes(n$1, t$1), computeNanoInc(i$1, a$1), s$1), u$1 = {
		...ll,
		...nanoToDurationTimeFields(c$1, r$1)
	};
	return pe(e$1 ? negateDurationFields(u$1) : u$1);
}
function diffZonedEpochsExact(e$1, n$1, t$1, o$1, r$1, i$1) {
	const a$1 = pa(o$1.epochNanoseconds, t$1.epochNanoseconds);
	return a$1 ? r$1 < 6 ? diffEpochNanosExact(t$1.epochNanoseconds, o$1.epochNanoseconds, r$1) : diffZonedEpochsBig(n$1, e$1, t$1, o$1, a$1, r$1, i$1) : ll;
}
function diffDateTimesExact(e$1, n$1, t$1, o$1, r$1) {
	const i$1 = ma(n$1), a$1 = ma(t$1), s$1 = pa(a$1, i$1);
	return s$1 ? o$1 <= 6 ? diffEpochNanosExact(i$1, a$1, o$1) : diffDateTimesBig(e$1, n$1, t$1, s$1, o$1, r$1) : ll;
}
function diffZonedEpochsBig(e$1, n$1, t$1, o$1, r$1, i$1, a$1) {
	const [s$1, c$1, u$1] = Sa(n$1, t$1, o$1, r$1);
	var l$1, f$1;
	return {
		...6 === i$1 ? (l$1 = s$1, f$1 = c$1, {
			...ll,
			days: td(l$1, f$1)
		}) : e$1.h(s$1, c$1, i$1, a$1),
		...nanoToDurationTimeFields(u$1)
	};
}
function diffDateTimesBig(e$1, n$1, t$1, o$1, r$1, i$1) {
	const [a$1, s$1, c$1] = ((e$2, n$2, t$2) => {
		let o$2 = n$2, r$2 = diffTimes(e$2, n$2);
		return Math.sign(r$2) === -t$2 && (o$2 = Ua(n$2, -t$2), r$2 += go * t$2), [
			e$2,
			o$2,
			r$2
		];
	})(n$1, t$1, o$1);
	return {
		...e$1.h(a$1, s$1, r$1, i$1),
		...nanoToDurationTimeFields(c$1)
	};
}
function Sa(e$1, n$1, t$1, o$1) {
	function updateMid() {
		return l$1 = {
			...Ua(a$1, c$1++ * -o$1),
			...i$1
		}, f$1 = $o(e$1, l$1), pa(s$1, f$1) === -o$1;
	}
	const r$1 = he(n$1, e$1), i$1 = nn(w, r$1), a$1 = he(t$1, e$1), s$1 = t$1.epochNanoseconds;
	let c$1 = 0;
	const u$1 = diffTimes(r$1, a$1);
	let l$1, f$1;
	if (Math.sign(u$1) === -o$1 && c$1++, updateMid() && (-1 === o$1 || updateMid())) throw new RangeError(du);
	const d$1 = La(va(f$1, s$1));
	return [
		r$1,
		l$1,
		d$1
	];
}
function diffEpochNanos(e$1, n$1, t$1, o$1, r$1, i$1) {
	return {
		...ll,
		...nanoToDurationDayTimeFields(roundBigNano(va(e$1, n$1), o$1, r$1, i$1), t$1)
	};
}
function diffEpochNanosExact(e$1, n$1, t$1) {
	return {
		...ll,
		...nanoToDurationDayTimeFields(va(e$1, n$1), t$1)
	};
}
function td(e$1, n$1) {
	return diffEpochMilliByDay(isoToEpochMilli(e$1), isoToEpochMilli(n$1));
}
function diffEpochMilliByDay(e$1, n$1) {
	return Math.trunc((n$1 - e$1) / Cu);
}
function diffTimes(e$1, n$1) {
	return isoTimeFieldsToNano(n$1) - isoTimeFieldsToNano(e$1);
}
function nativeDateUntil(e$1, n$1, t$1) {
	if (t$1 <= 7) {
		let o$2 = 0, r$2 = td({
			...e$1,
			...At
		}, {
			...n$1,
			...At
		});
		return 7 === t$1 && ([o$2, r$2] = divModTrunc(r$2, 7)), {
			...ll,
			weeks: o$2,
			days: r$2
		};
	}
	const o$1 = this.u(e$1), r$1 = this.u(n$1);
	let [i$1, a$1, s$1] = ((e$2, n$2, t$2, o$2, r$2, i$2, a$2) => {
		let s$2 = r$2 - n$2, c$1 = i$2 - t$2, u$1 = a$2 - o$2;
		if (s$2 || c$1) {
			const l$1 = Math.sign(s$2 || c$1);
			let f$1 = e$2.B(r$2, i$2), d$1 = 0;
			if (Math.sign(u$1) === -l$1) {
				const o$3 = f$1;
				[r$2, i$2] = e$2.p(r$2, i$2, -l$1), s$2 = r$2 - n$2, c$1 = i$2 - t$2, f$1 = e$2.B(r$2, i$2), d$1 = l$1 < 0 ? -o$3 : f$1;
			}
			if (u$1 = a$2 - Math.min(o$2, f$1) + d$1, s$2) {
				const [o$3, a$3] = e$2.m(n$2, t$2), [u$2, f$2] = e$2.m(r$2, i$2);
				if (c$1 = u$2 - o$3 || Number(f$2) - Number(a$3), Math.sign(c$1) === -l$1) {
					const t$3 = l$1 < 0 && -e$2.O(r$2);
					s$2 = (r$2 -= l$1) - n$2, c$1 = i$2 - monthCodeNumberToMonth(o$3, a$3, e$2.F(r$2)) + (t$3 || e$2.O(r$2));
				}
			}
		}
		return [
			s$2,
			c$1,
			u$1
		];
	})(this, ...o$1, ...r$1);
	return 8 === t$1 && (a$1 += this.q(i$1, o$1[0]), i$1 = 0), {
		...ll,
		years: i$1,
		months: a$1,
		days: s$1
	};
}
function computeIsoMonthsInYearSpan(e$1) {
	return e$1 * Fl;
}
function computeIntlMonthsInYearSpan(e$1, n$1) {
	const t$1 = n$1 + e$1, o$1 = Math.sign(e$1), r$1 = o$1 < 0 ? -1 : 0;
	let i$1 = 0;
	for (let e$2 = n$1; e$2 !== t$1; e$2 += o$1) i$1 += computeIntlMonthsInYear.call(this, e$2 + r$1);
	return i$1;
}
function ha(e$1, n$1) {
	if (e$1 !== n$1) throw new RangeError(mu);
	return e$1;
}
function ga(e$1, n$1) {
	if (!isTimeZoneIdsEqual(e$1, n$1)) throw new RangeError(pu);
	return e$1;
}
function computeNativeWeekOfYear(e$1) {
	return this.I(e$1)[0];
}
function computeNativeYearOfWeek(e$1) {
	return this.I(e$1)[1];
}
function computeNativeInLeapYear(e$1) {
	const [n$1] = this.u(e$1);
	return this.L(n$1);
}
function computeNativeMonthsInYear(e$1) {
	const [n$1] = this.u(e$1);
	return this.O(n$1);
}
function computeNativeDaysInMonth(e$1) {
	const [n$1, t$1] = this.u(e$1);
	return this.B(n$1, t$1);
}
function computeNativeDaysInYear(e$1) {
	const [n$1] = this.u(e$1);
	return this.G(n$1);
}
function computeNativeDayOfYear(e$1) {
	const [n$1] = this.u(e$1);
	return diffEpochMilliByDay(this.M(n$1), isoToEpochMilli(e$1)) + 1;
}
function parseMonthCode(e$1) {
	const n$1 = Ef.exec(e$1);
	if (!n$1) throw new RangeError(invalidMonthCode(e$1));
	return [parseInt(n$1[1]), Boolean(n$1[2])];
}
function sa(e$1, n$1) {
	return "M" + wu(e$1) + (n$1 ? "L" : "");
}
function monthCodeNumberToMonth(e$1, n$1, t$1) {
	return e$1 + (n$1 || t$1 && e$1 >= t$1 ? 1 : 0);
}
function monthToMonthCodeNumber(e$1, n$1) {
	return e$1 - (n$1 && e$1 >= n$1 ? 1 : 0);
}
function eraYearToYear(e$1, n$1) {
	return (n$1 + e$1) * (Math.sign(n$1) || 1) || 0;
}
function getCalendarEraOrigins(e$1) {
	return nl[getCalendarIdBase(e$1)];
}
function getCalendarLeapMonthMeta(e$1) {
	return ol[getCalendarIdBase(e$1)];
}
function getCalendarIdBase(e$1) {
	return computeCalendarIdBase(e$1.id || l);
}
function createIntlCalendar(e$1) {
	function epochMilliToIntlFields(e$2) {
		return ((e$3, n$2) => ({
			...parseIntlYear(e$3, n$2),
			V: e$3.month,
			day: parseInt(e$3.day)
		}))(hashIntlFormatParts(n$1, e$2), t$1);
	}
	const n$1 = bf(e$1), t$1 = computeCalendarIdBase(e$1);
	return {
		id: e$1,
		_: createIntlFieldCache(epochMilliToIntlFields),
		J: createIntlYearDataCache(epochMilliToIntlFields)
	};
}
function createIntlFieldCache(e$1) {
	return on(((n$1) => {
		return e$1(isoToEpochMilli(n$1));
	}), WeakMap);
}
function createIntlYearDataCache(e$1) {
	const n$1 = e$1(0).year - vl;
	return on(((t$1) => {
		let o$1, r$1 = isoArgsToEpochMilli(t$1 - n$1), i$1 = 0;
		const a$1 = [], s$1 = [];
		do
			r$1 += 400 * Cu;
		while ((o$1 = e$1(r$1)).year <= t$1);
		do
			if (r$1 += (1 - o$1.day) * Cu, o$1.year === t$1 && (a$1.push(r$1), s$1.push(o$1.V)), r$1 -= Cu, ++i$1 > 100 || r$1 < -gl) throw new RangeError(du);
		while ((o$1 = e$1(r$1)).year >= t$1);
		return {
			K: a$1.reverse(),
			X: bu(s$1.reverse())
		};
	}));
}
function parseIntlYear(e$1, n$1) {
	let t$1, o$1, r$1 = parseIntlPartsYear(e$1);
	if (e$1.era) {
		const i$1 = nl[n$1], a$1 = tl[n$1] || {};
		void 0 !== i$1 && (t$1 = "islamic" === n$1 ? "ah" : e$1.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), "bc" === t$1 || "b" === t$1 ? t$1 = "bce" : "ad" === t$1 || "a" === t$1 ? t$1 = "ce" : "beforeroc" === t$1 && (t$1 = "broc"), t$1 = a$1[t$1] || t$1, o$1 = r$1, r$1 = eraYearToYear(o$1, i$1[t$1] || 0));
	}
	return {
		era: t$1,
		eraYear: o$1,
		year: r$1
	};
}
function parseIntlPartsYear(e$1) {
	return parseInt(e$1.relatedYear || e$1.year);
}
function computeIntlDay(e$1) {
	return this._(e$1).day;
}
function computeIntlDateParts(e$1) {
	const { year: n$1, V: t$1, day: o$1 } = this._(e$1), { X: r$1 } = this.J(n$1);
	return [
		n$1,
		r$1[t$1] + 1,
		o$1
	];
}
function computeIsoFieldsFromIntlParts(e$1, n$1, t$1) {
	return Pa(computeIntlEpochMilli.call(this, e$1, n$1, t$1));
}
function computeIntlEpochMilli(e$1, n$1 = 1, t$1 = 1) {
	return this.J(e$1).K[n$1 - 1] + (t$1 - 1) * Cu;
}
function computeIntlMonthCodeParts(e$1, n$1) {
	const t$1 = computeIntlLeapMonth.call(this, e$1);
	return [monthToMonthCodeNumber(n$1, t$1), t$1 === n$1];
}
function computeIntlLeapMonth(e$1) {
	const n$1 = queryMonthStrings(this, e$1), t$1 = queryMonthStrings(this, e$1 - 1), o$1 = n$1.length;
	if (o$1 > t$1.length) {
		const e$2 = getCalendarLeapMonthMeta(this);
		if (e$2 < 0) return -e$2;
		for (let e$3 = 0; e$3 < o$1; e$3++) if (n$1[e$3] !== t$1[e$3]) return e$3 + 1;
	}
}
function computeIntlInLeapYear(e$1) {
	const n$1 = computeIntlDaysInYear.call(this, e$1);
	return n$1 > computeIntlDaysInYear.call(this, e$1 - 1) && n$1 > computeIntlDaysInYear.call(this, e$1 + 1);
}
function computeIntlDaysInYear(e$1) {
	return diffEpochMilliByDay(computeIntlEpochMilli.call(this, e$1), computeIntlEpochMilli.call(this, e$1 + 1));
}
function computeIntlDaysInMonth(e$1, n$1) {
	const { K: t$1 } = this.J(e$1);
	let o$1 = n$1 + 1, r$1 = t$1;
	return o$1 > t$1.length && (o$1 = 1, r$1 = this.J(e$1 + 1).K), diffEpochMilliByDay(t$1[n$1 - 1], r$1[o$1 - 1]);
}
function computeIntlMonthsInYear(e$1) {
	return this.J(e$1).K.length;
}
function computeIntlEraParts(e$1) {
	const n$1 = this._(e$1);
	return [n$1.era, n$1.eraYear];
}
function computeIntlYearMonthForMonthDay(e$1, n$1, t$1) {
	const o$1 = this.id && "chinese" === computeCalendarIdBase(this.id) ? ((e$2, n$2, t$2) => {
		if (n$2) switch (e$2) {
			case 1: return 1651;
			case 2: return t$2 < 30 ? 1947 : 1765;
			case 3: return t$2 < 30 ? 1966 : 1955;
			case 4: return t$2 < 30 ? 1963 : 1944;
			case 5: return t$2 < 30 ? 1971 : 1952;
			case 6: return t$2 < 30 ? 1960 : 1941;
			case 7: return t$2 < 30 ? 1968 : 1938;
			case 8: return t$2 < 30 ? 1957 : 1718;
			case 9: return 1832;
			case 10: return 1870;
			case 11: return 1814;
			case 12: return 1890;
		}
		return 1972;
	})(e$1, n$1, t$1) : Pl;
	let [r$1, i$1, a$1] = computeIntlDateParts.call(this, {
		isoYear: o$1,
		isoMonth: Fl,
		isoDay: 31
	});
	const s$1 = computeIntlLeapMonth.call(this, r$1), c$1 = i$1 === s$1;
	1 === (compareNumbers(e$1, monthToMonthCodeNumber(i$1, s$1)) || compareNumbers(Number(n$1), Number(c$1)) || compareNumbers(t$1, a$1)) && r$1--;
	for (let o$2 = 0; o$2 < 100; o$2++) {
		const i$2 = r$1 - o$2, a$2 = computeIntlLeapMonth.call(this, i$2), s$2 = monthCodeNumberToMonth(e$1, n$1, a$2);
		if (n$1 === (s$2 === a$2) && t$1 <= computeIntlDaysInMonth.call(this, i$2, s$2)) return [i$2, s$2];
	}
}
function queryMonthStrings(e$1, n$1) {
	return Object.keys(e$1.J(n$1).X);
}
function Zt(e$1) {
	return u(d(e$1));
}
function u(e$1) {
	if ((e$1 = e$1.toLowerCase()) !== l && e$1 !== Xu) {
		const n$1 = bf(e$1).resolvedOptions().calendar;
		if (computeCalendarIdBase(e$1) !== computeCalendarIdBase(n$1)) throw new RangeError(c(e$1));
		return n$1;
	}
	return e$1;
}
function computeCalendarIdBase(e$1) {
	return "islamicc" === e$1 && (e$1 = "islamic"), e$1.split("-")[0];
}
function createNativeOpsCreator(e$1, n$1) {
	return (t$1) => t$1 === l ? e$1 : t$1 === Xu || t$1 === el ? Object.assign(Object.create(e$1), { id: t$1 }) : Object.assign(Object.create(n$1), Of(t$1));
}
function z(e$1, n$1, t$1, o$1) {
	const r$1 = refineCalendarFields(t$1, o$1, _u, [], ju);
	if (void 0 !== r$1.timeZone) {
		const o$2 = t$1.ee(r$1), i$1 = refineTimeBag(r$1), a$1 = e$1(r$1.timeZone);
		return {
			epochNanoseconds: getMatchingInstantFor(n$1(a$1), {
				...o$2,
				...i$1
			}, void 0 !== r$1.offset ? parseOffsetNano(r$1.offset) : void 0),
			timeZone: a$1
		};
	}
	return {
		...t$1.ee(r$1),
		...At
	};
}
function Ae(e$1, n$1, t$1, o$1, r$1, i$1) {
	const a$1 = refineCalendarFields(t$1, r$1, _u, Au, ju), s$1 = e$1(a$1.timeZone), [c$1, u$1, l$1] = je(i$1), f$1 = t$1.ee(a$1, fabricateOverflowOptions(c$1)), d$1 = refineTimeBag(a$1, c$1);
	return Xe(getMatchingInstantFor(n$1(s$1), {
		...f$1,
		...d$1
	}, void 0 !== a$1.offset ? parseOffsetNano(a$1.offset) : void 0, u$1, l$1), s$1, o$1);
}
function Nt(e$1, n$1, t$1) {
	const o$1 = refineCalendarFields(e$1, n$1, _u, [], p), r$1 = dt(t$1);
	return jt(Do({
		...e$1.ee(o$1, fabricateOverflowOptions(r$1)),
		...refineTimeBag(o$1, r$1)
	}));
}
function de(e$1, n$1, t$1, o$1 = []) {
	const r$1 = refineCalendarFields(e$1, n$1, _u, o$1);
	return e$1.ee(r$1, t$1);
}
function Ut(e$1, n$1, t$1, o$1) {
	const r$1 = refineCalendarFields(e$1, n$1, Gu, o$1);
	return e$1.ne(r$1, t$1);
}
function Rt(e$1, n$1, t$1, o$1) {
	const r$1 = refineCalendarFields(e$1, t$1, _u, Hu);
	return n$1 && void 0 !== r$1.month && void 0 === r$1.monthCode && void 0 === r$1.year && (r$1.year = Pl), e$1.te(r$1, o$1);
}
function Tt(e$1, n$1) {
	return St(refineTimeBag(refineFields(e$1, Ru, [], 1), dt(n$1)));
}
function q(e$1) {
	const n$1 = refineFields(e$1, il);
	return pe(checkDurationUnits({
		...ll,
		...n$1
	}));
}
function refineCalendarFields(e$1, n$1, t$1, o$1 = [], r$1 = []) {
	return refineFields(n$1, [...e$1.fields(t$1), ...r$1].sort(), o$1);
}
function refineFields(e$1, n$1, t$1, o$1 = !t$1) {
	const r$1 = {};
	let i$1, a$1 = 0;
	for (const o$2 of n$1) {
		if (o$2 === i$1) throw new RangeError(duplicateFields(o$2));
		if ("constructor" === o$2 || "__proto__" === o$2) throw new RangeError(forbiddenField(o$2));
		let n$2 = e$1[o$2];
		if (void 0 !== n$2) a$1 = 1, Rm[o$2] && (n$2 = Rm[o$2](n$2, o$2)), r$1[o$2] = n$2;
		else if (t$1) {
			if (t$1.includes(o$2)) throw new TypeError(missingField(o$2));
			r$1[o$2] = Qu[o$2];
		}
		i$1 = o$2;
	}
	if (o$1 && !a$1) throw new TypeError(noValidFields(n$1));
	return r$1;
}
function refineTimeBag(e$1, n$1) {
	return constrainIsoTimeFields(zm({
		...Qu,
		...e$1
	}), n$1);
}
function De(e$1, n$1, t$1, o$1, r$1) {
	const { calendar: i$1, timeZone: a$1 } = t$1, s$1 = e$1(i$1), c$1 = n$1(a$1), u$1 = [...s$1.fields(_u), ...Uu].sort(), l$1 = ((e$2) => {
		const n$2 = he(e$2, L), t$2 = Se(n$2.offsetNanoseconds), o$2 = ra(e$2.calendar), [r$2, i$2, a$2] = o$2.u(n$2), [s$2, c$2] = o$2.m(r$2, i$2), u$2 = sa(s$2, c$2);
		return {
			...Ga(n$2),
			year: r$2,
			monthCode: u$2,
			day: a$2,
			offset: t$2
		};
	})(t$1), f$1 = refineFields(o$1, u$1), d$1 = s$1.oe(l$1, f$1), m$1 = {
		...l$1,
		...f$1
	}, [p$1, h$1, I$1] = je(r$1, 2);
	return Xe(getMatchingInstantFor(c$1, {
		...s$1.ee(d$1, fabricateOverflowOptions(p$1)),
		...constrainIsoTimeFields(zm(m$1), p$1)
	}, parseOffsetNano(m$1.offset), h$1, I$1), a$1, i$1);
}
function Pt(e$1, n$1, t$1, o$1) {
	const r$1 = e$1(n$1.calendar), i$1 = [...r$1.fields(_u), ...p].sort(), a$1 = {
		...computeDateEssentials(s$1 = n$1),
		hour: s$1.isoHour,
		minute: s$1.isoMinute,
		second: s$1.isoSecond,
		millisecond: s$1.isoMillisecond,
		microsecond: s$1.isoMicrosecond,
		nanosecond: s$1.isoNanosecond
	};
	var s$1;
	const c$1 = refineFields(t$1, i$1), u$1 = dt(o$1), l$1 = r$1.oe(a$1, c$1), f$1 = {
		...a$1,
		...c$1
	};
	return jt(Do({
		...r$1.ee(l$1, fabricateOverflowOptions(u$1)),
		...constrainIsoTimeFields(zm(f$1), u$1)
	}));
}
function ee(e$1, n$1, t$1, o$1) {
	const r$1 = e$1(n$1.calendar), i$1 = r$1.fields(_u).sort(), a$1 = computeDateEssentials(n$1), s$1 = refineFields(t$1, i$1), c$1 = r$1.oe(a$1, s$1);
	return r$1.ee(c$1, o$1);
}
function Wt(e$1, n$1, t$1, o$1) {
	const r$1 = e$1(n$1.calendar), i$1 = r$1.fields(Gu).sort(), a$1 = ((e$2) => {
		const n$2 = ra(e$2.calendar), [t$2, o$2] = n$2.u(e$2), [r$2, i$2] = n$2.m(t$2, o$2);
		return {
			year: t$2,
			monthCode: sa(r$2, i$2)
		};
	})(n$1), s$1 = refineFields(t$1, i$1), c$1 = r$1.oe(a$1, s$1);
	return r$1.ne(c$1, o$1);
}
function Et(e$1, n$1, t$1, o$1) {
	const r$1 = e$1(n$1.calendar), i$1 = r$1.fields(_u).sort(), a$1 = ((e$2) => {
		const n$2 = ra(e$2.calendar), [t$2, o$2, r$2] = n$2.u(e$2), [i$2, a$2] = n$2.m(t$2, o$2);
		return {
			monthCode: sa(i$2, a$2),
			day: r$2
		};
	})(n$1), s$1 = refineFields(t$1, i$1), c$1 = r$1.oe(a$1, s$1);
	return r$1.te(c$1, o$1);
}
function rt(e$1, n$1, t$1) {
	return St(((e$2, n$2, t$2) => refineTimeBag({
		...nn(Ru, e$2),
		...refineFields(n$2, Ru)
	}, dt(t$2)))(e$1, n$1, t$1));
}
function N(e$1, n$1) {
	return pe((t$1 = e$1, o$1 = n$1, checkDurationUnits({
		...t$1,
		...refineFields(o$1, il)
	})));
	var t$1, o$1;
}
function convertToPlainMonthDay(e$1, n$1) {
	const t$1 = refineCalendarFields(e$1, n$1, Ku);
	return e$1.te(t$1);
}
function convertToPlainYearMonth(e$1, n$1, t$1) {
	const o$1 = refineCalendarFields(e$1, n$1, Vu);
	return e$1.ne(o$1, t$1);
}
function convertToIso(e$1, n$1, t$1, o$1, r$1) {
	n$1 = nn(t$1 = e$1.fields(t$1), n$1), o$1 = refineFields(o$1, r$1 = e$1.fields(r$1), []);
	let i$1 = e$1.oe(n$1, o$1);
	return i$1 = refineFields(i$1, [...t$1, ...r$1].sort(), []), e$1.ee(i$1);
}
function nativeDateFromFields(e$1, n$1) {
	const t$1 = dt(n$1), o$1 = refineYear(this, e$1), r$1 = refineMonth(this, e$1, o$1, t$1), i$1 = refineDay(this, e$1, r$1, o$1, t$1);
	return W(To(this.U(o$1, r$1, i$1)), this.id || l);
}
function nativeYearMonthFromFields(e$1, n$1) {
	const t$1 = dt(n$1), o$1 = refineYear(this, e$1), r$1 = refineMonth(this, e$1, o$1, t$1);
	return createPlainYearMonthSlots(checkIsoYearMonthInBounds(this.U(o$1, r$1, 1)), this.id || l);
}
function nativeMonthDayFromFields(e$1, n$1) {
	const t$1 = dt(n$1);
	let o$1, r$1, i$1, a$1 = void 0 !== e$1.eraYear || void 0 !== e$1.year ? refineYear(this, e$1) : void 0;
	const s$1 = !this.id;
	if (void 0 === a$1 && s$1 && (a$1 = Pl), void 0 !== a$1) {
		const n$2 = refineMonth(this, e$1, a$1, t$1);
		o$1 = refineDay(this, e$1, n$2, a$1, t$1);
		const s$2 = this.F(a$1);
		r$1 = monthToMonthCodeNumber(n$2, s$2), i$1 = n$2 === s$2;
	} else {
		if (void 0 === e$1.monthCode) throw new TypeError(lu);
		if ([r$1, i$1] = parseMonthCode(e$1.monthCode), this.id && this.id !== Xu && this.id !== el) if (this.id && "coptic" === computeCalendarIdBase(this.id) && 0 === t$1) {
			const n$2 = i$1 || 13 !== r$1 ? 30 : 6;
			o$1 = e$1.day, o$1 = clampNumber(o$1, 1, n$2);
		} else if (this.id && "chinese" === computeCalendarIdBase(this.id) && 0 === t$1) {
			const n$2 = !i$1 || 1 !== r$1 && 9 !== r$1 && 10 !== r$1 && 11 !== r$1 && 12 !== r$1 ? 30 : 29;
			o$1 = e$1.day, o$1 = clampNumber(o$1, 1, n$2);
		} else o$1 = e$1.day;
		else o$1 = refineDay(this, e$1, refineMonth(this, e$1, Pl, t$1), Pl, t$1);
	}
	const c$1 = this.R(r$1, i$1, o$1);
	if (!c$1) throw new RangeError("Cannot guess year");
	const [u$1, f$1] = c$1;
	return createPlainMonthDaySlots(To(this.U(u$1, f$1, o$1)), this.id || l);
}
function nativeFieldsMethod(e$1) {
	return getCalendarEraOrigins(this) && e$1.includes("year") ? [...e$1, ...qu] : e$1;
}
function nativeMergeFields(e$1, n$1) {
	const t$1 = Object.assign(Object.create(null), e$1);
	return spliceFields(t$1, n$1, $u), getCalendarEraOrigins(this) && (spliceFields(t$1, n$1, Lu), this.id === el && spliceFields(t$1, n$1, Ju, qu)), t$1;
}
function refineYear(e$1, n$1) {
	const t$1 = getCalendarEraOrigins(e$1), o$1 = tl[e$1.id || ""] || {};
	let { era: r$1, eraYear: i$1, year: a$1 } = n$1;
	if (void 0 !== r$1 || void 0 !== i$1) {
		if (void 0 === r$1 || void 0 === i$1) throw new TypeError(su);
		if (!t$1) throw new RangeError(iu);
		const e$2 = t$1[o$1[r$1] || r$1];
		if (void 0 === e$2) throw new RangeError(invalidEra(r$1));
		const n$2 = eraYearToYear(i$1, e$2);
		if (void 0 !== a$1 && a$1 !== n$2) throw new RangeError(cu);
		a$1 = n$2;
	} else if (void 0 === a$1) throw new TypeError(missingYear(t$1));
	return a$1;
}
function refineMonth(e$1, n$1, t$1, o$1) {
	let { month: r$1, monthCode: i$1 } = n$1;
	if (void 0 !== i$1) {
		const n$2 = ((e$2, n$3, t$2, o$2) => {
			const r$2 = e$2.F(t$2), [i$2, a$1] = parseMonthCode(n$3);
			let s$1 = monthCodeNumberToMonth(i$2, a$1, r$2);
			if (a$1) {
				const n$4 = getCalendarLeapMonthMeta(e$2);
				if (void 0 === n$4) throw new RangeError(fu);
				if (n$4 > 0) {
					if (s$1 > n$4) throw new RangeError(fu);
					if (void 0 === r$2) {
						if (1 === o$2) throw new RangeError(fu);
						s$1--;
					}
				} else {
					if (s$1 !== -n$4) throw new RangeError(fu);
					if (void 0 === r$2 && 1 === o$2) throw new RangeError(fu);
				}
			}
			return s$1;
		})(e$1, i$1, t$1, o$1);
		if (void 0 !== r$1 && r$1 !== n$2) throw new RangeError(uu);
		r$1 = n$2, o$1 = 1;
	} else if (void 0 === r$1) throw new TypeError(lu);
	return ba("month", r$1, 1, e$1.O(t$1), o$1);
}
function refineDay(e$1, n$1, t$1, o$1, r$1) {
	return clampProp(n$1, "day", 1, e$1.B(o$1, t$1), r$1);
}
function spliceFields(e$1, n$1, t$1, o$1) {
	let r$1 = 0;
	const i$1 = [];
	for (const e$2 of t$1) void 0 !== n$1[e$2] ? r$1 = 1 : i$1.push(e$2);
	if (Object.assign(e$1, n$1), r$1) for (const n$2 of o$1 || i$1) delete e$1[n$2];
}
function computeDateEssentials(e$1) {
	const n$1 = ra(e$1.calendar), [t$1, o$1, r$1] = n$1.u(e$1), [i$1, a$1] = n$1.m(t$1, o$1);
	return {
		year: t$1,
		monthCode: sa(i$1, a$1),
		day: r$1
	};
}
function qe(e$1) {
	return xe(io(bigIntToBigNano(toBigInt(e$1))));
}
function ye(e$1, n$1, t$1, o$1, r$1 = l) {
	return Xe(io(bigIntToBigNano(toBigInt(t$1))), n$1(o$1), e$1(r$1));
}
function Mt(n$1, t$1, o$1, r$1, i$1 = 0, a$1 = 0, s$1 = 0, c$1 = 0, u$1 = 0, f$1 = 0, d$1 = l) {
	return jt(Do(checkIsoDateTimeFields(e(Za, zipProps(pl, [
		t$1,
		o$1,
		r$1,
		i$1,
		a$1,
		s$1,
		c$1,
		u$1,
		f$1
	])))), n$1(d$1));
}
function ue(n$1, t$1, o$1, r$1, i$1 = l) {
	return W(To(checkIsoDateFields(e(Za, {
		isoYear: t$1,
		isoMonth: o$1,
		isoDay: r$1
	}))), n$1(i$1));
}
function Kt(e$1, n$1, t$1, o$1 = l, r$1 = 1) {
	const i$1 = Za(n$1), a$1 = Za(t$1), s$1 = e$1(o$1);
	return createPlainYearMonthSlots(checkIsoYearMonthInBounds(checkIsoDateFields({
		isoYear: i$1,
		isoMonth: a$1,
		isoDay: Za(r$1)
	})), s$1);
}
function kt(e$1, n$1, t$1, o$1 = l, r$1 = Pl) {
	const i$1 = Za(n$1), a$1 = Za(t$1), s$1 = e$1(o$1);
	return createPlainMonthDaySlots(To(checkIsoDateFields({
		isoYear: Za(r$1),
		isoMonth: i$1,
		isoDay: a$1
	})), s$1);
}
function ut(n$1 = 0, t$1 = 0, o$1 = 0, r$1 = 0, i$1 = 0, a$1 = 0) {
	return St(constrainIsoTimeFields(e(Za, zipProps(w, [
		n$1,
		t$1,
		o$1,
		r$1,
		i$1,
		a$1
	])), 1));
}
function j(n$1 = 0, t$1 = 0, o$1 = 0, r$1 = 0, i$1 = 0, a$1 = 0, s$1 = 0, c$1 = 0, u$1 = 0, l$1 = 0) {
	return pe(checkDurationUnits(e(Ba, zipProps(O, [
		n$1,
		t$1,
		o$1,
		r$1,
		i$1,
		a$1,
		s$1,
		c$1,
		u$1,
		l$1
	]))));
}
function Je(e$1, n$1, t$1 = l) {
	return Xe(e$1.epochNanoseconds, n$1, t$1);
}
function Ce(e$1) {
	return xe(e$1.epochNanoseconds);
}
function yt(e$1, n$1) {
	return jt(he(n$1, e$1));
}
function fe(e$1, n$1) {
	return W(he(n$1, e$1));
}
function mt(e$1, n$1) {
	return St(he(n$1, e$1));
}
function Ct(e$1, n$1, t$1, o$1) {
	return Xe(io(((e$2, n$2, t$2, o$2) => {
		const r$1 = ((e$3) => Vl(normalizeOptions(e$3)))(o$2);
		return $o(e$2(n$2), t$2, r$1);
	})(e$1, t$1, n$1, o$1)), t$1, n$1.calendar);
}
function ae(e$1, n$1, t$1, o$1, r$1) {
	const i$1 = e$1(r$1.timeZone), a$1 = r$1.plainTime, s$1 = void 0 !== a$1 ? n$1(a$1) : void 0, c$1 = t$1(i$1);
	let u$1;
	return u$1 = s$1 ? $o(c$1, {
		...o$1,
		...s$1
	}) : getStartOfDayInstantFor(c$1, {
		...o$1,
		...At
	}), Xe(u$1, i$1, o$1.calendar);
}
function ie(e$1, n$1 = At) {
	return jt(Do({
		...e$1,
		...n$1
	}));
}
function le(e$1, n$1, t$1) {
	return convertToPlainYearMonth(e$1(n$1.calendar), t$1);
}
function se(e$1, n$1, t$1) {
	return convertToPlainMonthDay(e$1(n$1.calendar), t$1);
}
function $t(e$1, n$1, t$1, o$1) {
	return ((e$2, n$2, t$2) => convertToIso(e$2, n$2, Vu, oa(t$2), Hu))(e$1(n$1.calendar), t$1, o$1);
}
function Vt(e$1, n$1, t$1, o$1) {
	return ((e$2, n$2, t$2) => convertToIso(e$2, n$2, Ku, oa(t$2), Wu))(e$1(n$1.calendar), t$1, o$1);
}
function ze(e$1) {
	return xe(io(Ge(Ba(e$1), Ke)));
}
function $e(e$1) {
	return xe(io(bigIntToBigNano(toBigInt(e$1))));
}
function createOptionsTransformer(e$1, n$1, t$1) {
	const o$1 = new Set(t$1);
	return (r$1, i$1) => {
		const a$1 = t$1 && hasAnyPropsByName(r$1, t$1);
		if (!hasAnyPropsByName(r$1 = ((e$2, n$2) => {
			const t$2 = {};
			for (const o$2 in n$2) e$2.has(o$2) || (t$2[o$2] = n$2[o$2]);
			return t$2;
		})(o$1, r$1), e$1)) {
			if (i$1 && a$1) throw new TypeError("Invalid formatting options");
			r$1 = {
				...n$1,
				...r$1
			};
		}
		return t$1 && (r$1.timeZone = nf, ["full", "long"].includes(r$1.ie) && (r$1.ie = "medium")), r$1;
	};
}
function K(e$1, n$1 = an, t$1 = 0) {
	const [o$1, , , r$1] = e$1;
	return (i$1, a$1 = mp, ...s$1) => {
		const c$1 = n$1(r$1 && r$1(...s$1), i$1, a$1, o$1, t$1);
		return [c$1, ...toEpochMillis(e$1, c$1.resolvedOptions(), s$1)];
	};
}
function an(e$1, n$1, t$1, o$1, r$1) {
	if (t$1 = o$1(t$1, r$1), e$1) {
		if (void 0 !== t$1.timeZone) throw new TypeError(Ou);
		t$1.timeZone = e$1;
	}
	return new en(n$1, t$1);
}
function computeNonBuggyIsoResolve() {
	return new en(void 0, { calendar: l }).resolvedOptions().calendar === l;
}
function toEpochMillis(e$1, n$1, t$1) {
	const [, o$1, r$1] = e$1;
	return t$1.map(((e$2) => (e$2.calendar && ((e$3, n$2, t$2) => {
		if ((t$2 || e$3 !== l) && e$3 !== n$2) throw new RangeError(mu);
	})(e$2.calendar, n$1.calendar, r$1), o$1(e$2, n$1))));
}
function Pe(e$1, n$1, t$1) {
	const o$1 = n$1.timeZone, r$1 = e$1(o$1), i$1 = {
		...he(n$1, r$1),
		...t$1 || At
	};
	let a$1;
	return a$1 = t$1 ? getMatchingInstantFor(r$1, i$1, i$1.offsetNanoseconds, 2) : getStartOfDayInstantFor(r$1, i$1), Xe(a$1, o$1, n$1.calendar);
}
function pt(e$1, n$1 = At) {
	return jt(Do({
		...e$1,
		...n$1
	}));
}
function Ot(e$1, n$1) {
	return {
		...e$1,
		calendar: n$1
	};
}
function ge(e$1, n$1) {
	return {
		...e$1,
		timeZone: n$1
	};
}
function tn(e$1) {
	const n$1 = Ue();
	return So(n$1, e$1.N(n$1));
}
function Ue() {
	return Ge(Date.now(), Ke);
}
function Qe() {
	return new en().resolvedOptions().timeZone;
}
const expectedInteger = (e$1, n$1) => `Non-integer ${e$1}: ${n$1}`, expectedPositive = (e$1, n$1) => `Non-positive ${e$1}: ${n$1}`, expectedFinite = (e$1, n$1) => `Non-finite ${e$1}: ${n$1}`, forbiddenBigIntToNumber = (e$1) => `Cannot convert bigint to ${e$1}`, invalidBigInt = (e$1) => `Invalid bigint: ${e$1}`, ou = "Cannot convert Symbol to string", ru = "Invalid object", numberOutOfRange = (e$1, n$1, t$1, o$1, r$1) => r$1 ? numberOutOfRange(e$1, r$1[n$1], r$1[t$1], r$1[o$1]) : invalidEntity(e$1, n$1) + `; must be between ${t$1}-${o$1}`, invalidEntity = (e$1, n$1) => `Invalid ${e$1}: ${n$1}`, missingField = (e$1) => `Missing ${e$1}`, forbiddenField = (e$1) => `Invalid field ${e$1}`, duplicateFields = (e$1) => `Duplicate field ${e$1}`, noValidFields = (e$1) => "No valid fields: " + e$1.join(), i = "Invalid bag", invalidChoice = (e$1, n$1, t$1) => invalidEntity(e$1, n$1) + "; must be " + Object.keys(t$1).join(), C = "Cannot use valueOf", a = "Invalid calling context", iu = "Forbidden era/eraYear", su = "Mismatching era/eraYear", cu = "Mismatching year/eraYear", invalidEra = (e$1) => `Invalid era: ${e$1}`, missingYear = (e$1) => "Missing year" + (e$1 ? "/era/eraYear" : ""), invalidMonthCode = (e$1) => `Invalid monthCode: ${e$1}`, uu = "Mismatching month/monthCode", lu = "Missing month/monthCode", fu = "Invalid leap month", du = "Invalid protocol results", c = (e$1) => invalidEntity("Calendar", e$1), mu = "Mismatching Calendars", qa = "Calendar week operations forbidden", F = (e$1) => invalidEntity("TimeZone", e$1), pu = "Mismatching TimeZones", hu = "Forbidden ICU TimeZone", Iu = "Out-of-bounds offset", Du = "Out-of-bounds TimeZone gap", gu = "Invalid TimeZone offset", Tu = "Ambiguous offset", Mu = "Out-of-bounds date", yu = "Out-of-bounds duration", Nu = "Cannot mix duration signs", vu = "Missing relativeTo", Pu = "Cannot use large units", Fu = "Required smallestUnit or largestUnit", Eu = "smallestUnit > largestUnit", failedParse = (e$1) => `Cannot parse: ${e$1}`, invalidSubstring = (e$1) => `Invalid substring: ${e$1}`, rn = (e$1) => `Cannot format ${e$1}`, ln = "Mismatching types for formatting", Ou = "Cannot specify TimeZone", bu = /* @__PURE__ */ gt(P, ((e$1, n$1) => n$1)), Su = /* @__PURE__ */ gt(P, ((e$1, n$1, t$1) => t$1)), wu = /* @__PURE__ */ gt(padNumber, 2), Bu = {
	nanosecond: 0,
	microsecond: 1,
	millisecond: 2,
	second: 3,
	minute: 4,
	hour: 5,
	day: 6,
	week: 7,
	month: 8,
	year: 9
}, Yu = /* @__PURE__ */ Object.keys(Bu), Cu = 864e5, ku = 1e3, ro = 1e3, Ke = 1e6, oo = 1e9, ao = 6e10, no = 36e11, go = 864e11, Zu = [
	1,
	ro,
	Ke,
	oo,
	ao,
	no,
	go
], p = /* @__PURE__ */ Yu.slice(0, 6), Ru = /* @__PURE__ */ sortStrings(p), zu = ["offset"], Au = ["timeZone"], Uu = /* @__PURE__ */ p.concat(zu), ju = /* @__PURE__ */ Uu.concat(Au), qu = ["era", "eraYear"], Lu = /* @__PURE__ */ qu.concat(["year"]), Wu = ["year"], xu = ["monthCode"], $u = /* @__PURE__ */ ["month"].concat(xu), Hu = ["day"], Gu = /* @__PURE__ */ $u.concat(Wu), Vu = /* @__PURE__ */ xu.concat(Wu), _u = /* @__PURE__ */ Hu.concat(Gu), Ju = /* @__PURE__ */ Hu.concat($u), Ku = /* @__PURE__ */ Hu.concat(xu), Qu = /* @__PURE__ */ Su(p, 0), l = "iso8601", Xu = "gregory", el = "japanese", nl = {
	[Xu]: {
		"gregory-inverse": -1,
		gregory: 0
	},
	[el]: {
		"japanese-inverse": -1,
		japanese: 0,
		meiji: 1867,
		taisho: 1911,
		showa: 1925,
		heisei: 1988,
		reiwa: 2018
	},
	ethiopic: {
		ethioaa: 0,
		ethiopic: 5500
	},
	coptic: {
		"coptic-inverse": -1,
		coptic: 0
	},
	roc: {
		"roc-inverse": -1,
		roc: 0
	},
	buddhist: { be: 0 },
	islamic: { ah: 0 },
	indian: { saka: 0 },
	persian: { ap: 0 }
}, tl = {
	[Xu]: {
		bce: "gregory-inverse",
		ce: "gregory"
	},
	[el]: {
		bce: "japanese-inverse",
		ce: "japanese"
	},
	ethiopic: {
		era0: "ethioaa",
		era1: "ethiopic"
	},
	coptic: {
		era0: "coptic-inverse",
		era1: "coptic"
	},
	roc: {
		broc: "roc-inverse",
		minguo: "roc"
	}
}, ol = {
	chinese: 13,
	dangi: 13,
	hebrew: -6
}, d = /* @__PURE__ */ gt(requireType, "string"), D = /* @__PURE__ */ gt(requireType, "boolean"), rl = /* @__PURE__ */ gt(requireType, "number"), O = /* @__PURE__ */ Yu.map(((e$1) => e$1 + "s")), il = /* @__PURE__ */ sortStrings(O), al = /* @__PURE__ */ O.slice(0, 6), sl = /* @__PURE__ */ O.slice(6), cl = /* @__PURE__ */ sl.slice(1), ul = /* @__PURE__ */ bu(O), ll = /* @__PURE__ */ Su(O, 0), fl = /* @__PURE__ */ Su(al, 0), dl = /* @__PURE__ */ gt(zeroOutProps, O), w = [
	"isoNanosecond",
	"isoMicrosecond",
	"isoMillisecond",
	"isoSecond",
	"isoMinute",
	"isoHour"
], ml = [
	"isoDay",
	"isoMonth",
	"isoYear"
], pl = /* @__PURE__ */ w.concat(ml), Ca = /* @__PURE__ */ sortStrings(ml), hl = /* @__PURE__ */ sortStrings(w), Il = /* @__PURE__ */ sortStrings(pl), At = /* @__PURE__ */ Su(hl, 0), Ra = /* @__PURE__ */ gt(zeroOutProps, pl), Dl = 1e8, gl = Dl * Cu, Tl = [Dl, 0], Ml = [-Dl, 0], yl = 275760, Nl = -271821, en = Intl.DateTimeFormat, vl = 1970, Pl = 1972, Fl = 12, El = /* @__PURE__ */ isoArgsToEpochMilli(1868, 9, 8), Ol = /* @__PURE__ */ on(computeJapaneseEraParts, WeakMap), bl = "smallestUnit", Sl = "unit", wl = "roundingMode", Bl = "roundingIncrement", Yl = "fractionalSecondDigits", Cl = "relativeTo", kl = "direction", Zl = {
	constrain: 0,
	reject: 1
}, Rl = /* @__PURE__ */ Object.keys(Zl), zl = {
	compatible: 0,
	reject: 1,
	earlier: 2,
	later: 3
}, Al = {
	reject: 0,
	use: 1,
	prefer: 2,
	ignore: 3
}, Ul = {
	auto: 0,
	never: 1,
	critical: 2,
	always: 3
}, jl = {
	auto: 0,
	never: 1,
	critical: 2
}, ql = {
	auto: 0,
	never: 1
}, Ll = {
	floor: 0,
	halfFloor: 1,
	ceil: 2,
	halfCeil: 3,
	trunc: 4,
	halfTrunc: 5,
	expand: 6,
	halfExpand: 7,
	halfEven: 8
}, Wl = {
	previous: -1,
	next: 1
}, xl = /* @__PURE__ */ gt(refineUnitOption, bl), $l = /* @__PURE__ */ gt(refineUnitOption, "largestUnit"), Hl = /* @__PURE__ */ gt(refineUnitOption, Sl), Gl = /* @__PURE__ */ gt(refineChoiceOption, "overflow", Zl), Vl = /* @__PURE__ */ gt(refineChoiceOption, "disambiguation", zl), _l = /* @__PURE__ */ gt(refineChoiceOption, "offset", Al), Jl = /* @__PURE__ */ gt(refineChoiceOption, "calendarName", Ul), Kl = /* @__PURE__ */ gt(refineChoiceOption, "timeZoneName", jl), Ql = /* @__PURE__ */ gt(refineChoiceOption, "offset", ql), Xl = /* @__PURE__ */ gt(refineChoiceOption, wl, Ll), Qt = "PlainYearMonth", qt = "PlainMonthDay", G = "PlainDate", x = "PlainDateTime", ft = "PlainTime", _ = "ZonedDateTime", Re = "Instant", A = "Duration", ef = [
	Math.floor,
	(e$1) => hasHalf(e$1) ? Math.floor(e$1) : Math.round(e$1),
	Math.ceil,
	(e$1) => hasHalf(e$1) ? Math.ceil(e$1) : Math.round(e$1),
	Math.trunc,
	(e$1) => hasHalf(e$1) ? Math.trunc(e$1) || 0 : Math.round(e$1),
	(e$1) => e$1 < 0 ? Math.floor(e$1) : Math.ceil(e$1),
	(e$1) => Math.sign(e$1) * Math.round(Math.abs(e$1)) || 0,
	(e$1) => hasHalf(e$1) ? (e$1 = Math.trunc(e$1) || 0) + e$1 % 2 : Math.round(e$1)
], nf = "UTC", tf = 5184e3, of = /* @__PURE__ */ isoArgsToEpochSec(1847), rf = /* @__PURE__ */ isoArgsToEpochSec((() => {
	const e$1 = /* @__PURE__ */ new Date();
	return (0 === e$1.getTime() ? 2040 : e$1.getUTCFullYear()) + 10;
})()), af = /0+$/, he = /* @__PURE__ */ on(_zonedEpochSlotsToIso, WeakMap), sf = 2 ** 32 - 1, L = /* @__PURE__ */ on(((e$1) => {
	const n$1 = getTimeZoneEssence(e$1);
	return "object" == typeof n$1 ? new IntlTimeZone(n$1) : new FixedTimeZone(n$1 || 0);
}));
var FixedTimeZone = class {
	constructor(e$1) {
		this.j = e$1;
	}
	N() {
		return this.j;
	}
	v(e$1) {
		return ((e$2) => {
			const n$1 = ma({
				...e$2,
				...At
			});
			if (!n$1 || Math.abs(n$1[0]) > 1e8) throw new RangeError(Mu);
		})(e$1), [isoToEpochNanoWithOffset(e$1, this.j)];
	}
	l() {}
};
var IntlTimeZone = class {
	constructor(e$1) {
		this.ae = ((e$2) => {
			function getOffsetSec(e$3) {
				const [a$1, s$1] = computePeriod(clampNumber(e$3, o$1, r$1)), c$1 = n$1(a$1), u$1 = n$1(s$1);
				return c$1 === u$1 ? c$1 : pinch(t$1(a$1, s$1), c$1, u$1, e$3);
			}
			function pinch(n$2, t$2, o$2, r$2) {
				let i$1, a$1;
				for (; (void 0 === r$2 || void 0 === (i$1 = r$2 < n$2[0] ? t$2 : r$2 >= n$2[1] ? o$2 : void 0)) && (a$1 = n$2[1] - n$2[0]);) {
					const t$3 = n$2[0] + Math.floor(a$1 / 2);
					e$2(t$3) === o$2 ? n$2[1] = t$3 : n$2[0] = t$3 + 1;
				}
				return i$1;
			}
			const n$1 = on(e$2), t$1 = on(createSplitTuple);
			let o$1 = of, r$1 = rf;
			return {
				se(e$3) {
					const n$2 = getOffsetSec(e$3 - 86400), t$2 = getOffsetSec(e$3 + 86400), o$2 = e$3 - n$2, r$2 = e$3 - t$2;
					if (n$2 === t$2) return [o$2];
					const i$1 = getOffsetSec(o$2);
					return i$1 === getOffsetSec(r$2) ? [e$3 - i$1] : n$2 > t$2 ? [o$2, r$2] : [];
				},
				ue: getOffsetSec,
				l(e$3, i$1) {
					const a$1 = clampNumber(e$3, o$1, r$1);
					let [s$1, c$1] = computePeriod(a$1);
					const u$1 = tf * i$1, l$1 = i$1 < 0 ? () => c$1 > o$1 || (o$1 = a$1, 0) : () => s$1 < r$1 || (r$1 = a$1, 0);
					for (; l$1();) {
						const o$2 = n$1(s$1), r$2 = n$1(c$1);
						if (o$2 !== r$2) {
							const n$2 = t$1(s$1, c$1);
							pinch(n$2, o$2, r$2);
							const a$2 = n$2[0];
							if ((compareNumbers(a$2, e$3) || 1) === i$1) return a$2;
						}
						s$1 += u$1, c$1 += u$1;
					}
				}
			};
		})(((e$2) => (n$1) => {
			const t$1 = hashIntlFormatParts(e$2, n$1 * ku);
			return isoArgsToEpochSec(parseIntlPartsYear(t$1), parseInt(t$1.month), parseInt(t$1.day), parseInt(t$1.hour), parseInt(t$1.minute), parseInt(t$1.second)) - n$1;
		})(e$1));
	}
	N(e$1) {
		return this.ae.ue(epochNanoToSec(e$1)) * oo;
	}
	v(e$1) {
		const [n$1, t$1] = [isoArgsToEpochSec((o$1 = e$1).isoYear, o$1.isoMonth, o$1.isoDay, o$1.isoHour, o$1.isoMinute, o$1.isoSecond), o$1.isoMillisecond * Ke + o$1.isoMicrosecond * ro + o$1.isoNanosecond];
		var o$1;
		return this.ae.se(n$1).map(((e$2) => io(Ta(Ge(e$2, oo), t$1))));
	}
	l(e$1, n$1) {
		const [t$1, o$1] = epochNanoToSecMod(e$1), r$1 = this.ae.l(t$1 + (n$1 > 0 || o$1 ? 1 : 0), n$1);
		if (void 0 !== r$1) return Ge(r$1, oo);
	}
};
const cf = "([+-])", uf = "(?:[.,](\\d{1,9}))?", lf = `(?:(?:${cf}(\\d{6}))|(\\d{4}))-?(\\d{2})`, ff = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + uf + ")?)?", df = cf + ff, mf = lf + "-?(\\d{2})(?:[T ](\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?(Z|" + df + ")?)?", pf = "\\[(!?)([^\\]]*)\\]", hf = `((?:${pf}){0,9})`, If = /* @__PURE__ */ createRegExp(lf + hf), Df = /* @__PURE__ */ createRegExp("(?:--)?(\\d{2})-?(\\d{2})" + hf), gf = /* @__PURE__ */ createRegExp(mf + hf), Tf = /* @__PURE__ */ createRegExp("T?" + ff + "(?:" + df + ")?" + hf), Mf = /* @__PURE__ */ createRegExp(df), yf = /* @__PURE__ */ new RegExp(pf, "g"), Nf = /* @__PURE__ */ createRegExp(`${cf}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${uf}H)?(?:(\\d+)${uf}M)?(?:(\\d+)${uf}S)?)?`), vf = /* @__PURE__ */ on(((e$1) => new en("en", {
	calendar: l,
	timeZone: e$1,
	era: "short",
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	hour12: 0
}))), Pf = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Ff = /[^\w\/:+-]+/, Ef = /^M(\d{2})(L?)$/, Of = /* @__PURE__ */ on(createIntlCalendar), bf = /* @__PURE__ */ on(((e$1) => new en("en", {
	calendar: e$1,
	timeZone: nf,
	era: "short",
	year: "numeric",
	month: "short",
	day: "numeric",
	hour12: 0
}))), Sf = {
	ne: nativeYearMonthFromFields,
	fields: nativeFieldsMethod
}, wf = {
	ee: nativeDateFromFields,
	fields: nativeFieldsMethod
}, Bf = {
	te: nativeMonthDayFromFields,
	fields: nativeFieldsMethod
}, Yf = { P: nativeDateAdd }, Cf = {
	P: nativeDateAdd,
	h: nativeDateUntil
}, kf = {
	P: nativeDateAdd,
	h: nativeDateUntil,
	ee: nativeDateFromFields,
	ne: nativeYearMonthFromFields,
	te: nativeMonthDayFromFields,
	fields: nativeFieldsMethod,
	oe: nativeMergeFields,
	inLeapYear: computeNativeInLeapYear,
	monthsInYear: computeNativeMonthsInYear,
	daysInMonth: computeNativeDaysInMonth,
	daysInYear: computeNativeDaysInYear,
	dayOfYear: computeNativeDayOfYear,
	era(e$1) {
		return this.$(e$1)[0];
	},
	eraYear(e$1) {
		return this.$(e$1)[1];
	},
	monthCode(e$1) {
		const [n$1, t$1] = this.u(e$1), [o$1, r$1] = this.m(n$1, t$1);
		return sa(o$1, r$1);
	},
	dayOfWeek: Ha,
	daysInWeek: fo
}, Zf = {
	F: noop,
	O: computeIsoMonthsInYear,
	U: computeIsoFieldsFromParts
}, Rf = /* @__PURE__ */ Object.assign({}, Zf, { B: computeIsoDaysInMonth }), zf = /* @__PURE__ */ Object.assign({}, Rf, { R: computeIsoYearMonthForMonthDay }), Af = /* @__PURE__ */ Object.assign({}, Sf, Zf), Uf = /* @__PURE__ */ Object.assign({}, wf, zf), jf = /* @__PURE__ */ Object.assign({}, Bf, zf), qf = /* @__PURE__ */ Object.assign({}, Af, { oe: nativeMergeFields }), Lf = /* @__PURE__ */ Object.assign({}, Uf, { oe: nativeMergeFields }), Wf = /* @__PURE__ */ Object.assign({}, jf, { oe: nativeMergeFields }), xf = {
	u: computeIsoDateParts,
	M: isoArgsToEpochMilli,
	p: isoMonthAdd
}, $f = /* @__PURE__ */ Object.assign({}, xf, {
	m: computeIsoMonthCodeParts,
	O: computeIsoMonthsInYear,
	B: computeIsoDaysInMonth,
	F: noop
}), Hf = /* @__PURE__ */ Object.assign({}, Yf, $f), Gf = /* @__PURE__ */ Object.assign({}, Cf, $f, { q: computeIsoMonthsInYearSpan }), Vf = { day: computeIsoDay }, _f = /* @__PURE__ */ Object.assign({}, Hf, Vf), Jf = /* @__PURE__ */ Object.assign({}, Gf, Vf), Kf = {
	u: computeIsoDateParts,
	$: computeIsoEraParts,
	m: computeIsoMonthCodeParts
}, Qf = {
	inLeapYear: computeNativeInLeapYear,
	u: computeIsoDateParts,
	L: computeIsoInLeapYear
}, Xf = {
	monthsInYear: computeNativeMonthsInYear,
	u: computeIsoDateParts,
	O: computeIsoMonthsInYear
}, em = {
	daysInMonth: computeNativeDaysInMonth,
	u: computeIsoDateParts,
	B: computeIsoDaysInMonth
}, nm = {
	daysInYear: computeNativeDaysInYear,
	u: computeIsoDateParts,
	G: computeIsoDaysInYear
}, tm = {
	dayOfYear: computeNativeDayOfYear,
	u: computeIsoDateParts,
	M: isoArgsToEpochMilli
}, om = /* @__PURE__ */ Object.assign({}, tm, {
	weekOfYear: computeNativeWeekOfYear,
	yearOfWeek: computeNativeYearOfWeek,
	I(e$1) {
		function computeWeekShift(e$2) {
			return (7 - e$2 < n$1 ? 7 : 0) - e$2;
		}
		function computeWeeksInYear(e$2) {
			const n$2 = computeIsoDaysInYear(l$1 + e$2), t$2 = e$2 || 1;
			return c$1 = (n$2 + (computeWeekShift(modFloor(a$1 + n$2 * t$2, 7)) - s$1) * t$2) / 7;
		}
		const n$1 = this.id ? 1 : 4, t$1 = Ha(e$1), o$1 = this.dayOfYear(e$1), r$1 = modFloor(t$1 - 1, 7), i$1 = o$1 - 1, a$1 = modFloor(r$1 - i$1, 7), s$1 = computeWeekShift(a$1);
		let c$1, u$1 = Math.floor((i$1 - s$1) / 7) + 1, l$1 = e$1.isoYear;
		return u$1 ? u$1 > computeWeeksInYear(0) && (u$1 = 1, l$1++) : (u$1 = computeWeeksInYear(-1), l$1--), [
			u$1,
			l$1,
			c$1
		];
	}
}), rm = {
	u: computeIsoDateParts,
	m: computeIsoMonthCodeParts,
	R: computeIsoYearMonthForMonthDay,
	U: computeIsoFieldsFromParts
}, im = /* @__PURE__ */ Object.assign({}, kf, om, {
	u: computeIsoDateParts,
	$: computeIsoEraParts,
	m: computeIsoMonthCodeParts,
	R: computeIsoYearMonthForMonthDay,
	L: computeIsoInLeapYear,
	F: noop,
	O: computeIsoMonthsInYear,
	q: computeIsoMonthsInYearSpan,
	B: computeIsoDaysInMonth,
	G: computeIsoDaysInYear,
	U: computeIsoFieldsFromParts,
	M: isoArgsToEpochMilli,
	p: isoMonthAdd,
	year(e$1) {
		return e$1.isoYear;
	},
	month(e$1) {
		return e$1.isoMonth;
	},
	day: computeIsoDay
}), am = {
	F: computeIntlLeapMonth,
	O: computeIntlMonthsInYear,
	U: computeIsoFieldsFromIntlParts
}, sm = /* @__PURE__ */ Object.assign({}, am, { B: computeIntlDaysInMonth }), cm = /* @__PURE__ */ Object.assign({}, sm, { R: computeIntlYearMonthForMonthDay }), um = /* @__PURE__ */ Object.assign({}, Sf, am), lm = /* @__PURE__ */ Object.assign({}, wf, sm), fm = /* @__PURE__ */ Object.assign({}, Bf, cm), dm = /* @__PURE__ */ Object.assign({}, um, { oe: nativeMergeFields }), mm = /* @__PURE__ */ Object.assign({}, lm, { oe: nativeMergeFields }), pm = /* @__PURE__ */ Object.assign({}, fm, { oe: nativeMergeFields }), hm = {
	u: computeIntlDateParts,
	M: computeIntlEpochMilli,
	p: intlMonthAdd
}, Im = /* @__PURE__ */ Object.assign({}, hm, {
	m: computeIntlMonthCodeParts,
	O: computeIntlMonthsInYear,
	B: computeIntlDaysInMonth,
	F: computeIntlLeapMonth
}), Dm = /* @__PURE__ */ Object.assign({}, Yf, Im), gm = /* @__PURE__ */ Object.assign({}, Cf, Im, { q: computeIntlMonthsInYearSpan }), Tm = { day: computeIntlDay }, Mm = /* @__PURE__ */ Object.assign({}, Dm, Tm), ym = /* @__PURE__ */ Object.assign({}, gm, Tm), Nm = {
	u: computeIntlDateParts,
	$: computeIntlEraParts,
	m: computeIntlMonthCodeParts
}, vm = {
	inLeapYear: computeNativeInLeapYear,
	u: computeIntlDateParts,
	L: computeIntlInLeapYear
}, Pm = {
	monthsInYear: computeNativeMonthsInYear,
	u: computeIntlDateParts,
	O: computeIntlMonthsInYear
}, Fm = {
	daysInMonth: computeNativeDaysInMonth,
	u: computeIntlDateParts,
	B: computeIntlDaysInMonth
}, Em = {
	daysInYear: computeNativeDaysInYear,
	u: computeIntlDateParts,
	G: computeIntlDaysInYear
}, Om = {
	dayOfYear: computeNativeDayOfYear,
	u: computeIntlDateParts,
	M: computeIntlEpochMilli
}, Sm = /* @__PURE__ */ Object.assign({}, Om, { I() {
	return [];
} }, {
	weekOfYear: computeNativeWeekOfYear,
	yearOfWeek: computeNativeYearOfWeek
}), wm = {
	u: computeIntlDateParts,
	m: computeIntlMonthCodeParts,
	R: computeIntlYearMonthForMonthDay,
	U: computeIsoFieldsFromIntlParts
}, Bm = /* @__PURE__ */ Object.assign({}, kf, Sm, {
	u: computeIntlDateParts,
	$: computeIntlEraParts,
	m: computeIntlMonthCodeParts,
	R: computeIntlYearMonthForMonthDay,
	L: computeIntlInLeapYear,
	F: computeIntlLeapMonth,
	O: computeIntlMonthsInYear,
	q: computeIntlMonthsInYearSpan,
	B: computeIntlDaysInMonth,
	G: computeIntlDaysInYear,
	U: computeIsoFieldsFromIntlParts,
	M: computeIntlEpochMilli,
	p: intlMonthAdd,
	year(e$1) {
		return this._(e$1).year;
	},
	month(e$1) {
		const { year: n$1, V: t$1 } = this._(e$1), { X: o$1 } = this.J(n$1);
		return o$1[t$1] + 1;
	},
	day: computeIntlDay
}), Va = /* @__PURE__ */ createNativeOpsCreator(Af, um), Aa = /* @__PURE__ */ createNativeOpsCreator(Uf, lm), _a = /* @__PURE__ */ createNativeOpsCreator(jf, fm), Fo = /* @__PURE__ */ createNativeOpsCreator(qf, dm), mo = /* @__PURE__ */ createNativeOpsCreator(Lf, mm), Wo = /* @__PURE__ */ createNativeOpsCreator(Wf, pm), xa = /* @__PURE__ */ createNativeOpsCreator(xf, hm), Wa = /* @__PURE__ */ createNativeOpsCreator(Hf, Dm), Ia = /* @__PURE__ */ createNativeOpsCreator(Gf, gm), za = /* @__PURE__ */ createNativeOpsCreator(Vf, Tm), Yo = /* @__PURE__ */ createNativeOpsCreator(_f, Mm), Lo = /* @__PURE__ */ createNativeOpsCreator(Jf, ym), ra = /* @__PURE__ */ createNativeOpsCreator(Kf, Nm), ia = /* @__PURE__ */ createNativeOpsCreator(Qf, vm), ca = /* @__PURE__ */ createNativeOpsCreator(Xf, Pm), da = /* @__PURE__ */ createNativeOpsCreator(em, Fm), ua = /* @__PURE__ */ createNativeOpsCreator(nm, Em), la = /* @__PURE__ */ createNativeOpsCreator(tm, Om), $a = /* @__PURE__ */ createNativeOpsCreator(om, Sm), ko = /* @__PURE__ */ createNativeOpsCreator(rm, wm), v = /* @__PURE__ */ createNativeOpsCreator(im, Bm), Ym = {
	era: toStringViaPrimitive,
	eraYear: Za,
	year: Za,
	month: toPositiveInteger,
	monthCode(e$1) {
		const n$1 = toStringViaPrimitive(e$1);
		return parseMonthCode(n$1), n$1;
	},
	day: toPositiveInteger
}, Cm = /* @__PURE__ */ Su(p, Za), km = /* @__PURE__ */ Su(O, Ba), Rm = /* @__PURE__ */ Object.assign({}, Ym, Cm, km, { offset(e$1) {
	const n$1 = toStringViaPrimitive(e$1);
	return parseOffsetNano(n$1), n$1;
} }), zm = /* @__PURE__ */ gt(remapProps, p, w), Ga = /* @__PURE__ */ gt(remapProps, w, p), Am = "numeric", Um = ["timeZoneName"], jm = {
	month: Am,
	day: Am
}, qm = {
	year: Am,
	month: Am
}, Lm = /* @__PURE__ */ Object.assign({}, qm, { day: Am }), Wm = {
	hour: Am,
	minute: Am,
	second: Am
}, xm = /* @__PURE__ */ Object.assign({}, Lm, Wm), $m = /* @__PURE__ */ Object.assign({}, xm, { timeZoneName: "short" }), Hm = /* @__PURE__ */ Object.keys(qm), Gm = /* @__PURE__ */ Object.keys(jm), Vm = /* @__PURE__ */ Object.keys(Lm), _m = /* @__PURE__ */ Object.keys(Wm), Jm = ["dateStyle"], Km = /* @__PURE__ */ Hm.concat(Jm), Qm = /* @__PURE__ */ Gm.concat(Jm), Xm = /* @__PURE__ */ Vm.concat(Jm, ["weekday"]), ep = /* @__PURE__ */ _m.concat([
	"dayPeriod",
	"timeStyle",
	"fractionalSecondDigits"
]), np = /* @__PURE__ */ Xm.concat(ep), tp = /* @__PURE__ */ Um.concat(ep), op = /* @__PURE__ */ Um.concat(Xm), rp = /* @__PURE__ */ Um.concat(["day", "weekday"], ep), ip = /* @__PURE__ */ Um.concat(["year", "weekday"], ep), ap = /* @__PURE__ */ createOptionsTransformer(np, xm), sp = /* @__PURE__ */ createOptionsTransformer(np, $m), cp = /* @__PURE__ */ createOptionsTransformer(np, xm, Um), up = /* @__PURE__ */ createOptionsTransformer(Xm, Lm, tp), lp = /* @__PURE__ */ createOptionsTransformer(ep, Wm, op), fp = /* @__PURE__ */ createOptionsTransformer(Km, qm, rp), dp = /* @__PURE__ */ createOptionsTransformer(Qm, jm, ip), mp = {}, pp = /* @__PURE__ */ computeNonBuggyIsoResolve(), Q = [ap, I], ot = [
	sp,
	I,
	0,
	(e$1, n$1) => {
		const t$1 = e$1.timeZone;
		if (n$1 && n$1.timeZone !== t$1) throw new RangeError(pu);
		return t$1;
	}
], U = [cp, isoToEpochMilli], X = [up, isoToEpochMilli], tt = [lp, (e$1) => isoTimeFieldsToNano(e$1) / Ke], et = [
	fp,
	isoToEpochMilli,
	pp
], nt = [
	dp,
	isoToEpochMilli,
	pp
];

//#endregion
//#region node_modules/temporal-polyfill/chunks/classApi.js
function createSlotClass(i$1, l$1, s$1, c$1, u$1, f$1) {
	function Class(...t$1) {
		if (!(this instanceof Class)) throw new TypeError(a);
		{
			const e$1 = l$1(...t$1);
			un(this, e$1), dbg(this, e$1, f$1);
		}
	}
	function bindMethod(t$1, e$1) {
		return Object.defineProperties((function(...e$2) {
			return t$1.call(this, getSpecificSlots(this), ...e$2);
		}), r(e$1));
	}
	function getSpecificSlots(t$1) {
		const e$1 = cn(t$1);
		if (!e$1 || e$1.branding !== i$1) throw new TypeError(a);
		return e$1;
	}
	return Object.defineProperties(Class.prototype, {
		...t(e(bindMethod, s$1)),
		...n(e(bindMethod, c$1)),
		...o("Temporal." + i$1)
	}), Object.defineProperties(Class, {
		...n(u$1),
		...r(i$1)
	}), [
		Class,
		(t$1) => {
			const e$1 = Object.create(Class.prototype);
			return un(e$1, t$1), dbg(e$1, t$1, f$1), e$1;
		},
		getSpecificSlots
	];
}
function rejectInvalidBag(t$1) {
	if (cn(t$1) || void 0 !== t$1.calendar || void 0 !== t$1.timeZone) throw new TypeError(i);
	return t$1;
}
function dbg(t$1, e$1, n$1) {
	"dbg" === dbg.name && Object.defineProperty(t$1, "o", {
		value: n$1(e$1),
		writable: 0,
		enumerable: 0,
		configurable: 0
	});
}
function getCalendarIdFromBag(t$1) {
	return extractCalendarIdFromBag(t$1) || l;
}
function extractCalendarIdFromBag(t$1) {
	const { calendar: e$1 } = t$1;
	if (void 0 !== e$1) return refineCalendarArg(e$1);
}
function refineCalendarArg(t$1) {
	if (s(t$1)) {
		const { calendar: e$1 } = cn(t$1) || {};
		if (!e$1) throw new TypeError(c(t$1));
		return e$1;
	}
	return ((t$2) => u(f(d(t$2))))(t$1);
}
function createCalendarGetters(t$1) {
	const e$1 = {};
	for (const n$1 in t$1) e$1[n$1] = (t$2) => {
		const { calendar: e$2 } = t$2;
		return v(e$2)[n$1](t$2);
	};
	return e$1;
}
function neverValueOf() {
	throw new TypeError(C);
}
function refineTimeZoneArg(t$1) {
	if (s(t$1)) {
		const { timeZone: e$1 } = cn(t$1) || {};
		if (!e$1) throw new TypeError(F(t$1));
		return e$1;
	}
	return ((t$2) => Z(M(d(t$2))))(t$1);
}
function toDurationSlots(t$1) {
	if (s(t$1)) {
		const e$1 = cn(t$1);
		return e$1 && e$1.branding === A ? e$1 : q(t$1);
	}
	return R(t$1);
}
function refinePublicRelativeTo(t$1) {
	if (void 0 !== t$1) {
		if (s(t$1)) {
			const e$1 = cn(t$1) || {};
			switch (e$1.branding) {
				case _:
				case G: return e$1;
				case x: return W(e$1);
			}
			const n$1 = getCalendarIdFromBag(t$1);
			return {
				...z(refineTimeZoneArg, L, v(n$1), t$1),
				calendar: n$1
			};
		}
		return $(t$1);
	}
}
function toPlainTimeSlots(t$1, e$1) {
	if (s(t$1)) {
		const n$2 = cn(t$1) || {};
		switch (n$2.branding) {
			case ft: return dt(e$1), n$2;
			case x: return dt(e$1), St(n$2);
			case _: return dt(e$1), mt(L, n$2);
		}
		return Tt(t$1, e$1);
	}
	const n$1 = ht(t$1);
	return dt(e$1), n$1;
}
function optionalToPlainTimeFields(t$1) {
	return void 0 === t$1 ? void 0 : toPlainTimeSlots(t$1);
}
function toPlainDateTimeSlots(t$1, e$1) {
	if (s(t$1)) {
		const n$2 = cn(t$1) || {};
		switch (n$2.branding) {
			case x: return dt(e$1), n$2;
			case G: return dt(e$1), jt({
				...n$2,
				...At
			});
			case _: return dt(e$1), yt(L, n$2);
		}
		return Nt(v(getCalendarIdFromBag(t$1)), t$1, e$1);
	}
	const n$1 = Bt(t$1);
	return dt(e$1), n$1;
}
function toPlainMonthDaySlots(t$1, e$1) {
	if (s(t$1)) {
		const n$2 = cn(t$1);
		if (n$2 && n$2.branding === qt) return dt(e$1), n$2;
		const o$1 = extractCalendarIdFromBag(t$1);
		return Rt(v(o$1 || l), !o$1, t$1, e$1);
	}
	const n$1 = xt(v, t$1);
	return dt(e$1), n$1;
}
function toPlainYearMonthSlots(t$1, e$1) {
	if (s(t$1)) {
		const n$2 = cn(t$1);
		return n$2 && n$2.branding === Qt ? (dt(e$1), n$2) : Ut(v(getCalendarIdFromBag(t$1)), t$1, e$1);
	}
	const n$1 = Xt(v, t$1);
	return dt(e$1), n$1;
}
function toPlainDateSlots(t$1, e$1) {
	if (s(t$1)) {
		const n$2 = cn(t$1) || {};
		switch (n$2.branding) {
			case G: return dt(e$1), n$2;
			case x: return dt(e$1), W(n$2);
			case _: return dt(e$1), fe(L, n$2);
		}
		return de(v(getCalendarIdFromBag(t$1)), t$1, e$1);
	}
	const n$1 = me(t$1);
	return dt(e$1), n$1;
}
function toZonedDateTimeSlots(t$1, e$1) {
	if (s(t$1)) {
		const n$1 = cn(t$1);
		if (n$1 && n$1.branding === _) return je(e$1), n$1;
		const o$1 = getCalendarIdFromBag(t$1);
		return Ae(refineTimeZoneArg, L, v(o$1), o$1, t$1, e$1);
	}
	return Ne(t$1, e$1);
}
function adaptDateMethods(t$1) {
	return e(((t$2) => (e$1) => t$2(slotsToIso(e$1))), t$1);
}
function slotsToIso(t$1) {
	return he(t$1, L);
}
function toInstantSlots(t$1) {
	if (s(t$1)) {
		const e$1 = cn(t$1);
		if (e$1) switch (e$1.branding) {
			case Re: return e$1;
			case _: return xe(e$1.epochNanoseconds);
		}
	}
	return We(t$1);
}
function toTemporalInstant() {
	return Hn(xe(Ge(_e(Date.prototype.valueOf.call(this)), Ke)));
}
function createDateTimeFormatClass() {
	function DateTimeFormatFunc(t$2, e$2) {
		return new DateTimeFormatNew(t$2, e$2);
	}
	function DateTimeFormatNew(t$2, e$2 = Object.create(null)) {
		to.set(this, ((t$3, e$3) => {
			const n$2 = new en(t$3, e$3), o$1 = n$2.resolvedOptions(), r$1 = o$1.locale, a$1 = nn(Object.keys(e$3), o$1), i$1 = on(createFormatPrepperForBranding), prepFormat = (t$4, ...e$4) => {
				if (t$4) {
					if (2 !== e$4.length) throw new TypeError(ln);
					for (const t$5 of e$4) if (void 0 === t$5) throw new TypeError(ln);
				}
				t$4 || void 0 !== e$4[0] || (e$4 = []);
				const o$2 = e$4.map(((t$5) => cn(t$5) || Number(t$5)));
				let l$1, s$1 = 0;
				for (const t$5 of o$2) {
					const e$5 = "object" == typeof t$5 ? t$5.branding : void 0;
					if (s$1++ && e$5 !== l$1) throw new TypeError(ln);
					l$1 = e$5;
				}
				return l$1 ? i$1(l$1)(r$1, a$1, ...o$2) : [n$2, ...o$2];
			};
			return prepFormat.i = n$2, prepFormat;
		})(t$2, e$2));
	}
	const t$1 = en.prototype, e$1 = Object.getOwnPropertyDescriptors(t$1), n$1 = Object.getOwnPropertyDescriptors(en);
	for (const t$2 in e$1) {
		const n$2 = e$1[t$2], o$1 = t$2.startsWith("format") && createFormatMethod(t$2);
		"function" == typeof n$2.value ? n$2.value = "constructor" === t$2 ? DateTimeFormatFunc : o$1 || createProxiedMethod(t$2) : o$1 && (n$2.get = function() {
			if (!to.has(this)) throw new TypeError(a);
			return (...t$3) => o$1.apply(this, t$3);
		}, Object.defineProperties(n$2.get, r(`get ${t$2}`)));
	}
	return n$1.prototype.value = DateTimeFormatNew.prototype = Object.create({}, e$1), Object.defineProperties(DateTimeFormatFunc, n$1), DateTimeFormatFunc;
}
function createFormatMethod(t$1) {
	return Object.defineProperties((function(...e$1) {
		const [o$1, ...r$1] = to.get(this)(t$1.includes("Range"), ...e$1);
		return o$1[t$1](...r$1);
	}), r(t$1));
}
function createProxiedMethod(t$1) {
	return Object.defineProperties((function(...e$1) {
		return to.get(this).i[t$1](...e$1);
	}), r(t$1));
}
function createFormatPrepperForBranding(t$1) {
	const e$1 = vn[t$1];
	if (!e$1) throw new TypeError(rn(t$1));
	return K(e$1, on(an), 1);
}
const sn = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ sn.get.bind(sn), un = /* @__PURE__ */ sn.set.bind(sn), fn = {
	era: m,
	eraYear: S,
	year: T,
	month: h,
	daysInMonth: h,
	daysInYear: h,
	inLeapYear: D,
	monthsInYear: h
}, dn = { monthCode: d }, mn = { day: h }, Sn = {
	dayOfWeek: h,
	dayOfYear: h,
	weekOfYear: g,
	yearOfWeek: S,
	daysInWeek: h
}, Tn = /* @__PURE__ */ createCalendarGetters(/* @__PURE__ */ Object.assign({}, fn, dn, mn, Sn)), hn = /* @__PURE__ */ createCalendarGetters({
	...fn,
	...dn
}), Dn = /* @__PURE__ */ createCalendarGetters({
	...dn,
	...mn
}), gn = { calendarId: (t$1) => t$1.calendar }, Pn = /* @__PURE__ */ P(((t$1) => (e$1) => e$1[t$1]), O.concat("sign")), On = /* @__PURE__ */ P(((t$1, e$1) => (t$2) => t$2[w[e$1]]), p), pn = {
	epochMilliseconds: I,
	epochNanoseconds: b
}, [wn, In, bn] = createSlotClass(A, j, {
	...Pn,
	blank: y
}, {
	with: (t$1, e$1) => In(N(t$1, e$1)),
	negated: (t$1) => In(B(t$1)),
	abs: (t$1) => In(Y(t$1)),
	add: (t$1, e$1, n$1) => In(E(refinePublicRelativeTo, v, L, 0, t$1, toDurationSlots(e$1), n$1)),
	subtract: (t$1, e$1, n$1) => In(E(refinePublicRelativeTo, v, L, 1, t$1, toDurationSlots(e$1), n$1)),
	round: (t$1, e$1) => In(V(refinePublicRelativeTo, v, L, t$1, e$1)),
	total: (t$1, e$1) => J(refinePublicRelativeTo, v, L, t$1, e$1),
	toLocaleString(t$1, e$1, n$1) {
		return Intl.DurationFormat ? new Intl.DurationFormat(e$1, n$1).format(this) : k(t$1);
	},
	toString: k,
	toJSON: (t$1) => k(t$1),
	valueOf: neverValueOf
}, {
	from: (t$1) => In(toDurationSlots(t$1)),
	compare: (t$1, e$1, n$1) => H(refinePublicRelativeTo, v, L, toDurationSlots(t$1), toDurationSlots(e$1), n$1)
}, k), vn = {
	Instant: Q,
	PlainDateTime: U,
	PlainDate: X,
	PlainTime: tt,
	PlainYearMonth: et,
	PlainMonthDay: nt
}, Cn = /* @__PURE__ */ K(Q), Fn = /* @__PURE__ */ K(ot), Zn = /* @__PURE__ */ K(U), Mn = /* @__PURE__ */ K(X), yn = /* @__PURE__ */ K(tt), jn = /* @__PURE__ */ K(et), An = /* @__PURE__ */ K(nt), [Nn, Bn] = createSlotClass(ft, ut, On, {
	with(t$1, e$1, n$1) {
		return Bn(rt(this, rejectInvalidBag(e$1), n$1));
	},
	add: (t$1, e$1) => Bn(at(0, t$1, toDurationSlots(e$1))),
	subtract: (t$1, e$1) => Bn(at(1, t$1, toDurationSlots(e$1))),
	until: (t$1, e$1, n$1) => In(it(0, t$1, toPlainTimeSlots(e$1), n$1)),
	since: (t$1, e$1, n$1) => In(it(1, t$1, toPlainTimeSlots(e$1), n$1)),
	round: (t$1, e$1) => Bn(lt(t$1, e$1)),
	equals: (t$1, e$1) => st(t$1, toPlainTimeSlots(e$1)),
	toLocaleString(t$1, e$1, n$1) {
		const [o$1, r$1] = yn(e$1, n$1, t$1);
		return o$1.format(r$1);
	},
	toString: ct,
	toJSON: (t$1) => ct(t$1),
	valueOf: neverValueOf
}, {
	from: (t$1, e$1) => Bn(toPlainTimeSlots(t$1, e$1)),
	compare: (t$1, e$1) => Dt(toPlainTimeSlots(t$1), toPlainTimeSlots(e$1))
}, ct), [Yn, En] = createSlotClass(x, gt(Mt, Zt), {
	...gn,
	...Tn,
	...On
}, {
	with: (t$1, e$1, n$1) => En(Pt(v, t$1, rejectInvalidBag(e$1), n$1)),
	withCalendar: (t$1, e$1) => En(Ot(t$1, refineCalendarArg(e$1))),
	withPlainTime: (t$1, e$1) => En(pt(t$1, optionalToPlainTimeFields(e$1))),
	add: (t$1, e$1, n$1) => En(wt(v, 0, t$1, toDurationSlots(e$1), n$1)),
	subtract: (t$1, e$1, n$1) => En(wt(v, 1, t$1, toDurationSlots(e$1), n$1)),
	until: (t$1, e$1, n$1) => In(It(v, 0, t$1, toPlainDateTimeSlots(e$1), n$1)),
	since: (t$1, e$1, n$1) => In(It(v, 1, t$1, toPlainDateTimeSlots(e$1), n$1)),
	round: (t$1, e$1) => En(bt(t$1, e$1)),
	equals: (t$1, e$1) => vt(t$1, toPlainDateTimeSlots(e$1)),
	toZonedDateTime: (t$1, e$1, n$1) => zn(Ct(L, t$1, refineTimeZoneArg(e$1), n$1)),
	toPlainDate: (t$1) => Wn(W(t$1)),
	toPlainTime: (t$1) => Bn(St(t$1)),
	toLocaleString(t$1, e$1, n$1) {
		const [o$1, r$1] = Zn(e$1, n$1, t$1);
		return o$1.format(r$1);
	},
	toString: Ft,
	toJSON: (t$1) => Ft(t$1),
	valueOf: neverValueOf
}, {
	from: (t$1, e$1) => En(toPlainDateTimeSlots(t$1, e$1)),
	compare: (t$1, e$1) => Yt(toPlainDateTimeSlots(t$1), toPlainDateTimeSlots(e$1))
}, Ft), [Ln, Vn, Jn] = createSlotClass(qt, gt(kt, Zt), {
	...gn,
	...Dn
}, {
	with: (t$1, e$1, n$1) => Vn(Et(v, t$1, rejectInvalidBag(e$1), n$1)),
	equals: (t$1, e$1) => Lt(t$1, toPlainMonthDaySlots(e$1)),
	toPlainDate(t$1, e$1) {
		return Wn(Vt(v, t$1, this, e$1));
	},
	toLocaleString(t$1, e$1, n$1) {
		const [o$1, r$1] = An(e$1, n$1, t$1);
		return o$1.format(r$1);
	},
	toString: Jt,
	toJSON: (t$1) => Jt(t$1),
	valueOf: neverValueOf
}, { from: (t$1, e$1) => Vn(toPlainMonthDaySlots(t$1, e$1)) }, Jt), [kn, qn, Rn] = createSlotClass(Qt, gt(Kt, Zt), {
	...gn,
	...hn
}, {
	with: (t$1, e$1, n$1) => qn(Wt(v, t$1, rejectInvalidBag(e$1), n$1)),
	add: (t$1, e$1, n$1) => qn(Gt(v, 0, t$1, toDurationSlots(e$1), n$1)),
	subtract: (t$1, e$1, n$1) => qn(Gt(v, 1, t$1, toDurationSlots(e$1), n$1)),
	until: (t$1, e$1, n$1) => In(_t(v, 0, t$1, toPlainYearMonthSlots(e$1), n$1)),
	since: (t$1, e$1, n$1) => In(_t(v, 1, t$1, toPlainYearMonthSlots(e$1), n$1)),
	equals: (t$1, e$1) => zt(t$1, toPlainYearMonthSlots(e$1)),
	toPlainDate(t$1, e$1) {
		return Wn($t(v, t$1, this, e$1));
	},
	toLocaleString(t$1, e$1, n$1) {
		const [o$1, r$1] = jn(e$1, n$1, t$1);
		return o$1.format(r$1);
	},
	toString: Ht,
	toJSON: (t$1) => Ht(t$1),
	valueOf: neverValueOf
}, {
	from: (t$1, e$1) => qn(toPlainYearMonthSlots(t$1, e$1)),
	compare: (t$1, e$1) => te(toPlainYearMonthSlots(t$1), toPlainYearMonthSlots(e$1))
}, Ht), [xn, Wn, Gn] = createSlotClass(G, gt(ue, Zt), {
	...gn,
	...Tn
}, {
	with: (t$1, e$1, n$1) => Wn(ee(v, t$1, rejectInvalidBag(e$1), n$1)),
	withCalendar: (t$1, e$1) => Wn(Ot(t$1, refineCalendarArg(e$1))),
	add: (t$1, e$1, n$1) => Wn(ne(v, 0, t$1, toDurationSlots(e$1), n$1)),
	subtract: (t$1, e$1, n$1) => Wn(ne(v, 1, t$1, toDurationSlots(e$1), n$1)),
	until: (t$1, e$1, n$1) => In(oe(v, 0, t$1, toPlainDateSlots(e$1), n$1)),
	since: (t$1, e$1, n$1) => In(oe(v, 1, t$1, toPlainDateSlots(e$1), n$1)),
	equals: (t$1, e$1) => re(t$1, toPlainDateSlots(e$1)),
	toZonedDateTime(t$1, e$1) {
		return zn(ae(refineTimeZoneArg, toPlainTimeSlots, L, t$1, s(e$1) ? e$1 : { timeZone: e$1 }));
	},
	toPlainDateTime: (t$1, e$1) => En(ie(t$1, optionalToPlainTimeFields(e$1))),
	toPlainYearMonth(t$1) {
		return qn(le(v, t$1, this));
	},
	toPlainMonthDay(t$1) {
		return Vn(se(v, t$1, this));
	},
	toLocaleString(t$1, e$1, n$1) {
		const [o$1, r$1] = Mn(e$1, n$1, t$1);
		return o$1.format(r$1);
	},
	toString: ce,
	toJSON: (t$1) => ce(t$1),
	valueOf: neverValueOf
}, {
	from: (t$1, e$1) => Wn(toPlainDateSlots(t$1, e$1)),
	compare: (t$1, e$1) => te(toPlainDateSlots(t$1), toPlainDateSlots(e$1))
}, ce), [_n, zn] = createSlotClass(_, gt(ye, Zt, Me), {
	...pn,
	...gn,
	...adaptDateMethods(Tn),
	...adaptDateMethods(On),
	offset: (t$1) => Se(slotsToIso(t$1).offsetNanoseconds),
	offsetNanoseconds: (t$1) => slotsToIso(t$1).offsetNanoseconds,
	timeZoneId: (t$1) => t$1.timeZone,
	hoursInDay: (t$1) => Te(L, t$1)
}, {
	with: (t$1, e$1, n$1) => zn(De(v, L, t$1, rejectInvalidBag(e$1), n$1)),
	withCalendar: (t$1, e$1) => zn(Ot(t$1, refineCalendarArg(e$1))),
	withTimeZone: (t$1, e$1) => zn(ge(t$1, refineTimeZoneArg(e$1))),
	withPlainTime: (t$1, e$1) => zn(Pe(L, t$1, optionalToPlainTimeFields(e$1))),
	add: (t$1, e$1, n$1) => zn(Oe(v, L, 0, t$1, toDurationSlots(e$1), n$1)),
	subtract: (t$1, e$1, n$1) => zn(Oe(v, L, 1, t$1, toDurationSlots(e$1), n$1)),
	until: (t$1, e$1, n$1) => In(pe(we(v, L, 0, t$1, toZonedDateTimeSlots(e$1), n$1))),
	since: (t$1, e$1, n$1) => In(pe(we(v, L, 1, t$1, toZonedDateTimeSlots(e$1), n$1))),
	round: (t$1, e$1) => zn(Ie(L, t$1, e$1)),
	startOfDay: (t$1) => zn(be(L, t$1)),
	equals: (t$1, e$1) => ve(t$1, toZonedDateTimeSlots(e$1)),
	toInstant: (t$1) => Hn(Ce(t$1)),
	toPlainDateTime: (t$1) => En(yt(L, t$1)),
	toPlainDate: (t$1) => Wn(fe(L, t$1)),
	toPlainTime: (t$1) => Bn(mt(L, t$1)),
	toLocaleString(t$1, e$1, n$1 = {}) {
		const [o$1, r$1] = Fn(e$1, n$1, t$1);
		return o$1.format(r$1);
	},
	toString: (t$1, e$1) => Fe(L, t$1, e$1),
	toJSON: (t$1) => Fe(L, t$1),
	valueOf: neverValueOf,
	getTimeZoneTransition(t$1, e$1) {
		const { timeZone: n$1, epochNanoseconds: o$1 } = t$1, r$1 = Ze(e$1), a$1 = L(n$1).l(o$1, r$1);
		return a$1 ? zn({
			...t$1,
			epochNanoseconds: a$1
		}) : null;
	}
}, {
	from: (t$1, e$1) => zn(toZonedDateTimeSlots(t$1, e$1)),
	compare: (t$1, e$1) => Be(toZonedDateTimeSlots(t$1), toZonedDateTimeSlots(e$1))
}, ((t$1) => Fe(L, t$1))), [$n, Hn, Kn] = createSlotClass(Re, qe, pn, {
	add: (t$1, e$1) => Hn(Ye(0, t$1, toDurationSlots(e$1))),
	subtract: (t$1, e$1) => Hn(Ye(1, t$1, toDurationSlots(e$1))),
	until: (t$1, e$1, n$1) => In(Ee(0, t$1, toInstantSlots(e$1), n$1)),
	since: (t$1, e$1, n$1) => In(Ee(1, t$1, toInstantSlots(e$1), n$1)),
	round: (t$1, e$1) => Hn(Le(t$1, e$1)),
	equals: (t$1, e$1) => Ve(t$1, toInstantSlots(e$1)),
	toZonedDateTimeISO: (t$1, e$1) => zn(Je(t$1, refineTimeZoneArg(e$1))),
	toLocaleString(t$1, e$1, n$1) {
		const [o$1, r$1] = Cn(e$1, n$1, t$1);
		return o$1.format(r$1);
	},
	toString: (t$1, e$1) => ke(refineTimeZoneArg, L, t$1, e$1),
	toJSON: (t$1) => ke(refineTimeZoneArg, L, t$1),
	valueOf: neverValueOf
}, {
	from: (t$1) => Hn(toInstantSlots(t$1)),
	fromEpochMilliseconds: (t$1) => Hn(ze(t$1)),
	fromEpochNanoseconds: (t$1) => Hn($e(t$1)),
	compare: (t$1, e$1) => He(toInstantSlots(t$1), toInstantSlots(e$1))
}, ((t$1) => ke(refineTimeZoneArg, L, t$1))), Qn = /* @__PURE__ */ Object.defineProperties({}, {
	...o("Temporal.Now"),
	...n({
		timeZoneId: () => Qe(),
		instant: () => Hn(xe(Ue())),
		zonedDateTimeISO: (t$1 = Qe()) => zn(Xe(Ue(), refineTimeZoneArg(t$1), l)),
		plainDateTimeISO: (t$1 = Qe()) => En(jt(tn(L(refineTimeZoneArg(t$1))), l)),
		plainDateISO: (t$1 = Qe()) => Wn(W(tn(L(refineTimeZoneArg(t$1))), l)),
		plainTimeISO: (t$1 = Qe()) => Bn(St(tn(L(refineTimeZoneArg(t$1)))))
	})
}), Un = /* @__PURE__ */ Object.defineProperties({}, {
	...o("Temporal"),
	...n({
		PlainYearMonth: kn,
		PlainMonthDay: Ln,
		PlainDate: xn,
		PlainTime: Nn,
		PlainDateTime: Yn,
		ZonedDateTime: _n,
		Instant: $n,
		Duration: wn,
		Now: Qn
	})
}), Xn = /* @__PURE__ */ createDateTimeFormatClass(), to = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ Object.defineProperties(Object.create(Intl), n({ DateTimeFormat: Xn }));

//#endregion
//#region node_modules/temporal-polyfill/global.esm.js
Object.defineProperties(globalThis, n({ Temporal: Un })), Object.defineProperties(Intl, n({ DateTimeFormat: Xn })), Object.defineProperties(Date.prototype, n({ toTemporalInstant }));

//#endregion
//#region src/constants.ts
/**
* Solar Position Algorithm Constants
* Based on NREL's Solar Position Algorithm for Solar Radiation Applications
*/
const PI = Math.PI;
const SUN_RADIUS = .26667;
const REFRACTION_CORRECTION = .5667;
const L_COUNT = 6;
const B_COUNT = 2;
const R_COUNT = 5;
const Y_COUNT = 63;
const L_SUBCOUNT = [
	64,
	34,
	20,
	7,
	3,
	1
];
const B_SUBCOUNT = [5, 2];
const R_SUBCOUNT = [
	40,
	10,
	6,
	2,
	1
];
const TERM_A = 0;
const TERM_B = 1;
const TERM_C = 2;
const TERM_X_COUNT = 5;
const TERM_PSI_A = 0;
const TERM_PSI_B = 1;
const TERM_EPS_C = 2;
const TERM_EPS_D = 3;
const ZENITH_CIVIL_TWILIGHT = 96;
const ZENITH_NAUTICAL_TWILIGHT = 102;
const ZENITH_ASTRONOMICAL_TWILIGHT = 108;
const ZENITH_GOLDEN_HOUR = 84;
const ZENITH_BLUE_HOUR = 94;
const INVALID_VALUE = -99999;
/**
* Earth Heliocentric Longitude Periodic Terms (L)
* Each series contains [A, B, C] coefficients
*/
const L_TERMS = [
	[
		[
			175347046,
			0,
			0
		],
		[
			3341656,
			4.6692568,
			6283.07585
		],
		[
			34894,
			4.6261,
			12566.1517
		],
		[
			3497,
			2.7441,
			5753.3849
		],
		[
			3418,
			2.8289,
			3.5231
		],
		[
			3136,
			3.6277,
			77713.7715
		],
		[
			2676,
			4.4181,
			7860.4194
		],
		[
			2343,
			6.1352,
			3930.2097
		],
		[
			1324,
			.7425,
			11506.7698
		],
		[
			1273,
			2.0371,
			529.691
		],
		[
			1199,
			1.1096,
			1577.3435
		],
		[
			990,
			5.233,
			5884.927
		],
		[
			902,
			2.045,
			26.298
		],
		[
			857,
			3.508,
			398.149
		],
		[
			780,
			1.179,
			5223.694
		],
		[
			753,
			2.533,
			5507.553
		],
		[
			505,
			4.583,
			18849.228
		],
		[
			492,
			4.205,
			775.523
		],
		[
			357,
			2.92,
			.067
		],
		[
			317,
			5.849,
			11790.629
		],
		[
			284,
			1.899,
			796.298
		],
		[
			271,
			.315,
			10977.079
		],
		[
			243,
			.345,
			5486.778
		],
		[
			206,
			4.806,
			2544.314
		],
		[
			205,
			1.869,
			5573.143
		],
		[
			202,
			2.458,
			6069.777
		],
		[
			156,
			.833,
			213.299
		],
		[
			132,
			3.411,
			2942.463
		],
		[
			126,
			1.083,
			20.775
		],
		[
			115,
			.645,
			.98
		],
		[
			103,
			.636,
			4694.003
		],
		[
			102,
			.976,
			15720.839
		],
		[
			102,
			4.267,
			7.114
		],
		[
			99,
			6.21,
			2146.17
		],
		[
			98,
			.68,
			155.42
		],
		[
			86,
			5.98,
			161000.69
		],
		[
			85,
			1.3,
			6275.96
		],
		[
			85,
			3.67,
			71430.7
		],
		[
			80,
			1.81,
			17260.15
		],
		[
			79,
			3.04,
			12036.46
		],
		[
			75,
			1.76,
			5088.63
		],
		[
			74,
			3.5,
			3154.69
		],
		[
			74,
			4.68,
			801.82
		],
		[
			70,
			.83,
			9437.76
		],
		[
			62,
			3.98,
			8827.39
		],
		[
			61,
			1.82,
			7084.9
		],
		[
			57,
			2.78,
			6286.6
		],
		[
			56,
			4.39,
			14143.5
		],
		[
			56,
			3.47,
			6279.55
		],
		[
			52,
			.19,
			12139.55
		],
		[
			52,
			1.33,
			1748.02
		],
		[
			51,
			.28,
			5856.48
		],
		[
			49,
			.49,
			1194.45
		],
		[
			41,
			5.37,
			8429.24
		],
		[
			41,
			2.4,
			19651.05
		],
		[
			39,
			6.17,
			10447.39
		],
		[
			37,
			6.04,
			10213.29
		],
		[
			37,
			2.57,
			1059.38
		],
		[
			36,
			1.71,
			2352.87
		],
		[
			36,
			1.78,
			6812.77
		],
		[
			33,
			.59,
			17789.85
		],
		[
			30,
			.44,
			83996.85
		],
		[
			30,
			2.74,
			1349.87
		],
		[
			25,
			3.16,
			4690.48
		]
	],
	[
		[
			628331966747,
			0,
			0
		],
		[
			206059,
			2.678235,
			6283.07585
		],
		[
			4303,
			2.6351,
			12566.1517
		],
		[
			425,
			1.59,
			3.523
		],
		[
			119,
			5.796,
			26.298
		],
		[
			109,
			2.966,
			1577.344
		],
		[
			93,
			2.59,
			18849.23
		],
		[
			72,
			1.14,
			529.69
		],
		[
			68,
			1.87,
			398.15
		],
		[
			67,
			4.41,
			5507.55
		],
		[
			59,
			2.89,
			5223.69
		],
		[
			56,
			2.17,
			155.42
		],
		[
			45,
			.4,
			796.3
		],
		[
			36,
			.47,
			775.52
		],
		[
			29,
			2.65,
			7.11
		],
		[
			21,
			5.34,
			.98
		],
		[
			19,
			1.85,
			5486.78
		],
		[
			19,
			4.97,
			213.3
		],
		[
			17,
			2.99,
			6275.96
		],
		[
			16,
			.03,
			2544.31
		],
		[
			16,
			1.43,
			2146.17
		],
		[
			15,
			1.21,
			10977.08
		],
		[
			12,
			2.83,
			1748.02
		],
		[
			12,
			3.26,
			5088.63
		],
		[
			12,
			5.27,
			1194.45
		],
		[
			12,
			2.08,
			4694
		],
		[
			11,
			.77,
			553.57
		],
		[
			10,
			1.3,
			6286.6
		],
		[
			10,
			4.24,
			1349.87
		],
		[
			9,
			2.7,
			242.73
		],
		[
			9,
			5.64,
			951.72
		],
		[
			8,
			5.3,
			2352.87
		],
		[
			6,
			2.65,
			9437.76
		],
		[
			6,
			4.67,
			4690.48
		]
	],
	[
		[
			52919,
			0,
			0
		],
		[
			8720,
			1.0721,
			6283.0758
		],
		[
			309,
			.867,
			12566.152
		],
		[
			27,
			.05,
			3.52
		],
		[
			16,
			5.19,
			26.3
		],
		[
			16,
			3.68,
			155.42
		],
		[
			10,
			.76,
			18849.23
		],
		[
			9,
			2.06,
			77713.77
		],
		[
			7,
			.83,
			775.52
		],
		[
			5,
			4.66,
			1577.34
		],
		[
			4,
			1.03,
			7.11
		],
		[
			4,
			3.44,
			5573.14
		],
		[
			3,
			5.14,
			796.3
		],
		[
			3,
			6.05,
			5507.55
		],
		[
			3,
			1.19,
			242.73
		],
		[
			3,
			6.12,
			529.69
		],
		[
			3,
			.31,
			398.15
		],
		[
			3,
			2.28,
			553.57
		],
		[
			2,
			4.38,
			5223.69
		],
		[
			2,
			3.75,
			.98
		]
	],
	[
		[
			289,
			5.844,
			6283.076
		],
		[
			35,
			0,
			0
		],
		[
			17,
			5.49,
			12566.15
		],
		[
			3,
			5.2,
			155.42
		],
		[
			1,
			4.72,
			3.52
		],
		[
			1,
			5.3,
			18849.23
		],
		[
			1,
			5.97,
			242.73
		]
	],
	[
		[
			114,
			3.142,
			0
		],
		[
			8,
			4.13,
			6283.08
		],
		[
			1,
			3.84,
			12566.15
		]
	],
	[[
		1,
		3.14,
		0
	]]
];
/**
* Earth Heliocentric Latitude Periodic Terms (B)
*/
const B_TERMS = [[
	[
		280,
		3.199,
		84334.662
	],
	[
		102,
		5.422,
		5507.553
	],
	[
		80,
		3.88,
		5223.69
	],
	[
		44,
		3.7,
		2352.87
	],
	[
		32,
		4,
		1577.34
	]
], [[
	9,
	3.9,
	5507.55
], [
	6,
	1.73,
	5223.69
]]];
/**
* Earth Radius Vector Periodic Terms (R)
*/
const R_TERMS = [
	[
		[
			100013989,
			0,
			0
		],
		[
			1670700,
			3.0984635,
			6283.07585
		],
		[
			13956,
			3.05525,
			12566.1517
		],
		[
			3084,
			5.1985,
			77713.7715
		],
		[
			1628,
			1.1739,
			5753.3849
		],
		[
			1576,
			2.8469,
			7860.4194
		],
		[
			925,
			5.453,
			11506.77
		],
		[
			542,
			4.564,
			3930.21
		],
		[
			472,
			3.661,
			5884.927
		],
		[
			346,
			.964,
			5507.553
		],
		[
			329,
			5.9,
			5223.694
		],
		[
			307,
			.299,
			5573.143
		],
		[
			243,
			4.273,
			11790.629
		],
		[
			212,
			5.847,
			1577.344
		],
		[
			186,
			5.022,
			10977.079
		],
		[
			175,
			3.012,
			18849.228
		],
		[
			110,
			5.055,
			5486.778
		],
		[
			98,
			.89,
			6069.78
		],
		[
			86,
			5.69,
			15720.84
		],
		[
			86,
			1.27,
			161000.69
		],
		[
			65,
			.27,
			17260.15
		],
		[
			63,
			.92,
			529.69
		],
		[
			57,
			2.01,
			83996.85
		],
		[
			56,
			5.24,
			71430.7
		],
		[
			49,
			3.25,
			2544.31
		],
		[
			47,
			2.58,
			775.52
		],
		[
			45,
			5.54,
			9437.76
		],
		[
			43,
			6.01,
			6275.96
		],
		[
			39,
			5.36,
			4694
		],
		[
			38,
			2.39,
			8827.39
		],
		[
			37,
			.83,
			19651.05
		],
		[
			37,
			4.9,
			12139.55
		],
		[
			36,
			1.67,
			12036.46
		],
		[
			35,
			1.84,
			2942.46
		],
		[
			33,
			.24,
			7084.9
		],
		[
			32,
			.18,
			5088.63
		],
		[
			32,
			1.78,
			398.15
		],
		[
			28,
			1.21,
			6286.6
		],
		[
			28,
			1.9,
			6279.55
		],
		[
			26,
			4.59,
			10447.39
		]
	],
	[
		[
			103019,
			1.10749,
			6283.07585
		],
		[
			1721,
			1.0644,
			12566.1517
		],
		[
			702,
			3.142,
			0
		],
		[
			32,
			1.02,
			18849.23
		],
		[
			31,
			2.84,
			5507.55
		],
		[
			25,
			1.32,
			5223.69
		],
		[
			18,
			1.42,
			1577.34
		],
		[
			10,
			5.91,
			10977.08
		],
		[
			9,
			1.42,
			6275.96
		],
		[
			9,
			.27,
			5486.78
		]
	],
	[
		[
			4359,
			5.7846,
			6283.0758
		],
		[
			124,
			5.579,
			12566.152
		],
		[
			12,
			3.14,
			0
		],
		[
			9,
			3.63,
			77713.77
		],
		[
			6,
			1.87,
			5573.14
		],
		[
			3,
			5.47,
			18849.23
		]
	],
	[[
		145,
		4.273,
		6283.076
	], [
		7,
		3.92,
		12566.15
	]],
	[[
		4,
		2.56,
		6283.08
	]]
];
/**
* Nutation Y Terms - coefficients for calculating nutation in longitude and obliquity
*/
const Y_TERMS = [
	[
		0,
		0,
		0,
		0,
		1
	],
	[
		-2,
		0,
		0,
		2,
		2
	],
	[
		0,
		0,
		0,
		2,
		2
	],
	[
		0,
		0,
		0,
		0,
		2
	],
	[
		0,
		1,
		0,
		0,
		0
	],
	[
		0,
		0,
		1,
		0,
		0
	],
	[
		-2,
		1,
		0,
		2,
		2
	],
	[
		0,
		0,
		0,
		2,
		1
	],
	[
		0,
		0,
		1,
		2,
		2
	],
	[
		-2,
		-1,
		0,
		2,
		2
	],
	[
		-2,
		0,
		1,
		0,
		0
	],
	[
		-2,
		0,
		0,
		2,
		1
	],
	[
		0,
		0,
		-1,
		2,
		2
	],
	[
		2,
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		1,
		0,
		1
	],
	[
		2,
		0,
		-1,
		2,
		2
	],
	[
		0,
		0,
		-1,
		0,
		1
	],
	[
		0,
		0,
		1,
		2,
		1
	],
	[
		-2,
		0,
		2,
		0,
		0
	],
	[
		0,
		0,
		-2,
		2,
		1
	],
	[
		2,
		0,
		0,
		2,
		2
	],
	[
		0,
		0,
		2,
		2,
		2
	],
	[
		0,
		0,
		2,
		0,
		0
	],
	[
		-2,
		0,
		1,
		2,
		2
	],
	[
		0,
		0,
		0,
		2,
		0
	],
	[
		-2,
		0,
		0,
		2,
		0
	],
	[
		0,
		0,
		-1,
		2,
		1
	],
	[
		0,
		2,
		0,
		0,
		0
	],
	[
		2,
		0,
		-1,
		0,
		1
	],
	[
		-2,
		2,
		0,
		2,
		2
	],
	[
		0,
		1,
		0,
		0,
		1
	],
	[
		-2,
		0,
		1,
		0,
		1
	],
	[
		0,
		-1,
		0,
		0,
		1
	],
	[
		0,
		0,
		2,
		-2,
		0
	],
	[
		2,
		0,
		-1,
		2,
		1
	],
	[
		2,
		0,
		1,
		2,
		2
	],
	[
		0,
		1,
		0,
		2,
		2
	],
	[
		-2,
		1,
		1,
		0,
		0
	],
	[
		0,
		-1,
		0,
		2,
		2
	],
	[
		2,
		0,
		0,
		2,
		1
	],
	[
		2,
		0,
		1,
		0,
		0
	],
	[
		-2,
		0,
		2,
		2,
		2
	],
	[
		-2,
		0,
		1,
		2,
		1
	],
	[
		2,
		0,
		-2,
		0,
		1
	],
	[
		2,
		0,
		0,
		0,
		1
	],
	[
		0,
		-1,
		1,
		0,
		0
	],
	[
		-2,
		-1,
		0,
		2,
		1
	],
	[
		-2,
		0,
		0,
		0,
		1
	],
	[
		0,
		0,
		2,
		2,
		1
	],
	[
		-2,
		0,
		2,
		0,
		1
	],
	[
		-2,
		1,
		0,
		2,
		1
	],
	[
		0,
		0,
		1,
		-2,
		0
	],
	[
		-1,
		0,
		1,
		0,
		0
	],
	[
		-2,
		1,
		0,
		0,
		0
	],
	[
		1,
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		1,
		2,
		0
	],
	[
		0,
		0,
		-2,
		2,
		2
	],
	[
		-1,
		-1,
		1,
		0,
		0
	],
	[
		0,
		1,
		1,
		0,
		0
	],
	[
		0,
		-1,
		1,
		2,
		2
	],
	[
		2,
		-1,
		-1,
		2,
		2
	],
	[
		0,
		0,
		3,
		2,
		2
	],
	[
		2,
		-1,
		0,
		2,
		2
	]
];
/**
* Periodic Terms for Nutation in Longitude and Obliquity (PE)
* [PSI_A, PSI_B, EPS_C, EPS_D]
*/
const PE_TERMS = [
	[
		-171996,
		-174.2,
		92025,
		8.9
	],
	[
		-13187,
		-1.6,
		5736,
		-3.1
	],
	[
		-2274,
		-.2,
		977,
		-.5
	],
	[
		2062,
		.2,
		-895,
		.5
	],
	[
		1426,
		-3.4,
		54,
		-.1
	],
	[
		712,
		.1,
		-7,
		0
	],
	[
		-517,
		1.2,
		224,
		-.6
	],
	[
		-386,
		-.4,
		200,
		0
	],
	[
		-301,
		0,
		129,
		-.1
	],
	[
		217,
		-.5,
		-95,
		.3
	],
	[
		-158,
		0,
		0,
		0
	],
	[
		129,
		.1,
		-70,
		0
	],
	[
		123,
		0,
		-53,
		0
	],
	[
		63,
		0,
		0,
		0
	],
	[
		63,
		.1,
		-33,
		0
	],
	[
		-59,
		0,
		26,
		0
	],
	[
		-58,
		-.1,
		32,
		0
	],
	[
		-51,
		0,
		27,
		0
	],
	[
		48,
		0,
		0,
		0
	],
	[
		46,
		0,
		-24,
		0
	],
	[
		-38,
		0,
		16,
		0
	],
	[
		-31,
		0,
		13,
		0
	],
	[
		29,
		0,
		0,
		0
	],
	[
		29,
		0,
		-12,
		0
	],
	[
		26,
		0,
		0,
		0
	],
	[
		-22,
		0,
		0,
		0
	],
	[
		21,
		0,
		-10,
		0
	],
	[
		17,
		-.1,
		0,
		0
	],
	[
		16,
		0,
		-8,
		0
	],
	[
		-16,
		.1,
		7,
		0
	],
	[
		-15,
		0,
		9,
		0
	],
	[
		-13,
		0,
		7,
		0
	],
	[
		-12,
		0,
		6,
		0
	],
	[
		11,
		0,
		0,
		0
	],
	[
		-10,
		0,
		5,
		0
	],
	[
		-8,
		0,
		3,
		0
	],
	[
		7,
		0,
		-3,
		0
	],
	[
		-7,
		0,
		0,
		0
	],
	[
		-7,
		0,
		3,
		0
	],
	[
		-7,
		0,
		3,
		0
	],
	[
		6,
		0,
		0,
		0
	],
	[
		6,
		0,
		-3,
		0
	],
	[
		6,
		0,
		-3,
		0
	],
	[
		-6,
		0,
		3,
		0
	],
	[
		-6,
		0,
		3,
		0
	],
	[
		5,
		0,
		0,
		0
	],
	[
		-5,
		0,
		3,
		0
	],
	[
		-5,
		0,
		3,
		0
	],
	[
		-5,
		0,
		3,
		0
	],
	[
		4,
		0,
		0,
		0
	],
	[
		4,
		0,
		0,
		0
	],
	[
		4,
		0,
		0,
		0
	],
	[
		-4,
		0,
		0,
		0
	],
	[
		-4,
		0,
		0,
		0
	],
	[
		-4,
		0,
		0,
		0
	],
	[
		3,
		0,
		0,
		0
	],
	[
		-3,
		0,
		0,
		0
	],
	[
		-3,
		0,
		0,
		0
	],
	[
		-3,
		0,
		0,
		0
	],
	[
		-3,
		0,
		0,
		0
	],
	[
		-3,
		0,
		0,
		0
	],
	[
		-3,
		0,
		0,
		0
	],
	[
		-3,
		0,
		0,
		0
	]
];

//#endregion
//#region src/utils/math.ts
/**
* Mathematical utility functions for Solar Position Algorithm
*/
/**
* Convert degrees to radians
*/
function deg2rad(degrees) {
	return PI / 180 * degrees;
}
/**
* Convert radians to degrees
*/
function rad2deg(radians) {
	return 180 / PI * radians;
}
/**
* Limit degrees to 0-360 range
*/
function limitDegrees(degrees) {
	let limited = degrees / 360;
	limited = 360 * (limited - Math.floor(limited));
	if (limited < 0) limited += 360;
	return limited;
}
/**
* Limit degrees to 0-180 range
*/
function limitDegrees180(degrees) {
	let limited = degrees / 180;
	limited = 180 * (limited - Math.floor(limited));
	if (limited < 0) limited += 180;
	return limited;
}
/**
* Limit degrees to -180 to +180 range
*/
function limitDegrees180pm(degrees) {
	let limited = degrees / 360;
	limited = 360 * (limited - Math.floor(limited));
	if (limited < -180) limited += 360;
	else if (limited > 180) limited -= 360;
	return limited;
}
/**
* Limit value to 0-1 range (fractional day)
*/
function limitZero2one(value) {
	let limited = value - Math.floor(value);
	if (limited < 0) limited += 1;
	return limited;
}
/**
* Calculate third-order polynomial: ((a*x + b)*x + c)*x + d
*/
function thirdOrderPolynomial(a$1, b$1, c$1, d$1, x$1) {
	return ((a$1 * x$1 + b$1) * x$1 + c$1) * x$1 + d$1;
}
/**
* Limit minutes to -20 to 20 range (for equation of time)
*/
function limitMinutes(minutes) {
	let limited = minutes;
	if (limited < -20) limited += 1440;
	else if (limited > 20) limited -= 1440;
	return limited;
}

//#endregion
//#region src/utils/time.ts
/**
* Time conversion utilities for Solar Position Algorithm
*/
/**
* Convert day fraction to local hour
* @param dayfrac - Day fraction (0-1)
* @param timezone - Timezone offset in hours
* @returns Local hour (0-24)
*/
function dayfracToLocalHr(dayfrac, timezone) {
	return 24 * limitZero2one(dayfrac + timezone / 24);
}
/**
* Convert fractional hours to Temporal.Instant
* @param year - UTC calendar year for the calculated sun time
* @param month - UTC calendar month for the calculated sun time
* @param day - UTC calendar day for the calculated sun time
* @param fractionalHour - Hour as fractional value (relative to UTC midnight, can exceed 24 or be negative)
* @returns Temporal.Instant representing the time, or null for invalid values
*/
function fractionalHourToInstant(year, month, day, fractionalHour) {
	if (!isFinite(fractionalHour)) return null;
	const totalNanoseconds = Math.round(fractionalHour * 36e11);
	const duration = Temporal.Duration.from({ nanoseconds: totalNanoseconds });
	return Temporal.PlainDateTime.from({
		year,
		month,
		day
	}).add(duration).toZonedDateTime("UTC").toInstant();
}

//#endregion
//#region src/types.ts
/**
* Solar Position Algorithm (SPA) Type Definitions
* Based on NREL's Solar Position Algorithm for Solar Radiation Applications
*/
/**
* Output calculation modes
*/
let SpaFunction = /* @__PURE__ */ function(SpaFunction$1) {
	/** Calculate only zenith and azimuth */
	SpaFunction$1[SpaFunction$1["SPA_ZA"] = 0] = "SPA_ZA";
	/** Calculate zenith, azimuth, and incidence angle */
	SpaFunction$1[SpaFunction$1["SPA_ZA_INC"] = 1] = "SPA_ZA_INC";
	/** Calculate zenith, azimuth, and rise/transit/set */
	SpaFunction$1[SpaFunction$1["SPA_ZA_RTS"] = 2] = "SPA_ZA_RTS";
	/** Calculate all output values */
	SpaFunction$1[SpaFunction$1["SPA_ALL"] = 3] = "SPA_ALL";
	return SpaFunction$1;
}({});
/**
* Julian Day offset enumeration for RTS calculations
*/
let JDSign = /* @__PURE__ */ function(JDSign$1) {
	JDSign$1[JDSign$1["JD_MINUS"] = 0] = "JD_MINUS";
	JDSign$1[JDSign$1["JD_ZERO"] = 1] = "JD_ZERO";
	JDSign$1[JDSign$1["JD_PLUS"] = 2] = "JD_PLUS";
	JDSign$1[JDSign$1["JD_COUNT"] = 3] = "JD_COUNT";
	return JDSign$1;
}({});
/**
* Sun state enumeration for RTS calculations
*/
let SunState = /* @__PURE__ */ function(SunState$1) {
	SunState$1[SunState$1["SUN_TRANSIT"] = 0] = "SUN_TRANSIT";
	SunState$1[SunState$1["SUN_RISE"] = 1] = "SUN_RISE";
	SunState$1[SunState$1["SUN_SET"] = 2] = "SUN_SET";
	SunState$1[SunState$1["SUN_COUNT"] = 3] = "SUN_COUNT";
	return SunState$1;
}({});

//#endregion
//#region src/utils/date.ts
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
function julianDay(year, month, day, hour, minute, second, deltaUt1, timezone) {
	let y$1 = year;
	let m$1 = month;
	const dayDecimal = day + (hour - timezone + (minute + (second + deltaUt1) / 60) / 60) / 24;
	if (m$1 < 3) {
		m$1 += 12;
		y$1--;
	}
	let jd = Math.floor(365.25 * (y$1 + 4716)) + Math.floor(30.6001 * (m$1 + 1)) + dayDecimal - 1524.5;
	if (jd > 2299160) {
		const a$1 = Math.floor(y$1 / 100);
		jd += 2 - a$1 + Math.floor(a$1 / 4);
	}
	return jd;
}
/**
* Calculate Julian Century from Julian Day
* @param jd - Julian Day
* @returns Julian Century
*/
function julianCentury(jd) {
	return (jd - 2451545) / 36525;
}
/**
* Calculate Julian Ephemeris Day
* @param jd - Julian Day
* @param deltaT - Difference between earth rotation time and terrestrial time (seconds)
* @returns Julian Ephemeris Day
*/
function julianEphemerisDay(jd, deltaT) {
	return jd + deltaT / 86400;
}
/**
* Calculate Julian Ephemeris Century
* @param jde - Julian Ephemeris Day
* @returns Julian Ephemeris Century
*/
function julianEphemerisCentury(jde) {
	return (jde - 2451545) / 36525;
}
/**
* Calculate Julian Ephemeris Millennium
* @param jce - Julian Ephemeris Century
* @returns Julian Ephemeris Millennium
*/
function julianEphemerisMillennium(jce) {
	return jce / 10;
}
/**
* Resolve date/time components from a Temporal.Instant.
* Uses UTC date components and timezone offset of 0.
*
* This replaces the old approach of extracting components from a Date object,
* which was buggy because it depended on the server's local timezone.
*/
function resolveDateTimeComponents(instant) {
	const zdt = instant.toZonedDateTimeISO("UTC");
	return {
		year: zdt.year,
		month: zdt.month,
		day: zdt.day,
		hour: 0,
		minute: 0,
		second: 0,
		timezone: 0
	};
}

//#endregion
//#region src/calculations/earth.ts
/**
* Earth position calculations for Solar Position Algorithm
* Calculates heliocentric longitude, latitude, and radius vector
*/
/**
* Calculate the sum of periodic terms for a given series
* @param terms - Array of [A, B, C] coefficients
* @param count - Number of terms to sum
* @param jme - Julian Ephemeris Millennium
* @returns Sum of periodic terms
*/
function earthPeriodicTermSummation(terms, count, jme) {
	let sum = 0;
	for (let i$1 = 0; i$1 < count; i$1++) sum += terms[i$1][TERM_A] * Math.cos(terms[i$1][TERM_B] + terms[i$1][TERM_C] * jme);
	return sum;
}
/**
* Calculate the value from periodic term sums
* @param termSum - Array of periodic term sums
* @param count - Number of series
* @param jme - Julian Ephemeris Millennium
* @returns Combined value
*/
function earthValues(termSum, count, jme) {
	let sum = 0;
	for (let i$1 = 0; i$1 < count; i$1++) sum += termSum[i$1] * Math.pow(jme, i$1);
	sum /= 1e8;
	return sum;
}
/**
* Calculate Earth's heliocentric longitude
* @param jme - Julian Ephemeris Millennium
* @returns Heliocentric longitude in degrees (0-360)
*/
function earthHeliocentricLongitude(jme) {
	const sum = [];
	for (let i$1 = 0; i$1 < L_COUNT; i$1++) sum[i$1] = earthPeriodicTermSummation(L_TERMS[i$1], L_SUBCOUNT[i$1], jme);
	return limitDegrees(rad2deg(earthValues(sum, L_COUNT, jme)));
}
/**
* Calculate Earth's heliocentric latitude
* @param jme - Julian Ephemeris Millennium
* @returns Heliocentric latitude in degrees
*/
function earthHeliocentricLatitude(jme) {
	const sum = [];
	for (let i$1 = 0; i$1 < B_COUNT; i$1++) sum[i$1] = earthPeriodicTermSummation(B_TERMS[i$1], B_SUBCOUNT[i$1], jme);
	return rad2deg(earthValues(sum, B_COUNT, jme));
}
/**
* Calculate Earth's radius vector (distance from Sun)
* @param jme - Julian Ephemeris Millennium
* @returns Radius vector in Astronomical Units (AU)
*/
function earthRadiusVector(jme) {
	const sum = [];
	for (let i$1 = 0; i$1 < R_COUNT; i$1++) sum[i$1] = earthPeriodicTermSummation(R_TERMS[i$1], R_SUBCOUNT[i$1], jme);
	return earthValues(sum, R_COUNT, jme);
}

//#endregion
//#region src/calculations/sun.ts
/**
* Sun position calculations for Solar Position Algorithm
* Calculates geocentric position, right ascension, declination
*/
/**
* Calculate geocentric longitude from heliocentric longitude
* @param l - Heliocentric longitude in degrees
* @returns Geocentric longitude in degrees
*/
function geocentricLongitude(l$1) {
	let theta = l$1 + 180;
	if (theta >= 360) theta -= 360;
	return theta;
}
/**
* Calculate geocentric latitude from heliocentric latitude
* @param b - Heliocentric latitude in degrees
* @returns Geocentric latitude in degrees
*/
function geocentricLatitude(b$1) {
	return -b$1;
}
/**
* Calculate the aberration correction
* @param r - Earth radius vector in AU
* @returns Aberration correction in degrees
*/
function aberrationCorrection(r$1) {
	return -20.4898 / (3600 * r$1);
}
/**
* Calculate the apparent sun longitude
* @param theta - Geocentric longitude in degrees
* @param deltaPsi - Nutation in longitude in degrees
* @param deltaTau - Aberration correction in degrees
* @returns Apparent sun longitude in degrees
*/
function apparentSunLongitude(theta, deltaPsi, deltaTau) {
	return theta + deltaPsi + deltaTau;
}
/**
* Calculate geocentric sun right ascension
* @param lamda - Apparent sun longitude in degrees
* @param epsilon - True obliquity of ecliptic in degrees
* @param beta - Geocentric latitude in degrees
* @returns Right ascension in degrees (0-360)
*/
function geocentricRightAscension(lamda, epsilon, beta) {
	const lamdaRad = deg2rad(lamda);
	const epsilonRad = deg2rad(epsilon);
	return limitDegrees(rad2deg(Math.atan2(Math.sin(lamdaRad) * Math.cos(epsilonRad) - Math.tan(deg2rad(beta)) * Math.sin(epsilonRad), Math.cos(lamdaRad))));
}
/**
* Calculate geocentric sun declination
* @param beta - Geocentric latitude in degrees
* @param epsilon - True obliquity of ecliptic in degrees
* @param lamda - Apparent sun longitude in degrees
* @returns Declination in degrees
*/
function geocentricDeclination(beta, epsilon, lamda) {
	const betaRad = deg2rad(beta);
	const epsilonRad = deg2rad(epsilon);
	return rad2deg(Math.asin(Math.sin(betaRad) * Math.cos(epsilonRad) + Math.cos(betaRad) * Math.sin(epsilonRad) * Math.sin(deg2rad(lamda))));
}
/**
* Calculate sun mean longitude
* @param jme - Julian Ephemeris Millennium
* @returns Mean longitude in degrees
*/
function sunMeanLongitude(jme) {
	return limitDegrees(280.4664567 + jme * (360007.6982779 + jme * (.03032028 + jme * (1 / 49931 + jme * (-1 / 15300 + jme * (-1 / 2e6))))));
}
/**
* Calculate sun equatorial horizontal parallax
* @param r - Earth radius vector in AU
* @returns Parallax in degrees
*/
function sunEquatorialHorizontalParallax(r$1) {
	return 8.794 / (3600 * r$1);
}

//#endregion
//#region src/calculations/nutation.ts
/**
* Nutation and obliquity calculations for Solar Position Algorithm
*/
/**
* Calculate mean elongation of the Moon from the Sun
* @param jce - Julian Ephemeris Century
* @returns Mean elongation in degrees
*/
function meanElongationMoonSun(jce) {
	return thirdOrderPolynomial(1 / 189474, -.0019142, 445267.11148, 297.85036, jce);
}
/**
* Calculate mean anomaly of the Sun
* @param jce - Julian Ephemeris Century
* @returns Mean anomaly in degrees
*/
function meanAnomalySun(jce) {
	return thirdOrderPolynomial(-1 / 3e5, -1603e-7, 35999.05034, 357.52772, jce);
}
/**
* Calculate mean anomaly of the Moon
* @param jce - Julian Ephemeris Century
* @returns Mean anomaly in degrees
*/
function meanAnomalyMoon(jce) {
	return thirdOrderPolynomial(1 / 56250, .0086972, 477198.867398, 134.96298, jce);
}
/**
* Calculate argument of latitude of the Moon
* @param jce - Julian Ephemeris Century
* @returns Argument of latitude in degrees
*/
function argumentLatitudeMoon(jce) {
	return thirdOrderPolynomial(1 / 327270, -.0036825, 483202.017538, 93.27191, jce);
}
/**
* Calculate ascending node longitude of the Moon
* @param jce - Julian Ephemeris Century
* @returns Ascending longitude in degrees
*/
function ascendingLongitudeMoon(jce) {
	return thirdOrderPolynomial(1 / 45e4, .0020708, -1934.136261, 125.04452, jce);
}
/**
* Calculate XY term summation for nutation
*/
function xyTermSummation(i$1, x$1) {
	let sum = 0;
	for (let j$1 = 0; j$1 < TERM_X_COUNT; j$1++) sum += x$1[j$1] * Y_TERMS[i$1][j$1];
	return sum;
}
/**
* Calculate nutation in longitude and obliquity
* @param jce - Julian Ephemeris Century
* @param x - Array of X terms [x0, x1, x2, x3, x4]
* @returns Nutation in longitude and obliquity (degrees)
*/
function nutationLongitudeAndObliquity(jce, x$1) {
	let sumPsi = 0;
	let sumEpsilon = 0;
	for (let i$1 = 0; i$1 < Y_COUNT; i$1++) {
		const xyTermSum = deg2rad(xyTermSummation(i$1, x$1));
		sumPsi += (PE_TERMS[i$1][TERM_PSI_A] + jce * PE_TERMS[i$1][TERM_PSI_B]) * Math.sin(xyTermSum);
		sumEpsilon += (PE_TERMS[i$1][TERM_EPS_C] + jce * PE_TERMS[i$1][TERM_EPS_D]) * Math.cos(xyTermSum);
	}
	return {
		delPsi: sumPsi / 36e6,
		delEpsilon: sumEpsilon / 36e6
	};
}
/**
* Calculate ecliptic mean obliquity
* @param jme - Julian Ephemeris Millennium
* @returns Mean obliquity in arc seconds
*/
function eclipticMeanObliquity(jme) {
	const u$1 = jme / 10;
	return 84381.448 + u$1 * (-4680.93 + u$1 * (-1.55 + u$1 * (1999.25 + u$1 * (-51.38 + u$1 * (-249.67 + u$1 * (-39.05 + u$1 * (7.12 + u$1 * (27.87 + u$1 * (5.79 + u$1 * 2.45)))))))));
}
/**
* Calculate ecliptic true obliquity
* @param deltaEpsilon - Nutation in obliquity (degrees)
* @param epsilon0 - Mean obliquity (arc seconds)
* @returns True obliquity in degrees
*/
function eclipticTrueObliquity(deltaEpsilon, epsilon0) {
	return deltaEpsilon + epsilon0 / 3600;
}

//#endregion
//#region src/calculations/observer.ts
/**
* Observer position and topocentric calculations for Solar Position Algorithm
*/
/**
* Calculate Greenwich mean sidereal time
* @param jd - Julian Day
* @param jc - Julian Century
* @returns Greenwich mean sidereal time in degrees
*/
function greenwichMeanSiderealTime(jd, jc) {
	return limitDegrees(280.46061837 + 360.98564736629 * (jd - 2451545) + jc * jc * (387933e-9 - jc / 3871e4));
}
/**
* Calculate Greenwich sidereal time
* @param nu0 - Greenwich mean sidereal time in degrees
* @param deltaPsi - Nutation in longitude in degrees
* @param epsilon - True obliquity in degrees
* @returns Greenwich sidereal time in degrees
*/
function greenwichSiderealTime(nu0, deltaPsi, epsilon) {
	return nu0 + deltaPsi * Math.cos(deg2rad(epsilon));
}
/**
* Calculate observer hour angle
* @param nu - Greenwich sidereal time in degrees
* @param longitude - Observer longitude in degrees
* @param alphaDeg - Geocentric right ascension in degrees
* @returns Observer hour angle in degrees
*/
function observerHourAngle(nu, longitude, alphaDeg) {
	return limitDegrees(nu + longitude - alphaDeg);
}
/**
* Calculate right ascension parallax and topocentric declination
* @param latitude - Observer latitude in degrees
* @param elevation - Observer elevation in meters
* @param xi - Sun equatorial horizontal parallax in degrees
* @param h - Observer hour angle in degrees
* @param delta - Geocentric declination in degrees
* @returns Parallax result with deltaAlpha and deltaPrime
*/
function rightAscensionParallaxAndTopocentricDec(latitude, elevation, xi, h$1, delta) {
	const latRad = deg2rad(latitude);
	const xiRad = deg2rad(xi);
	const hRad = deg2rad(h$1);
	const deltaRad = deg2rad(delta);
	const u$1 = Math.atan(.99664719 * Math.tan(latRad));
	const y$1 = .99664719 * Math.sin(u$1) + elevation * Math.sin(latRad) / 6378140;
	const x$1 = Math.cos(u$1) + elevation * Math.cos(latRad) / 6378140;
	const deltaAlphaRad = Math.atan2(-x$1 * Math.sin(xiRad) * Math.sin(hRad), Math.cos(deltaRad) - x$1 * Math.sin(xiRad) * Math.cos(hRad));
	const deltaPrime = rad2deg(Math.atan2((Math.sin(deltaRad) - y$1 * Math.sin(xiRad)) * Math.cos(deltaAlphaRad), Math.cos(deltaRad) - x$1 * Math.sin(xiRad) * Math.cos(hRad)));
	return {
		deltaAlpha: rad2deg(deltaAlphaRad),
		deltaPrime
	};
}
/**
* Calculate topocentric right ascension
* @param alphaDeg - Geocentric right ascension in degrees
* @param deltaAlpha - Right ascension parallax in degrees
* @returns Topocentric right ascension in degrees
*/
function topocentricRightAscension(alphaDeg, deltaAlpha) {
	return alphaDeg + deltaAlpha;
}
/**
* Calculate topocentric local hour angle
* @param h - Observer hour angle in degrees
* @param deltaAlpha - Right ascension parallax in degrees
* @returns Topocentric local hour angle in degrees
*/
function topocentricLocalHourAngle(h$1, deltaAlpha) {
	return h$1 - deltaAlpha;
}
/**
* Calculate topocentric elevation angle (uncorrected)
* @param latitude - Observer latitude in degrees
* @param deltaPrime - Topocentric declination in degrees
* @param hPrime - Topocentric local hour angle in degrees
* @returns Topocentric elevation angle in degrees
*/
function topocentricElevationAngle(latitude, deltaPrime, hPrime) {
	const latRad = deg2rad(latitude);
	const deltaPrimeRad = deg2rad(deltaPrime);
	return rad2deg(Math.asin(Math.sin(latRad) * Math.sin(deltaPrimeRad) + Math.cos(latRad) * Math.cos(deltaPrimeRad) * Math.cos(deg2rad(hPrime))));
}
/**
* Calculate atmospheric refraction correction
* @param pressure - Atmospheric pressure in millibars
* @param temperature - Temperature in Celsius
* @param atmosphericRefraction - Atmospheric refraction at sunrise/sunset in degrees
* @param e0 - Uncorrected elevation angle in degrees
* @returns Refraction correction in degrees
*/
function atmosphericRefractionCorrection(pressure, temperature, atmosphericRefraction, e0) {
	let delE = 0;
	if (e0 >= -1 * (SUN_RADIUS + atmosphericRefraction)) delE = pressure / 1010 * (283 / (273 + temperature)) * (1.02 / (60 * Math.tan(deg2rad(e0 + 10.3 / (e0 + 5.11)))));
	return delE;
}
/**
* Calculate topocentric elevation angle (corrected for refraction)
* @param e0 - Uncorrected elevation angle in degrees
* @param deltaE - Atmospheric refraction correction in degrees
* @returns Corrected topocentric elevation angle in degrees
*/
function topocentricElevationAngleCorrected(e0, deltaE) {
	return e0 + deltaE;
}
/**
* Calculate topocentric zenith angle
* @param e - Topocentric elevation angle in degrees
* @returns Topocentric zenith angle in degrees
*/
function topocentricZenithAngle(e$1) {
	return 90 - e$1;
}
/**
* Calculate topocentric azimuth angle (astronomers' convention - westward from south)
* @param hPrime - Topocentric local hour angle in degrees
* @param latitude - Observer latitude in degrees
* @param deltaPrime - Topocentric declination in degrees
* @returns Azimuth angle in degrees
*/
function topocentricAzimuthAngleAstro(hPrime, latitude, deltaPrime) {
	const hPrimeRad = deg2rad(hPrime);
	const latRad = deg2rad(latitude);
	return limitDegrees(rad2deg(Math.atan2(Math.sin(hPrimeRad), Math.cos(hPrimeRad) * Math.sin(latRad) - Math.tan(deg2rad(deltaPrime)) * Math.cos(latRad))));
}
/**
* Calculate topocentric azimuth angle (navigators' convention - eastward from north)
* @param azimuthAstro - Astronomical azimuth in degrees
* @returns Azimuth angle in degrees
*/
function topocentricAzimuthAngle(azimuthAstro) {
	return limitDegrees(azimuthAstro + 180);
}
/**
* Calculate surface incidence angle
* @param zenith - Topocentric zenith angle in degrees
* @param azimuthAstro - Astronomical azimuth in degrees
* @param azimuthRotation - Surface azimuth rotation in degrees
* @param slope - Surface slope in degrees
* @returns Surface incidence angle in degrees
*/
function surfaceIncidenceAngle(zenith, azimuthAstro, azimuthRotation, slope) {
	const zenithRad = deg2rad(zenith);
	const slopeRad = deg2rad(slope);
	return rad2deg(Math.acos(Math.cos(zenithRad) * Math.cos(slopeRad) + Math.sin(slopeRad) * Math.sin(zenithRad) * Math.cos(deg2rad(azimuthAstro - azimuthRotation))));
}

//#endregion
//#region src/calculations/rts.ts
/**
* Sunrise, Transit, and Sunset (RTS) calculations for Solar Position Algorithm
* Handles high-latitude edge cases (polar day/night)
*/
/**
* Calculate sun hour angle at rise/set for a given zenith
* @param latitude - Observer latitude in degrees
* @param deltaZero - Geocentric declination at noon in degrees
* @param h0Prime - Zenith angle for rise/set (negative of elevation at horizon)
* @returns Hour angle in degrees, or INVALID_VALUE if sun doesn't rise/set (polar day/night)
*/
function sunHourAngleAtRiseSet(latitude, deltaZero, h0Prime) {
	const latitudeRad = deg2rad(latitude);
	const deltaZeroRad = deg2rad(deltaZero);
	const argument = (Math.sin(deg2rad(h0Prime)) - Math.sin(latitudeRad) * Math.sin(deltaZeroRad)) / (Math.cos(latitudeRad) * Math.cos(deltaZeroRad));
	if (Math.abs(argument) <= 1) return limitDegrees180(rad2deg(Math.acos(argument)));
	return INVALID_VALUE;
}
/**
* Calculate approximate sun transit time
* @param alphaZero - Right ascension at noon in degrees
* @param longitude - Observer longitude in degrees
* @param nu - Greenwich sidereal time in degrees
* @returns Approximate transit time as day fraction
*/
function approxSunTransitTime(alphaZero, longitude, nu) {
	return (alphaZero - longitude - nu) / 360;
}
/**
* Calculate approximate sunrise and sunset times
* @param mRts - Array to store [transit, rise, set] day fractions (modified in place)
* @param h0 - Hour angle at rise/set in degrees
*/
function approxSunRiseAndSet(mRts, h0) {
	const h0Dfrac = h0 / 360;
	mRts[SunState.SUN_RISE] = limitZero2one(mRts[SunState.SUN_TRANSIT] - h0Dfrac);
	mRts[SunState.SUN_SET] = limitZero2one(mRts[SunState.SUN_TRANSIT] + h0Dfrac);
	mRts[SunState.SUN_TRANSIT] = limitZero2one(mRts[SunState.SUN_TRANSIT]);
}
/**
* Calculate interpolated alpha or delta for RTS
* @param ad - Array of [yesterday, today, tomorrow] values
* @param n - Interpolation factor
* @returns Interpolated value
*/
function rtsAlphaDeltaPrime(ad, n$1) {
	let a$1 = ad[JDSign.JD_ZERO] - ad[JDSign.JD_MINUS];
	let b$1 = ad[JDSign.JD_PLUS] - ad[JDSign.JD_ZERO];
	if (Math.abs(a$1) >= 2) a$1 = limitZero2one(a$1);
	if (Math.abs(b$1) >= 2) b$1 = limitZero2one(b$1);
	return ad[JDSign.JD_ZERO] + n$1 * (a$1 + b$1 + (b$1 - a$1) * n$1) / 2;
}
/**
* Calculate sun altitude for RTS
* @param latitude - Observer latitude in degrees
* @param deltaPrime - Topocentric declination in degrees
* @param hPrime - Topocentric hour angle in degrees
* @returns Sun altitude in degrees
*/
function rtsSunAltitude(latitude, deltaPrime, hPrime) {
	const latitudeRad = deg2rad(latitude);
	const deltaPrimeRad = deg2rad(deltaPrime);
	return rad2deg(Math.asin(Math.sin(latitudeRad) * Math.sin(deltaPrimeRad) + Math.cos(latitudeRad) * Math.cos(deltaPrimeRad) * Math.cos(deg2rad(hPrime))));
}
/**
* Calculate refined sunrise or sunset time
* @param mRts - Array of [transit, rise, set] day fractions
* @param hRts - Array of sun altitudes at [transit, rise, set]
* @param deltaPrime - Array of topocentric declinations
* @param latitude - Observer latitude in degrees
* @param hPrime - Array of topocentric hour angles
* @param h0Prime - Target elevation at horizon
* @param sun - SunState indicating which time to calculate
* @returns Refined day fraction for the requested sun state
*/
function sunRiseAndSet(mRts, hRts, deltaPrime, latitude, hPrime, h0Prime, sun) {
	return mRts[sun] + (hRts[sun] - h0Prime) / (360 * Math.cos(deg2rad(deltaPrime[sun])) * Math.cos(deg2rad(latitude)) * Math.sin(deg2rad(hPrime[sun])));
}
/**
* Calculate equation of time
* @param m - Sun mean longitude in degrees
* @param alpha - Geocentric right ascension in degrees
* @param delPsi - Nutation in longitude in degrees
* @param epsilon - True obliquity in degrees
* @returns Equation of time in minutes
*/
function equationOfTime(m$1, alpha, delPsi, epsilon) {
	return limitMinutes(4 * (m$1 - .0057183 - alpha + delPsi * Math.cos(deg2rad(epsilon))));
}
/**
* Calculate equation of time and sun rise/transit/set times
* This is the main RTS calculation function that handles high-latitude cases
* 
* @param spa - SPA data object with all calculated values
* @param calculateRaDec - Function to calculate RA and Dec for a given Julian Day
* @returns RTS calculation results
*/
function calculateEotAndSunRiseTransitSet(spa, calculateRaDec) {
	const h0Prime = -1 * (SUN_RADIUS + spa.atmosphericRefraction);
	const sunRtsJd = julianDay(spa.year, spa.month, spa.day, 0, 0, 0, 0, 0);
	const nu = calculateRaDec(sunRtsJd, spa.deltaT).nu;
	const eot = equationOfTime(sunMeanLongitude(spa.jme), spa.alpha, spa.delPsi, spa.epsilon);
	const alpha = [];
	const delta = [];
	for (let i$1 = 0; i$1 < JDSign.JD_COUNT; i$1++) {
		const result = calculateRaDec(sunRtsJd + i$1 - 1, spa.deltaT);
		alpha[i$1] = result.alpha;
		delta[i$1] = result.delta;
	}
	const mRts = [];
	mRts[SunState.SUN_TRANSIT] = approxSunTransitTime(alpha[JDSign.JD_ZERO], spa.longitude, nu);
	const h0 = sunHourAngleAtRiseSet(spa.latitude, delta[JDSign.JD_ZERO], h0Prime);
	if (h0 === INVALID_VALUE) return {
		sunrise: INVALID_VALUE,
		suntransit: INVALID_VALUE,
		sunset: INVALID_VALUE,
		srha: INVALID_VALUE,
		ssha: INVALID_VALUE,
		sta: INVALID_VALUE,
		eot
	};
	approxSunRiseAndSet(mRts, h0);
	const nuRts = [];
	const hPrime = [];
	const alphaPrime = [];
	const deltaPrime = [];
	const hRts = [];
	for (let i$1 = 0; i$1 < SunState.SUN_COUNT; i$1++) {
		nuRts[i$1] = nu + 360.985647 * mRts[i$1];
		const n$1 = mRts[i$1] + spa.deltaT / 86400;
		alphaPrime[i$1] = rtsAlphaDeltaPrime(alpha, n$1);
		deltaPrime[i$1] = rtsAlphaDeltaPrime(delta, n$1);
		hPrime[i$1] = limitDegrees180pm(nuRts[i$1] + spa.longitude - alphaPrime[i$1]);
		hRts[i$1] = rtsSunAltitude(spa.latitude, deltaPrime[i$1], hPrime[i$1]);
	}
	const srha = hPrime[SunState.SUN_RISE];
	const ssha = hPrime[SunState.SUN_SET];
	const sta = hRts[SunState.SUN_TRANSIT];
	const suntransit = dayfracToLocalHr(mRts[SunState.SUN_TRANSIT] - hPrime[SunState.SUN_TRANSIT] / 360, spa.timezone);
	return {
		sunrise: dayfracToLocalHr(sunRiseAndSet(mRts, hRts, deltaPrime, spa.latitude, hPrime, h0Prime, SunState.SUN_RISE), spa.timezone),
		suntransit,
		sunset: dayfracToLocalHr(sunRiseAndSet(mRts, hRts, deltaPrime, spa.latitude, hPrime, h0Prime, SunState.SUN_SET), spa.timezone),
		srha,
		ssha,
		sta,
		eot
	};
}
/**
* Calculate sunrise/sunset for a custom zenith angle (for twilight calculations)
* @param latitude - Observer latitude in degrees
* @param delta - Sun declination in degrees
* @param suntransit - Solar noon time in fractional hours
* @param zenithAngle - Custom zenith angle in degrees
* @returns Object with sunrise and sunset in fractional hours, or null values for polar cases
*/
function calculateCustomZenithTimes(latitude, delta, suntransit, zenithAngle) {
	const latRad = deg2rad(latitude);
	const deltaRad = deg2rad(delta);
	const zenithRad = deg2rad(zenithAngle);
	const cosH0 = (Math.cos(zenithRad) - Math.sin(latRad) * Math.sin(deltaRad)) / (Math.cos(latRad) * Math.cos(deltaRad));
	if (cosH0 < -1 || cosH0 > 1) return {
		sunrise: null,
		sunset: null
	};
	const H0h = rad2deg(Math.acos(cosH0)) / 15;
	return {
		sunrise: suntransit - H0h,
		sunset: suntransit + H0h
	};
}

//#endregion
//#region src/spa.ts
/**
* Solar Position Algorithm (SPA) Main Calculator
* Based on NREL's Solar Position Algorithm for Solar Radiation Applications
* 
* This is the core SPA calculation module that orchestrates all sub-calculations
* to determine precise solar position and rise/transit/set times.
*/
/**
* Create a new SpaData object with default values
*/
function createSpaData() {
	return {
		year: 0,
		month: 0,
		day: 0,
		hour: 0,
		minute: 0,
		second: 0,
		deltaUt1: 0,
		deltaT: 67,
		timezone: 0,
		longitude: 0,
		latitude: 0,
		elevation: 0,
		pressure: 1013,
		temperature: 15,
		slope: 0,
		azimuthRotation: 0,
		atmosphericRefraction: REFRACTION_CORRECTION,
		timezoneId: "",
		function: SpaFunction.SPA_ALL,
		jd: 0,
		jc: 0,
		jde: 0,
		jce: 0,
		jme: 0,
		l: 0,
		b: 0,
		r: 0,
		theta: 0,
		beta: 0,
		x0: 0,
		x1: 0,
		x2: 0,
		x3: 0,
		x4: 0,
		delPsi: 0,
		delEpsilon: 0,
		epsilon0: 0,
		epsilon: 0,
		delTau: 0,
		lamda: 0,
		nu0: 0,
		nu: 0,
		alpha: 0,
		delta: 0,
		h: 0,
		xi: 0,
		delAlpha: 0,
		deltaPrime: 0,
		alphaPrime: 0,
		hPrime: 0,
		e0: 0,
		delE: 0,
		e: 0,
		eot: 0,
		srha: 0,
		ssha: 0,
		sta: 0,
		zenith: 0,
		azimuthAstro: 0,
		azimuth: 0,
		incidence: 0,
		suntransit: 0,
		sunrise: 0,
		sunset: 0
	};
}
/**
* Validate SPA input values
* @returns 0 if valid, error code otherwise
*/
function validateInputs(spa) {
	if (spa.year < -2e3 || spa.year > 6e3) return 1;
	if (spa.month < 1 || spa.month > 12) return 2;
	if (spa.day < 1 || spa.day > 31) return 3;
	if (spa.hour < 0 || spa.hour > 24) return 4;
	if (spa.minute < 0 || spa.minute > 59) return 5;
	if (spa.second < 0 || spa.second >= 60) return 6;
	if (spa.pressure < 0 || spa.pressure > 5e3) return 12;
	if (spa.temperature <= -273 || spa.temperature > 6e3) return 13;
	if (spa.deltaUt1 <= -1 || spa.deltaUt1 >= 1) return 17;
	if (spa.hour === 24 && spa.minute > 0) return 5;
	if (spa.hour === 24 && spa.second > 0) return 6;
	if (Math.abs(spa.deltaT) > 8e3) return 7;
	if (Math.abs(spa.timezone) > 18) return 8;
	if (Math.abs(spa.longitude) > 180) return 9;
	if (Math.abs(spa.latitude) > 90) return 10;
	if (Math.abs(spa.atmosphericRefraction) > 5) return 16;
	if (spa.elevation < -65e5) return 11;
	return 0;
}
/**
* Calculate geocentric sun right ascension and declination
* This is a core calculation that's reused for RTS calculations
*/
function calculateGeocentricSunRaAndDec(spa) {
	spa.jc = julianCentury(spa.jd);
	spa.jde = julianEphemerisDay(spa.jd, spa.deltaT);
	spa.jce = julianEphemerisCentury(spa.jde);
	spa.jme = julianEphemerisMillennium(spa.jce);
	spa.l = earthHeliocentricLongitude(spa.jme);
	spa.b = earthHeliocentricLatitude(spa.jme);
	spa.r = earthRadiusVector(spa.jme);
	spa.theta = geocentricLongitude(spa.l);
	spa.beta = geocentricLatitude(spa.b);
	spa.x0 = meanElongationMoonSun(spa.jce);
	spa.x1 = meanAnomalySun(spa.jce);
	spa.x2 = meanAnomalyMoon(spa.jce);
	spa.x3 = argumentLatitudeMoon(spa.jce);
	spa.x4 = ascendingLongitudeMoon(spa.jce);
	const x$1 = [
		spa.x0,
		spa.x1,
		spa.x2,
		spa.x3,
		spa.x4
	];
	const nutation = nutationLongitudeAndObliquity(spa.jce, x$1);
	spa.delPsi = nutation.delPsi;
	spa.delEpsilon = nutation.delEpsilon;
	spa.epsilon0 = eclipticMeanObliquity(spa.jme);
	spa.epsilon = eclipticTrueObliquity(spa.delEpsilon, spa.epsilon0);
	spa.delTau = aberrationCorrection(spa.r);
	spa.lamda = apparentSunLongitude(spa.theta, spa.delPsi, spa.delTau);
	spa.nu0 = greenwichMeanSiderealTime(spa.jd, spa.jc);
	spa.nu = greenwichSiderealTime(spa.nu0, spa.delPsi, spa.epsilon);
	spa.alpha = geocentricRightAscension(spa.lamda, spa.epsilon, spa.beta);
	spa.delta = geocentricDeclination(spa.beta, spa.epsilon, spa.lamda);
}
/**
* Helper function to calculate RA/Dec for a given Julian Day
* Used by RTS calculations
*/
function calculateRaDecForJd(jd, deltaT) {
	const jc = julianCentury(jd);
	const jce = julianEphemerisCentury(julianEphemerisDay(jd, deltaT));
	const jme = julianEphemerisMillennium(jce);
	const l$1 = earthHeliocentricLongitude(jme);
	const b$1 = earthHeliocentricLatitude(jme);
	const r$1 = earthRadiusVector(jme);
	const theta = geocentricLongitude(l$1);
	const beta = geocentricLatitude(b$1);
	const nutation = nutationLongitudeAndObliquity(jce, [
		meanElongationMoonSun(jce),
		meanAnomalySun(jce),
		meanAnomalyMoon(jce),
		argumentLatitudeMoon(jce),
		ascendingLongitudeMoon(jce)
	]);
	const epsilon0 = eclipticMeanObliquity(jme);
	const epsilon = eclipticTrueObliquity(nutation.delEpsilon, epsilon0);
	const delTau = aberrationCorrection(r$1);
	const lamda = apparentSunLongitude(theta, nutation.delPsi, delTau);
	const nu = greenwichSiderealTime(greenwichMeanSiderealTime(jd, jc), nutation.delPsi, epsilon);
	return {
		alpha: geocentricRightAscension(lamda, epsilon, beta),
		delta: geocentricDeclination(beta, epsilon, lamda),
		nu
	};
}
/**
* Main SPA calculation function
* Calculates all solar position values based on input parameters
* 
* @param spa - SPA data object with input values filled in
* @returns 0 if successful, error code otherwise
*/
function spaCalculate(spa) {
	const result = validateInputs(spa);
	if (result !== 0) return result;
	spa.jd = julianDay(spa.year, spa.month, spa.day, spa.hour, spa.minute, spa.second, spa.deltaUt1, spa.timezone);
	calculateGeocentricSunRaAndDec(spa);
	spa.h = observerHourAngle(spa.nu, spa.longitude, spa.alpha);
	spa.xi = sunEquatorialHorizontalParallax(spa.r);
	const parallax = rightAscensionParallaxAndTopocentricDec(spa.latitude, spa.elevation, spa.xi, spa.h, spa.delta);
	spa.delAlpha = parallax.deltaAlpha;
	spa.deltaPrime = parallax.deltaPrime;
	spa.alphaPrime = topocentricRightAscension(spa.alpha, spa.delAlpha);
	spa.hPrime = topocentricLocalHourAngle(spa.h, spa.delAlpha);
	spa.e0 = topocentricElevationAngle(spa.latitude, spa.deltaPrime, spa.hPrime);
	spa.delE = atmosphericRefractionCorrection(spa.pressure, spa.temperature, spa.atmosphericRefraction, spa.e0);
	spa.e = topocentricElevationAngleCorrected(spa.e0, spa.delE);
	spa.zenith = topocentricZenithAngle(spa.e);
	spa.azimuthAstro = topocentricAzimuthAngleAstro(spa.hPrime, spa.latitude, spa.deltaPrime);
	spa.azimuth = topocentricAzimuthAngle(spa.azimuthAstro);
	if (spa.function === SpaFunction.SPA_ZA_INC || spa.function === SpaFunction.SPA_ALL) spa.incidence = surfaceIncidenceAngle(spa.zenith, spa.azimuthAstro, spa.azimuthRotation, spa.slope);
	if (spa.function === SpaFunction.SPA_ZA_RTS || spa.function === SpaFunction.SPA_ALL) {
		const rts = calculateEotAndSunRiseTransitSet(spa, calculateRaDecForJd);
		spa.sunrise = rts.sunrise;
		spa.suntransit = rts.suntransit;
		spa.sunset = rts.sunset;
		spa.srha = rts.srha;
		spa.ssha = rts.ssha;
		spa.sta = rts.sta;
		spa.eot = rts.eot;
	}
	return 0;
}
/**
* Initialize SPA data from a Temporal.Instant and coordinates
*/
function initSpaFromTemporal(instant, latitude, longitude, options = {}) {
	const spa = createSpaData();
	const dateTime = resolveDateTimeComponents(instant);
	spa.year = dateTime.year;
	spa.month = dateTime.month;
	spa.day = dateTime.day;
	spa.hour = dateTime.hour;
	spa.minute = dateTime.minute;
	spa.second = dateTime.second;
	spa.timezone = dateTime.timezone;
	spa.timezoneId = "";
	spa.latitude = latitude;
	spa.longitude = longitude;
	spa.elevation = options.elevation ?? 0;
	spa.pressure = options.pressure ?? 1013;
	spa.temperature = options.temperature ?? 15;
	spa.deltaUt1 = options.deltaUt1 ?? 0;
	spa.deltaT = options.deltaT ?? 67;
	spa.slope = options.slope ?? 0;
	spa.azimuthRotation = options.azimuthRotation ?? 0;
	spa.atmosphericRefraction = options.atmosphericRefraction ?? REFRACTION_CORRECTION;
	spa.function = SpaFunction.SPA_ALL;
	return spa;
}
/**
* Check if a sunrise/sunset time is valid (not polar day/night)
*/
function isValidSunTime(time) {
	return time !== INVALID_VALUE && isFinite(time) && time >= 0;
}

//#endregion
//#region src/index.ts
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
function getSunrise(latitude, longitude, instant = Temporal.Now.instant(), options) {
	const spa = initSpaFromTemporal(instant, latitude, longitude, options);
	if (spaCalculate(spa) !== 0 || !isValidSunTime(spa.sunrise)) return null;
	return fractionalHourToInstant(spa.year, spa.month, spa.day, spa.sunrise);
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
function getSunset(latitude, longitude, instant = Temporal.Now.instant(), options) {
	const spa = initSpaFromTemporal(instant, latitude, longitude, options);
	if (spaCalculate(spa) !== 0 || !isValidSunTime(spa.sunset)) return null;
	return fractionalHourToInstant(spa.year, spa.month, spa.day, spa.sunset);
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
function getSolarNoon(latitude, longitude, instant = Temporal.Now.instant(), options) {
	const spa = initSpaFromTemporal(instant, latitude, longitude, options);
	if (spaCalculate(spa) !== 0 || !isValidSunTime(spa.suntransit)) return null;
	return fractionalHourToInstant(spa.year, spa.month, spa.day, spa.suntransit);
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
function getSolarPosition(latitude, longitude, instant = Temporal.Now.instant(), options) {
	const spa = initSpaFromTemporal(instant, latitude, longitude, options);
	if (spaCalculate(spa) !== 0) return null;
	return {
		zenith: spa.zenith,
		azimuth: spa.azimuth,
		azimuthAstro: spa.azimuthAstro,
		elevation: spa.e,
		rightAscension: spa.alpha,
		declination: spa.delta,
		hourAngle: spa.h
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
function getTwilight(latitude, longitude, instant = Temporal.Now.instant(), options) {
	const spa = initSpaFromTemporal(instant, latitude, longitude, options);
	if (spaCalculate(spa) !== 0 || !isValidSunTime(spa.suntransit)) return null;
	const civil = calculateCustomZenithTimes(latitude, spa.delta, spa.suntransit, ZENITH_CIVIL_TWILIGHT);
	const nautical = calculateCustomZenithTimes(latitude, spa.delta, spa.suntransit, ZENITH_NAUTICAL_TWILIGHT);
	const astronomical = calculateCustomZenithTimes(latitude, spa.delta, spa.suntransit, ZENITH_ASTRONOMICAL_TWILIGHT);
	const golden = calculateCustomZenithTimes(latitude, spa.delta, spa.suntransit, ZENITH_GOLDEN_HOUR);
	const blue = calculateCustomZenithTimes(latitude, spa.delta, spa.suntransit, ZENITH_BLUE_HOUR);
	const toInstant = (hours) => {
		if (hours === null || !isFinite(hours)) return null;
		return fractionalHourToInstant(spa.year, spa.month, spa.day, hours);
	};
	return {
		civilDawn: toInstant(civil.sunrise),
		civilDusk: toInstant(civil.sunset),
		nauticalDawn: toInstant(nautical.sunrise),
		nauticalDusk: toInstant(nautical.sunset),
		astronomicalDawn: toInstant(astronomical.sunrise),
		astronomicalDusk: toInstant(astronomical.sunset),
		goldenHour: {
			morning: {
				start: toInstant(spa.sunrise),
				end: toInstant(golden.sunrise)
			},
			evening: {
				start: toInstant(golden.sunset),
				end: toInstant(spa.sunset)
			}
		},
		blueHour: {
			morning: {
				start: toInstant(blue.sunrise),
				end: toInstant(spa.sunrise)
			},
			evening: {
				start: toInstant(spa.sunset),
				end: toInstant(blue.sunset)
			}
		}
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
function getSunTimes(latitude, longitude, instant = Temporal.Now.instant(), options) {
	const spa = initSpaFromTemporal(instant, latitude, longitude, options);
	if (spaCalculate(spa) !== 0) return {
		sunrise: null,
		sunset: null,
		solarNoon: null,
		twilight: null
	};
	const toInstant = (hours) => {
		if (!isValidSunTime(hours)) return null;
		return fractionalHourToInstant(spa.year, spa.month, spa.day, hours);
	};
	let twilight = null;
	if (isValidSunTime(spa.suntransit)) {
		const civil = calculateCustomZenithTimes(latitude, spa.delta, spa.suntransit, ZENITH_CIVIL_TWILIGHT);
		const nautical = calculateCustomZenithTimes(latitude, spa.delta, spa.suntransit, ZENITH_NAUTICAL_TWILIGHT);
		const astronomical = calculateCustomZenithTimes(latitude, spa.delta, spa.suntransit, ZENITH_ASTRONOMICAL_TWILIGHT);
		const golden = calculateCustomZenithTimes(latitude, spa.delta, spa.suntransit, ZENITH_GOLDEN_HOUR);
		const blue = calculateCustomZenithTimes(latitude, spa.delta, spa.suntransit, ZENITH_BLUE_HOUR);
		const twilightToInstant = (hours) => {
			if (hours === null || !isFinite(hours)) return null;
			return fractionalHourToInstant(spa.year, spa.month, spa.day, hours);
		};
		twilight = {
			civilDawn: twilightToInstant(civil.sunrise),
			civilDusk: twilightToInstant(civil.sunset),
			nauticalDawn: twilightToInstant(nautical.sunrise),
			nauticalDusk: twilightToInstant(nautical.sunset),
			astronomicalDawn: twilightToInstant(astronomical.sunrise),
			astronomicalDusk: twilightToInstant(astronomical.sunset),
			goldenHour: {
				morning: {
					start: twilightToInstant(spa.sunrise),
					end: twilightToInstant(golden.sunrise)
				},
				evening: {
					start: twilightToInstant(golden.sunset),
					end: twilightToInstant(spa.sunset)
				}
			},
			blueHour: {
				morning: {
					start: twilightToInstant(blue.sunrise),
					end: twilightToInstant(spa.sunrise)
				},
				evening: {
					start: twilightToInstant(spa.sunset),
					end: twilightToInstant(blue.sunset)
				}
			}
		};
	}
	return {
		sunrise: toInstant(spa.sunrise),
		sunset: toInstant(spa.sunset),
		solarNoon: toInstant(spa.suntransit),
		twilight
	};
}

//#endregion
export { getSolarNoon, getSolarPosition, getSunTimes, getSunrise, getSunset, getTwilight };
//# sourceMappingURL=index.js.map