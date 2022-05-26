import * as assert from 'assert'

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode'
import { Formaster } from '../../core/Formaster'
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.')

  test('Formaster core', () => {
		const formaster = new Formaster()
    assert.strictEqual(formaster.toCamel('Formaster to camel case'), 'formasterToCamelCase')
    assert.strictEqual(formaster.toPascal('Formaster to pascal case'), 'FormasterToPascalCase')
    assert.strictEqual(formaster.toCapital('Formaster to Capital case'), 'Formaster to capital case')
    assert.strictEqual(formaster.toKebab('Formaster to kebab case'), 'formaster-to-kebab-case')
    assert.strictEqual(formaster.toSnake('Formaster to snake case'), 'formaster_to_snake_case')
    assert.strictEqual(formaster.toDot('Formaster to dot case'), 'formaster.to.dot.case')
    assert.strictEqual(formaster.toDotCaps('Formaster to dot caps case'), 'Formaster.To.Dot.Caps.Case')
    assert.strictEqual(formaster.toColon('Formaster to colon case'), 'formaster:to:colon:case')
    assert.strictEqual(formaster.toCommas('Formaster to commas case'), 'Formaster, to, commas, case')
    assert.strictEqual(formaster.toSlash('Formaster to slash case'), 'Formaster/to/slash/case')
    assert.strictEqual(formaster.toDoubleSlash('Formaster to double slash case'), 'Formaster//to//double//slash//case')
		assert.strictEqual(formaster.toBackSlash('Formaster to back slash case'), 'Formaster\\to\\back\\slash\\case')
    assert.strictEqual(formaster.toDoubleBackSlash('Formaster to double back slash case'), 'Formaster\\\\to\\\\double\\\\back\\\\slash\\\\case')
    assert.strictEqual(formaster.toAllCaps('Formaster to all caps case'), 'FORMASTER_TO_ALL_CAPS_CASE')
    assert.strictEqual(formaster.toLower('Formaster to lower case'), 'formaster to lower case')
    assert.strictEqual(formaster.toUpper('Formaster to upper case'), 'FORMASTER TO UPPER CASE')
    assert.strictEqual(formaster.toDeburr('Formaster déjà vu to deburr case'), 'Formaster deja vu to deburr case')
    assert.strictEqual(formaster.toReverse('Formaster to reverse case'), 'esac esrever ot retsamroF')
  })
})
