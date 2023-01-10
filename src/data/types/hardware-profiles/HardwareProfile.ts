
import { Optional } from '../core/Optional';
import { ProcessorPerformanceBaseV1, CpuSpecV1 } from './lib/cpu/ProcessorSpec';
import { NamedDiskSpecV1 } from './lib/disk/NamedDiskSpec';
import { MemorySpecV1 } from './lib/memory/MemorySpec';
import { NetworkAdapterV1 } from './lib/network/NetworkAdapter';

export interface CpuProfileV1<T extends ProcessorPerformanceBaseV1>  {
    numberOfCores: Optional<number>;
    cpuSpec: CpuSpecV1<T>;
}

export interface DiskProfileV1 {
    disks: Optional<NamedDiskSpecV1[]>;
}

export interface MemoryProfileV1 {
    memorySpec: MemorySpecV1;
}

export interface NetworkAdapterProfileV1 {
    networkAdapter: Optional<NetworkAdapterV1>;
}
