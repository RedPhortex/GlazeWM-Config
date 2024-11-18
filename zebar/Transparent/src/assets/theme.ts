import { extendTheme } from "@mui/joy";

const theme = extendTheme({
  cssVarPrefix: "zebar",
  components: {
    JoyChip: {
      defaultProps: { variant: "soft", color: "neutral", size: "lg" },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 6,
          backgroundColor: "var(--background-color)",
          ["&:hover"]: {
            backgroundColor: "var(--hover-color)",
          },
          ...(ownerState.size === "lg" && {
            fontSize: "var(--font-size)",
          }),
        }),
        action: {
          ["&:hover"]: {
            backgroundColor: "var(--hover-color)",
          },
        },
      },
    },
  },
});

export default theme;
