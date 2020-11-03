# generate-docker-tags-action

_A GitHub action to automatically generates Docker tags from the action environment._

![[Build Status][build]][build-img]

```yaml
# ...

steps:
  # ...
  - name: Generate tags
    id: generate-tags
    uses: stevenxie/generate-docker-tags-action@v0.2.1
    with:
      repo: my_repo
  - name: Build and push
    uses: docker/build-push-action@v2
    with:
      # ...
      tags: ${{ steps.generate-tags.outputs.tags }}
  # ...
```

## Usage

### Inputs

| Name   | Description                          |
| ------ | ------------------------------------ |
| `repo` | The repository to generate tags for. |

### Outputs

| Name   | Description                                    |
| ------ | ---------------------------------------------- |
| `tags` | The generated tags, as comma-separated values. |

[build]: https://github.com/stevenxie/generate-docker-tags-action/actions
[build-img]: https://img.shields.io/github/workflow/status/stevenxie/generate-docker-tags-action/test?style=for-the-badge
