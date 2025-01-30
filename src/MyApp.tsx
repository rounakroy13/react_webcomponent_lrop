import {
    ShellBar,
    Icon,
    Input,
    Avatar
} from "@ui5/webcomponents-react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { ListReport } from "./ListReport";
import { DetailsPage } from "./DetailsPage";
export function MyApp() {
    return (
        <div>
            <ShellBar
                logo={
                    <img
                        alt="SAP Logo"
                        src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"
                    />
                }
                notificationsCount="10"
                /* onLogoClick={function Ki() { }}
                onMenuItemClick={function Ki() { }}
                onNotificationsClick={function Ki() { }}
                onProductSwitchClick={function Ki() { }}
                onProfileClick={function Ki() { }}
                onSearchButtonClick={function Ki() { }} */
                primaryTitle="Home"
                profile={
                    <Avatar>
                        <img src="https://sap.github.io/ui5-webcomponents-react/v2/assets/Person-B7wHqdJw.png" />
                    </Avatar>
                }
                searchField={<Input icon={<Icon name="search" />} showClearIcon />}
                secondaryTitle="Explore"
                showNotifications
            >
            </ShellBar>
            <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/ListReport" element={<ListReport />} />
            <Route path="/DetailsPage" element={<DetailsPage />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </div>
    );
}
