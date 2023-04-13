import React from 'react'
import Link from "next/link"



function ListItem({children, link}) {
    function replaceSpacesWithHyphens(str) {
        return str.replace(/\s+/g, '-');
      }
  return (
    <Link href={replaceSpacesWithHyphens(link)}>{children}</Link>
  )
}

export default ListItem