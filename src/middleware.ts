// import { NextResponse, NextRequest } from "next/server";

// // List of valid ISO country codes (ISO 3166-1 alpha-2)
// const validCountryISOs = ["us", "in", "fr", "nl", "de", "es", "ta"]; // Add more as needed
// const validLocales = ["en", "fr", "nl", "de", "es", "ta"]; // Supported locales
// const defaultLocale = "en"; // Fallback language

// // Function to fetch user location based on IP address using ipinfo.io
// async function fetchUserLocation() {
//   try {
//     const res = await fetch(`https://ipinfo.io/json`);
//     if (!res.ok) throw new Error("Failed to fetch location data for IP.");
//     const data = await res.json();
//     return {
//       country: data.country?.toLowerCase() || "us", // Default to 'us' if country is unavailable
//       language: "en", // Default to 'en' as ipinfo.io does not provide language info
//     };
//   } catch (error) {
//     console.error("Error fetching user location:", error);
//     return { country: "us", language: "en" }; // Default fallback
//   }
// }

// // Middleware logic to handle redirection and validation
// export async function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//   const pathParts = pathname.split("/").filter(Boolean); // Split the path and remove empty parts

//   // Extract country ISO and language code from the path
//   const userCountryISO = pathParts[0]?.toLowerCase(); // First part is country
//   const userLanguage = pathParts[1]?.toLowerCase(); // Second part is language

//   // Check if the country and language are valid
//   const isCountryValid = validCountryISOs.includes(userCountryISO);
//   const isLanguageValid = validLocales.includes(userLanguage);

//   // If the country is invalid, redirect to the detected country
//   if (!isCountryValid) {
//     const userLocation = await fetchUserLocation(); // Fetch user's actual location based on IP
//     const detectedCountry = userLocation.country;
//     const detectedLanguage = userLanguage || defaultLocale; // Use existing or fallback language

//     // Construct new URL with detected country and preserve other parts
//     const url = req.nextUrl.clone();
//     url.pathname = `/${detectedCountry}/${detectedLanguage}/${pathParts.slice(2).join("/")}`;

//     return NextResponse.redirect(url); // Redirect to valid URL
//   }

//   // If the country and language are valid, proceed
//   if (isCountryValid && isLanguageValid) {
//     return NextResponse.next(); // No redirection needed
//   }

//   // If only the language is invalid, fallback to the default language
//   const validCountry = isCountryValid ? userCountryISO : validCountryISOs[0]; // Fallback country if needed
//   const validLanguage = isLanguageValid ? userLanguage : defaultLocale; // Fallback language if needed

//   // Construct a valid URL if redirection is required
//   const url = req.nextUrl.clone();
//   url.pathname = `/${validCountry}/${validLanguage}/${pathParts.slice(2).join("/")}`;

//   return NextResponse.redirect(url); // Redirect to the corrected URL
// }

// // Define the matcher for the middleware to run only on specific routes
// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|api).*)", // Exclude static assets, image optimization, favicon, and API routes
//   ],
// };

// List of valid ISO country codes (ISO 3166-1 alpha-2)
const validCountryISOs = [
  "af",
  "ax",
  "al",
  "dz",
  "as",
  "ad",
  "ao",
  "ai",
  "aq",
  "ag",
  "ar",
  "am",
  "aw",
  "au",
  "at",
  "az",
  "bs",
  "bh",
  "bd",
  "bb",
  "by",
  "be",
  "bz",
  "bj",
  "bm",
  "bt",
  "bo",
  "bq",
  "ba",
  "bw",
  "bv",
  "br",
  "io",
  "bn",
  "bg",
  "bf",
  "bi",
  "cv",
  "kh",
  "cm",
  "ca",
  "ky",
  "cf",
  "td",
  "cl",
  "cn",
  "cx",
  "cc",
  "co",
  "km",
  "cd",
  "cg",
  "ck",
  "cr",
  "hr",
  "cu",
  "cw",
  "cy",
  "cz",
  "dk",
  "dj",
  "dm",
  "do",
  "ec",
  "eg",
  "sv",
  "gq",
  "er",
  "ee",
  "sz",
  "et",
  "fk",
  "fo",
  "fj",
  "fi",
  "fr",
  "gf",
  "pf",
  "tf",
  "ga",
  "gm",
  "ge",
  "de",
  "gh",
  "gi",
  "gr",
  "gl",
  "gd",
  "gp",
  "gu",
  "gt",
  "gg",
  "gn",
  "gw",
  "gy",
  "ht",
  "hm",
  "va",
  "hn",
  "hk",
  "hu",
  "is",
  "in",
  "id",
  "ir",
  "iq",
  "ie",
  "im",
  "il",
  "it",
  "jm",
  "jp",
  "je",
  "jo",
  "kz",
  "ke",
  "ki",
  "kp",
  "kr",
  "kw",
  "kg",
  "la",
  "lv",
  "lb",
  "ls",
  "lr",
  "ly",
  "li",
  "lt",
  "lu",
  "mo",
  "mg",
  "mw",
  "my",
  "mv",
  "ml",
  "mt",
  "mh",
  "mq",
  "mr",
  "mu",
  "yt",
  "mx",
  "fm",
  "md",
  "mc",
  "mn",
  "me",
  "ms",
  "ma",
  "mz",
  "mm",
  "na",
  "nr",
  "np",
  "nl",
  "nc",
  "nz",
  "ni",
  "ne",
  "ng",
  "nu",
  "nf",
  "mp",
  "no",
  "om",
  "pk",
  "pw",
  "ps",
  "pa",
  "pg",
  "py",
  "pe",
  "ph",
  "pn",
  "pl",
  "pt",
  "pr",
  "qa",
  "re",
  "ro",
  "ru",
  "rw",
  "bl",
  "sh",
  "kn",
  "lc",
  "mf",
  "pm",
  "vc",
  "ws",
  "sm",
  "st",
  "sa",
  "sn",
  "rs",
  "sc",
  "sl",
  "sg",
  "sx",
  "sk",
  "si",
  "sb",
  "so",
  "za",
  "gs",
  "ss",
  "es",
  "lk",
  "sd",
  "sr",
  "sj",
  "se",
  "ch",
  "sy",
  "tw",
  "tj",
  "tz",
  "th",
  "tl",
  "tg",
  "tk",
  "to",
  "tt",
  "tn",
  "tr",
  "tm",
  "tc",
  "tv",
  "ug",
  "ua",
  "ae",
  "gb",
  "us",
  "um",
  "uy",
  "uz",
  "vu",
  "ve",
  "vn",
  "vg",
  "vi",
  "wf",
  "eh",
  "ye",
  "zm",
  "zw",
];

// // Function to fetch user location based on client IP address
// async function fetchUserLocation(req: NextRequest) {
//   try {
//     console.log("Fetching client IP address...");
//     // Attempt to get the client's IP address from request headers
//     const clientIP =
//       req.headers.get("x-forwarded-for")?.split(",")[0] ||
//       req.headers.get("x-real-ip");
//     if (!clientIP) {
//       throw new Error("Unable to detect client IP address.");
//     }
//     console.log("Detected client IP address:", clientIP);
//     // Fetch location data based on the detected client IP address
//     const res = await fetch(`https://ipinfo.io/json`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch location data for client IP.");
//     }
//     const data = await res.json();
//     console.log("Location data received:", data);

//     return {
//       country: data.country?.toLowerCase() || "us", // Default to 'us' if country is unavailable
//       language: "en", // Default to 'en' (ipinfo.io doesn't provide language info)
//     };
//   } catch (error) {
//     console.error("Error fetching user location:", error);
//     // Default to a fallback country and language in case of an error
//     return { country: "us", language: "en" };
//   }
// }

// // Middleware logic to handle redirection and validation
// export async function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//   console.log("Current path:", pathname);

//   const pathParts = pathname.split("/").filter(Boolean); // Get all parts of the path
//   const userCountryISO = pathParts[0]?.toLowerCase(); // First part is country
//   const userLanguage = pathParts[1]?.toLowerCase(); // Second part is language

//   console.log("User country ISO from URL:", userCountryISO);
//   console.log("User language from URL:", userLanguage);

//   // Check if the country and language are valid
//   const isCountryValid = validCountryISOs.includes(userCountryISO);
//   const isLanguageValid = validLocales.includes(userLanguage);

//   if (isCountryValid && isLanguageValid) {
//     console.log("Valid country and language, proceeding...");
//     return NextResponse.next(); // No redirection needed
//   }

//   // Fetch the user's actual location (country and language) based on IP
//   const userLocation = await fetchUserLocation(req);
//   const { country: detectedCountry } = userLocation;

//   // Get browser's preferred language from accept-language header
//   const browserLanguage = getBrowserLanguage(req);

//   console.log("Detected user country:", detectedCountry);
//   console.log("Browser language:", browserLanguage);

//   // If the user is already on the correct URL, don't redirect
//   if (userCountryISO === detectedCountry && userLanguage === browserLanguage) {
//     console.log("User is already on the correct URL, proceeding...");
//     return NextResponse.next(); // No redirection needed
//   }

//   // Construct the new valid URL using detected country and browser language
//   const url = req.nextUrl.clone();
//   url.pathname = `/${detectedCountry}/${browserLanguage}${pathname.replace(
//     `/${userCountryISO}/${userLanguage}/`,
//     ""
//   )}`;
//   return NextResponse.redirect(url);
// }

// // Define the matcher for the middleware to run only on specific routes
// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|api).*)", // Exclude static assets, image optimization, favicon, and API routes
//   ],
// };

// // Helper function to get the browser language from the 'accept-language' header
// function getBrowserLanguage(req: NextRequest) {
//   const acceptLanguageHeader = req.headers.get("accept-language");
//   if (!acceptLanguageHeader) return defaultLocale;

//   // Extract the first preferred language from the 'accept-language' header
//   const browserLanguage = acceptLanguageHeader.split(",")[0]?.split("-")[0]; // Just the language code
//   console.log("Browser language detected:", browserLanguage);

//   return validLocales.includes(browserLanguage)
//     ? browserLanguage
//     : defaultLocale;
// }
// // List of valid ISO country codes and locales
// const validLocales = ["en", "fr", "nl", "de", "es", "ta", "hi"];
// const defaultLocale = "en";
// Function to fetch user location based on client IP address using ipwhois.app
import { NextResponse } from "next/server";

const validLocales = [
  "af",
  "sq",
  "am",
  "ar",
  "hy",
  "az",
  "eu",
  "be",
  "bn",
  "bs",
  "bg",
  "my",
  "ca",
  "ny",
  "zh",
  "co",
  "hr",
  "cs",
  "da",
  "nl",
  "en",
  "eo",
  "et",
  "fi",
  "fr",
  "fy",
  "gd",
  "gl",
  "ka",
  "de",
  "el",
  "gu",
  "ht",
  "ha",
  "he",
  "hi",
  "hu",
  "is",
  "ig",
  "id",
  "ga",
  "it",
  "ja",
  "jv",
  "kn",
  "kk",
  "km",
  "rw",
  "ky",
  "ko",
  "ku",
  "la",
  "lb",
  "lo",
  "lt",
  "lv",
  "mk",
  "mg",
  "ms",
  "ml",
  "mt",
  "mi",
  "mr",
  "mn",
  "ne",
  "no",
  "nb",
  "or",
  "ps",
  "fa",
  "pl",
  "pt",
  "pa",
  "ro",
  "ru",
  "sm",
  "sr",
  "sn",
  "sd",
  "si",
  "sk",
  "sl",
  "so",
  "st",
  "es",
  "su",
  "sw",
  "sv",
  "ta",
  "te",
  "tg",
  "th",
  "tk",
  "tl",
  "tr",
  "tt",
  "ug",
  "uk",
  "ur",
  "uz",
  "vi",
  "cy",
  "xh",
  "yi",
  "yo",
  "zu",
];

const defaultLocale = "en";
const defaultCountry = "us";

function setCookie(name, value, { res, path = "/" }) {
  res.cookies.set(name, value, { path, httpOnly: true, secure: true });
}

function getBrowserLanguage(req) {
  const acceptLanguageHeader = req.headers.get("accept-language");
  if (!acceptLanguageHeader) return defaultLocale;

  const browserLanguage = acceptLanguageHeader.split(",")[0]?.split("-")[0];
  return validLocales.includes(browserLanguage)
    ? browserLanguage
    : defaultLocale;
}

async function fetchUserLocation(req) {
  const clientIP =
    process.env.NODE_ENV === "development"
      ? "106.219.68.189" // Development IP
      : req.headers.get("x-forwarded-for")?.split(",")[0] ||
        req.headers.get("x-real-ip");

  if (!clientIP) {
    console.error("Unable to detect client IP address.");
    return { country: defaultCountry, ipData: null };
  }
  // Function to handle fetch with timeout
  async function fetchWithTimeout(
    url: string,
    timeout: number
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId); // Clear timeout if fetch is successful
      return response;
    } catch (error) {
      clearTimeout(timeoutId); // Ensure timeout is cleared in case of error
      if (error.name === "AbortError") {
        console.warn(`Request to ${url} timed out.`);
      } else {
        console.error(`Error fetching ${url}:`, error);
      }
      throw error;
    }
  }
  const ipServices = [
    `https://ipinfo.io/${clientIP}/json/`,
    `https://ipapi.co/${clientIP}/json/`,
    `https://ipwhois.app/json/${clientIP}`,
    `https://json.geoiplookup.io/${clientIP}`,
    `https://get.geojs.io/v1/ip/geo/${clientIP}.json`,
  ];

  for (const service of ipServices) {
    try {
      const response = await fetchWithTimeout(service, 5000); // 5-second timeout for each service
      if (response.ok) {
        const data = await response.json();
        return {
          country:
            data.country?.toLowerCase() ||
            data.country_code?.toLowerCase() ||
            defaultCountry,
          ipData: data,
        };
      }
    } catch (error) {
      console.warn(`Service ${service} failed:`, error.message);
    }
  }

  console.error("All IP services failed. Using default location.");
  return { country: defaultCountry, ipData: null };
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const pathParts = pathname.split("/").filter(Boolean);

  const userCountryISO = pathParts[0]?.toLowerCase();
  const userLanguage = pathParts[1]?.toLowerCase();

  const isCountryValid = validCountryISOs.includes(userCountryISO);
  const isLanguageValid = validLocales.includes(userLanguage);

  const res = NextResponse.next();

  // If URL already has valid country and language, set cookies and proceed
  if (isCountryValid && isLanguageValid) {
    setCookie("country", userCountryISO, { res });
    setCookie("language", userLanguage, { res });
    return res;
  }

  // Detect user location and language
  const { country: detectedCountry, ipData } = await fetchUserLocation(req);
  const browserLanguage = getBrowserLanguage(req);

  setCookie("country", detectedCountry, { res });
  setCookie("language", browserLanguage, { res });

  // Optionally store IP data in a cookie
  if (ipData) {
    setCookie("ipData", JSON.stringify(ipData), { res });
  }

  const redirectURL = `/${detectedCountry}/${browserLanguage}`;
  const url = req.nextUrl.clone();
  url.pathname = redirectURL;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
