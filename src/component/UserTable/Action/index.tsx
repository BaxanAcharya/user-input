import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import Delete from '../Delete';

interface IProps {
  id: string | undefined;
  deleteUser: (id: string) => void;
  editUser:(id:string)=>void;
}
const Action = (props: IProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    props.deleteUser(props.id as string);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const onEditClick = () => {
    props.editUser(props.id as string);
  };

  const onDeleteClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <IconButton aria-label="edit">
        <EditIcon className="edit-icon" onClick={onEditClick} />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon className="delete-icon" onClick={onDeleteClick} />
      </IconButton>
      {open && <Delete open={open} handleClick={handleClick} handleClose={handleClose} />}
    </>
  );
};

export default Action;