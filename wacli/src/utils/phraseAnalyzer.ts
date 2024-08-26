// 2. Função para encontrar as palavras na profundidade especificada
const findHierarchyAtDepth = (hierarchy, targetDepth, currentDepth = 0) => {
  if (currentDepth === targetDepth) {
    return hierarchy
  }

  const result = {}

  for (const key in hierarchy) {
    if (typeof hierarchy[key] === 'object' && !Array.isArray(hierarchy[key])) {
      const subResult = findHierarchyAtDepth(
        hierarchy[key],
        targetDepth,
        currentDepth + 1
      )
      if (
        Object.keys(subResult).length > 0 ||
        currentDepth + 1 === targetDepth
      ) {
        result[key] = subResult
      }
    }
  }

  return result
}

export const analyzePhrase = (hierarchy, phrase, depth) => {
  const hierarchyAtDepth = findHierarchyAtDepth(hierarchy, depth)
  console.log(hierarchyAtDepth)

  const wordCounts = {}

  const searchInCategory = (category, words) => {
    if (Array.isArray(words)) {
      words.forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi')
        const matches = phrase.match(regex)

        if (matches) {
          wordCounts[category] = (wordCounts[category] || 0) + matches.length
        }
      })
    } else if (typeof words === 'object') {
      Object.entries(words).forEach(([subCategory, subWords]) => {
        searchInCategory(subCategory, subWords)
      })
    }
  }

  // Process categories at the given depth
  Object.entries(hierarchyAtDepth).forEach(([category, subcategories]) => {
    searchInCategory(category, subcategories)
  })

  return wordCounts
}

// import { HierarchyNode } from '../types'
// type AnimalObject = {
//   [key: string]: string[] | AnimalObject
// }
// Function to search the object and look for words, with depth control
// export function searchInPhrase(
//   obj: AnimalObject,
//   phrase: string,
//   depth: number
// ): number | boolean {
//   // Split the phrase into words and convert to lowercase, trimming spaces
//   const words: string[] = phrase.toLowerCase().split(' ')

//   // Recursive function to traverse the object
//   function traverseObject(
//     obj: AnimalObject,
//     words: string[],
//     currentLevel: number
//   ): boolean {
//     if (currentLevel > depth) return false // Limit the depth

//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         const value = obj[key]

//         // Check if the value is an array
//         if (Array.isArray(value)) {
//           const lowercasedArray = value.map((v) => v.toLowerCase().trim())

//           words.forEach((word) => {
//             if (lowercasedArray.includes(word)) {
//               console.log(`Found "${word}" in ${key}, in ${depth}`)
//               return true
//             }
//           })
//         } else if (typeof value === 'object' && value !== null) {
//           // If it's an object, call the function recursively
//           const found = traverseObject(
//             value as AnimalObject,
//             words,
//             currentLevel + 1
//           )
//           if (found) {
//             return true
//           }
//         }
//       }
//     }
//     return false // Return false if nothing was found at this level
//   }

//   // Start searching from level 0
//   const result = traverseObject(obj, words, 0)
//   return result ? true : 0
// }

// type AnalysisResult = { category: string; count: number }[]

// export const analyzePhrase = (
// hierarchy: HierarchyNode,
// phrase: string,
// depth: number
// ): AnalysisResult => {
//   const words = phrase
//     .replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '') // Remove caracteres especiais, mantendo letras e espaços
//     .toLowerCase()
//     .split(' ') // Divide a frase em palavras
//   // .split(/\s+/) // Divide a frase em palavras

//   const result: AnalysisResult = []

//   const traverseHierarchy = (
//     node: HierarchyNode | string[],
//     currentDepth: number
//   ): boolean => {
//     if (Array.isArray(node) && currentDepth === depth) {
//       for (const word of words) {
//         const normalizedNode = node.map((term) => term.toLowerCase()) // Normaliza o nó
//         if (normalizedNode.includes(word)) {
//           console.log('achou', word)
//           result.push({ category: word, count: 1 })
//         }
//       }
//       return true
//     }

//     if (typeof node === 'object') {
//       for (const key in node) {
//         if (traverseHierarchy(node[key], currentDepth + 1)) {
//           console.log('achou key', key)
//           result.push({ category: key, count: 1 })
//         }
//       }
//     }

//     return false
//   }

//   traverseHierarchy(hierarchy, 1)
//   return result
// }
