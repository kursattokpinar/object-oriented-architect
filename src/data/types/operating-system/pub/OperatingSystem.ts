import { DiskDeviceFormatMappingTypeV1 } from "../partials/DiskDeviceFormatMapping";
import { DiskDeviceMountMappingV1 } from "../partials/DiskDeviceMountMountMaping";
import { LinuxOperatingSystemsIdentifierV1 } from "../sub/linuxOperatingSytemsIdentifiers";

export type OperatingSystemV1 = DiskDeviceFormatMappingTypeV1 & DiskDeviceMountMappingV1 & {
    operatingSystemFamily: 'windows' | 'linux',
    hostname: string,
    timezoneDiffFromGMT: number,
    osLanguage: 'en' | 'tr',
    keyboardLayout: {
        layout: string,
        variant: string,
    },
    linuxId?: LinuxOperatingSystemsIdentifierV1,
    osUsers: string[],
    network: {
        adapters: {
            type: 'eth',
            adapterName: string,
            ipv4Address: string,
            dnsServers: string[],
            isIpReserved: boolean,
            proxyAddress?: string
        }[],
        allowInboundRules: {
            protocol: 'tcp' | 'udp',
            port: number
        }[]
    }
}