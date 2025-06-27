export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Photo.ico" sizes="any" />
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
