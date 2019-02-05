#!/usr/bin/env bash

function notify {
  BLUE='\033[1;34m'
  NC='\033[0m'
  echo -e "${BLUE}$1${NC}"
}

set -e
set -o pipefail

notify "Setting up node to match the correct version"
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
nvm use

notify "Cleaning the project"
git clean -dfx
npm i

notify "Getting latest develop"
git fetch --all
git checkout develop
git reset --hard origin/develop

notify "Getting latest master"
git checkout master
git reset --hard origin/master

notify "Merging develop into master"
git merge develop

notify "Building fresh toolkit build"
npm i
lerna bootstrap

echo "The next stages of the release are irreversible"
read -p "Do you want to continue? Press ENTER to continue or CTRL+C to exit" -n 1 -r

if [[ $REPLY = "" ]]; then
  notify "Starting lerna"
  lerna publish --no-push
  git push

  notify "Merging master back into develop"
  git checkout develop
  git merge master
  git push
fi
