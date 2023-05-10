if(test-path ./dist) {
    rm ./dist -r -force
}

tsc --project tsconfig.json

copy package.json dist/package.json
copy README.md dist/README.md
