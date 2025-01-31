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
    const handleCardClickLROP = () => {
        navigate("/ListReport");
    };
    const handleCardClickTableFetch = () => {
        navigate("/TableFetch");
    }
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
                                onClick={handleCardClickLROP}
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
                            <Text> Dummy App </Text>
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
                            <Text>  Dummy App </Text>
                        </div>
                    </Card>
                </Tab>
                <Tab text="Table Example">
                    <Card
                        header={
                            <CardHeader
                                avatar={<Icon name="approvals" />}
                                subtitleText="Using Fetch"
                                titleText="Table"
                                interactive
                                onClick={handleCardClickTableFetch}
                            />
                        }
                        style={{
                            width: "300px",
                        }}
                        
                    >
                        <div style={{ padding: "25px" }}>
                            <Text>  Table with Nothwind Data - Fetch </Text>
                        </div>
                    </Card>
                </Tab>
                <Tab text="Invoice">
                    <Card
                        header={
                            <CardHeader
                                avatar={<Icon name="approvals" />}
                                subtitleText="Approve"
                                titleText="Table"
                            />
                        }
                        style={{
                            width: "300px",
                        }}
                    >
                         <div style={{ padding: "25px" }}>
                            <Text>  Table with Nothwind Data - oData Model </Text>
                        </div>
                    </Card>
                </Tab>
            </TabContainer>
        </div>
    );
}
