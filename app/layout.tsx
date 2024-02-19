'use client'

import { Inter } from "next/font/google";
import "./globals.css";

// AAA Azure AD
import { MsalProvider } from '@azure/msal-react'
import { msalInstance } from '../service/msal'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="">
                <MsalProvider instance={msalInstance}> 
                    {children}
                </MsalProvider>
            </body>
        </html>
    );
}
