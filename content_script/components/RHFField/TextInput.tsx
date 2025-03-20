import { Box, TextField, Typography, IconButton } from '@mui/material';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { Close } from '@mui/icons-material';

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
      <Box sx={{ mb: marginButton }}>
        <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
          {label}
        </Typography>
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
          sx={{
            textarea: {
              minHeight: maxRows ? `${maxRows * 24}px` : 'auto',
            },
          }}
          slotProps={{
            input: {
              sx: {
                borderRadius: 2,
                backgroundColor: 'white',
              },
              ...props.slotProps?.input,
              ...(isCloseIcon && {
                endAdornment: (
                  <IconButton
                    onClick={onTogglePasswordVisibility}
                    edge="end"
                    sx={{
                      color: 'text.primary',
                    }}
                  >
                    <Close fontSize="medium" color="customGrey" />
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
