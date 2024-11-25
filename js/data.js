/** @import { MenuItem } from './types.d.js' */

/** @type {MenuItem[]}  */
export const menuItems = [
  {
    label: "Home",
    href: "/home",
    Image: {
      src: "https://example.com/home.png",
      label: "Home Icon"
    },
    menuItems: []
  },
  {
    label: "About Us",
    href: "/about",
    Image: {
      src: "https://example.com/about.png",
      label: "About Icon"
    },
    menuItems: [
      {
        href: "/about/team",
        label: "Our Team",
        Image: {
          src: "https://example.com/team.png",
          label: "Team Icon"
        },
        menuItems: []
      },
      {
        label: "Our Story",
        href: "/about/story",
        Image: {
          src: "https://example.com/story.png",
          label: "Story Icon"
        },
        menuItems: []
      }
    ]
  },
  {
    label: "Services",
    href: "/services",
    Image: {
      src: "https://example.com/services.png",
      label: null
    },
    menuItems: [
      {
        label: "Consulting",
        href: "/services/consulting",
        Image: {
          src: "https://example.com/consulting.png",
          label: "Consulting Icon"
        },
        menuItems: [
          {
            label: "Consulting",
            href: "/services/consulting",
            Image: {
              src: "https://example.com/consulting.png",
              label: "Consulting Icon"
            },
            menuItems: []
          },
          {
            label: "Consulting",
            href: "/services/consulting",
            Image: {
              src: "https://example.com/consulting.png",
              label: "Consulting Icon"
            },
            menuItems: []
          },
          {
            label: "Consulting",
            href: "/services/consulting",
            Image: {
              src: "https://example.com/consulting.png",
              label: "Consulting Icon"
            },
            menuItems: []
          },
        ]
      },
      {
        label: "Support",
        href: "/services/support",
        Image: {
          src: "https://example.com/support.png",
          label: null
        },
        menuItems: []
      }
    ]
  }
];
