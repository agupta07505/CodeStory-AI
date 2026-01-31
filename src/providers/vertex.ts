import axios from 'axios';
import * as vscode from 'vscode';
import { AIProvider } from './base';

export class VertexProvider implements AIProvider {
    private projectId: string;

    constructor() {
        const config = vscode.workspace.getConfiguration('codestory');
        this.projectId = config.get<string>('projectId', '');
    }

    async generate(code: string): Promise<string> {
        if (!this.projectId) {
            vscode.window.showErrorMessage('CodeStory: Vertex AI Project ID is missing in settings.');
            throw new Error('Missing Project ID');
        }

        try {
            const session = await vscode.authentication.getSession('google', ['https://www.googleapis.com/auth/cloud-platform'], { createIfNone: true });
            const accessToken = session.accessToken;

            // Using Gemini 1.5 Flash as requested
            // Endpoint format: https://us-central1-aiplatform.googleapis.com/v1/projects/{PROJECT_ID}/locations/us-central1/publishers/google/models/gemini-1.5-flash:generateContent
            const url = `https://us-central1-aiplatform.googleapis.com/v1/projects/${this.projectId}/locations/us-central1/publishers/google/models/gemini-1.5-flash:generateContent`;

            const config = vscode.workspace.getConfiguration('codestory');
            const style = config.get<string>('docStyle', 'explained');
            let prompt = "Write docs for: " + code;

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

            const response = await axios.post(
                url,
                {
                    contents: [{
                        role: 'user',
                        parts: [{ text: prompt }]
                    }]
                },
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            // Accessing the response structure for Gemini API
            if (response.data.candidates && response.data.candidates.length > 0 && response.data.candidates[0].content && response.data.candidates[0].content.parts && response.data.candidates[0].content.parts.length > 0) {
                return response.data.candidates[0].content.parts[0].text;
            } else {
                return "No content generated.";
            }

        } catch (error: any) {
            const msg = error.response ? JSON.stringify(error.response.data) : error.message;
            vscode.window.showErrorMessage(`Vertex AI Error: ${msg}`);
            throw error;
        }
    }
}
