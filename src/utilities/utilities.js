function parseBody(body) {
  const MAX_LENGTH = 100
  const parser = new DOMParser()
  const parsedBody = parser.parseFromString(body, 'text/html')
  const p1 = parsedBody.getElementsByTagName('p').item(0).innerHTML
  return p1.slice(0, MAX_LENGTH) + (p1.length > MAX_LENGTH ? '...' : '')
}

function parseDate(number) {
  const date = new Date(number * 1000)
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}

function roundToThousand(count) {
  return count >= 1000 ? `${Math.floor(count / 1000)}k` : count
}

function adjustLabelAccordingToCount(count, label) {
  return count === 1 ? label : `${label}s`
}

function constructLabelWithCount(count, label){
  return `${roundToThousand(count)} ${adjustLabelAccordingToCount(count, label)}`
}

export {parseBody, parseDate, roundToThousand, adjustLabelAccordingToCount, constructLabelWithCount}
