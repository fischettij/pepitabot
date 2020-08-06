#!/bin/bash

if [ "${TRAVIS_BRANCH}" = "master" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    echo "*** Set Up ssh keys ***"
    pushd .travis
    openssl aes-256-cbc -K $encrypted_1da259efee69_key -iv $encrypted_1da259efee69_iv -in key_pepitabot.enc -out key_pepitabot -d
    rm key_pepitabot.enc
    chmod 600 key_pepitabot
    mv key_pepitabot ~/.ssh/id_rsa
    popd
else
    echo "Not setting ssh keys, since this branch isn't master or it's a Pull Request."
fi