import {
    Table,
    TableRow,
    TableCell,
    TableHeaderRow,
    TableHeaderCell,
    Input,
    Button,
    Title,
    ResponsiveGridLayout,
    BarcodeScannerDialog
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/CardHeader.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ListReport() {
    const employees = [
        { id: "I322201", firstname: "Test User 1", lastname:"-", email: "abc.roy@sap.com" },
        { id: "I322202", firstname: "Test User 2", lastname:"Roy", email: "def.roy@sap.com" },
        { id: "I322203", firstname: "Raunak", lastname:"Roy", email: "rounak.roy@sap.com" },
        { id: "I322204", firstname: "Test User 3", lastname:"Roy", email: "ghi.roy@sap.com" },
        { id: "I322205", firstname: "Test User 4", lastname:"Roy", email: "jkl.roy@sap.com" },
        { id: "I322206", firstname: "Test User 5", lastname:"", email: "mno.roy@sap.com" },
        { id: "I322207", firstname: "Test User 6", lastname:"Roy", email: "pqr.roy@sap.com" },
        { id: "I322208", firstname: "Test User 7", lastname:"Roy", email: "stu.roy@sap.com" },
    ];
    const [searchTerm, setSearchTerm] = useState("");

    // Filter employees based on search input
    const filteredEmployees = employees.filter(
        (emp) =>
            emp.id.toLowerCase().includes((searchTerm || "").toLowerCase()) ||
            emp.firstname.toLowerCase().includes((searchTerm || "").toLowerCase())
    );

    const navigate = useNavigate();
    const handleItemClick = () => {
        navigate("/DetailsPage");
    };
    //const scannerRef = useRef(null);
    const [recognition, setRecognition] = useState(null);
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recog = new SpeechRecognition();
            recog.continuous = false;
            recog.lang = "en-US"; // Set language
            recog.interimResults = false;

            recog.onstart = () => {
                setIsListening(true);
                console.log("Listening for commands...");
            };

            recog.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                console.log("Recognized:", transcript);
                const dlgVoice: any = document.getElementById("search");
                if (transcript.includes("open scanner")) {
                    openScanner();
                } else {
                    dlgVoice.value = transcript;
                    const event1: any = new Event("input", { bubbles: true, composed: true });
                    dlgVoice.dispatchEvent(event1);
                }
            };

            recog.onerror = (event: any) => {
                console.error("Voice Recognition Error:", event.error);
            };

            recog.onend = () => {
                setIsListening(false);
                console.log("Stopped listening");
            };

            setRecognition(recog);
        } else {
            console.error("Speech Recognition not supported in this browser.");
        }
    }, []);

    const startListening = () => {
        if (recognition) {
            recognition.start();
        }
    };

    const openScanner = () => {
        const dlgScan: any = document.getElementById("test");
        dlgScan.open = true;
    };

    const handleScanSuccess = (event: any) => {
        const dlgScan: any = document.getElementById("test");
        const dlgVoice: any = document.getElementById("search");
        dlgVoice.value = event.detail.text;
        const event1: any = new Event("input", { bubbles: true, composed: true });
        dlgVoice.dispatchEvent(event1);
        dlgScan.open = false;
        //alert(`Scanned Data: ${event.detail.text}`); // Handle the scanned result
    };
    return (
        <div>
            <Title level="H4" style={{ paddingLeft: "15px", paddingTop: "10px", paddingBottom: "10px" }}>
                Maintain Employee
            </Title>
            <div>
                <ResponsiveGridLayout style={{ paddingLeft: "15px" }}>
                    <React.Fragment key=".0">
                        <div
                            className="responsiveGridLayoutItem"
                            style={{
                                gridColumn: "span 4",
                            }}
                        >
                            <div style={{ paddingRight: "15px", position: "relative", display: "inline-block" }}>
                                <Input id="search" style={{ paddingRight: "15px", position: "relative" }} placeholder="Search"  onInput={(e) => setSearchTerm(e.target.value)} />
                                <Button
                                    design="Transparent"
                                    icon="sap-icon://bar-code"
                                    onClick={openScanner}
                                    style={{
                                        position: "absolute",
                                        right: "15px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        height: "70%",
                                    }}

                                />
                                <BarcodeScannerDialog
                                    id="test"
                                    onScanSuccess={handleScanSuccess}
                                    onScanError={handleScanSuccess}
                                ></BarcodeScannerDialog>
                                <Button
                                    design="Transparent"
                                    icon="sap-icon://microphone"
                                    onClick={startListening}
                                    style={{
                                        position: "absolute",
                                        right: "50px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        height: "70%",
                                    }}
                                />
                            </div>
                            <Button
                                design="Transparent"
                                type="Submit"
                                icon="sap-icon://menu2"
                            />
                        </div>
                    </React.Fragment>
                </ResponsiveGridLayout>
            </div>
            <Table
                style={{ paddingTop: "5px", paddingLeft: "15px", paddingRight: "15px" }}
                headerRow={<TableHeaderRow sticky><TableHeaderCell ><span>I-Number</span></TableHeaderCell><TableHeaderCell ><span>First Name</span></TableHeaderCell><TableHeaderCell ><span>Last Name</span></TableHeaderCell><TableHeaderCell><span>Email</span></TableHeaderCell></TableHeaderRow>}
                onMove={function Ki() { }}
                onMoveOver={function Ki() { }}
                onRowClick={function Ki() { }}
                overflowMode="Scroll"
            >
                {filteredEmployees.map((emp) => (
                    <TableRow key={emp.id} onClick={handleItemClick}>
                        <TableCell>{emp.id}</TableCell>
                        <TableCell>{emp.firstname}</TableCell>
                        <TableCell>{emp.lastname}</TableCell>
                        <TableCell>{emp.email}</TableCell>
                    </TableRow>
                ))}
                {/* <TableRow onClick={handleItemClick}>
                    <TableCell>
                        <span>
                            I322203
                        </span>
                    </TableCell>
                    <TableCell>
                        <span>
                            Rounak
                        </span>
                    </TableCell>
                    <TableCell>
                        <span>
                            Roy
                        </span>
                    </TableCell>
                    <TableCell>
                        <span>
                            rounak.roy@sap.com
                        </span>
                    </TableCell>
                </TableRow>
                <TableRow onClick={handleItemClick}>
                    <TableCell>
                        <span>
                            I554974
                        </span>
                    </TableCell>
                    <TableCell>
                        <span>
                            Amith
                        </span>
                    </TableCell>
                    <TableCell>
                        <span>
                            Sharma
                        </span>
                    </TableCell>
                    <TableCell>
                        <span>
                            amith.sharma@sap.com
                        </span>
                    </TableCell>
                </TableRow> */}
            </Table>
            <div className="p-4 flex flex-col items-center gap-4">
            </div>
        </div >
    );
}
