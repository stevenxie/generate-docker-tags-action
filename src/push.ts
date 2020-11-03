import { debug } from "@actions/core"
import { valid as semver } from "semver"

export const getPushTags = (): string[] => {
  const ref = process.env.GITHUB_REF!
  const sha = process.env.GITHUB_SHA!
  debug(`Got SHA: ${sha}`)
  debug(`Got ref: ${ref}`)

  if (ref.includes("refs/tags")) {
    const raw = ref.replace(/^refs\/tags\/(.*)$/, "$1")
    const tag = semver(raw) ?? raw
    return [tag, "latest"]
  } else if (ref.includes("refs/heads")) {
    const branch = process.env.GITHUB_REF!.replace(/^refs\/heads\/(.*)$/, "$1")
    const prefix = branch.replace("/", "-")
    return [`${prefix}-${sha.substr(0, 7)}`]
  }

  throw new Error("Unable to determine tags from ref.")
}
