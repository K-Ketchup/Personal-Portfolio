import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "imkenshonishio",
	authors: {
		name: "kensho nishio",
	},

	description:
		"I'm a highschool developer based in Los Angeles, California. I enjoy creating mobile applications, video games, and low-level programs. I heavily dislike web development.",
	openGraph: {
		title: "imkenshonishio",
		description:
			"I'm a highschool developer based in Los Angeles, California. I enjoy creating mobile applications, video games, and low-level programs. I heavily dislike web development.",
		url: "http://localhost:3000",
		siteName: "imkenshonishio",
		images: "/og.png",
		type: "website",
	},
	keywords: ["kenshonishio", "computerscience", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rubik.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
