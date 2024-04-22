import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import { withUt } from "uploadthing/tw";

// TAILWIND WRAPPER FOR UPLOADTHING STYLES

export default withUt({
  // Your existing Tailwind config
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}) satisfies Config;

// ORIGINAL CONFIG

// export default {
//   content: ["./src/**/*.tsx"],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-sans)", ...fontFamily.sans],
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;
