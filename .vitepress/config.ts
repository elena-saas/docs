import { defineConfig } from 'vitepress'

export default defineConfig({
  title:       'elena POS',
  description: 'Centro de ayuda para usuarios de elena POS',
  lang:        'es-MX',

  head: [
    ['meta', { name: 'theme-color', content: '#E25C3B' }],
  ],

  themeConfig: {
    siteTitle: 'elena — ayuda',

    nav: [
      { text: 'Para cajeros',  link: '/usuario/inicio-rapido/cajero' },
      { text: 'Para dueños',   link: '/usuario/inicio-rapido/dueno' },
      { text: 'Módulos',       link: '/usuario/modulos/cobro' },
      { text: 'soyelena.app',  link: 'https://soyelena.app' },
    ],

    sidebar: {
      '/usuario/': [
        {
          text: 'Inicio rápido',
          items: [
            { text: 'Para cajeros',  link: '/usuario/inicio-rapido/cajero' },
            { text: 'Para dueños',   link: '/usuario/inicio-rapido/dueno' },
          ],
        },
        {
          text: 'Módulos',
          items: [
            { text: 'Cobro y ventas',         link: '/usuario/modulos/cobro' },
            { text: 'Inventario',             link: '/usuario/modulos/inventario' },
            { text: 'Cortes de caja',         link: '/usuario/modulos/cortes' },
            { text: 'Apartados',              link: '/usuario/modulos/apartados' },
            { text: 'Crédito / Fiado',        link: '/usuario/modulos/credito' },
            { text: 'Paquetes',               link: '/usuario/modulos/paquetes' },
            { text: 'Facturas (CFDI)',         link: '/usuario/modulos/cfdi' },
            { text: 'Seguridad y privacidad',  link: '/usuario/modulos/seguridad-privacidad' },
          ],
        },
        {
          text: 'Conceptos',
          collapsed: true,
          items: [
            { text: 'Turno de caja',           link: '/usuario/conceptos/turno-caja' },
            { text: 'Variantes de producto',   link: '/usuario/conceptos/variantes' },
            { text: 'Stock y apartados',       link: '/usuario/conceptos/stock-apartado' },
          ],
        },
      ],
    },

    search: { provider: 'local' },

    footer: {
      message: '¿Necesitas ayuda? Escríbenos a hola@soyelena.app',
      copyright: '© 2026 elena POS',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/elena-saas' },
    ],
  },
})
