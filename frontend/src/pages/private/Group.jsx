import React from "react";
import GroupHeading from "../../components/GroupHeading/GroupHeading";
import GroupBody from "../../components/GroupBody/GroupBody";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

const Group = () => {
  return (
    <div>
      <GroupHeading
        heading={"Curriculum Hub"}
        subHeading={"Lesson Plans, Templates and Inspiration"}
        showTab={true}
        headingIcon={
          <AcademicCapIcon className="h-13 w-13 text-lg text-primary" />
        }
      />
      <GroupBody />
    </div>
  );
};

export default Group;
