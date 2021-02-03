'use strict';

var ES = require('../').ES2020;
var boundES = require('./helpers/createBoundESNamespace')(ES);

var ops = require('../operations/2020');

var expectedMissing = [
	'AddRestrictedFunctionProperties',
	'AddWaiter',
	'agent-order',
	'AgentCanSuspend',
	'AgentSignifier',
	'AllocateArrayBuffer',
	'AllocateSharedArrayBuffer',
	'AllocateTypedArray',
	'AllocateTypedArrayBuffer',
	'AsyncFromSyncIteratorContinuation',
	'AsyncFunctionCreate',
	'AsyncFunctionStart',
	'AsyncGeneratorEnqueue',
	'AsyncGeneratorFunctionCreate',
	'AsyncGeneratorReject',
	'AsyncGeneratorResolve',
	'AsyncGeneratorResumeNext',
	'AsyncGeneratorStart',
	'AsyncGeneratorYield',
	'AsyncIteratorClose',
	'AtomicLoad',
	'AtomicReadModifyWrite',
	'Await',
	'BackreferenceMatcher',
	'BlockDeclarationInstantiation',
	'BoundFunctionCreate',
	'Canonicalize',
	'CaseClauseIsSelected',
	'CharacterRange',
	'CharacterRangeOrUnion',
	'CharacterSetMatcher',
	'CloneArrayBuffer',
	'Completion',
	'ComposeWriteEventBytes',
	'Construct',
	'CopyDataBlockBytes',
	'CreateArrayFromList',
	'CreateArrayIterator',
	'CreateAsyncFromSyncIterator',
	'CreateBuiltinFunction',
	'CreateByteDataBlock',
	'CreateDynamicFunction',
	'CreateForInIterator',
	'CreateIntrinsics',
	'CreateListIteratorRecord',
	'CreateMapIterator',
	'CreateMappedArgumentsObject',
	'CreatePerIterationEnvironment',
	'CreateRealm',
	'CreateRegExpStringIterator',
	'CreateResolvingFunctions',
	'CreateSetIterator',
	'CreateSharedByteDataBlock',
	'CreateStringIterator',
	'CreateUnmappedArgumentsObject',
	'Decode',
	'DetachArrayBuffer',
	'Encode',
	'EnqueueJob',
	'EnterCriticalSection',
	'EnumerateObjectProperties',
	'EscapeRegExpPattern',
	'EvalDeclarationInstantiation',
	'EvaluateCall',
	'EvaluateNew',
	'EvaluatePropertyAccessWithExpressionKey',
	'EvaluatePropertyAccessWithIdentifierKey',
	'EventSet',
	'ExecuteModule',
	'FinishDynamicImport',
	'ForBodyEvaluation',
	'ForIn/OfBodyEvaluation',
	'ForIn/OfHeadEvaluation',
	'FulfillPromise',
	'FunctionAllocate',
	'FunctionCreate',
	'FunctionDeclarationInstantiation',
	'FunctionInitialize',
	'GeneratorFunctionCreate',
	'GeneratorResume',
	'GeneratorResumeAbrupt',
	'GeneratorStart',
	'GeneratorValidate',
	'GeneratorYield',
	'GetActiveScriptOrModule',
	'GetBase',
	'GetFunctionRealm',
	'GetGeneratorKind',
	'GetGlobalObject',
	'GetIdentifierReference',
	'GetModifySetValueInBuffer',
	'GetModuleNamespace',
	'GetNewTarget',
	'GetReferencedName',
	'GetSuperConstructor',
	'GetTemplateObject',
	'GetThisEnvironment',
	'GetThisValue',
	'GetValue',
	'GetValueFromBuffer',
	'GetViewValue',
	'GetWaiterList',
	'GlobalDeclarationInstantiation',
	'happens-before',
	'HasPrimitiveBase',
	'host-synchronizes-with',
	'HostEnqueuePromiseJob',
	'HostEnsureCanCompileStrings',
	'HostEventSet',
	'HostFinalizeImportMeta',
	'HostGetImportMetaProperties',
	'HostImportModuleDynamically',
	'HostPromiseRejectionTracker',
	'HostReportErrors',
	'HostResolveImportedModule',
	'IfAbruptRejectPromise',
	'ImportedLocalNames',
	'InitializeBoundName',
	'InitializeEnvironment',
	'InitializeHostDefinedRealm',
	'InitializeReferencedBinding',
	'InnerModuleEvaluation',
	'InnerModuleInstantiation',
	'InnerModuleLinking',
	'IntegerIndexedElementGet',
	'IntegerIndexedElementSet',
	'IntegerIndexedObjectCreate',
	'InternalizeJSONProperty',
	'IsAnonymousFunctionDefinition',
	'IsCompatiblePropertyDescriptor',
	'IsDetachedBuffer',
	'IsInTailPosition',
	'IsLabelledFunction',
	'IsPropertyReference',
	'IsSharedArrayBuffer',
	'IsStrictReference',
	'IsSuperReference',
	'IsUnresolvableReference',
	'IsValidIntegerIndex',
	'IsValidRegularExpressionLiteral',
	'IsWordChar',
	'LeaveCriticalSection',
	'LocalTime',
	'LocalTZA',
	'LoopContinues',
	'MakeArgGetter',
	'MakeArgSetter',
	'MakeBasicObject',
	'MakeClassConstructor',
	'MakeConstructor',
	'MakeMethod',
	'MakeSuperPropertyReference',
	'max',
	'memory-order',
	'min',
	'ModuleDeclarationEnvironmentSetup',
	'ModuleExecution',
	'ModuleNamespaceCreate',
	'NewDeclarativeEnvironment',
	'NewFunctionEnvironment',
	'NewGlobalEnvironment',
	'NewModuleEnvironment',
	'NewObjectEnvironment',
	'NewPromiseCapability',
	'NewPromiseReactionJob',
	'NewPromiseResolveThenableJob',
	'NormalCompletion',
	'NotifyWaiter',
	'NumberToBigInt',
	'NumberToRawBytes',
	'NumericToRawBytes',
	'ObjectDefineProperties',
	'OrdinaryCallBindThis',
	'OrdinaryCallEvaluateBody',
	'OrdinaryDelete',
	'OrdinaryFunctionCreate',
	'OrdinaryGet',
	'OrdinaryIsExtensible',
	'OrdinaryOwnPropertyKeys',
	'OrdinaryPreventExtensions',
	'OrdinarySet',
	'OrdinarySetWithOwnDescriptor',
	'OrdinaryToPrimitive',
	'ParseModule',
	'ParseScript',
	'PerformEval',
	'PerformPromiseAll',
	'PerformPromiseAllSettled',
	'PerformPromiseRace',
	'PerformPromiseThen',
	'PrepareForOrdinaryCall',
	'PrepareForTailCall',
	'PromiseReactionJob',
	'PromiseResolveThenableJob',
	'ProxyCreate',
	'PutValue',
	'RawBytesToNumber',
	'RawBytesToNumeric',
	'reads-bytes-from',
	'reads-from',
	'RegExpAlloc',
	'RegExpBuiltinExec',
	'RegExpCreate',
	'RegExpInitialize',
	'RejectPromise',
	'RemoveWaiter',
	'RemoveWaiters',
	'RepeatMatcher',
	'RequireInternalSlot',
	'ResolveBinding',
	'ResolveThisBinding',
	'ReturnIfAbrupt',
	'RunJobs',
	'ScriptEvaluation',
	'ScriptEvaluationJob',
	'SerializeJSONArray',
	'SerializeJSONObject',
	'SerializeJSONProperty',
	'SetDefaultGlobalBindings',
	'SetImmutablePrototype',
	'SetRealmGlobalObject',
	'SetValueInBuffer',
	'SetViewValue',
	'SharedDataBlockEventSet',
	'SortCompare',
	'SplitMatch',
	'StringCreate',
	'StringToBigInt',
	'Suspend',
	'SynchronizeEventSet',
	'synchronizes-with',
	'ThrowCompletion',
	'TimeZoneString',
	'ToBigInt',
	'ToBigInt64',
	'ToBigUint64',
	'TopLevelModuleEvaluationJob',
	'TriggerPromiseReactions',
	'TypedArrayCreate',
	'TypedArraySpeciesCreate',
	'UnicodeMatchProperty',
	'UnicodeMatchPropertyValue',
	'UpdateEmpty',
	'UTC', // depends on LocalTZA
	'UTF16Decode',
	'UTF16Encode',
	'ValidateAtomicAccess',
	'ValidateSharedIntegerTypedArray',
	'ValidateTypedArray',
	'ValueOfReadEvent',
	'WakeWaiter',
	'WordCharacters' // depends on Canonicalize
];

require('./tests').es2020(boundES, ops, expectedMissing);

require('./helpers/runManifestTest')(require('tape'), ES, 2020);
