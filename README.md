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

| Layer                  | Description                                                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| domain                 |包含业务实体和业务规则                                                                                                                                                                                           |
| domain:entity          |                                                                                                                                                                                           |
| domain:repository      |                                                                                                                                                                                           |
| application            | 包含用例和接口。对业务用例的抽象，强调 “做什么”。编排领域逻辑、跨模块协调，并为用户界面或外部系统提供用例操作。接口（ports）通常属于应用层（application layer），定义了应用层需要的外部服务契约。                                                                                           |
| application: service   | 实现用例的具体业务逻辑，并且 协调 领域层的服务、外部服务和基础设施                                                                                                                        |
| application: use-case  | 定义用例的操作接口和业务规则。来源于需求，描述"做什么"，不关心"怎么做。是系统对外提供的核心功能的一部分。                                                                                 |
| interface-adapter      | Acts as a bridge between application logic and user interface.<br/> Provides state management.<br/> Should not implement core business logic.                                             |
| infrastructure         | 提供实现。可以轻易替换。对数据访问的抽象，强调 “如何做”<br/> Interacts with backend and third-party APIs.<br/> Abstracts external API logic.<br/> Implements Repository and other external dependency interfaces. |
| infrastructure:storage | 数据持久化和检索操作, 将来要替换为对graphql API的访问                                                                                                                                     |

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
