import { DataCapacity } from '../../../core/DataCapacity';
import { Optional } from '../../../core/Optional';


export interface DiskSpecV1 {
    capacity: DataCapacity;
    provisioningType: Optional<'thin' | 'thick'>;
    isBootable: Optional<boolean>;
    partition: Optional<'primary' | 'logical'>;
}
