import * as vscode from 'vscode';

export class SettingsTreeProvider implements vscode.TreeDataProvider<SettingItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<SettingItem | undefined | null | void> = new vscode.EventEmitter<SettingItem | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<SettingItem | undefined | null | void> = this._onDidChangeTreeData.event;

    constructor() {
        vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('codestory')) {
                this.refresh();
            }
        });
    }

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: SettingItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: SettingItem): Thenable<SettingItem[]> {
        if (element) {
            return Promise.resolve([]);
        }

        const config = vscode.workspace.getConfiguration('codestory');
        const provider = config.get<string>('provider', 'vertex');
        const style = config.get<string>('docStyle', 'explained');
        const model = config.get<string>('ollamaModel', 'llama3');
        const projectId = config.get<string>('projectId', 'Not Set');

        return Promise.resolve([
            new SettingItem(
                'AI Provider',
                provider,
                vscode.TreeItemCollapsibleState.None,
                'codestory.setProvider',
                'Expected provider: vertex or ollama'
            ),
            new SettingItem(
                'Doc Style',
                style,
                vscode.TreeItemCollapsibleState.None,
                'codestory.setDocStyle',
                'Options: simple, concise, explained, detailed'
            ),
            new SettingItem(
                'Ollama Model',
                model,
                vscode.TreeItemCollapsibleState.None,
                'codestory.setOllamaModel'
            ),
            new SettingItem(
                'Vertex Project ID',
                projectId,
                vscode.TreeItemCollapsibleState.None,
                'codestory.setProjectId'
            ),
            new SettingItem(
                'About Developer',
                'Animesh Gupta',
                vscode.TreeItemCollapsibleState.None,
                'codestory.about',
                'Click for more info'
            )
        ]);
    }
}

class SettingItem extends vscode.TreeItem {
    constructor(
        public readonly label: string,
        public readonly value: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        public readonly commandId?: string,
        public readonly tooltip?: string
    ) {
        super(label, collapsibleState);
        this.description = value;
        this.tooltip = tooltip || `${label}: ${value}`;

        if (commandId) {
            this.command = {
                command: commandId,
                title: "Edit Setting",
                arguments: []
            };
        }
    }
}
