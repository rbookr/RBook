#!/bin/env bash
#find ./miniRainboyLib ! -name '*.md' -type f | xargs cp -t ./.vitepress/dist/miniRainboyLib/
cp -r ./miniRainboyLib/* ./.vitepress/dist/miniRainboyLib/

function copyfile() {
    cp -r "$1" ".vitepress/dist/$1"
}

copyfile appendix/utils/compare/dp1.sh
copyfile appendix/utils/compare/dp2.sh

cp -r ./videos/videos/ ./.vitepress/dist/
copyfile videos/index.html
copyfile videos/style.css
