const KEY = 'wB1ehWe1pIaDqzgX2L*TpA(('
const SITE = 'stackoverflow'

const QUESTION_PROVIDER_CONFIG = {
  SITE,
  KEY,
  pagesize: 10,
  order: 'desc',
  sort: 'activity',
  filter: '!6CI807gY2Bqs)8QEOi7gznVlZa9HIaouF2mwLILbIQF_ZI(Ih5q8EaTEUME',
}

const USER_BASE_PROVIDER_CONFIG = {
  SITE,
  KEY,
  order: 'desc',
  sort: 'reputation',
  filter: '!)67eUCPDdzHPQyxsZPE79.xuxsQs',
}

const BADGE_PROVIDER_CONFIG = {
  SITE,
  KEY,
  order: 'desc',
  sort: 'rank',
  filter: '!mR30mn1F5G',
}

const TAG_PROVIDER_CONFIG = {
  SITE,
  KEY,
  order: 'desc',
  sort: 'popular',
  filter: '!T.BkwE7kN.ODeHvTYD',
}

const POST_PROVIDER_CONFIG = {
  SITE,
  KEY,
  order: 'desc',
  sort: 'votes',
  filter: '!-KbwIc-YQJTe-HFa6)6nmBxk6Aocomxmr',
}

const USER_PROVIDER_CONFIG = {
  USER_BASE_PROVIDER_CONFIG,
  BADGE_PROVIDER_CONFIG,
  TAG_PROVIDER_CONFIG,
  POST_PROVIDER_CONFIG,
}

export {USER_PROVIDER_CONFIG, QUESTION_PROVIDER_CONFIG}
