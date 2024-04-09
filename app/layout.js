export const metadata = {
  title: 'Leleely',
  description: 'This this my personal portfolio',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
