import * as vscode from 'vscode';
import { AIProvider } from './providers/base';
import { VertexProvider } from './providers/vertex';
import { OllamaProvider } from './providers/ollama';

export function getAIProvider(): AIProvider {
    const config = vscode.workspace.getConfiguration('codestory');
    const providerType = config.get<string>('provider', 'vertex');

    if (providerType === 'ollama') {
        return new OllamaProvider();
    }

    // Default to Vertex
    return new VertexProvider();
}
