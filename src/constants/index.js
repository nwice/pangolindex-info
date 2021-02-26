export const WAVAX_ADDRESS = '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'

//export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const FACTORY_ADDRESS = '0xefa94DE7a4656D787667C749f7E1223D71E9FD88'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://raw.githubusercontent.com/pangolindex/tokenlists/main/aeb.tokenlist.json',
  'https://raw.githubusercontent.com/pangolindex/tokenlists/main/top15.tokenlist.json'
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76'
]

export const TOKEN_REWARDED = [
  '0x1acf1583bebdca21c8025e172d8e8f2817343d65', // ETH
  '0xbbc7fff833d27264aac8806389e02f717a5506c9', // LINK
  '0x9ee0a4e21bd333a6bb2ab298194320b8daa26516', // USDT
  '0x7a6131110b82dacbb5872c7d352bfe071ea6a17c', // BTC
  '0x17a2e8275792b4616befb02eb9ae699aa0dcb94b', // DAI
  '0xd7538cabbf8605bde1f4901b47b8d42c61de0367', // PNG
  '0xd8b262c0676e13100b33590f10564b46eef652ad', // SUSHI
  '0x5f233a14e1315955f48c5750083d9a44b0df8b50', // AAVE
  '0x92dc558cb9f8d0473391283ead77b79b416877ca', // UNI
  '0x7a886b5b2f24ed0ec0b3c4a17b930e16d160bd17', // YFI

  '0x53b37b9a6631c462d74d65d61e1c056ea9daa637', // ETH-PNG
  '0xe8acf438b10a2c09f80aef3ef2858f8e758c98f9', // USDT-PNG
  '0xf372ceae6b2f4a2c4a6c0550044a7eab914405ea', // BTC-PNG
  '0x874685bc6794c8b4befbd037147c2eef990761a9', // UNI-PNG
  '0xd765b31399985f411a9667330764f62153b42c76', // DAI-PNG
  '0xa465e953f9f2a00b2c1c5805560207b66a570093', // YFI-PNG
  '0x7313835802c6e8ca2a6327e6478747b71440f7a4', // LINK-PNG
  '0xf105fb50fc6ddd8a857bbecd296c8a630e8ca857', // SUSHI-PNG
  '0x0025cebd8289bbe0a51a5c85464da68cbc2ec0c4', // AAVE-PNG
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5',
  '0x97cb8cbe91227ba87fc21aaf52c4212d245da3f8',
  '0x27eef94e479cb4774b050530cfc45e4a6ccc7e5f', // JOY
  '0x795ab2504c01426a31c8bd9f58c024dba86ba80a', // zUSDC
  '0x18c8e1346d26824063706242adb391ddb16c293e', // SFI
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or ETH pairings.'
