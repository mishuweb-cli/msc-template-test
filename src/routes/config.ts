export type RouteConfigType = {
  routePath: string;
  elementPath?: string;
  children?: Array<RouteConfigType>;
};

export const routeConfig: Array<RouteConfigType> = [
  {
    routePath: '/',
    elementPath: 'root',
    children: [
      {
        routePath: 'home',
        elementPath: 'home',
        children: [],
      },
      {
        routePath: 'login',
        elementPath: 'login',
      },
      {
        routePath: '*',
        elementPath: 'notfound',
      },
    ],
  },
];
