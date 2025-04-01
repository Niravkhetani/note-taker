import { Box, Typography } from '@mui/material';
import AlertStyle from './alert-styles';
import { Close } from '@mui/icons-material';

interface AlertProps {
  title: string;
  setShowAlert: (value: boolean) => void;
}
const Alert = ({ title, setShowAlert }: AlertProps) => {
  const { classes } = AlertStyle();
  const onClose = () => {
    setShowAlert(false);
  };

  return (
    <Box className={classes.container}>
      <Typography variant="title" className={classes.heading}>
        {title}
      </Typography>
      <Close
        fontSize="medium"
        color="customGrey"
        cursor="pointer"
        onClick={onClose}
      />
    </Box>
  );
};

export default Alert;
