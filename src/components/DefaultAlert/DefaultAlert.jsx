import React from "react";
import PropTypes from "prop-types";

import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

const DefaultAlert = ({ message, visible, onClose, severity }) => (
  <Snackbar
    open={visible}
    onClose={onClose}
    autoHideDuration={4000}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  >
    <Alert severity={severity} variant="filled" onClose={onClose}>
      {message}
    </Alert>
  </Snackbar>
);

DefaultAlert.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
};

export default DefaultAlert;
