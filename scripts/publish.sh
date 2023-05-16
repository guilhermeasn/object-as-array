if(yarn test) {
    yarn build:sh
    cd ./dist
    npm pack --pack-destination ..\\packs\\
    npm publish
}