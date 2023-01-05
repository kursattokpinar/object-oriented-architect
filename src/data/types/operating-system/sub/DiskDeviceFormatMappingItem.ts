export interface DiskDeviceFormatMappingItemV1 {
        diskName: string;
        format: 'ext4' | 'XFS' | 'NTFS' | 'FAT' | 'Btrfs';
}
