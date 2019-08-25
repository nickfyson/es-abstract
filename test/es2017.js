'use strict';

var ES = require('../').ES2017;

var ops = require('../operations/2017');

var expectedMissing = ['AddRestrictedFunctionProperties', 'AddWaiter', 'AgentCanSuspend', 'AgentSignifier', 'AllocateArrayBuffer', 'AllocateSharedArrayBuffer', 'AllocateTypedArray', 'AllocateTypedArrayBuffer', 'ArrayCreate', 'ArraySetLength', 'AsyncFunctionAwait', 'AsyncFunctionCreate', 'AsyncFunctionStart', 'AtomicLoad', 'AtomicReadModifyWrite', 'BlockDeclarationInstantiation', 'BoundFunctionCreate', 'Canonicalize', 'CharacterRange', 'CharacterRangeOrUnion', 'CharacterSetMatcher', 'CloneArrayBuffer', 'Completion', 'ComposeWriteEventBytes', 'Construct', 'CopyDataBlockBytes', 'CreateArrayFromList', 'CreateArrayIterator', 'CreateBuiltinFunction', 'CreateByteDataBlock', 'CreateDynamicFunction', 'CreateHTML', 'CreateIntrinsics', 'CreateListFromArrayLike', 'CreateListIterator', 'CreateMapIterator', 'CreateMappedArgumentsObject', 'CreatePerIterationEnvironment', 'CreateRealm', 'CreateResolvingFunctions', 'CreateSetIterator', 'CreateSharedByteDataBlock', 'CreateStringIterator', 'CreateUnmappedArgumentsObject', 'DateFromTime', 'Day', 'DayFromYear', 'DayWithinYear', 'DaysInYear', 'Decode', 'DetachArrayBuffer', 'Encode', 'EnqueueJob', 'EnterCriticalSection', 'EnumerateObjectProperties', 'EscapeRegExpPattern', 'EvalDeclarationInstantiation', 'EvaluateCall', 'EvaluateDirectCall', 'EvaluateNew', 'EventSet', 'ForBodyEvaluation', 'ForIn/OfBodyEvaluation', 'ForIn/OfHeadEvaluation', 'FulfillPromise', 'FunctionAllocate', 'FunctionCreate', 'FunctionDeclarationInstantiation', 'FunctionInitialize', 'GeneratorFunctionCreate', 'GeneratorResume', 'GeneratorResumeAbrupt', 'GeneratorStart', 'GeneratorValidate', 'GeneratorYield', 'GetActiveScriptOrModule', 'GetBase', 'GetFunctionRealm', 'GetGlobalObject', 'GetIdentifierReference', 'GetModifySetValueInBuffer', 'GetModuleNamespace', 'GetNewTarget', 'GetOwnPropertyKeys', 'GetPrototypeFromConstructor', 'GetReferencedName', 'GetSubstitution', 'GetSuperConstructor', 'GetTemplateObject', 'GetThisEnvironment', 'GetThisValue', 'GetValue', 'GetValueFromBuffer', 'GetViewValue', 'GetWaiterList', 'GlobalDeclarationInstantiation', 'HasPrimitiveBase', 'HostEnsureCanCompileStrings', 'HostEventSet', 'HostPromiseRejectionTracker', 'HostReportErrors', 'HostResolveImportedModule', 'HourFromTime', 'HoursPerDay', 'IfAbruptRejectPromise', 'ImportedLocalNames', 'InLeapYear', 'InitializeBoundName', 'InitializeHostDefinedRealm', 'InitializeReferencedBinding', 'InstanceofOperator', 'IntegerIndexedElementGet', 'IntegerIndexedElementSet', 'IntegerIndexedObjectCreate', 'InternalizeJSONProperty', 'IsAnonymousFunctionDefinition', 'IsCompatiblePropertyDescriptor', 'IsDetachedBuffer', 'IsInTailPosition', 'IsLabelledFunction', 'IsPropertyReference', 'IsSharedArrayBuffer', 'IsStrictReference', 'IsSuperReference', 'IsUnresolvableReference', 'IsWordChar', 'IterableToList', 'LeaveCriticalSection', 'LocalTime', 'LoopContinues', 'MakeArgGetter', 'MakeArgSetter', 'MakeClassConstructor', 'MakeConstructor', 'MakeDate', 'MakeDay', 'MakeMethod', 'MakeSuperPropertyReference', 'MakeTime', 'MinFromTime', 'MinutesPerHour', 'ModuleNamespaceCreate', 'MonthFromTime', 'NewDeclarativeEnvironment', 'NewFunctionEnvironment', 'NewGlobalEnvironment', 'NewModuleEnvironment', 'NewObjectEnvironment', 'NewPromiseCapability', 'NormalCompletion', 'NumberToRawBytes', 'ObjectDefineProperties', 'OrdinaryCallBindThis', 'OrdinaryCallEvaluateBody', 'OrdinaryCreateFromConstructor', 'OrdinaryDelete', 'OrdinaryGet', 'OrdinaryGetOwnProperty', 'OrdinaryGetPrototypeOf', 'OrdinaryHasProperty', 'OrdinaryIsExtensible', 'OrdinaryOwnPropertyKeys', 'OrdinaryPreventExtensions', 'OrdinarySet', 'OrdinarySetPrototypeOf', 'OrdinaryToPrimitive', 'ParseModule', 'ParseScript', 'PerformEval', 'PerformPromiseAll', 'PerformPromiseRace', 'PerformPromiseThen', 'PrepareForOrdinaryCall', 'PrepareForTailCall', 'PromiseReactionJob', 'PromiseResolveThenableJob', 'ProxyCreate', 'PutValue', 'QuoteJSONString', 'RawBytesToNumber', 'RegExpAlloc', 'RegExpBuiltinExec', 'RegExpCreate', 'RegExpInitialize', 'RejectPromise', 'RemoveWaiter', 'RemoveWaiters', 'RepeatMatcher', 'ResolveBinding', 'ResolveThisBinding', 'ReturnIfAbrupt', 'RunJobs', 'ScriptEvaluation', 'ScriptEvaluationJob', 'SecFromTime', 'SecondsPerMinute', 'SerializeJSONArray', 'SerializeJSONObject', 'SerializeJSONProperty', 'SetDefaultGlobalBindings', 'SetFunctionName', 'SetImmutablePrototype', 'SetRealmGlobalObject', 'SetValueInBuffer', 'SetViewValue', 'SharedDataBlockEventSet', 'SortCompare', 'SplitMatch', 'StringCreate', 'StringGetOwnProperty', 'Suspend', 'SymbolDescriptiveString', 'TimeClip', 'TimeFromYear', 'TimeWithinDay', 'ToDateString', 'ToString Applied to the Number Type', 'TopLevelModuleEvaluationJob', 'TriggerPromiseReactions', 'TypedArrayCreate', 'TypedArraySpeciesCreate', 'UTC', 'UTF16Decode', 'UTF16Encoding', 'UpdateEmpty', 'ValidateAtomicAccess', 'ValidateSharedIntegerTypedArray', 'ValidateTypedArray', 'ValueOfReadEvent', 'WakeWaiter', 'WeekDay', 'WordCharacters', 'YearFromTime', 'abs', 'agent-order', 'floor', 'happens-before', 'host-synchronizes-with', 'max', 'memory-order', 'min', 'modulo', 'msFromTime', 'msPerDay', 'msPerHour', 'msPerMinute', 'msPerSecond', 'reads-bytes-from', 'reads-from', 'synchronizes-with'];

require('./tests').es2017(ES, ops, expectedMissing);
