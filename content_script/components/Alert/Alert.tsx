import { Box, Typography } from '@mui/material';
import AlertStyle from './alert-styles';
import { Close } from '@mui/icons-material';

interface AlertProps {
  title: string;
}
const Alert = ({ title }: AlertProps) => {
  const { classes } = AlertStyle();

  return (
    <Box className={classes.container}>
      <Typography variant="title" className={classes.heading}>
        {title}
      </Typography>
      <Close fontSize="medium" color="customGrey" />
    </Box>
  );
};

export default Alert;
