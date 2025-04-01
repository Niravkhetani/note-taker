import * as React from 'react';
import { default as MuiPopover } from '@mui/material/Popover';
import { Box, IconButton, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  console.log('open', open);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <PopoverTrigger />
      </IconButton>
      <MuiPopover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
        <PopoverOptions />
      </MuiPopover>
    </Box>
  );
}
