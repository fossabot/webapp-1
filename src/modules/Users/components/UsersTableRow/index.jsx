import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const getUserRoles = (roles = {}) => Object.keys(roles)
  .filter(role => roles[role]);

const UsersTableRow = ({ user }) => (
  <TableRow>
    <TableCell>
      <Avatar
        alt={user.fullName}
        src={user.photoURL}
      />
    </TableCell>
    <TableCell>
      {user.fullName}
    </TableCell>
    <TableCell>{user.email}</TableCell>
    <TableCell>{user.phone}</TableCell>
    <TableCell>{getUserRoles(user.roles).join(', ')}</TableCell>
  </TableRow>
);

UsersTableRow.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default UsersTableRow;
