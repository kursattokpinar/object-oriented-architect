import { DataCapacity } from '../../../core/DataCapacity';
import { Optional } from '../../../core/Optional';


export interface MemorySpecV1 {
    capacity: Optional<DataCapacity>;
    speed?: Optional<string>;
    interface?: Optional<'ddr' | 'ddr2' | 'ddr3' | 'ddr4' | 'ddr5'>;
}
