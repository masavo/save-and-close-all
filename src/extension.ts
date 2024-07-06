import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.saveAndCloseAll', () => {
		vscode.workspace.saveAll().then(() => {
			vscode.commands.executeCommand('workbench.action.closeAllEditors');
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }