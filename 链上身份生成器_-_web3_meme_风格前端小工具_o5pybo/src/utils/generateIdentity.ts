/**
 * Random identity generator for the Web3 meme tool.
 * No external dependencies – pure JS arrays and Math.random().
 */
export interface Identity {
  title: string
  description: string
  faction: string
  tags: string[]
  address: string
}

const titles = [
  'DeFi 游牧民',
  '空投猎人',
  '链上诗人',
  'Gas 费贡献者',
  '闪电交易者',
  '区块链忍者',
  '智能合约牧师',
  '去中心化狂人',
  '链上笑星',
  '加密狂欢者',
]

const descriptions = [
  '总是把“去中心化”当成生活方式，',
  '把“闪电”当成日常，',
  '把“空投”当成早餐，',
  '把“Gas”当成咖啡因，',
  '把“链上”当成跑道，',
  '把“合约”当成乐谱，',
  '把“钱包”当成口袋，',
  '把“节点”当成家，',
  '把“区块”当成日记，',
  '把“哈希”当成密码，',
]

const factions = [
  'ETH 原教旨',
  'Solana 冲浪者',
  'L2 游击队',
  'Polygon 先锋',
  'Avalanche 探险家',
  'Cosmos 旅人',
  'Arbitrum 先驱',
  'Optimism 追随者',
  'Binance Smart Chain 斗士',
  'Fantom 追风者',
]

const tags = [
  '爱追热点',
  '总在高点进场',
  '凌晨三点盯盘',
  '永不止步',
  '热衷闪电贷',
  '追求无手续费',
  '热爱链上艺术',
  '热衷 NFT',
  '热衷 DeFi',
  '热衷 DAO',
]

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generateIdentity(address: string): Identity {
  const tagCount = Math.floor(Math.random() * 2) + 2 // 2-3 tags
  const selectedTags = Array.from({ length: tagCount }, () => pick(tags))

  return {
    address,
    title: pick(titles),
    description: pick(descriptions) + ' 这就是你！',
    faction: pick(factions),
    tags: selectedTags,
  }
}
