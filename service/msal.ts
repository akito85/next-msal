'use client'

import * as msal from "@azure/msal-browser"

const msalConfig = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID}`,
        redirectUri: '/app-selector'
    }
}

const msalInstance = new msal.PublicClientApplication(msalConfig)

export { msalInstance }

