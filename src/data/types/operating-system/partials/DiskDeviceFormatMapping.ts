import { Optional } from '../../core/Optional';
import { DiskDeviceFormatMappingItemV1 } from '../sub/DiskDeviceFormatMappingItem';

export interface DiskDeviceFormatMappingTypeV1 {
    diskDeviceFormatMapping: Optional<DiskDeviceFormatMappingItemV1[]>;
}
