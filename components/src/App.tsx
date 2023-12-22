import { useRef  } from "react";
 
import "./App.css";
import RTable from "./RTable";

function App() {
  const headers = [
    { key: "id", header: "ID" },
    { key: "name", header: "Leader Name" },
    { key: "username", header: "User Name" },
  ];
  const columns = [
    { id: "1", name: "kickku", username: "kick18", mobile: "9568302948" },
    { id: "2", name: "guntharu", username: "gunthar19", mobile: "7438293748" },
  ];
  const tableRef=useRef()
  return (
    <>
      <RTable
        bulkDeleteArray={[]}
        columns={columns}
        deleteButtonColor="danger"
        deleteButtonText={"DEL"}
        editButtonColor="primary"
        editButtonText={"EDIT"}
        headers={headers}
        hideButtons={false}
        onCheckboxChange={()=>{}}
        onDelete={()=>{}}
        onEdit={()=>{}}
         searchQuery=""
         tableRef={tableRef}

      />
    </>
  );
}

export default App;
