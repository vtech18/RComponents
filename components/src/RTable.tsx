import React from "react";
import { RTableProps } from "./types/types";

// this table is purely based on bootstrap and react  with some logics

 // TODO:  installation: 1) react 2) bootstrap(package or cdn)  3) better comments extinction(Aaron Bond)
    

// inputs needed to be given as
/*
Columns:
--  columns are the data you will provide(static/dynamic) 
ex from back end if you get data as  const data={id:1,name_of_the_leader:"venu"} 


Headers:
   --- headers are the <th/> values we have 
   ex: headers must be as  const headers=[{key:"id",header:"ID"},{key:"name_of_the_leader",header:"Leader name"}]
  - you can control the no items to be displayed 

  ex  data will be sent as  
   const data={id:1,
    name_of_the_leader:"venu",
    mobile:9945839323,
    password:"123#Abc",
    userName:"venu18",
    gender:"Male"} ---and you want to hide mobile number and password then you can control it by sending required keys

    const headers=[{key:"id",header:"ID"},
    {key:"name_of_the_leader",header:"Leader name"},
    {key:"userName", header:"User Name"},
    {key:"gender",header:"Gender"}    ----key must be same as the property of the object data----
     _______________________________________________
    |    ID    |Leader Name | User Name | Gender   |
    |__________|____________|__________ |__________|        
    |          |            |           |          |
    |          |            |           |          |
    |          |            |           |          |
    |          |            |           |          |   
    ------------------------------------------------
onCheckboxChange:
  --- here in my req i have check box for every row to delete a bulk amount ...
      this function decides what action need to be taken  when checked or unchecked--

bulkDeleteArray:

   ---- this array where i am storing the checked row id's do that  can show the checked and unchecked data

editButtonText,deleteButtonText

  ---- here what i am doing is edit and delete button text is taking from user point of view because , 
  when i am working on a project i would have icons some time ,some times plain text.. so i created this one 

 deleteButtonColor,editButtonColor:

 ---- here comes sight disadvantage since i am using bootstrap thi s button colors need to  choose from the option i provide
       "primary","secondary","warning","danger","success"

   onEdit :

    ---   on edit is a function which will pass entire row data 
       note :" even if you display few details only , on edit pass entire data"

    onDelete:

    --- on delete will give you the ID of the row data(since every backend data will have ID) we can perform delete operation
            (if you want to you can do so it inside component )

    tableRef:

    -----this is the useRef() value used in react to trace the data of a DOM Element;
         Im my case i need to print ths table & is is done with ref value 

    hideButtons:

       ---boolean value in order to hide action buttons because while printing i 
             need to hide the buttons right so it will be needed in my case



*/

const RTable: React.FC<RTableProps> = ({
  headers,
  columns,
  onCheckboxChange,
  bulkDeleteArray,
  editButtonText,
  deleteButtonText,
  deleteButtonColor = "danger", //
  editButtonColor,
  onEdit,
  onDelete,
  tableRef,

  hideButtons,
}: RTableProps) => {
  return (
    <div>
      <table ref={tableRef} className="table table-responsive">
        <thead>
          <tr>
            {!hideButtons && <th> </th>}
            {headers.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
            {!hideButtons && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {columns.map((row, rowIndex) => (
            <tr key={rowIndex + 1}>
              {!hideButtons && (
                <td>
                  <input
                    type="checkbox"
                    checked={bulkDeleteArray.includes(row.id || rowIndex + 1)}
                    onChange={() => onCheckboxChange(row.id || rowIndex + 1)}
                  />
                </td>
              )}
              {headers.map((header) => (
                //  editButtonColor=="primary" &&header.key==="name"   ?
                //  <td key={header.key}>{row?.firstName+" " +row?.lastName||"N/A"}</td>:
                <td key={header.key}>{row[header.key] || "N/A"}</td>
              ))}
              {!hideButtons && (
                <td>
                  <button
                    className={`btn btn-sm btn-${editButtonColor} me-1`}
                    onClick={() => onEdit(row)}
                  >
                    {editButtonText}
                  </button>
                  <button
                    className={`btn btn-sm btn-${deleteButtonColor}`}
                    onClick={() => onDelete(row.id)}
                  >
                    {deleteButtonText}
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RTable;
