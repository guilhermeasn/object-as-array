yarn test

if($LASTEXITCODE -eq 0) {
    
    yarn build:ps
    Set-Location ./dist
    npm pack --pack-destination ..\\packs\\
    npm publish

} else {

    Write-Output 'Build aborted because tests failed.'
    exit 1;

}