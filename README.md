<div align="center">
  <img src="https://raw.githubusercontent.com/agupta07505/CodeStory-AI/refs/heads/main/icon.png" alt="CodeStory AI Logo" width="200">
  <h1>CodeStory AI 📚</h1>
  <p><strong>AI-powered documentation generator for VS Code that keeps your project documentation always up-to-date.</strong></p>
  <p>
    <a href="https://marketplace.visualstudio.com/items?itemName=agupta07505.codestory-ai">
      <img src="https://img.shields.io/visual-studio-marketplace/v/agupta07505.codestory-ai.svg?color=blue&label=VS%20Code%20Marketplace" alt="VS Code Marketplace">
    </a>
    <a href="https://github.com/agupta07505/CodeStory-AI/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/agupta07505/CodeStory-AI.svg?color=brightgreen" alt="License">
    </a>
  </p>
</div>

**CodeStory** is an intelligent VS Code extension that automates the creation of internal documentation for your code. It seamlessly generates documentation every time you save, ensuring your project's knowledge base is always current.

## TOC
- [TOC](#toc)
- [🚀 Features](#-features)
- [📋 Requirements](#-requirements)
  - [For Local AI (Ollama)](#for-local-ai-ollama)
  - [For Cloud AI (Vertex AI)](#for-cloud-ai-vertex-ai)
- [⚙️ Extension Settings](#️-extension-settings)
- [📦 Usage](#-usage)
- [👨‍💻 About the Author](#-about-the-author)
- [📝 Release Notes](#-release-notes)
  - [1.1.0](#110)
  - [1.0.3](#103)
  - [1.0.2](#102)
  - [1.0.1](#101)
  - [1.0.0](#100)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🚀 Features

-   **✍️ Auto-Documentation on Save**: Automatically generates documentation when you save a file.
-   **Dual AI Engines**: 
    -   **Ollama (Local)**: Runs completely offline using local models like Llama 3 (Default).
    -   **Vertex AI (Cloud)**: Connects to Google Cloud's Gemini models for high-performance generation.
-   **🗂️ Structured Storage**: Saves documentation in a dedicated `CodeStory/` folder (e.g., `CodeStory/extension.md`).
-   **🧠 Smart Hashing**: Hashes your content to prevent re-generating documentation if the code hasn't changed.
-   **🎨 Configurable Detail**: Choose your preferred style:
    -   `Simple`: One-sentence summary.
    -   `Concise`: Short 2-3 sentence overview.
    -   `Explained`: Standard explanation (Default).
    -   `Detailed`: In-depth analysis with parameters and returns.
-   **⚙️ Sidebar Manager**: Manage all settings (Provider, Model, Style) easily from the dedicated CodeStory sidebar.
-   **🤖 Startup Checks**: Automatically checks for Ollama installation and missing models.

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

1.  **Install** the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=agupta07505.codestory-ai).
2.  **Open** the CodeStory Sidebar (Book icon) to verify your settings.
3.  **Code** normally! When you save a supported file (`.ts`, `.js`, etc.), CodeStory will:
    -   Show a progress notification.
    -   Generate a Markdown file in `CodeStory/<filename>.md`.
4.  **Review** the generated documentation in the `CodeStory/` folder.

## 👨‍💻 About the Author

**agupta07505**

I’m agupta07505, a Computer Science student at IIIT Bhopal specializing in Data Science. I enjoy building practical developer tools and IDE extensions that improve workflows, reduce friction, and make working with code easier and more intuitive.

**CodeStory** was born from this passion—designed to eliminate the tedious task of writing documentation so developers can focus on what they do best: coding.

-   [GitHub Profile](https://github.com/agupta07505)
-   [LinkedIn](https://linkedin.com/in/agupta07505)
-   [Instagram](https://instagram.com/agupta07505)

## 📝 Release Notes

### 1.1.0
-   Added **Enable/Disable Extension** toggle in Sidebar Settings.
-   Improved startup checks.

### 1.0.3
- Documentation improvements and minor bug fixes.

### 1.0.2
-   Marketplace name update to "CodeStory AI". & github repo update to "CodeStory-AI".

### 1.0.1
-   Documentation polish.

### 1.0.0
-   **Official Launch!**
-   Support for Ollama and Vertex AI.
-   Sidebar Settings Manager.
-   Smart updates and content hashing.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Enjoy coding with your AI pair documenter!**