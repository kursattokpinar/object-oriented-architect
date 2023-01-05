import { Optional } from '../../core/Optional';
import { DiskDeviceFormatMappingTypeV1 } from '../partials/DiskDeviceFormatMapping';
import { OperatingSystemV1 } from '../pub/OperatingSystem';
import { DiskDeviceMountMappingItemV1 } from '../sub/DiskDeviceMountMappingItem';

export interface CreateUbuntu2004TrTimeZoneEnglishStaticIpOsInput {
    adapterName: OperatingSystemV1['network']['adapters'][0]['adapterName'];
    dnsServers: OperatingSystemV1['network']['adapters'][0]['dnsServers'];
    ipv4Address: OperatingSystemV1['network']['adapters'][0]['ipv4Address'];
    hostname: OperatingSystemV1['hostname'];
    serverDomain: OperatingSystemV1['serverDomain'];
    diskDeviceMountMapping: OperatingSystemV1['diskDeviceMountMapping'];
}

/**
 * This factory is creating an Ubuntu 20.04 installed operating system with:
 * - Single adapter device
 * - Reserved (static) IP
 * - Inbound 22/TCP port allowed
 * - All disks are formatted as 'XFS'
 * - English language
 * - US en keyboard layout
 * - Two operating system user
 * @param args
 * @returns
 */
// tslint:disable-next-line:max-line-length
export function createUbuntu2004TrTimeZoneEnglishStaticIpXfsFormattedDisksOs(args: CreateUbuntu2004TrTimeZoneEnglishStaticIpOsInput)
    : object & OperatingSystemV1 {

    return {
        operatingSystemFamily: 'linux',
        linuxId: {
            name: 'Ubuntu',
            version: '20.04',
        },
        osUsers: [
            'root',
            'operator',
        ],
        timezoneDiffFromGMT: 3,
        osLanguage: 'en',
        keyboardLayout: {
            layout: 'us',
            variant: 'en',
        },
        network: {
            adapters: [
                {
                    adapterName: args.adapterName,
                    dnsServers: args.dnsServers,
                    ipv4Address: args.ipv4Address,
                    isIpReserved: true,
                    type: 'eth',
                },
            ],
            allowInboundRules: [
                {
                    port: 22,
                    protocol: 'tcp',
                },
            ],
        },
        hostname: args.hostname,
        serverDomain: args.serverDomain,
        diskDeviceMountMapping: args.diskDeviceMountMapping,
        diskDeviceFormatMapping: args.diskDeviceMountMapping.map(d => {

            return {
                diskName: d.diskName,
                format: 'XFS',
            };
        }),
    };
}

// tslint:disable-next-line:max-line-length
export function decorateUbuntu2004TrTimeZoneEnglishStaticIpXfsFormattedDisksOs(node: any, args: CreateUbuntu2004TrTimeZoneEnglishStaticIpOsInput): object & OperatingSystemV1 {
    return {
        ...node,
        ...createUbuntu2004TrTimeZoneEnglishStaticIpXfsFormattedDisksOs(args),
    };
}
