import {
    ShellBar,
    ShellBarItem,
    Icon,
    Avatar,
    Input,
    Card,
    CardHeader,
    TabContainer,
    Tab,
    Text
} from "@ui5/webcomponents-react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "@ui5/webcomponents/dist/CardHeader.js";
export function Home() {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate("/ListReport");
    };
    return (
        <div>
            <TabContainer
                contentBackgroundDesign="Solid"
                headerBackgroundDesign="Solid"
                onTabSelect={function Ki() { }}
                tabLayout="Standard"
            >
                <Tab selected text="Employee">
                    <Card
                        header={
                            <CardHeader
                                avatar={<Icon name="employee" />}
                                subtitleText="Direct Reports"
                                titleText="Maintain Employee"
                                interactive
                                onClick={handleCardClick}
                            />

                        }

                        style={{
                            width: "300px",
                        }}
                    >
                        <div style={{ padding: "25px" }}>
                            <Text> Manage Employee Details </Text>
                        </div>
                    </Card>
                    <Card
                        header={
                            <CardHeader
                                avatar={<Icon name="employee" />}
                                subtitleText="Direct Reports"
                                titleText="Add Employee"
                            />
                        }
                        style={{
                            width: "300px",
                        }}
                    >
                        <div style={{ padding: "25px" }}>
                            <Text> Add New Employee </Text>
                        </div>
                    </Card>
                    <Card
                        header={
                            <CardHeader
                                avatar={<Icon name="employee" />}
                                subtitleText="Direct Reports"
                                titleText="Remove Employee"
                            />
                        }
                        style={{
                            width: "300px",
                        }}
                    >
                        <div style={{ padding: "25px" }}>
                            <Text> Remove Employee Details </Text>
                        </div>
                    </Card>
                </Tab>
                <Tab text="Sales Order">
                    <Card
                        header={
                            <CardHeader
                                avatar={<Icon name="approvals" />}
                                subtitleText="Approve"
                                titleText="Manage Sales Order"
                            />
                        }
                        style={{
                            width: "300px",
                        }}
                    ></Card>
                </Tab>
                <Tab text="Invoice">
                    <Card
                        header={
                            <CardHeader
                                avatar={<Icon name="approvals" />}
                                subtitleText="Approve"
                                titleText="Manage Invoice"
                            />
                        }
                        style={{
                            width: "300px",
                        }}
                    ></Card>
                </Tab>
            </TabContainer>
        </div>
    );
}
