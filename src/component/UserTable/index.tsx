import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { IUser } from "../../interfaces/iuser";
import constants from "../../config/constants";
import Action from "./Action";

interface IProps {}

const UserTable = (props: IProps) => {
  const [selectedRow, setSelectedRow] = useState<string>();

  const handleSectionChange = (selection: any) => {
    let selected = selection?.selectionModel?.map((id: string) => id);
    setSelectedRow(selected[0]);
  };

  const columns = [
    {
        field: "name",
        headerName: "Name",
        width: 130,
    },
    {
      field: "email",
      headerName: "Email",
      width: 130,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 100,
    },
    {
      field: "dob",
      headerName: "DOB",
      width: 100,
    },
    {
      field: "city",
      headerName: "City",
      width: 130,
    },
    {
      field: "district",
      headerName: "District",
      width: 100,
    },
    {
      field: "province",
      headerName: "Province",
      width: 100,
    },
    {
      field: "country",
      headerName: "Country",
      width: 130,
    },
    {
        field: 'id',
        headerName: 'Actions',
        width: 150,
        renderCell: (params: any) => (
          <strong>
            {params.value.id}
            <Action id={selectedRow} />
          </strong>
        ),
      },
  ];

  const rows: IUser[] = [
    {
      id: "1",
      name: "Lok",
      email: "string",
      phone: "string",
      dob: "string",
      city: "string",
      district: "string",
      province: 1,
      country: "string",
    },
  ];

  return (
    <DataGrid

      className="table__paper"
      rows={rows}
      autoHeight={true}
      columns={columns}
      pageSize={constants.pagination.limit}
      onSelectionModelChange={handleSectionChange}
    />
  );
};

export default UserTable;
