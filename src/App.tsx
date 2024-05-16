import {
  AppShell,
  MantineColorsTuple,
  MantineProvider,
  createTheme,
} from "@mantine/core";

import "@mantine/core/styles.css";
import Page from "./page";

const myColor: MantineColorsTuple = [
  "#f3f3fe",
  "#e4e6ed",
  "#c8cad3",
  "#a9adb9",
  "#9093a4",
  "#808496",
  "#767c91",
  "#656a7e",
  "#585e72",
  "#4a5167",
];

const theme = createTheme({
  primaryColor: "blue-gray",
  colors: {
    "blue-gray": myColor,
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell>
        <AppShell.Main maw="42rem" mx="auto" mt="4rem">
          <Page />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
