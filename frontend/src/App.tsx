import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import {
  RefineSnackbarProvider,
  useNotificationProvider,
} from "@refinedev/mui";
import { BrowserRouter } from "react-router-dom";

import { AppIcon } from "@/components/app-icon";
import { ColorModeContextProvider } from "@/contexts/color-mode";
import { authProviderClient } from "@/providers/auth-provider/auth-provider.client";
import { dataProvider } from "@/providers/data-provider";
import { DevtoolsProvider } from "@/providers/devtools";

import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import ApiIcon from "@mui/icons-material/Api";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";

import AppRoutes from "@/routes/AppRoutes";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                routerProvider={undefined} // Удалить если используешь react-router
                dataProvider={dataProvider}
                notificationProvider={useNotificationProvider}
                authProvider={authProviderClient}
                resources={[
                  {
                    name: "Программы",
                    list: "/programs",
                    icon: <ComputerRoundedIcon />,
                  },
                  {
                    name: "API",
                    list: "/api",
                    icon: <ApiIcon />,
                  },
                  {
                    name: "Панель администратора",
                    list: "/dashboard",
                    icon: <DashboardIcon />,
                  },
                  {
                    name: "Аналитика",
                    list: "/analytics",
                    icon: <AnalyticsIcon />,
                  },
                  {
                    name: "Задачи",
                    list: "/tasks",
                    icon: <TaskAltIcon />,
                  },
                  {
                    name: "История",
                    list: "/history",
                    icon: <ManageSearchIcon />,
                  },
                  {
                    name: "Поддержка",
                    list: "/helper",
                    icon: <HelpIcon />,
                  },
                  {
                    name: "Настройки ",
                    list: "/settings",
                    icon: <SettingsIcon />,
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "5TAvqo-nlABPq-pdDwTk",
                  title: { text: "BestHub", icon: <AppIcon /> },
                }}
              >
                <AppRoutes />
                <RefineKbar />
              </Refine>
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}
