import React from 'react'
import { Input } from "@material-tailwind/react";
import {
    MagnifyingGlassIcon
  } from "@heroicons/react/24/solid";

const SearchApp = (props) => {
  return (
    <div className={`w-full ${props.className}`}>
      <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
    </div>
  )
}

export default SearchApp
