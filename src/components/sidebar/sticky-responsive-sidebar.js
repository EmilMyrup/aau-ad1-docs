/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Component, Fragment } from 'react'

import Sidebar from './sidebar'
import ScrollSyncSidebar from './scroll-sync-sidebar'
import ChevronSvg from './chevron-svg'
import { mediaQueries } from '../../gatsby-plugin-theme-ui'

export default function StickyResponsiveSidebar ({ enableScrollSync, ...props }) {
  const [open, setOpen] = React.useState(false)

  const openSidebar = () => {
    setOpen(!open)
  }

  const closeSidebar = () => {
    setOpen(false)
  }

  const SidebarComponent = enableScrollSync ? ScrollSyncSidebar : Sidebar
  const iconOffset = open ? 5 : -5
  const menuOpacity = open ? 1 : 0

  return (
    <>
      <div
        sx={{
          border: 0,
          bottom: 0,
          display: 'block',
          height: '100vh',
          position: 'fixed',
          top: 0,
          transition: t =>
                        `opacity ${t.transition.speed.slow} ${t.transition.curve.default}`,
          width: 'sidebarWidth.mobile',
          zIndex: 'sidebar',
          [mediaQueries.md]: {
            height: t => `calc(100vh - ${t.sizes.headerHeight})`,
            maxWidth: 'none',
            opacity: '1 !important',
            pointerEvents: 'auto',
            top: t => `${t.sizes.headerHeight}`,
            width: 'sidebarWidth.default'
          },
          [mediaQueries.lg]: {
            width: 'sidebarWidth.large'
          },
          opacity: menuOpacity,
          pointerEvents: open ? 'auto' : 'none'
        }}
      >
        <div
          sx={{
            boxShadow: 'dialog',
            height: '100%',
            transform: open
              ? 'translateX(0)'
              : t => `translateX(-${t.sizes.sidebarWidth.mobile})`,
            transition: t =>
                            `transform ${t.transition.speed.slow} ${t.transition.curve.default}`,
            [mediaQueries.md]: {
              boxShadow: 'none',
              transform: 'none !important'
            }
          }}
        >
          <SidebarComponent
            closeSidebar={closeSidebar}
            {...props}
          />
        </div>
      </div>
      <div
        sx={{
          backgroundColor: 'gatsby',
          borderRadius: '50%',
          bottom: t => t.space[11],
          boxShadow: 'dialog',
          cursor: 'pointer',
          display: 'flex',
          height: t => t.space[10],
          justifyContent: 'space-around',
          position: 'fixed',
          right: t => t.space[6],
          visibility: 'visible',
          width: t => t.space[10],
          zIndex: 'floatingActionButton',
          [mediaQueries.md]: { display: 'none' }
        }}
        onClick={openSidebar}
        role='button'
        aria-label='Show Secondary Navigation'
        aria-controls='SecondaryNavigation'
        aria-expanded={open ? 'true' : 'false'}
        tabIndex={0}
      >
        <div
          sx={{
            alignSelf: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            height: t => t.space[5],
            visibility: 'visible',
            width: t => t.space[5]
          }}
        >
          <ChevronSvg
            size={16}
            cssProps={{
              transform: `translate(${iconOffset}px, 5px) rotate(90deg)`,
              transition: t =>
                                `transform ${t.transition.speed.slow} ${t.transition.curve.default}`
            }}
          />
          <ChevronSvg
            size={16}
            cssProps={{
              transform: `translate(${5 -
                            iconOffset}px, -5px) rotate(270deg)`,
              transition: t =>
                                `transform ${t.transition.speed.slow} ${t.transition.curve.default}`
            }}
          />
        </div>
      </div>
    </>
  )
}
