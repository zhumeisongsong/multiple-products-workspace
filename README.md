# Multiple Products' Workspace

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/JBJ2LUYyM7)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve quiz-game
```

To create a production bundle:

```sh
npx nx build quiz-game
```

To see all available targets to run for a project, run:

```sh
npx nx show project quiz-game
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo --bundler=vite
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install shadcn/ui components

```sh
TS_NODE_PROJECT=tsconfig.base.json pnpm dlx shadcn@latest add xxx
```

Thanks https://pustelto.com/blog/adding-shadcnui-to-nx-monorepo/

## Workspace Structure

Defines core business logic and entities. Provides business rule validation and strategies.

| Layer                  | Description                                                                                                                                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| domain                 | Contains business entities and business rules.                                                                                                                                                                                                                    |
| application: service   | Implements concrete business logic for use cases and coordinates domain services, external services, and infrastructure.                                                                                                                                          |
| application: use-case  | Derived from requirements, describes **"what to do"** without concerning **"how to do it"**. <br/> Defines operation interfaces and business rules for use cases.<br/> Forms part of the system's core functionality.                                             |
| interface-adapter      | Acts as a bridge between application logic and user interface.<br/> Provides state management.<br/> Should not implement core business logic.                                                                                                                     |
| infrastructure         | Provides implementation, emphasizing **"how to do it"**. Can be easily replaced. Abstracts data access.<br/> Interacts with backend and third-party APIs.<br/> Abstracts external API logic.<br/> Implements Repository and other external dependency interfaces. |
| infrastructure:storage | Data persistence and retrieval operations, to be replaced by access to the GraphQL API.                                                                                                                                                                           |

## Useful links

Learn more:

- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

https://nx.dev/blog/versioning-and-releasing-packages-in-a-monorepo#installing-the-javascripttypescript-versioning-package
