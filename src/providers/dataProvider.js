const API = 'https://api.stackexchange.com/2.3/'
const KEY = 'wB1ehWe1pIaDqzgX2L*TpA(('
const SITE = 'stackoverflow'

async function providerBase(query) {
  const path = API + query
  try {
    const rawResponse = await fetch(path)
    return await rawResponse.json()
  } catch (e) {
    console.error(e)
  }
}

function pathBuilder(queryParams, subPath) {
  const queryString = Object.entries(queryParams)
    .map(([key, value]) => key + '=' + value)
    .join('&')
  return subPath + queryString
}

async function questionProvider(params) {
  const subPath = 'search?'
  const queryParams = {
    SITE,
    KEY,
    pagesize: 10,
    order: 'desc',
    sort: 'activity',
    filter: '!6CI807gY2Bqs)8QEOi7gznVlZa9HIaouF2mwLILbIQF_ZI(Ih5q8EaTEUME',
    ...params,
  }
  const queryString = pathBuilder(queryParams, subPath)

  return await providerBase(queryString)
}

async function userProvider(userId) {
  try {
    const [base, bronze, silver, gold, tags, posts] =
      await Promise.all([
        userBaseProvider(userId),
        userBadgeProvider(userId, 'bronze'),
        userBadgeProvider(userId, 'silver'),
        userBadgeProvider(userId, 'gold'),
        userTagProvider(userId),
        userPostProvider(userId),
      ])
    return parseUserData({base, bronze, silver, gold, tags, posts})
  } catch (e) {
    console.error(e)
  }
}

function parseUserData(responses) {
  const user = {}
  for (const [key, value] of Object.entries(responses)) {
    user[key] = value.items
  }
  return user
}

async function userBaseProvider(userId) {
  const subPath = `users/${userId}?`
  const queryParams = {
    SITE,
    KEY,
    order: 'desc',
    sort: 'reputation',
    filter: '!)67eUCPDdzHPQyxsZPE79.xuxsQs',
  }
  const queryString = pathBuilder(queryParams, subPath)

  return await providerBase(queryString)
}

async function userBadgeProvider(userId, rank) {
  const subPath = `users/${userId}/badges?`
  const queryParams = {
    SITE,
    KEY,
    order: 'desc',
    sort: 'rank',
    filter: '!mR30mn1F5G',
    min: rank,
    max: rank,
  }
  const queryString = pathBuilder(queryParams, subPath)
  return providerBase(queryString)
}

async function userTagProvider(userId) {
  const subPath = `users/${userId}/tags?`
  const queryParams = {
    SITE,
    KEY,
    order: 'desc',
    sort: 'popular',
    filter: '!T.BkwE7kN.ODeHvTYD',
  }
  const queryString = pathBuilder(queryParams, subPath)
  return providerBase(queryString)
}

async function userPostProvider(userId) {
  const subPath = `users/${userId}/posts?`
  const queryParams = {
    SITE,
    KEY,
    order: 'desc',
    sort: 'votes',
    filter: '!-KbwIc-YQJTe-HFa6)6nmBxk6Aocomxmr',
  }
  const queryString = pathBuilder(queryParams, subPath)
  return providerBase(queryString)
}

export { questionProvider, userProvider };
