import { CpuProfileV1 } from '../partials/CpuProfile';
import { DiskProfileV1 } from '../partials/DiskProfile';
import { MemoryProfileV1 } from '../partials/MemoryProfile';
import { NetworkAdapterProfileV1 } from '../partials/NetworkAdapterProfile';

export type HardwareProfileBaseV1<T> = MemoryProfileV1
    & DiskProfileV1
    & CpuProfileV1<T>
    & NetworkAdapterProfileV1
    & {

};
