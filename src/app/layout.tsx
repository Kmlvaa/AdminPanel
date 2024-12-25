import "./globals.css";

export default function RootLayout({
  children
  , title = "Welcome"
}: {
  children: React.ReactNode;
  title?: string;
}) {

  return (
    <html lang="en">
      <title>{title}</title>
      <meta name="description" content='welcome' />
      <body>
        {children}
      </body>
    </html>
  );
}
