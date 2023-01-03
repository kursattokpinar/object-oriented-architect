import { DiskDeviceFormatMappingTypeV1 } from "../partials/DiskDeviceFormatMapping";
import { OperatingSystemV1 } from "../pub/OperatingSystem";
import { DiskDeviceMountMappingItemV1 } from "../sub/DiskDeviceMountMappingItem";

export type CreateUbuntu2004TrTimeZoneEnglishStaticIpOsInput = {
    adapterName: string,
    dnsServers: string[],
    ipv4Address: string,
    hostname: string,
    diskDeviceMountMapping: DiskDeviceMountMappingItemV1[]
}

export function createUbuntu2004TrTimeZoneEnglishStaticIpXfsFormattedDisksOs(args: CreateUbuntu2004TrTimeZoneEnglishStaticIpOsInput): object & OperatingSystemV1 {
    return {
        operatingSystemFamily: "linux",
        linuxId: {
            name: "Ubuntu",
            version: '20.04',
        },
        osUsers: [
            'root',
            'operator'
        ],
        timezoneDiffFromGMT: 3,
        osLanguage: "en",
        keyboardLayout: {
            layout: 'us',
            variant: 'en'
        },
        network: {
            adapters: [
                {
                    adapterName: args.adapterName,
                    dnsServers: args.dnsServers,
                    ipv4Address: args.ipv4Address,
                    isIpReserved: true,
                    type: 'eth',
                }
            ],
            allowInboundRules: [
                {
                    port: 22,
                    protocol: "tcp"
                }
            ]
        },
        hostname: args.hostname,
        diskDeviceMountMapping: args.diskDeviceMountMapping,
        diskDeviceFormatMapping: args.diskDeviceMountMapping.map(d => {

            return {
                diskName: d.diskName,
                format: 'XFS'
            }
        })
    };
}

export function decorateUbuntu2004TrTimeZoneEnglishStaticIpXfsFormattedDisksOs(node: any, args: CreateUbuntu2004TrTimeZoneEnglishStaticIpOsInput): object & OperatingSystemV1 {
    return {
        ...node,
        ...createUbuntu2004TrTimeZoneEnglishStaticIpXfsFormattedDisksOs(args)
    }
}