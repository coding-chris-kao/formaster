// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { Formaster } from './core/Formaster'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('The extension "formaster" is now active!')

  const formaster = new Formaster()
  const methods = Object.getOwnPropertyNames(
    Object.getPrototypeOf(formaster)
  ).filter((p) => p !== 'constructor')

  for (let method of methods) {
    const command = vscode.commands.registerTextEditorCommand(
      `formaster.${method}`,
      function (editor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
        if (!editor) {
          return
        }

        const document = editor.document

        editor.edit((editBuilder) => {
          // Replace when no selection but the cursor is on some text
          const token = document.getText(editor.selection)
          if (token === '') {
            const cursorPosition = editor.selection.start
            const wordRange = document.getWordRangeAtPosition(cursorPosition)
            if (wordRange === undefined) {
              return
            }
            const textCursorOn = document.getText(wordRange)
            editBuilder.replace(
              wordRange,
              (<any>formaster)[method](textCursorOn)
            )
            return
          }

          // Replace multiple lines
          for (let selection of editor.selections) {
            const token = document.getText(selection)
            editBuilder.replace(selection, (<any>formaster)[method](token))
          }
        })
      }
    )
    context.subscriptions.push(command)
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}
