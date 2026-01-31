# CodeStory AI 📚

**CodeStory** is an AI-powered documentation generator for VS Code. It automatically generates internal documentation for your code files every time you save, ensuring your project documentation is always up-to-date.

## 🚀 Features

-   **Auto-Documentation on Save**: Automatically generates documentation when you save a file.
-   **Dual AI Engines**: 
    -   **Ollama (Local)**: Runs completely offline using local models like Llama 3 (Default).
    -   **Vertex AI (Cloud)**: Connects to Google Cloud's Gemini models for high-performance generation.
-   **Structured Storage**: Saves documentation in a dedicated `CodeStory/` folder (e.g., `CodeStory/extension.md`).
-   **Smart Hashing**: Hashes your content to prevent re-generating documentation if the code hasn't changed.
-   **Configurable Detail**: Choose your preferred style:
    -   `Simple`: One-sentence summary.
    -   `Concise`: Short 2-3 sentence overview.
    -   `Explained`: Standard explanation (Default).
    -   `Detailed`: In-depth analysis with parameters and returns.
-   **Sidebar Manager**: Manage all settings (Provider, Model, Style) easily from the dedicated CodeStory sidebar.
-   **Startup Checks**: Automatically checks for Ollama installation and missing models.

## 📋 Requirements

### For Local AI (Ollama)
1.  Install [Ollama](https://ollama.com/).
2.  Pull a model (e.g., `ollama pull llama3`).
    -   *Note: The extension will prompt you to download the model if it's missing.*
3.  Ensure Ollama is running (`ollama serve`).

### For Cloud AI (Vertex AI)
1.  A Google Cloud Project with Vertex AI API enabled.
2.  Google Cloud SDK installed and authenticated locally (`gcloud auth login`).
3.  Set your Project ID in the settings.

## ⚙️ Extension Settings

This extension contributes the following settings:

| Setting | Default | Description |
| :--- | :--- | :--- |
| `codestory.provider` | `ollama` | Select AI Provider (`ollama` or `vertex`). |
| `codestory.docStyle` | `concise` | Level of detail (`simple`, `concise`, `explained`, `detailed`). |
| `codestory.ollamaModel` | `llama3` | Model name to use with Ollama. |
| `codestory.projectId` | `""` | Google Cloud Project ID (Required for Vertex AI). |

## 📦 Usage

1.  **Install** the extension.
2.  **Open** the CodeStory Sidebar (Book icon) to verify your settings.
3.  **Code** normally! When you save a supported file (`.ts`, `.js`, etc.), CodeStory will:
    -   Show a progress notification.
    -   Generate a Markdown file in `CodeStory/<filename>.md`.
4.  **Review** the generated documentation in the `CodeStory/` folder.

## 👨‍💻 About the Author

**Animesh Gupta**

I’m Animesh Gupta, a Computer Science student at IIIT Bhopal specializing in Data Science. I enjoy building practical developer tools and IDE extensions that improve workflows, reduce friction, and make working with code easier and more intuitive.

**CodeStory** was born from this passion—designed to eliminate the tedious task of writing documentation so developers can focus on what they do best: coding.

-   [GitHub Profile](https://github.com/agupta07505)
-   [LinkedIn](https://linkedin.com/in/agupta07505)

## 📝 Release Notes

### 1.0.1
-   Documentation polish.

### 1.0.0
-   **Official Launch!**
-   Support for Ollama and Vertex AI.
-   Sidebar Settings Manager.
-   Smart updates and content hashing.

---

**Enjoy coding with your AI pair documenter!**
