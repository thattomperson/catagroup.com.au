#! /bin/bash

rm -rf public || true
git worktree prune

git fetch --prune --all
git worktree add public origin/gh-pages

(
    cd public;
    rm -rf *;
)

hugo --minify

echo "cata.ttp.sh" > public/CNAME

(
    cd public;
    git add -A 
    git commit -m "Deploy cata.ttp.sh to github.com/thattomperson/catagroup.com.au.git:gh-pages"
    git push origin HEAD:gh-pages
)