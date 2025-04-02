import * as React from 'react';
import { default as MuiPopover } from '@mui/material/Popover';
import { Box, IconButton, SvgIconTypeMap, useTheme } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import popoverStyles from './popOver-styles';

interface PopoverOptions {
  PopoverTrigger: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  PopoverOptions: () => React.JSX.Element;
}
export default function Popover({
  PopoverTrigger,
  PopoverOptions,
}: PopoverOptions) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const theme = useTheme();
  const { classes } = popoverStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  console.log('open', theme.spacing(2));
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box className={classes.container}>
      <IconButton onClick={handleClick}>
        <PopoverTrigger />
      </IconButton>
      <MuiPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={classes.container}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <PopoverOptions />
      </MuiPopover>
    </Box>
  );
}
