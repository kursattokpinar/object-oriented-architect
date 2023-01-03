import { Optional } from '../../core/Optional';
import { NamedDiskSpecV1 } from '../sub/disk/pub/NamedDiskSpec';

export interface DiskProfileV1 {
    disks: Optional<NamedDiskSpecV1[]>;
}
