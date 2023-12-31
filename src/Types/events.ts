import type { ErrorCode } from './errors';

export enum ActionType {
  //APP
  IS_TEST_NET = 'IS_TEST_NET',
  GET_SWAP_CROSS = 'GET_SWAP_CROSS',
  OPEN_IN_APP_BROWSER = 'OPEN_IN_APP_BROWSER',
  //MINIAPP
  CLOSE_MINI_APP = 'CLOSE_MINI_APP',
  GET_PARAMS = 'GET_PARAMS',
  //WALLET
  CREATE_WALLET = 'CREATE_WALLET',
  IMPORT_WALLET = 'IMPORT_WALLET',
  GENERATE_MNEMONIC = 'GENERATE_MNEMONIC',
  GET_WALLETS = 'GET_WALLETS',
  GET_TOTAL_BALANCE = 'GET_TOTAL_BALANCE',
  GET_TOKEN_BALANCE = 'GET_TOKEN_BALANCE',
  GET_TOKEN_BALANCE_ALL_WALLETS = 'GET_TOKEN_BALANCE_ALL_WALLETS',
  GET_TOTAL_BALANCE_ALL_WALLETS = 'GET_TOTAL_BALANCE_ALL_WALLETS',
  GET_TOKEN_BALANCE_BY_WALLET_ID = 'GET_TOKEN_BALANCE_BY_WALLET_ID',
  GET_TOKEN_BALANCE_AND_PRICES = 'GET_TOKEN_BALANCE_AND_PRICES',
  GET_TOKEN_BALANCE_AND_PRICES_BY_WALLET_ID = 'GET_TOKEN_BALANCE_AND_PRICES_BY_WALLET_ID',
  GET_WALLET_MNEMONIC = 'GET_WALLET_MNEMONIC',
  GET_WALLET_BY_ID = 'GET_WALLET_BY_ID',
  GET_CURRENT_WALLET = 'GET_CURRENT_WALLET',
  GET_ACTIVITIES = 'GET_ACTIVITIES',
  GET_PENDING_ACTIVITIES = 'GET_PENDING_ACTIVITIES',
  ADD_ACTIVITY = 'ADD_ACTIVITY',
  UPDATE_ACTIVITY = 'UPDATE_ACTIVITY',
  UPDATE_GASLESS_ACTIVITY = 'UPDATE_GASLESS_ACTIVITY',
  MARK_CURRENT_WALLET_AS_BACKED_UP = 'MARK_CURRENT_WALLET_AS_BACKED_UP',
  HIDE_BACKUP_NOTICE_FOR_CURRENT_WALLET = 'HIDE_BACKUP_NOTICE_FOR_CURRENT_WALLET',
  GET_RECOMMEND_MNEMONIC_WORDS = 'GET_RECOMMEND_MNEMONIC_WORDS',
  IS_VALID_MNEMONIC = 'IS_VALID_MNEMONIC',
  CHECK_EXIST_MNEMONIC = 'CHECK_EXIST_MNEMONIC',
  GET_OTHER_WALLETS = 'GET_OTHER_WALLETS',
  GET_WALLET_COUNT = 'GET_WALLET_COUNT',
  EDIT_WALLET_NAME = 'EDIT_WALLET_NAME',
  DELETE_WALLET = 'DELETE_WALLET',
  SET_WALLET_ID = 'SET_WALLET_ID',
  IS_SHOW_BALANCE = 'IS_SHOW_BALANCE',
  SET_ACTIVITIES = 'SET_ACTIVITIES',
  //CHAIN
  GET_CHAINS = 'GET_CHAINS',
  GET_CHAIN_BY_ID = 'GET_CHAIN_BY_ID',
  GET_SHOWN_CHAINS = 'GET_SHOWN_CHAINS',
  GET_TOKENS = 'GET_TOKENS',
  GET_TOKEN_BY_ID = 'GET_TOKEN_BY_ID',
  GET_SHOWN_TOKENS = 'GET_SHOWN_TOKENS',
  GET_PRICE = 'GET_PRICE',
  GET_CHAIN_NATIVE_TOKEN = 'GET_CHAIN_NATIVE_TOKEN',
  IS_SUPPORT_CHAIN = 'IS_SUPPORT_CHAIN',
  //DAPP
  SHOW_CONNECT_SHEET = 'SHOW_CONNECT_SHEET',
  SHOW_SIGN_SHEET = 'SHOW_SIGN_SHEET',
  SHOW_APPROVE_TRANSACTION_SHEET = 'SHOW_APPROVE_TRANSACTION_SHEET',
  GET_CHAIN_ID = 'GET_CHAIN_ID',
  SET_CHAIN_ID = 'SET_CHAIN_ID',
  GET_CURRENT_CHAIN = 'GET_CURRENT_CHAIN',
  GET_CURRENT_NATIVE_CHAIN_TOKEN = 'GET_CURRENT_NATIVE_CHAIN_TOKEN',
  GET_DAPPS = 'GET_DAPPS',
  GET_HISTORIES = 'GET_HISTORIES',
  ADD_HISTORY = 'ADD_HISTORY',
  CLEAR_HISTORIES = 'CLEAR_HISTORIES',
  SET_CURRENT_DAPP = 'SET_CURRENT_DAPP',
  GET_CURRENT_DAPP = 'GET_CURRENT_DAPP',
  UPDATE_CURRENT_DAPP = 'UPDATE_CURRENT_DAPP',
  //WEB3
  PERSONAL_SIGN = 'PERSONAL_SIGN',
  PERSONAL_EC_RECOVER = 'PERSONAL_EC_RECOVER',
  GET_BLOCK_NUMBER = 'GET_BLOCK_NUMBER',
  CALL_RAW = 'CALL_RAW',
  GET_BALANCE_BY_ADDRESS = 'GET_BALANCE_BY_ADDRESS',
  GET_SYMBOL_BY_ADDRESS = 'GET_SYMBOL_BY_ADDRESS',
  SEND_RAW_TRANSACTION = 'SEND_RAW_TRANSACTION',
  GET_TRANSACTION_BY_HASH = 'GET_TRANSACTION_BY_HASH',
  ESTIMATE_GAS_PRICE = 'ESTIMATE_GAS_PRICE',
  ESTIMATE_GAS_LIMIT = 'ESTIMATE_GAS_LIMIT',
  GET_NONCE = 'GET_NONCE',
  SEND_TOKEN = 'SEND_TOKEN',
  GET_TRANSACTION_RECEIPT = 'GET_TRANSACTION_RECEIPT',
  GET_EXCHANGE_RATE = 'GET_EXCHANGE_RATE',
  IS_PAUSED_ROUTER = 'IS_PAUSED_ROUTER',
  GET_ADDRESS_PAIR_IN_LP = 'GET_ADDRESS_PAIR_IN_LP',
  GET_ALLOWANCE_SWAP = 'GET_ALLOWANCE_SWAP',
  ESTIMATE_GAS_LIMIT_SWAP = 'ESTIMATE_GAS_LIMIT_SWAP',
  GET_AMOUNT_OUT_LP = 'GET_AMOUNT_OUT_LP',
  APPROVE_ALLOWANCE = 'APPROVE_ALLOWANCE',
  SWAP_ON_CHAIN = 'SWAP_ON_CHAIN',
  GET_GAS_PRICE = 'GET_GAS_PRICE',
  //UI
  SET_SHOW_BACKUP_SUCCESS = 'SET_SHOW_BACKUP_SUCCESS',
  SHOW_CREATE_WALLET_BOTTOM_SHEET = 'SHOW_CREATE_WALLET_BOTTOM_SHEET',
  SHOW_DATE_PICKER_BOTTOM_SHEET = 'SHOW_DATE_PICKER_BOTTOM_SHEET',
  SHOW_SELECT_TOKEN_BOTTOM_SHEET = 'SHOW_SELECT_TOKEN_BOTTOM_SHEET',
  SHOW_WEBVIEW_BOTTOM_SHEET = 'SHOW_WEBVIEW_BOTTOM_SHEET',
  SHOW_TOAST = 'SHOW_TOAST',
  SHOW_LOADING = 'SHOW_LOADING',
  HIDE_LOADING = 'HIDE_LOADING',
  SHOW_DIALOG = 'SHOW_DIALOG',
  HIDE_DIALOG = 'HIDE_DIALOG',
  //SETTINGS
  GET_LIST_CURRENCY = 'GET_LIST_CURRENCY',
  GET_CURRENCY = 'GET_CURRENCY',
  GET_CURRENCY_SYMBOL = 'GET_CURRENCY_SYMBOL',
  //USER
  HAS_SWAP_PAIR_TOKENS = 'HAS_SWAP_PAIR_TOKENS',
  GET_DEFAULT_SWAP_PAIR_TOKENS = 'GET_DEFAULT_SWAP_PAIR_TOKENS',
  GET_SWAP_PAIR_TOKENS = 'GET_SWAP_PAIR_TOKENS',
  SET_SWAP_PAIR_TOKENS = 'SET_SWAP_PAIR_TOKENS',
  //API
  GET_GAS_TRACKER = 'GET_GAS_TRACKER',
  GET_ESTIMATE_FEE_ROUTING = 'GET_ESTIMATE_FEE_ROUTING',
  GET_SWAP_CROSS_CHAIN_FEE = 'GET_SWAP_CROSS_CHAIN_FEE',
  GET_INFO_OF_ROUTING = 'GET_INFO_OF_ROUTING',
  //NAVIGATION
  NAVIGATE = 'NAVIGATE',
  REPLACE = 'REPLACE',
  REPLACE_STACK = 'REPLACE_STACK',
  GO_BACK = 'GO_BACK',
  OPEN_QR_CODE_SCANNER = 'OPEN_QR_CODE_SCANNER',
  REQUEST_TOKEN_ACTION = 'REQUEST_TOKEN_ACTION',
  //WALLETCONNECT
  CREATE_WC_CONNECTION = 'CREATE_WC_CONNECTION',
  GET_SESSIONS = 'GET_SESSIONS',
  GET_SESSIONS_FOR_CURRENT_WALLET = 'GET_SESSIONS_FOR_CURRENT_WALLET',
  GET_SESSION_BY_ID = 'GET_SESSION_BY_ID',
  DISCONNECT_WC_SESSION = 'DISCONNECT_WC_SESSION',
  GET_WALLET_CONNECTED_SESSIONS = 'GET_WALLET_CONNECTED_SESSIONS',
}
export enum EventType {
  //WALLET
  TOTAL_BALANCE_CHANGED = 'TOTAL_BALANCE_CHANGED',
  WALLET_LIST_CHANGED = 'WALLET_LIST_CHANGED',
  CURRENT_WALLET_CHANGED = 'CURRENT_WALLET_CHANGED',
  ACTIVITIES_CHANGED = 'ACTIVITIES_CHANGED',
  TOKEN_BALANCE_AND_PRICES_CHANGED = 'TOKEN_BALANCE_AND_PRICES_CHANGED',
  SHOW_BALANCE_CHANGED = 'SHOW_BALANCE_CHANGED',
  //CHAIN
  CHAIN_LIST_CHANGED = 'CHAIN_LIST_CHANGED',
  TOKEN_LIST_CHANGED = 'TOKEN_LIST_CHANGED',
  SHOWN_TOKENS_CHANGED = 'SHOWN_TOKENS_CHANGED',
  //DAPP
  CHAIN_ID_CHANGED = 'CHAIN_ID_CHANGED',
  CURRENT_CHAIN_CHANGED = 'CURRENT_CHAIN_CHANGED',
  DAPPS_CHANGED = 'DAPPS_CHANGED',
  HISTORIES_CHANGED = 'HISTORIES_CHANGED',
  CURRENT_DAPP_CHANGED = 'CURRENT_DAPP_CHANGED',
  //MINIAPP
  SIGNATURE_EXPIRED = 'SIGNATURE_EXPIRED',
  //SETTINGS
  CURRENCY_LIST_CHANGED = 'CURRENCY_LIST_CHANGED',
  CURRENCY_CHANGED = 'CURRENCY_CHANGED',
  CURRENCY_SYMBOL_CHANGED = 'CURRENCY_SYMBOL_CHANGED',
  //WALLETCOONECT
  SESSIONS_CHANGED = 'SESSIONS_CHANGED',
  SESSIONS_FOR_CURRENT_WALLET_CHANGED = 'SESSIONS_FOR_CURRENT_WALLET_CHANGED',
  WALLET_CONNECTED_SESSIONS_CHANGED = 'WALLET_CONNECTED_SESSIONS_CHANGED',
}
export type EventPayload = {
  appId: string;
  data?: any;
};
export type SdkEventPayload =
  | {
      data?: any;
    }
  | undefined;
export type CoreEventPayload<T = any> = {
  data: T;
  error?: ErrorCode;
};

export type CoreResponsePayload<T = any> = {
  data: T;
  reqId: string;
  error?: ErrorCode;
};

export type SendEventResponse = {
  reqId: string;
};
export type EventCallback = (
  eventType: EventType,
  payload: string | CoreEventPayload
) => void;
