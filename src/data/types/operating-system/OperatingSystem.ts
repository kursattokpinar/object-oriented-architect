import { Optional } from "../core/Optional";
import { DiskDeviceFormatMappingItemV1 } from "./lib/DiskDeviceFormatMappingItem";
import { DiskDeviceMountMappingItemV1 } from "./lib/DiskDeviceMountMappingItem";

export type OsIdentifiverV1 = {
    family: 'windows' | 'linux',
    linux?: {
        name: 'Ubuntu' | 'Fedora' | 'CentOS' | 'Red Hat Enterprise Linux';
        version: string;
        buildNumber?: string;
        kernelVersion?: string;
    },
}

export type OsBaseConfigurationV1 = {
    hostname: Optional<string>,
    serverDomain: Optional<string>,
    timezoneDiffFromGMT: number,
    osLanguage: 'en' | 'tr',
    keyboardLayout: {
        layout: string,
        variant: string,
    },
    osUsers: string[],
}

export type OsNetworkV1 = {
    network: {
        adapters: {
            type: 'eth',
            adapterName: Optional<string>,
            ipv4Address: Optional<string>,
            dnsServers: Optional<string[]>,
            isIpReserved: Optional<boolean>,
            proxyAddress?: string,
        }[],
        allowInboundRules: {
            protocol: 'tcp' | 'udp',
            port: number,
        }[],
    }
}

export interface DiskDeviceFormatMappingTypeV1 {
    diskDeviceFormatMapping: Optional<DiskDeviceFormatMappingItemV1[]>;
}

export interface DiskDeviceMountMappingV1 {
    diskDeviceMountMapping: DiskDeviceMountMappingItemV1[];
}
