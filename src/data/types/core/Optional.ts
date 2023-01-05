export type Placeholder = {
    isTemplatePlaceholder: true
};

export type Optional<T> = T | Placeholder;

export const TEMPLATE_PLACEHOLDER: Placeholder = {isTemplatePlaceholder: true};
