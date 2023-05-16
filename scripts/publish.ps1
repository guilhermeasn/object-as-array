if(yarn test) {
    yarn build:ps
    Set-Location ./dist
    npm pack --pack-destination ..\\packs\\
    npm publish
}