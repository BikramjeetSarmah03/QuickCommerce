/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/../components/user/profile-dropdown`; params?: Router.UnknownInputParams; } | { pathname: `/../components/ui/avatar`; params?: Router.UnknownInputParams; } | { pathname: `/../components/auth/logout-button`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/password/forgot` | `/password/forgot`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/password/reset` | `/password/reset`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/cart` | `/cart`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/wishlist` | `/wishlist`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/../components/user/profile-dropdown`; params?: Router.UnknownOutputParams; } | { pathname: `/../components/ui/avatar`; params?: Router.UnknownOutputParams; } | { pathname: `/../components/auth/logout-button`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/password/forgot` | `/password/forgot`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/password/reset` | `/password/reset`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/cart` | `/cart`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/wishlist` | `/wishlist`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/../components/user/profile-dropdown${`?${string}` | `#${string}` | ''}` | `/../components/ui/avatar${`?${string}` | `#${string}` | ''}` | `/../components/auth/logout-button${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/register${`?${string}` | `#${string}` | ''}` | `/register${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/password/forgot${`?${string}` | `#${string}` | ''}` | `/password/forgot${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/password/reset${`?${string}` | `#${string}` | ''}` | `/password/reset${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/cart${`?${string}` | `#${string}` | ''}` | `/cart${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/search${`?${string}` | `#${string}` | ''}` | `/search${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/settings${`?${string}` | `#${string}` | ''}` | `/settings${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/wishlist${`?${string}` | `#${string}` | ''}` | `/wishlist${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/../components/user/profile-dropdown`; params?: Router.UnknownInputParams; } | { pathname: `/../components/ui/avatar`; params?: Router.UnknownInputParams; } | { pathname: `/../components/auth/logout-button`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/password/forgot` | `/password/forgot`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/password/reset` | `/password/reset`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/cart` | `/cart`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/wishlist` | `/wishlist`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
