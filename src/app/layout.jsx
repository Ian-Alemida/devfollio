import { ubuntu } from "./fonts"

export const metadata = {
  title: 'Ian | Personal Portfolio',
  description: 'Portfolio profissional de um desenvolvedor full-stack',
  icons: {
    icon: [
      '/favicon.ico?v=4',
    ],
    apple: [
      '/apple-touch-icon.png?v=4'
    ],
    shortcut: [
      'apple-touch-icon.png'
    ]

  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${ubuntu.className} body`}>{children}</body>
    </html>
  )
}
