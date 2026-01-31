# How to Publish CodeStory to the VS Code Marketplace

Follow these steps to share your extension with the world!

## 1. Install the CLI Tool
You need `vsce` (Visual Studio Code Extensions) to package and publish.
```bash
npm install -g @vscode/vsce
```

## 2. Create a Publisher
1.  Go to the [VS Code Marketplace Management Page](https://marketplace.visualstudio.com/manage).
2.  Log in with your Microsoft account (GitHub/Outlook).
3.  Click **"Create Publisher"**.
4.  **Name**: `agupta07505` (Must match the `publisher` in your `package.json`).
5.  **ID**: `agupta07505` (This is unique).

## 3. Get a Personal Access Token (PAT) (Optional)
**Skip this step** if you prefer to upload manually via the website (easier).
This step is only required if you want to publish using the command line (`vsce publish`).

1.  Go to [Azure DevOps](https://dev.azure.com/).
2.  Create a new Organization (if you don't have one).
3.  Click the **User Settings** icon (top right, near profile) -> **Personal Access Tokens**.
4.  Click **"+ New Token"**.
    -   **Name**: `CodeStory Publish`.
    -   **Organization**: "All accessible organizations".
    -   **Scopes**: Select **"Custom defined"**.
    -   Scroll to **Marketplace** and check **"Acquire"** and **"Manage"**.
5.  **Copy the token**. You won't see it again!

## 4. Login and Publish

### Option A: Command Line (Recommended)
1.  Open your terminal in the `CodeStoryAntiGravity` folder.
2.  Login with your publisher ID:
    ```bash
    vsce login agupta07505
    ```
    (Paste your PAT when asked).
3.  Publish!
    ```bash
    vsce publish
    ```

### Option B: Web Upload
1.  Package your extension into a file:
    ```bash
    vsce package
    ```
    This creates `codestory-ai-1.0.1.vsix` in your folder.
2.  Go back to the [Marketplace Management Page](https://marketplace.visualstudio.com/manage).
3.  Select your publisher.
4.  Click **"New Extension"** -> **"Visual Studio Code"**.
5.  Upload the `.vsix` file.

## 5. Publishing to GitHub

You should upload your **Source Code** to GitHub so others can contribute.

### What to Upload to GitHub?
-   ✅ `src/` (The code)
-   ✅ `package.json` (The manifest)
-   ✅ `README.md` (The documentation)
-   ✅ `icon.png` (The logo)
-   ✅ `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`
-   ✅ `tsconfig.json`
-   ❌ **DO NOT Upload**: `node_modules/`, `out/`, `*.vsix` (These are ignored by `.gitignore`).

### Steps to Upload

1.  **Initialize Git**:
    ```bash
    git init
    ```
2.  **Add Files**:
    ```bash
    git add .
    ```
3.  **Commit**:
    ```bash
    git commit -m "Initial commit of CodeStory"
    ```
4.  **Create Repo on GitHub**:
    -   Go to [GitHub.com](https://github.com/new).
    -   Repository name: `CodeStory`.
    -   **Important**: Do NOT check "Add README", "Add .gitignore", or "Add License" (you already have them).
    -   Click **Create repository**.
5.  **Link and Push**:
    -   Copy the commands under "…or push an existing repository from the command line".
    -   Example:
        ```bash
        git remote add origin https://github.com/agupta07505/CodeStory.git
        git branch -M main
        git push -u origin main
        ```

## Summary: GitHub vs Marketplace

| Platform | What goes there? | Purpose |
| :--- | :--- | :--- |
| **GitHub** | **Source Code** (`.ts` files, config) | For developers to read code, contribute, and report bugs. |
| **Marketplace** | **Compiled Extension** (`.vsix`) | For users to download and install the extension in VS Code. |

## Checklist Before Publishing
- [x] `package.json` has correct `publisher` ("agupta07505").
- [x] `README.md` is professional and helpful.
- [x] License is set to MIT.
- [x] `repository` field points to your GitHub.
- [x] `.gitignore` exists (to exclude node_modules).
- [ ] You have verified the extension works (`npm run compile` passes).

## ⚠️ Common Issues
-   **Icon Error**: If it complains about a missing icon file, ensure `icon.png` is in the root.
-   **Security**: Ensure `node_modules` is not huge. `vsce` handles bundling, but `npm ci` is recommended.

**Congratulations on your first extension! 🚀**
