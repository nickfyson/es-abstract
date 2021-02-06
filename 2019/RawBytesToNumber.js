'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bind/callBound');

var $RangeError = GetIntrinsic('%RangeError%');
var $TypeError = GetIntrinsic('%TypeError%');

var $charAt = callBound('String.prototype.charAt');

var hasOwnProperty = require('./HasOwnProperty');
var IsArray = require('./IsArray');
var Type = require('./Type');

var keys = require('object-keys');

// https://262.ecma-international.org/8.0/#sec-rawbytestonumber

// https://262.ecma-international.org/8.0/#table-49
var TypeToSizes = {
	Int8: 1,
	Uint8: 1,
	Uint8C: 1,
	Int16: 2,
	Uint16: 2,
	Int32: 4,
	Uint32: 4,
	Float32: 4,
	Float64: 8
};

module.exports = function RawBytesToNumber(type, rawBytes, isLittleEndian) {
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
	if ($charAt(type, 0) === 'U') {
		/*
        Let intValue be the byte elements of rawBytes concatenated and interpreted as a bit string encoding of an unsigned little-endian binary number.
        */
	} else {
		// Let intValue be the byte elements of rawBytes concatenated and interpreted as a bit string encoding of a binary little-endian 2's complement number of bit length elementSize × 8.
	}
	// return the Number value that corresponds to intValue.
};
