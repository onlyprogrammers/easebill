import type { Metadata } from 'next'
import './globals.css'
import Mainsidebar from '@/components/kokonutui/mainsidebar'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className="flex w-full h-screen "
        >
          {false ? (
            <>
              <div>
                <Mainsidebar />
              </div>
              <div className="flex-1 flex h-full flex-col overflow-hidden">
                {children}
              </div>
            </>
          ):(<>
          <div className="flex-1 flex h-full flex-col">

          {children}
          </div>
          </>)}

        </div>

      </body>
    </html>
  )
}
