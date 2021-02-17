import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import Delete from '../Delete';
import { useHistory } from 'react-router-dom';

interface IProps {
  id: string | undefined;
}
const Action = (props: IProps) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    // deletePropertyTypeMutation({

    // });
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const onEditClick = () => {
    history.push(`/property-type/edit/${props?.id}`);
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