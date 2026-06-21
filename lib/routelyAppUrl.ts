/** Live Routely browser app — set on Vercel as NEXT_PUBLIC_ROUTELY_APP_URL */
export const routelyAppUrl =
  process.env.NEXT_PUBLIC_ROUTELY_APP_URL?.replace(/\/$/, '') ||
  'https://app.routely.aitotech.in';
