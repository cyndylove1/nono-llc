import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  defaultValue?: string;
  name?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  required = false,
  type = "text",
  defaultValue = "",
  name,
}) => {
  return (
    <Box component="div" sx={{ width: "100%", mb: 2 }}>
      <TextField
        name={name}
        required={required}
        label={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        fullWidth
        variant="outlined"
        InputLabelProps={{ shrink: type === "date" ? true : undefined }}
        sx={{
          "& .MuiInputBase-root": {
            height: "46px",
            borderRadius: "8px",
          },

          "& .MuiInputBase-input": {
            color: "#111827",
            fontSize: "0.875rem",

            "&::placeholder": {
              fontSize: "0.75rem",
              opacity: 0.7,
              color: "#9ca3af",
            },
          },

          "& .MuiInputLabel-root": {
            fontSize: "0.85rem",
            color: "#6b7280",

            "&.Mui-focused, &.MuiFormLabel-filled": {
              color: "#581c87",
              fontSize: "0.85rem",
            },
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#d8dadc",
            },
            "&:hover fieldset": {
              borderColor: "#581c87",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#581c87",
              borderWidth: "2px",
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomInput;
