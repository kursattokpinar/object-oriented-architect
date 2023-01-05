import { DataCapacity } from '../../core/DataCapacity';

import { AbstractHwProfileWithIntelCpuV1 } from '../abstracts/AbstractNodeWithIntelCpu';
import { HwProfileWithIntelCpuV1 } from '../pub/intel/HwProfileWithIntelCpu';
import { NamedDiskSpecV1 } from '../sub/disk/pub/NamedDiskSpec';
import { NetworkAdapterV1 } from '../sub/network/pub/NetworkAdapter';

export interface AnySizeIntelHwProfileInput {
    numberOfCores: HwProfileWithIntelCpuV1['numberOfCores'];
    memorySpec: HwProfileWithIntelCpuV1['memorySpec'];
    processorSku: HwProfileWithIntelCpuV1['cpuSpec']['processorSku'];
    cpuPerformance: HwProfileWithIntelCpuV1['cpuSpec']['performance'];
    smt: HwProfileWithIntelCpuV1['cpuSpec']['smt'];
    disks: HwProfileWithIntelCpuV1['disks'];
    networkAdapter: HwProfileWithIntelCpuV1['networkAdapter'];
}

export function createAnySizeIntelHwProfile (args: AnySizeIntelHwProfileInput): HwProfileWithIntelCpuV1 {
    const xLargeIntelComputePowerV1: HwProfileWithIntelCpuV1 = {
        numberOfCores: args.numberOfCores,
        cpuSpec: {
            manufacturer: 'intel',
            instructionSetArchitecture: 'x86',
            processorSku: args.processorSku,
            performance: args.cpuPerformance,
            smt: args.smt,
        },
        memorySpec: args.memorySpec,
        disks: args.disks,
        networkAdapter: args.networkAdapter,
    };

    return xLargeIntelComputePowerV1;
}
