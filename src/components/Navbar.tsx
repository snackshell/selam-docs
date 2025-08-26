import React from 'react'
import Link from 'next/link'

export function CustomNavbar() {
  return (
    <div className="bg-background border-b border-border sticky top-0 z-50 h-16">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Left side: Logo */}
          <div className="flex items-center">
            <Link href="/" className="font-bold text-lg text-foreground">
              SelamAPI
            </Link>
          </div>

          {/* Right side: Nav links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-foreground hover:opacity-80 transition-opacity">Docs</a>
            <a href="#" className="text-sm text-foreground hover:opacity-80 transition-opacity">API Reference</a>
            <a href="#" className="text-sm text-foreground hover:opacity-80 transition-opacity">Log in</a>
            <a
              href="#"
              className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
