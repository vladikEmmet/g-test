"use client";

import React from 'react';
import ReactModal from "react-modal";
import {X} from "lucide-react";
import styles from "./CustomModal.module.scss";
import {useModal} from "@/store/store";

interface CustomModalProps extends React.PropsWithChildren {
    onSubmit: () => void;
}

export const CustomModal = ({children, onSubmit}: CustomModalProps) => {
    const {isOpen, onClose, isClosable} = useModal();
    return (
        <ReactModal
            isOpen={isOpen}
            style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "40px 10px",
                    background: "rgba(0, 0, 0, 0.7)",
                    overflow: "hidden",
                    overflowY: "auto",
                    zIndex: 999,
                    transition: "opacity 0.3s",
                    backdropFilter: "blur(2px)",
                },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '10px',
                    padding: '20px',
                },
            }}
        >
            {isClosable &&
                <button className={styles.close} onClick={onClose}>
                    <X/>
                </button>
            }
            {children}
            <button className={styles.submit} onClick={onSubmit}>
                OK
            </button>
        </ReactModal>
    );
};