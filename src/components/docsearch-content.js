import React from "react"

export default ({ children }) => (
  <main
    id={`reach-skip-nav`}
    className={`docSearch-content`}
    // need this for the main sidebar's anchor links to work properly
    // in the context of `template-docs-markdown`
    css={{ position: `relative` }}
  >
    {children}
  </main>
)
