"use client";

import React, {useEffect, useState} from 'react';
import styles from "./WelcomePopup.module.scss";
import {CustomModal} from "@/components/Modal/CustomModal";
import Select from "react-select";
import {useModal} from "@/store/store";

interface Option {
    value: string;
    label: string;
}

interface ArrayObjectSelectState {
    selectedName: Option | null;
}

const options: Option[] = [
    { value: 'айтош', label: 'Айтош 🏳️‍🌈' },
    { value: 'елжан', label: 'Елжан 🏳️‍🌈' },
    { value: 'влад', label: 'Влад' },
    { value: 'мика', label: 'Мика' },
    { value: 'алихан', label: 'Алихан' },
    { value: 'нурали', label: 'Нурали' },
    { value: 'никита', label: 'Никита' },
    { value: 'нурдаулет', label: 'Нурдаулет' },
    { value: 'улан', label: 'Улан' },
    { value: 'султан', label: 'Султан' },
];

export const WelcomePopup = () => {
    const {onClose} = useModal();
    const [state, setState] = useState<ArrayObjectSelectState>({
        selectedName: null,
    });

    useEffect(() => {
        const name = typeof window !== "undefined" ? localStorage.getItem("name") : null;
        if(name) {
            onClose();
        }

    }, [])

    const onSubmit = () => {
        if(state.selectedName) {
            localStorage.setItem("name", state.selectedName.value);
            onClose();
            return;
        }

        alert("Выберите имя!");
    }

    return (
        <CustomModal onSubmit={onSubmit}>
            <h1 className={styles.title}>Приветствую на тестировании на гея!</h1>
            <h2 className={styles.subtitle}>Для начала укажи свое имя:</h2>
            <Select value={state.selectedName}
                onChange={(option: Option | null) => {
                    setState({selectedName: option});
                }}
                getOptionLabel={(option: Option) => option.label}
                getOptionValue={(option: Option) => option.value}
                options={options}
                isClearable={true}
                isSearchable={true}
            />
        </CustomModal>
    );
};