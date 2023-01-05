import { Optional } from "./Optional";

export interface DataCapacity {
    value: Optional<number>;
    unit: 'KB' | 'MB' | 'GB' | 'TB';
}
