import { NamedDiskSpecV1 } from "../sub/disk/pub/NamedDiskSpec"

export type DiskProfileV1 = {
    disks: NamedDiskSpecV1[]
}