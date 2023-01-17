import {sample} from "lodash"

const adjectives1 = [
  'cybernetic',
  'goth',
  'extra terrestrial'
]
const adjectives2 = [
  'masculine',
  'feminine',
  'androgenous'
]

const species = [
  'human',
  'canine',
  'feline',
  'reptile',
  'rodent',
]

const hairStyles = [
  'combover',
  'mohawk',
  'mullet',
  'updo'
]

const costumes = [
  'leather jacket',
  'overalls',
  't-shirt and jorts',
  'business suit',
  'their birthday suit'
]

const footwear = [
  'barefoot',
  'leather boots',
  'dress shoes',
  'stockings',
  'sandals'
]

const accessories = [
  'sunglasses',
  'wearable computer',
  'wrist watch',
  'papyrus scroll',
  'clipboard',
  'mallet',
  'ear rings',
  'crystal ball',
]

const noIndefiniteArticle = {
  overalls: true,
  'their birthday suit': true,
  sunglasses: true,
  barefoot: true,
  'leather boots': true,
  'dress shoes': true,
  sandals: true,
  'ear rings': true,
  stockings: true
}

const isVowel = (char: string): boolean => {
  return 'aeiou'.indexOf(char) >= 0
}

const maybeWithIndefiniteParticle = (phrase: string): string => {
  if(!noIndefiniteArticle[phrase]) {
    const leadingChar = phrase[0]
    return `${isVowel(leadingChar) ? 'an' : 'a'} ${phrase}`
  } else {
    return phrase
  }
}

export const generatePrompt = (): string => {
  return `${maybeWithIndefiniteParticle(sample(adjectives1))} ${(sample(adjectives2))} ${sample(species)} sporting ${maybeWithIndefiniteParticle(sample(hairStyles))}, ${maybeWithIndefiniteParticle(sample(costumes))} and ${maybeWithIndefiniteParticle(sample(footwear))} with ${maybeWithIndefiniteParticle(sample(accessories))}`
}

export const countPrompts = (): number => {
  return adjectives1.length * adjectives2.length * species.length * hairStyles.length * costumes.length * footwear.length * accessories.length
}
