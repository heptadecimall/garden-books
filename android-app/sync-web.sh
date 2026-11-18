#!/usr/bin/env bash
# Copy the web app (repo root) into the Android project and sync Capacitor.
set -e
cd "$(dirname "$0")"
rm -rf www && mkdir www
cp -r ../index.html ../manifest.webmanifest ../sw.js ../icons ../fonts www/
npx cap sync android
