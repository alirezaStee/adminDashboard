import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import supabase from "../config/supabaseClinet"; // database
import DeletModal from "../components/modal/DeletModal";
import EditeModal from "../components/modal/EditeModal";
import BtnActionUserPage from "../components/BtnActionInUserPage";
import TopBarBtnInUserPage from "../components/TopBarBtnInUserPage";
import ErrorAlert from "../components/alert/ErrorAlert";

function Users() {
  // style
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  // Optional - for accessing Grid's API
  const gridRef = useRef();

  // Set rowData to Array of Objects, one Object per Row
  const [rowData, setRowData] = useState();

  // set action that is edit handel or add new user handel
  const [action, setaction] = useState("");

  const [user, setUser] = useState({});

  // set isLoading for show Loading spiner
  const [isLoading, setisLoading] = useState(false);

  // error handeling
  const [isErrorAlertShow, setIsErrorAlertShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // open Delet Modal state
  const [openDeletModal, setOpenDeletModal] = useState(false);

  // open Edite Modal state
  const [isShowEditeModal, setIsShowEditeModal] = useState(false);

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "id",
      minWidth: 90,
      resizable: true,
    },
    {
      field: "firstName",
      minWidth: 100,
      resizable: true,
    },
    {
      field: "lastName",
      minWidth: 100,
      resizable: true,
    },
    {
      field: "email",
      minWidth: 110,
      resizable: true,
    },

    {
      field: "age",
      minWidth: 90,
    },
    {
      // btns in all rows
      field: "action",
      minWidth: 100,
      cellRenderer: (props) => (
        <div className="flex h-full items-center  gap-1">
          {/* Delete Btn */}
          <BtnActionUserPage
            color={"red"}
            onClick={() => {
              setOpenDeletModal(true);
              setUser(props.data);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-3 w-3"
            >
              <path
                fill="currentColor"
                d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0Zm-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2h7.5Zm2.5 6.5a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0v-10Zm5-1a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1Z"
              />
            </svg>
          </BtnActionUserPage>
          {/* Edite Btn */}
          <BtnActionUserPage
            color={"blue"}
            onClick={() => {
              console.log(props.data);
              setUser(props.data);
              setIsShowEditeModal(true);
              setaction("update");
            }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="h-3 w-3"
            >
              <path
                fill="currentColor"
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
              />
            </svg>
          </BtnActionUserPage>
        </div>
      ),
    },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
    editable: false,
    filter: true,
  }));

  // get data from server
  async function getData() {
    let { data: Users, error } = await supabase.from("Users").select("*");
    setRowData(Users);
    if (error) {
      setIsErrorAlertShow(true);
      setErrorMessage(error.message);
    }
  }

  //  load data from server
  useEffect(() => {
    getData();
  }, []);

  // onFirstDataRendered
  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
    window.addEventListener("resize", () => {
      gridRef.current.api.sizeColumnsToFit();
    });
  }, []);

  // function updateUser
  const updateUser = async () => {
    setisLoading(true);
    const { data, error } = await supabase
      .from("Users")
      .update(user)
      .eq("id", user.id)
      .select();

    if (data) {
      getData();
    }
    if (error) {
      setIsErrorAlertShow(true);
      setErrorMessage(error.message);
    }
    setisLoading(false);
    setIsShowEditeModal(false);
  };

  // function deletUserFun
  const deletUserFun = async (user) => {
    setisLoading(true);
    const { error } = await supabase.from("Users").delete().eq("id", user.id);
    setOpenDeletModal(false);
    getData();
    if (error) {
      setIsErrorAlertShow(true);
      setErrorMessage(error.message);
    }
    setisLoading(false);
  };

  // function addNewUser
  const addNewUser = async () => {
    setisLoading(true);
    const { data, error } = await supabase
      .from("Users")
      .insert([user])
      .select();
    if (data) {
      getData();
    }
    if (error) {
      setIsErrorAlertShow(true);
      setErrorMessage(error.message);
    }
    setisLoading(false);
    setIsShowEditeModal(false);
  };
  //  function exportDataAsCsv
  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  return (
    <div className="flex flex-col bg-white p-2 rounded-md shadow-[0_0_0.875rem_0_rgba(33,37,41,.05)]">
      {/* top bar btns */}
      <div className="mb-2 flex items-center justify-between">
        {/* btn Add New User */}
        <TopBarBtnInUserPage
          color="violet"
          title={"Add New User"}
          onClick={() => {
            setUser({});
            setaction("addUser");
            setIsShowEditeModal(true);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
            <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
          </svg>
        </TopBarBtnInUserPage>

        {/* btn Export */}
        <TopBarBtnInUserPage
          color="green"
          onClick={onBtnExport}
          title={"Export"}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
            <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
          </svg>
        </TopBarBtnInUserPage>
      </div>

      {/* Error alert  */}
      <ErrorAlert
        isErrorAlertShow={isErrorAlertShow}
        errorMessage={errorMessage}
        onClose={() => setIsErrorAlertShow(false)}
      ></ErrorAlert>

      {/* EditeModal for  updateUser or addNewUser*/}
      <EditeModal
        isShow={isShowEditeModal}
        onClose={() => setIsShowEditeModal(false)}
        data={user}
        setData={setUser}
        confirm={action == "update" ? updateUser : addNewUser}
        action={action}
        isLoading={isLoading}
      ></EditeModal>

      {/* DeletModal */}
      <DeletModal
        isShow={openDeletModal}
        onClose={() => setOpenDeletModal(false)}
        // for LodingSpiner
        isLoading={isLoading}
        confirm={() => {
          deletUserFun(user);

        }}
        title={'user'}
      ></DeletModal>

      {/* ag grid react */}
      <div className="ag-theme-alpine" style={containerStyle}>
        <AgGridReact
          style={gridStyle}
          ref={gridRef} // Ref for accessing Grid's API
          pagination={true}
          paginationPageSize={10}
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate
          onFirstDataRendered={onFirstDataRendered}
          paginateChildRows={true}
        />
      </div>
    </div>
  );
}

export default Users;
