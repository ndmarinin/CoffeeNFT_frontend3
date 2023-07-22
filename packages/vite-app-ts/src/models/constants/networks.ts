import { TNetworkInfo } from 'eth-hooks/models';
import { INFURA_ID } from './constants';

export type TNetworkNames =
  | 'localhost'
  | 'mainnet'
  | 'siberium_test';

export const NETWORKS: Record<TNetworkNames, TNetworkInfo> = {
  localhost: {
    name: 'localhost',
    color: '#666666',
    chainId: 31337,
    blockExplorer: '',
    rpcUrl: 'http://' + window.location.hostname + ':8545',
  },
  mainnet: {
    name: 'mainnet',
    color: '#ff8b9e',
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    blockExplorer: 'https://etherscan.io/',
  },
  siberium_test: {
    name: 'siberium_test',
    color: '#ff8b9e',
    chainId: 111000,
    rpcUrl: `https://rpc.test.siberium.net`,
    blockExplorer: 'https://explorer.test.siberium.net',
  },
};
