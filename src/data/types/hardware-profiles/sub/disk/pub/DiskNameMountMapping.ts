export type DiskNameMountMappingV1 = {
    name: string,
    mountPath: string,
    mountOptions?: {
        noatime: boolean,
        noauto: boolean
    }
}