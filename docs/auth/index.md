To use any part of the Twitch developer ecosystem, you first need to authenticate.

Twurple uses a concept named **Authentication Providers** to provide different kinds of tokens to the other parts of the application.

## Providers

You can choose between different ways to authenticate:

- To only ever use a single token determined at instantiation time, check out [Using a fixed token](/docs/auth/providers/static.md).  
  (This is mostly useful for quick prototyping and **not suitable for production apps**.)
- If you want to run something more long-term, you may be interested in [auto-refreshing tokens](/docs/auth/providers/refreshing.md).
- If you run an application that doesn't need user-specific data (or for **EventSub**), you can use [app tokens](/docs/auth/providers/client-credentials.md).
- If you are building an Electron app, you can use our premade [Electron auth provider](/docs/auth/providers/electron.md).
- If you have special requirements, you can write your own provider by following the {@AuthProvider} interface.
