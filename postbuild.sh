#!/bin/env bash
find ./miniRainboyLib ! -name '*.md' -type f | xargs cp -t ./.vitepress/dist/miniRainboyLib/
