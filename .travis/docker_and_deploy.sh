#!/bin/bash

if [ "${TRAVIS_BRANCH}" = "master" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    echo "*** Building Docker Containers ***"
    docker build -f docker/Dockerfile -t fischettij/pepitabot .

    echo "*** Pushing Docker Containers ***"
    echo "$DOCKER_TOKEN" docker login --username fischettij --password-stdin
    docker push fischettij/pepitabot:latest

else
    echo "Not deploying, since this branch isn't master or it's a Pull Request."
fi
