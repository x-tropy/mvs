export function getQueries(s) {
  if (typeof s !== 'string') return []
  return s.trim().toLowerCase().split(' ').filter(el => el !== '')
}

export function splitCamelCase(s) {
  if (typeof s !== 'string') return []
  return s.match(/[A-Z][a-z]*|\d+/g).map(word => word.toLowerCase());
}

function stripWildChar(s) {
  return s.replace(/[!_]/g, '')
}

// search 'CamelCasedWords' with '!query _query query_'
export function filterCamelCase(items, queries) {
  return items.filter(item => {
    const words = splitCamelCase(item)
    const flatName = item.toLowerCase()

    const shouldExclude = queries.some(query => {
      const cleanQuery = stripWildChar(query)
      if (query[0] === '!' && flatName.includes(cleanQuery)) {
        return true
      } else {
        return false
      }
    })
    if (shouldExclude) return false

    const shouldInclude = queries.some(query => {
      // preliminary condition should pass first
      const cleanQuery = stripWildChar(query)
      if (!flatName.includes(cleanQuery)) return false

      if (query.at(0) === '_' && query.at(-1) === '_') {
        return words.some(word => word === cleanQuery)
      } else if (query.at(0) === '_') {
        return words.some(word => word.startsWith(cleanQuery))
      } else if (query.at(-1) === '_') {
        return words.some(word => word.endsWith(cleanQuery))
      }
      return true
    })
    return shouldInclude
  })
}
