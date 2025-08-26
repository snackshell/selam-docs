import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

export default withNextra({
  // Add any other Next.js configurations here if needed
});
