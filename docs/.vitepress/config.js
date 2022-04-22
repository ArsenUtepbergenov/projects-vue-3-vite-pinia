const storySidebar = [{ text: 'Story', link: '/about/story' }]

module.exports = {
  title: 'Vitepress docs',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
    ],
    sidebar: {
      '/about/': storySidebar,
    }
  }
}