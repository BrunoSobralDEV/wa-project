import { GluegunToolbox } from 'gluegun'
import { loadHierarchy } from '../utils/hierarchyLoader'
import { analyzePhrase } from '../utils/phraseAnalyzer'

module.exports = {
  name: 'analyze',
  alias: ['a'],
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, print } = toolbox
    const depth = parseInt(parameters.options.depth)
    const phrase = parameters.string
    const verbose = parameters.options.verbose || false

    if (!depth || !phrase) {
      if (!phrase) {
        print.error('Por favor, forneça uma frase.')
      }
      if (!depth) {
        print.error('Por favor, forneça a profundidade.')
      }
      return
    }

    const startTime = Date.now()
    const hierarchy = loadHierarchy('dicts/hierarchy.json')
    const loadTime = Date.now() - startTime

    const analysisTime = Date.now() - startTime - loadTime
    const result = analyzePhrase(hierarchy, phrase, depth)

    print.info(`Output: ${JSON.stringify(result, null, 2)}`)

    if (verbose) {
      print.table(
        [
          ['Tempo de carregamento dos parâmetros', `${loadTime}ms`],
          ['Tempo de verificação da frase', `${analysisTime}ms`],
        ],
        { format: 'lean' }
      )
    }
  },
}
