import React, {useEffect, useState} from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

/**
 * 
 * @param {object} props 
 * @param {number} props.Datalength
 * @param {number} props.itemsPerPage
 * @param {(data) => {}} props.changedIndex
 * @returns 
 */
const Pagination = (props) => {
  const [active, setActive] = React.useState(0);
  const [buttonList, setButtonList] = React.useState(0);

  useEffect(() => {
    const count = props.Datalength / props.itemsPerPage;
    setButtonList(Math.ceil(count));
  }, [])

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => {
      setActive(index)
      props.changedIndex(index);
    },
  });

  const next = () => {
    if (active === buttonList) return;
    setActive(active + 1);
    props.changedIndex(active);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    props.changedIndex(active);
  };
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 0}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {
          [...Array(buttonList)].map((e, i) => {return (<IconButton key={i} {...getItemProps(i)}>{i+1}</IconButton>)} )
        }
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === buttonList}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Pagination;
