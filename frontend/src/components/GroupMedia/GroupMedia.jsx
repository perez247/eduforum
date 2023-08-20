import React from "react";
import {
  FolderArrowDownIcon,
  ArchiveBoxArrowDownIcon,
} from "@heroicons/react/24/outline";
import { Input, Button, IconButton } from "@material-tailwind/react";

const GroupMedia = () => {
  return (
    <div className="">
      <div className="flex justify-between py-6 ps-20">
        <div className="w-1/3">
          <Input label="Search by name" />
        </div>
        <div className="w-1/3 flex justify-end items-center">
          <IconButton variant="text" className="flex justify-center">
            <ArchiveBoxArrowDownIcon className="h-6 w-6 text-black mx-1" />
          </IconButton>
        </div>
      </div>
      <div className="h-5/6 overflow-auto">
        <table className="table-auto w-full h-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-start">Name</th>
              <th className="text-start">Uplaoded By</th>
              <th className="text-start">Date</th>
              <th className="text-start">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="h-6 w-6 text-black mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="h-6 w-6 text-black mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="h-6 w-6 text-black mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="h-6 w-6 text-black mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="felx-initial h-6 w-6 text-black ms-2 mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="felx-initial h-6 w-6 text-black ms-2 mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="felx-initial h-6 w-6 text-black ms-2 mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="felx-initial h-6 w-6 text-black ms-2 mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="felx-initial h-6 w-6 text-black ms-2 mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="felx-initial h-6 w-6 text-black ms-2 mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="felx-initial h-6 w-6 text-black ms-2 mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcome document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="felx-initial h-6 w-6 text-black ms-2 mx-1" />
                </IconButton>
              </td>
            </tr>
            <tr className="h-14">
              <td className="text-center">
                <input type="checkbox" className="mr-5" />
              </td>
              <td className="text-primary">Welcomederfghydfghdxfhb document</td>
              <td>John Doe</td>
              <td>20th october, 2023</td>
              <td>
                <IconButton variant="text">
                  <FolderArrowDownIcon className="felx-initial h-6 w-6 text-black ms-2 mx-1" />
                </IconButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupMedia;
