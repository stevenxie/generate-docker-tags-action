import { debug } from "@actions/core"

export const getPushTags = (): string[] => {
  const ref = process.env.GITHUB_REF!
  debug(`Got ref: ${ref}`)

  if (ref.includes("refs/tags")) {
    const tag = ref.replace(/^refs\/tags\/(.*)$/, "$1")
    return [tag.startsWith("v") ? tag.substr(1) : tag, "latest"]
  } else if (ref.includes("refs/heads")) {
    const branch = process.env.GITHUB_REF!.replace(/^refs\/heads\/(.*)$/, "$1")
    return [branch]
  }

  throw new Error("Unable to determine tags from ref.")
}
