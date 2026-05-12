import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import { useField } from "formik";

function TextInputField({ name, label }) {
  const [field, meta, helpers] = useField(name);
  const isError = meta.touched && Boolean(meta.error);

  return (
    <TextField
      {...field}
      label={label}
      variant="outlined"
      fullWidth
      size="small"
      error={isError}
      helperText={isError ? meta.error : ""}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <CloseIcon onClick={() => helpers.setValue("")}></CloseIcon>
            </InputAdornment>
          ),
        },
      }}
      sx={{
        "& .MuiInputLabel-root": {
          fontSize: "1.3rem",
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: "black",
        },

        "& .MuiInputLabel-shrink": {
          transform: "translate(14px, -8px) scale(0.65)",
        },

        "& .MuiOutlinedInput-root": {
          color: "black",

          "& .MuiOutlinedInput-input": {
            fontSize: "1.5rem",
            padding: "8px 10px",
          },

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            borderWidth: "3px",
            borderRadius: 0,
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            borderWidth: "3px",
          },
        },

        "& .MuiInputAdornment-root": {
          cursor: "pointer",
          color: "black",
          border: "3px solid black",
        },
      }}
    ></TextField>
  );
}

export default TextInputField;
