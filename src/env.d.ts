/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// `@fontsource-variable/inter` ships font/CSS assets with no type declarations.
// TypeScript 6.0 (ts2882) requires a declaration for side-effect imports.
declare module '@fontsource-variable/inter';
