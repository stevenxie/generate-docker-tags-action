export const getPullRequestTags = (): string[] => {
  const id = process.env.GITHUB_REF!.replace(/^refs\/pull\/(.*)\/merge$/, "$1")
  return [`pr-${id}`]
}
