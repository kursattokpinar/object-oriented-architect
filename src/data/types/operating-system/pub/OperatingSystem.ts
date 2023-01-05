import { Optional } from '../../core/Optional';
import { DiskDeviceFormatMappingTypeV1 } from '../partials/DiskDeviceFormatMapping';
import { DiskDeviceMountMappingV1 } from '../partials/DiskDeviceMountMountMaping';
import { LinuxOperatingSystemsIdentifierV1 } from '../sub/linuxOperatingSytemsIdentifiers';

export type OperatingSystemV1 = DiskDeviceFormatMappingTypeV1 & DiskDeviceMountMappingV1 & {
    operatingSystemFamily: 'windows' | 'linux',
    hostname: Optional<string>,
    serverDomain: Optional<string>,
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
    },
};
