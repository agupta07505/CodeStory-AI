import axios from 'axios';
import * as vscode from 'vscode';
import { AIProvider } from './base';

export class OllamaProvider implements AIProvider {
    private model: string;

    constructor() {
        const config = vscode.workspace.getConfiguration('codestory');
        this.model = config.get<string>('ollamaModel', 'llama3');
    }

    async generate(code: string): Promise<string> {
        try {
            console.log(`CodeStory: Sending request to Ollama with model ${this.model}...`);

            const config = vscode.workspace.getConfiguration('codestory');
            const style = config.get<string>('docStyle', 'explained');

            let prompt = "Write internal documentation for the following code:\n\n" + code;

            switch (style) {
                case 'simple':
                    prompt = "Write a very short, one-sentence summary of what this code does:\n\n" + code;
                    break;
                case 'concise':
                    prompt = "Summarize the purpose of this code in 2-3 sentences. Do not list every function. Be extremely concise:\n\n" + code;
                    break;
                case 'detailed':
                    prompt = "Write detailed documentation for the following code, including parameters, return types, and complex logic explanation:\n\n" + code;
                    break;
                case 'explained':
                default:
                    prompt = "Write standard documentation for the code. Explain the main purpose and key functions briefly:\n\n" + code;
                    break;
            }

            const response = await axios.post('http://127.0.0.1:11434/api/generate', {
                model: this.model,
                prompt: prompt,
                stream: false
            }, {
                timeout: 0 // No timeout (wait indefinitely for slow local inference)
            });

            console.log('CodeStory: Ollama Response:', response.data);

            if (!response.data || !response.data.response) {
                throw new Error('Empty response from Ollama. Ensure model is loaded.');
            }

            return response.data.response;
        } catch (error: any) {
            const msg = error.response?.data?.error || error.message;
            console.error('CodeStory: Ollama Error:', msg);
            vscode.window.showErrorMessage(`Ollama Connection Failed: ${msg}`);
            throw error;
        }
    }
}
