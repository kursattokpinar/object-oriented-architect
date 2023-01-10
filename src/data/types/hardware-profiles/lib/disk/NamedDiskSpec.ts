import { DiskSpecV1 } from './DiskSpec';

export interface NamedDiskSpecV1 {
    name: string;
    spec: DiskSpecV1;
}
