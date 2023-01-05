export interface Placeholder {
    hasValue: false;
}



export type Optional<T> = T | Placeholder;

export const TEMPLATE_PLACEHOLDER: Placeholder = {hasValue: false};
