import { ChangeEvent, ReactNode } from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

type TProps = {
  label: string;
  type: 'date' | 'number' | 'password' | 'text' | 'email';
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  value?: string | undefined;
  onClickEndIcon?: () => void;
  onClickStartIcon?: () => void;
  onChange: (
    value: string,
    event?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  containerStyles?: Record<string, any>;
};

const OutlinedTextField = ({
  label,
  type,
  startIcon,
  endIcon,
  onClickStartIcon,
  onClickEndIcon,
  onChange,
  value,
  containerStyles = {},
}: TProps) => {
  const id = `outlined-adornment-${label}`;

  return (
    <FormControl
      sx={{ width: '100%', ...containerStyles }}
      variant="outlined"
      size="small"
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={type}
        onChange={(event) => onChange(event.target.value, event)}
        value={value}
        startAdornment={
          startIcon ? (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => onClickStartIcon?.()}
                edge="start"
                size="small"
              >
                {startIcon}
              </IconButton>
            </InputAdornment>
          ) : null
        }
        endAdornment={
          endIcon ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => onClickEndIcon?.()}
                edge="end"
                size="small"
              >
                {endIcon}
              </IconButton>
            </InputAdornment>
          ) : null
        }
        label={label}
      />
    </FormControl>
  );
};

export default OutlinedTextField;
