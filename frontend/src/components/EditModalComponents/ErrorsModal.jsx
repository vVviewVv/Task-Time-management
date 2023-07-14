import { Box, Typography, Modal, useTheme, Button } from "@mui/material";

export default function ErrorsModal({ showErrors, setShowErrors, errors }) {
  const theme = useTheme();

  const handleClose = () => {
    setShowErrors(false);
  };

  return (
    <>
      <Modal
        hideBackdrop
        open={showErrors}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 3,
            width: 400,
            bgcolor: theme.palette.custom.white,
            boxShadow: 20,
            borderRadius: "5px",
            color: theme.palette.custom.defaultTextColor,
          }}
        >
          <Typography sx={{ fontWeight: 500, fontSize: 18 }}>
            Something wrong with inputs
          </Typography>
          <Box sx={{ mt: 1 }}>
            {errors.detail && (
              <Typography sx={{ ml: 2, color: "red" }}>
                {errors.detail}
              </Typography>
            )}
            {errors.date && (
              <Typography sx={{ ml: 2, color: "red" }}>
                {errors.date}
              </Typography>
            )}
            {errors.startTime && (
              <Typography sx={{ ml: 2, color: "red" }}>
                {errors.startTime}
              </Typography>
            )}
            {errors.endTime && (
              <Typography sx={{ ml: 2, color: "red" }}>
                {errors.endTime}
              </Typography>
            )}
            {errors.workHours && (
              <Typography sx={{ ml: 2, color: "red" }}>
                {errors.workHours}
              </Typography>
            )}
            {errors.status && (
              <Typography sx={{ ml: 2, color: "red" }}>
                {errors.status}
              </Typography>
            )}
            {errors.project && (
              <Typography sx={{ ml: 2, color: "red" }}>
                {errors.project}
              </Typography>
            )}
          </Box>

          <Button sx={{ float: "right" }} onClick={handleClose}>
            Ok
          </Button>
        </Box>
      </Modal>
    </>
  );
}
