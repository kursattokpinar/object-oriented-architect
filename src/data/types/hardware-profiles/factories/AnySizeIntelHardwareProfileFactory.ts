import { DataCapacity } from '../../core/DataCapacity';

import { AbstractHwProfileWithIntelCpuV1 } from '../abstracts/AbstractNodeWithIntelCpu';
import { NamedDiskSpecV1 } from '../sub/disk/pub/NamedDiskSpec';
import { NetworkAdapterV1 } from '../sub/network/pub/NetworkAdapter';

export default function (args: {
    numberOfCores: number,
    memoryCapacity: DataCapacity,
    processorSku: string,
    cpuBaseFrequency: number,
    smt: number,
    disks: NamedDiskSpecV1[],
    networkAdapter: NetworkAdapterV1,
}): AbstractHwProfileWithIntelCpuV1 {
    const xLargeIntelComputePowerV1: AbstractHwProfileWithIntelCpuV1 = {
        numberOfCores: args.numberOfCores,
        cpuSpec: {
            manufacturer: 'intel',
            instructionSetArchitecture: 'x86',
            processorSku: args.processorSku,
            performance: {
                baseFrequency: args.cpuBaseFrequency,
            },
            smt: args.smt,
        },
        memorySpec: {
            capacity: args.memoryCapacity,
        },
        disks: args.disks,
        networkAdapter: args.networkAdapter,
    };

    return xLargeIntelComputePowerV1;
}
