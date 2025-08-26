/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const HeaderLinks = () => {
  return (
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
  )
}

const config = {
  logo: <span className="font-bold text-lg">SelamAPI Platform</span>,
  logoLink: '/',
  project: {
    component: <HeaderLinks />,
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: frontMatter.title ? `${frontMatter.title} – SelamAPI` : 'SelamAPI Documentation',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SelamAPI Documentation" />
      <meta property="og:description" content="The official documentation for the SelamAPI platform." />
    </>
  ),
  docsRepositoryBase: 'https://github.com/example/selam-api-docs', // Placeholder
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    title: 'On this page',
    float: true,
  },
  editLink: {
    text: null, // Disable "Edit this page" link
  },
  feedback: {
    content: null, // Disable feedback link
  },
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark', // Force dark theme
  },
  footer: {
    text: '', // Empty footer to match OpenAI docs
  },
}

export default config
