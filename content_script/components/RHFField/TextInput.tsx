import { Box, TextField, Typography, IconButton } from '@mui/material';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { Close, Search } from '@mui/icons-material';

interface TextInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  slotProps?: {
    input?: object;
  };
  showPasswordToggle?: boolean;
  onTogglePasswordVisibility?: () => void;
  isCloseIcon?: boolean;
  marginButton?: number;
  multiLine?: boolean;
  maxRows?: number;
}

const TextInput = <T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  showPasswordToggle = false,
  disabled = false,
  isCloseIcon,
  marginButton = 3,
  multiLine = false,
  maxRows = multiLine ? 3 : undefined,
  onTogglePasswordVisibility,
  ...props
}: TextInputProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => (
      <Box
        sx={{
          mb: marginButton,
        }}
      >
        {label && (
          <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
            {label}
          </Typography>
        )}
        <TextField
          {...field}
          type={type}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          disabled={disabled}
          fullWidth
          multiline={multiLine}
          maxRows={maxRows}
          variant="outlined"
          sx={(theme) => ({
            borderRadius: '8px',
            textarea: {
              minHeight: maxRows ? `${maxRows * 24}px` : 'auto',
            },
            '& .MuiInputBase-root': {
              color: theme.palette.primary.main,
              backgroundColor: '#ece6f0', // Example: change background color
              borderRadius: `${theme.shape.borderRadius / 2}px`, // Rounded corners
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'transparent', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', // Border color when focused
              },
            },
            '& .MuiInputBase-input': {
              padding: '10px', // Padding inside input
            },
          })}
          slotProps={{
            input: {
              borderRadius: `none`,
              ...props.slotProps?.input,
              ...(isCloseIcon && {
                endAdornment: (
                  <IconButton
                    onClick={onTogglePasswordVisibility}
                    edge="end"
                    sx={{
                      color: 'text.primary',
                      borderRadius: 0,
                      '&:focus': {
                        outline: 'none',
                      },
                      '&:focus-visible': {
                        outline: 'none',
                      },
                    }}
                  >
                    <Close fontSize="medium" color="customGrey" />
                  </IconButton>
                ),
                startAdornment: (
                  <IconButton
                    onClick={onTogglePasswordVisibility}
                    edge="start"
                    sx={{
                      color: 'text.primary',
                      borderRadius: 0,
                      '&:focus': {
                        outline: 'none',
                      },
                      '&:focus-visible': {
                        outline: 'none',
                      },
                    }}
                  >
                    <Search fontSize="medium" color="customGrey" />
                  </IconButton>
                ),
              }),
            },
          }}
          {...props}
        />
      </Box>
    )}
  />
);

export default TextInput;
