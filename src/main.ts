import { debug, getInput, setOutput, setFailed } from "@actions/core"
import { getPushTags } from "./push"
import { getPullRequestTags } from "./pull-request"

const getTags = (): string[] => {
  const eventName = process.env.GITHUB_EVENT_NAME
  debug(`Got event: ${eventName}`)
  switch (eventName) {
    case "push":
      return getPushTags()
    case "pull_request":
      return getPullRequestTags()
    default:
      throw new Error("Unsupported event name.")
  }
}

function run(): void {
  try {
    const repo: string = getInput("repo")
    const tags = getTags()
    const output = tags.map(tag => `${repo}:${tag}`).join(",")
    setOutput("tags", output)
  } catch (error) {
    setFailed(error.message)
  }
}

run()
