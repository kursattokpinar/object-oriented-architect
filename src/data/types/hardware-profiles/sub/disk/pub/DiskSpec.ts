import { DataCapacity } from '../../../../core/DataCapacity';


export interface DiskSpecV1 {
    capacity: DataCapacity;
    provisioningType: 'thin' | 'thick';
    fileSystemType: 'ext4' | 'XFS' | 'NTFS' | 'FAT' | 'Btrfs';
}
