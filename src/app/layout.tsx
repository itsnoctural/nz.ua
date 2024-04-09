import { eUkraine } from "@/assets/fonts/eUkraine";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={eUkraine.className}>
      <body>
        {children}
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  )
}
