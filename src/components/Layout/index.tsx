import Navbar from "../Navbar";
import styles from "./Layout.module.css"
import {Card, Container, Row} from "@nextui-org/react";

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
}