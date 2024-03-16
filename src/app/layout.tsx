'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { PropsWithChildren } from 'react'
import UserContainer from '@/context/user/user.container'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <UserContainer>{children}</UserContainer>
            </body>
        </html>
    )
}
