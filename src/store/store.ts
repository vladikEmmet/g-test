import {create} from "zustand";

interface ModalState {
    isOpen: boolean;
    onClose: () => void;
    onOpen: (content: React.ReactNode) => void;
    isClosable: boolean;
    content?: React.ReactNode;
}

export const useModal = create<ModalState>((set) => ({
    isOpen: true,
    content: null,
    isClosable: false,
    onOpen: (content: React.ReactNode) => set({isOpen: true, content}),
    onClose: () => set({isOpen: false, content: null}),
}));