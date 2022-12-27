import { IntelCpuPerformanceSpecV1 } from "../sub/cpu/pub/ProcessorSpec";
import { CpuProfileV1 } from "../hardware-profile-partials/CpuProfile";
import { DiskProfileV1 } from "../hardware-profile-partials/DiskProfile";
import { MemoryProfileV1 } from "../hardware-profile-partials/MemoryProfile";
import { NetworkAdapterProfileV1 } from "../hardware-profile-partials/NetworkAdapterProfile";

export type HardwareProfileBaseV1<T> = MemoryProfileV1
    & DiskProfileV1
    & CpuProfileV1<T>
    & NetworkAdapterProfileV1
    & {

}