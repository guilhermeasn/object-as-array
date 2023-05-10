rm -rf ./dist

yarn tsc --project tsconfig.json

cp ./package.json ./dist/package.json
cp ./README.md ./dist/README.md
cp ./LICENSE ./dist/LICENSE
