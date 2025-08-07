import { ButtonConfig } from 'lkt-vue-kernel';
export interface ButtonNavProps {
    prevButton: ButtonConfig | false;
    nextButton: ButtonConfig | false;
    isLoading: boolean;
    prevHidden: boolean;
    nextHidden: boolean;
}
