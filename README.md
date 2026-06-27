# SQD Studios Documentation
## Contributing
We take contributions from whoever wants, but if you don't know Starlight/Astro you may have a hard time
If you just edit a file you're fine but if you create/delete files, there's the problem. When you finish writing your
.md files go to the `astro.config.mjs` and do the following things:
Inside `starlightSidebarTopics`, in items create the file or remove the file you removed without the .md extension and its path.
To create a category do what the code says. (Take // as commends)
```javascript
starlightSidebarTopics([     
    { // Category 1
        label: 'ChamoItemSKins', // Name of the category
        link: '/chamoitemskins/administration/introduction', // Landing page of the category
        icon: 'open-book', // The icon it has
        items: ['/chamoitemskins/administration/introduction'], // The file directories
    },
    // More categories
])
```
But how to test it? Then we have the table below:

| Command                    | Action                                            |
|:---------------------------|:--------------------------------------------------|
| `pnpm install`             | Installs dependencies                             |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`       |
| `pnpm build`               | Build your production site to `./dist/`           |
| `pnpm preview`             | Preview your build locally, before deploying      |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check`  |
| `pnpm astro -- --help`     | Get help using the Astro CLI                      |

## License
Everything under here is licensed under the MIT License (See LICENSE for more info)
