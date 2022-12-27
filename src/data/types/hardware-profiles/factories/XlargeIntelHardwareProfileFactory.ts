
import { AbstractHwProfileWithIntelCpuV1 } from "../abstracts/AbstractNodeWithIntelCpu";
import anySizeIntelNodeFactory from "./AnySizeIntelHardwareProfileFactory"
import { NetworkAdapterV1 } from "../sub/network/pub/NetworkAdapter";
import { NamedDiskSpecV1 } from "../sub/disk/pub/NamedDiskSpec";

export default function (args: {
    processorSku: string, cpuBaseFrequency: number, smt: number, disks: NamedDiskSpecV1[], networkAdapter: NetworkAdapterV1
}): AbstractHwProfileWithIntelCpuV1 {
    let xLargeIntelComputePowerV1 = anySizeIntelNodeFactory({
        numberOfCores: 16,
        memoryCapacity: {
            unit: "GB",
            value: 32
        },
        ...args
    });

    return xLargeIntelComputePowerV1;
}