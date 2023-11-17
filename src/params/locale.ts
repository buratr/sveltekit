import { locales } from '$lib/translations';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param:any) {
  const definedLocales = locales.get();
  const paths = [...definedLocales, ''];
  const slashPaths = paths.map((l) => `${l}/`);

  return [...paths, ...slashPaths].includes(param);
}