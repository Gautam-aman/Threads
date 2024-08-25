import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

import '../globals.css'


import { Inter } from 'next/font/google';

  export const metadata= {
    title: "Threads",
    description: "A nextJs Thread App",
  };

const inter = Inter({ subsets: ["latin"] });

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body className={`${inter.className} bg-dark-1`}>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {children}
          </body>
        </html>
      </ClerkProvider>
    )
  }