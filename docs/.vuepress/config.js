module.exports = {
  base: '/blog/',
  themeConfig: {
    sidebar: [
      {
        title: 'Overview',
        path: '/overview/',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: 'HTML',
        collapsable: false,
        sidebarDepth: 2,
        children: ['/html/html-semantic.md']
      },
      {
        title: 'Web API',
        collapsable: false,
        sidebarDepth: 2,
        children: ['/web-api/event.md', '/web-api/event-target.md']
      }
    ]
  }
}