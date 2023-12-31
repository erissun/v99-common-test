export enum ErrorCode {
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  INVALID_APP_ID = 'INVALID_APP_ID',
  INVALID_APP_SECRET = 'INVALID_APP_SECRET',
  INVALID_EVENT_TYPE = 'INVALID_EVENT_TYPE',
  INVALID_PERMISSION = 'INVALID_PERMISSION',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  CREATE_WALLET_FAILED = 'CREATE_WALLET_FAILED',
  IMPORT_WALLET_FAILED = 'IMPORT_WALLET_FAILED',
  GET_WALLETS_FAILED = 'GET_WALLETS_FAILED',
  GENERATE_MNEMONIC_FAILED = 'GENERATE_MNEMONIC_FAILED',
  WALLET_NOT_FOUND = 'WALLET_NOT_FOUND',
  WALLET_ALREADY_EXISTS = 'WALLET_ALREADY_EXISTS',
  ENCRYPTION_ERROR = 'ENCRYPTION_ERROR',
  DECRYPTION_ERROR = 'DECRYPTION_ERROR',
  MISSING_PARAMETERS = 'MISSING_PARAMETERS',
  NAVIGATION_NOT_READY = 'NAVIGATION_NOT_READY',
}
