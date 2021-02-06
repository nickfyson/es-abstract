'use strict';

var GetIntrinsic = require('get-intrinsic');

var $RangeError = GetIntrinsic('%RangeError%');
var $TypeError = GetIntrinsic('%TypeError%');

var hasOwnProperty = require('./HasOwnProperty');
var IsArray = require('./IsArray');
var IsBigIntElementType = require('./IsBigIntElementType');
var IsUnsignedElementType = require('./IsUnsignedElementType');
var Type = require('./Type');

var keys = require('object-keys');

// https://262.ecma-international.org/11.0/#sec-rawbytestonumeric

// https://262.ecma-international.org/11.0/#table-the-typedarray-constructors
var TypeToSizes = {
	Int8: 1,
	Uint8: 1,
	Uint8C: 1,
	Int16: 2,
	Uint16: 2,
	Int32: 4,
	Uint32: 4,
	BigInt64: 8,
	BigUint64: 8,
	Float32: 4,
	Float64: 8
};

module.exports = function RawBytesToNumeric(type, rawBytes, isLittleEndian) {
	if (!hasOwnProperty(TypeToSizes, type)) {
		throw new $RangeError('Assertion failed: `type` must be a TypedArray element type: ' + keys(TypeToSizes));
	}
	if (Type(type) !== 'String') {
		throw new $TypeError('Assertion failed: `S` must be a boxed string object');
	}
	if (!IsArray(rawBytes)) {
		throw new $TypeError('Assertion failed: `rawBytes` must be an Array');
	}
	if (Type(isLittleEndian) !== 'Boolean') {
		throw new $TypeError('Assertion failed: `isLittleEndian` must be a Boolean');
	}

	var elementSize = TypeToSizes[type];
	var leftToRight = isLittleEndian;
	if (type === 'Float32') {
		/*
        Let value be the byte elements of rawBytes concatenated and interpreted as a little-endian bit string encoding of an IEEE 754-2008 binary32 value.
If value is an IEEE 754-2008 binary32 NaN value, return the NaN Number value.
Return the Number value that corresponds to value.
        */
	}
	if (type === 'Float64') {
		/*
        Let value be the byte elements of rawBytes concatenated and interpreted as a little-endian bit string encoding of an IEEE 754-2008 binary64 value.
If value is an IEEE 754-2008 binary64 NaN value, return the NaN Number value.
Return the Number value that corresponds to value.
        */
	}
	if (IsUnsignedElementType(type)) {
		/*
        Let intValue be the byte elements of rawBytes concatenated and interpreted as a bit string encoding of an unsigned little-endian binary number.
        */
	} else {
		// Let intValue be the byte elements of rawBytes concatenated and interpreted as a bit string encoding of a binary little-endian 2's complement number of bit length elementSize × 8.
	}
	if (IsBigIntElementType(type)) {
		// return the BigInt value that corresponds to intValue.
	}
	// return the Number value that corresponds to intValue.
};
