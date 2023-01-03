export type DiskDeviceFormatMappingTypeV1 = {
    diskDeviceFormatMapping: {
        diskName: string,
        format: 'ext4' | 'XFS' | 'NTFS' | 'FAT' | 'Btrfs';
    }[]
}