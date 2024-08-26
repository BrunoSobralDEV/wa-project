import { readFileSync } from 'fs'
import { HierarchyNode } from '../types'

export const loadHierarchy = (filePath: string): HierarchyNode => {
  const data = readFileSync(filePath, 'utf8')
  return JSON.parse(data) as HierarchyNode
}
