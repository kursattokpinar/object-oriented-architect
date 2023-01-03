
import { AbstractHwProfileWithIntelCpuV1 } from '../abstracts/AbstractNodeWithIntelCpu';
import { NetworkAdapterV1 } from '../sub/network/pub/NetworkAdapter';
import { NamedDiskSpecV1 } from '../sub/disk/pub/NamedDiskSpec';
import { CpuSpecV1, IntelCpuPerformanceSpecV1 } from '../sub/cpu/pub/ProcessorSpec';
import { HwProfileWithIntelCpuV1 } from '../pub/intel/HwProfileWithIntelCpu';
import { createAnySizeIntelHwProfile } from './AnySizeIntelHardwareProfileFactory';
import { TEMPLATE_PLACEHOLDER } from '../../core/Optional';

export type XLargeIntelHwProfileInput = {
    processorSku: HwProfileWithIntelCpuV1['cpuSpec']['processorSku'],
    cpuPerformance: HwProfileWithIntelCpuV1['cpuSpec']['performance'],
    smt: HwProfileWithIntelCpuV1['cpuSpec']['smt'],
    disks: HwProfileWithIntelCpuV1['disks'],
    networkAdapter: HwProfileWithIntelCpuV1['networkAdapter'],
}

export function createXLargeIntelHwProfile(args: XLargeIntelHwProfileInput): HwProfileWithIntelCpuV1 {
    const xLargeIntelComputePowerV1 = createAnySizeIntelHwProfile({
        numberOfCores: 16,
        memorySpec: {
            capacity: {
                unit: 'GB',
                value: 32,
            },
            interface: TEMPLATE_PLACEHOLDER,
            speed: TEMPLATE_PLACEHOLDER
        },
        ...args,
    });

    return xLargeIntelComputePowerV1;
}

export function decorateXLargeIntelHwProfile(target: object, args: XLargeIntelHwProfileInput): object & HwProfileWithIntelCpuV1 {
    
    return {
        ...target,
        ...createXLargeIntelHwProfile(args)
    }
}