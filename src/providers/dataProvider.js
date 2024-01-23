const API = 'https://api.stackexchange.com/2.3/'

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
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
  return subPath + queryString
}

async function questionProvider(params, config) {
  const subPath = 'search?'
  const queryParams = {...config, ...params}

  const queryString = pathBuilder(queryParams, subPath)
  return await providerBase(queryString)
}

async function userProvider(userId, config) {

  try {
    const [base, bronze, silver, gold, tags, posts] = await Promise.all([
      userBaseProvider(userId, config.USER_BASE_PROVIDER_CONFIG),
      userBadgeProvider(userId, 'bronze', config.BADGE_PROVIDER_CONFIG),
      userBadgeProvider(userId, 'silver', config.BADGE_PROVIDER_CONFIG),
      userBadgeProvider(userId, 'gold', config.BADGE_PROVIDER_CONFIG),
      userTagProvider(userId, config.TAG_PROVIDER_CONFIG),
      userPostProvider(userId, config.POST_PROVIDER_CONFIG),
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
  console.log(user)
  return user
}

async function userBaseProvider(userId, config) {
  const subPath = `users/${userId}?`
  const queryString = pathBuilder(config, subPath)

  return await providerBase(queryString)
}

async function userBadgeProvider(userId, rank, config) {
  const subPath = `users/${userId}/badges?`
  const queryParams = {
    ...config,
    min: rank,
    max: rank,
  }

  const queryString = pathBuilder(queryParams, subPath)
  return providerBase(queryString)
}

async function userTagProvider(userId, config) {
  const subPath = `users/${userId}/tags?`

  const queryString = pathBuilder(config, subPath)
  return providerBase(queryString)
}

async function userPostProvider(userId, config) {
  const subPath = `users/${userId}/posts?`

  const queryString = pathBuilder(config, subPath)
  return providerBase(queryString)
}

export {questionProvider, userProvider}
