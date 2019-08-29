let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://myplura.com/api/',
	mainnetExplorerUrl: "https://explorer.pluracoin.org/",
	mainnetExplorerUrlHash: "https://explorer.pluracoin.org/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "https://explorer.pluracoin.org/?hash={ID}#blockchain_block",
	testnetExplorerUrl: "https://explorer.pluracoin.org/",
	testnetExplorerUrlHash: "https://explorer.pluracoin.org/?hash={ID}#blockchain_transaction",
	testnetExplorerUrlBlock: "https://explorer.pluracoin.org/?hash={ID}#blockchain_block",
	testnet: false,
    coinUnitPlaces: 10,
    coinDisplayUnitPlaces: 2,
	txMinConfirms: 10,         
	txCoinbaseMinConfirms: 10,
	addressPrefix: 137,
	integratedAddressPrefix: 137,
	addressPrefixTestnet: 137,
	integratedAddressPrefixTestnet: 112,
	subAddressPrefix: 113,
	subAddressPrefixTestnet: 113,
	coinFee: new JSBigInt('100000000'),
	feePerKB: new JSBigInt('100000000'), //for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('100000000'),//used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'PLURA',
	openAliasPrefix: "plura",
	coinName: 'PluraCoin',
	coinUriPrefix: 'pluracoin:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,
};