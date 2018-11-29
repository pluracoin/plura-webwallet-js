let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
    apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'https://wallet.plenteum.com/api/',
	mainnetExplorerUrl: "http://explorer.karbowanec.com/",
	testnetExplorerUrl: "http://explorer.karbowanec.com/",
	testnet: false,
    coinUnitPlaces: 12,
    coinDisplayUnitPlaces: 2,
	txMinConfirms: 10,
	txCoinbaseMinConfirms: 20,
	addressPrefix: 111,
	integratedAddressPrefix: 0,
	addressPrefixTestnet: 33,
	integratedAddressPrefixTestnet: 34,
	subAddressPrefix: 52,
	subAddressPrefixTestnet: 73,
	feePerKB: new JSBigInt('100000000000'), //for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('100000000'),//used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixins
	idleTimeout: 30,
	idleWarningDuration: 20,
	coinSymbol: 'KRB',
	coinName: 'Karbo',
	coinUriPrefix: 'karbowanec:',
	avgBlockTime: 240,
	maxBlockNumber: 500000000,
};