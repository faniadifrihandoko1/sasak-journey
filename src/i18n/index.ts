// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";
// import { routing } from "./routing";

// export const locales = ["id", "en"] as const;
// export type Locale = (typeof locales)[number];

// export const languageNames: Record<Locale, string> = {
//   en: "English",
//   id: "Indonesia",
// };

// export default getRequestConfig(async ({ locale }) => {
//   // Validate that the incoming `locale` parameter is valid
//   if (!locale || !routing.locales.includes(locale as any)) notFound();

//   return {
//     locale: locale as Locale,
//     messages: (await import(`../../messages/${locale}.json`)).default,
//   };
// });
