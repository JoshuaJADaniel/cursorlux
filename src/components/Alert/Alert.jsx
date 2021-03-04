import React from "react";
import PropTypes from "prop-types";

import { Snackbar } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab";

const Alert = ({ message, visible, onClose, severity }) => (
  <Snackbar
    open={visible}
    onClose={onClose}
    autoHideDuration={4000}
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
  >
    <MuiAlert severity={severity} variant="filled" onClose={onClose}>
      {message}
    </MuiAlert>
  </Snackbar>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
};

export default Alert;
