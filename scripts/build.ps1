if(test-path ./dist) {
    Remove-Item ./dist -r -force
}

yarn tsc --project tsconfig.json

Copy-Item ./package.json ./dist/package.json
Copy-Item ./README.md ./dist/README.md
Copy-Item ./LICENSE ./dist/LICENSE
