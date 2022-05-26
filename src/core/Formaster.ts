import {
  camelCase,
  capitalize,
  deburr,
  kebabCase,
  lowerCase,
  replace,
  snakeCase,
  startCase,
  upperCase,
} from 'lodash'

const replaceTokens = /\\\\|\/\/|[ _.,:;^&*\\\/]/g

export class Formaster {
  public toCamel(str: string) {
    return camelCase(str)
  }
  public toPascal(str: string) {
    return startCase(str).replace(/ /g, '')
  }
  public toCapital(str: string) {
    return capitalize(str)
  }
  public toKebab(str: string) {
    return kebabCase(str)
  }
  public toSnake(str: string) {
    return snakeCase(str)
  }
  public toDot(str: string) {
    return snakeCase(str).replace(/_/g, '.')
  }
  public toDotCaps(str: string) {
    return startCase(str).replace(/ /g, '.')
  }
  public toColon(str: string) {
    return snakeCase(str).replace(/_/g, ':')
  }
  public toCommas(str: string) {
    return str.replace(replaceTokens, ', ')
  }
  public toSlash(str: string) {
    return str.replace(replaceTokens, '/')
  }
  public toDoubleSlash(str: string) {
    return str.replace(replaceTokens, '//')
  }
  public toBackSlash(str: string) {
    return str.replace(replaceTokens, '\\')
  }
  public toDoubleBackSlash(str: string) {
    return str.replace(replaceTokens, '\\\\')
  }
  public toAllCaps(str: string) {
    return upperCase(str).replace(/ /g, '_')
  }
  public toLower(str: string) {
    return lowerCase(str)
  }
  public toUpper(str: string) {
    return upperCase(str)
  }
  public toDeburr(str: string) {
    return deburr(str)
  }
  public toReverse(str: string) {
    return str.split('').reverse().join('')
  }
}
