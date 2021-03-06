# Fetch repo tags from git.
git config --replace-all remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
git fetch --tags

# Publish the new version tags to git.
npx semantic-release
