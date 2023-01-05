import { Optional } from "../../core/Optional"
import { DiskDeviceFormatMappingItemV1 } from "../sub/DiskDeviceFormatMappingItem"

export type DiskDeviceFormatMappingTypeV1 = {
    diskDeviceFormatMapping: Optional<DiskDeviceFormatMappingItemV1[]>
}