if (yarn test); then

    yarn build:sh
    cd ./dist
    npm pack --pack-destination ..\\packs\\
    npm publish

else

    echo 'Build aborted because tests failed.'
    exit 1;

fi