/* eslint-disable react-hooks/rules-of-hooks */
import { useConfig } from 'nextra-theme-docs'
import { CustomNavbar } from './src/components/Navbar.tsx'

const config = {
  logo: <span className="font-bold text-lg">SelamAPI Platform</span>,
  logoLink: '/',
  components: {
    Navbar: CustomNavbar,
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
