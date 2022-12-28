import { DataCapacity } from '../../../../core/DataCapacity';


export interface MemorySpecV1 {
    capacity: DataCapacity;
    speed?: 'string';
    interface?: 'ddr' | 'ddr2' | 'ddr3' | 'ddr4' | 'ddr5';
}
