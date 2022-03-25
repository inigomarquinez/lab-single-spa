# lab-single-spa

Playground to test microfrontends built using [single-spa](https://single-spa.js.org/).

## How to run it locally

First, install the dependencies for the `root` project by going into `root` folder and running `npm install`.

After that, install the dependencies of all the other projects by going into `root` folder and running `npm run install-all`.

Then, to run all projects at once, from the `root` folder run `npm run start-all`.

Now, if we check http://localhost:9000 we will see `navbar` page being served from localhost:9001, `app1` page being served from localhost:9002 and `app2` page being served from localhost:9003. `navbar` is always served, whereas `app1` and `app2` are being conditionally rendered as we switch in our root project.

## Useful links

- [microfrontends by Martin Fowler](https://martinfowler.com/articles/micro-frontends.html)
- [11 Micro Frontends Frameworks You Should Know](https://itnext.io/11-micro-frontends-frameworks-you-should-know-b66913b9cd20)
- [single-spa](https://single-spa.js.org/)
- [Quick start](https://single-spa.js.org/docs/getting-started-overview#quick-start)
- [Building Micro Frontends Using Single-SPA Framework](https://blog.bitsrc.io/building-microfrontends-using-single-spa-framework-94019ca2fb4d)
- [Migrating CRA to Micro Frontends with Single SPA](https://ogzhanolguncu.com/blog/migrating-cra-to-micro-frontends-with-single-spa)
- [React Typescript Microfrontend Monorepo with single-spa + Lerna](https://dev.to/kevbeltrao/react-typescript-microfrontend-monorepo-with-single-spa-lerna-m60)
- [Microfrontends with Module Federation: What, Why, and How](https://levelup.gitconnected.com/microfrontends-with-module-federation-what-why-and-how-845f06020ee1)
- [Micro-frontend Architectures on AWS](https://aws.amazon.com/es/blogs/architecture/micro-frontend-architectures-on-aws/)
- [How to Develop and Deploy Micro-Frontends with Single-SPA](https://www.freecodecamp.org/news/developing-and-deploying-micro-frontends-with-single-spa/)
- [Developing and Deploying Micro-Frontends With Single-Spa](https://medium.com/swlh/developing-and-deploying-micro-frontends-with-single-spa-c8b49f2a1b1d)