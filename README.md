# Install node
- Install: [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)
- Powershell - Node Version Switcher: `nvs`
    - Install: `choco install nvs`
    - Install a Node version: `nvs add latest`
- Bash - Node Version Manager: `vnm`
    - Install: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`
    - Install a Node version: `nvm install <version>`
    - Use a version: `nvm use <version>`

# Usage
- Initialize package.json: `npm init`
- Install dependencies (from existing package.json): `npm install`
- Install a [package](https://www.npmjs.com/) in project (package.json): `npm i <package>`
- Install a [package](https://www.npmjs.com/) globally: `npm i -g <package>`
- repl (read-eval-print-loop): node 
- Run JavaScript in the terminal: `node <filename>.js` or `node .` (automatically finds index.js)