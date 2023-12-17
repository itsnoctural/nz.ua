import "./globals.css";
import { eUkraine } from "@/assets/fonts/eUkraine";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={eUkraine.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
