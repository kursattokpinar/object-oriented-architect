import { TemplateBuilder } from "../../../../lib/templateBuilder";
import { TEMPLATE_PLACEHOLDER } from "../../core/Optional";
import { OsIdentifiverV1, OsBaseConfigurationV1, OsNetworkV1 } from "../OperatingSystem";


export type Ubuntu2004Machine = OsIdentifiverV1 & OsBaseConfigurationV1;

export function saveTemplate() {
    
    TemplateBuilder.newTemplate<Ubuntu2004Machine>({
        name: "Ubuntu 20.04 Base Machine Configuration",
        description: 
            `This template represents the base configuration of the most
                common machine type which is using Ubuntu 20.04. This 
                operating system includes these configrations:
                - Time Zone: TR
                - OS Language: EN,
                - Keyboard Layout: EN
                - Static IP
                
                This template does not include any disk configurations 
                or specify a total disk size.
                To express that the configuration is including a static IP,
                this template is defining one network adapter.
                Extension of this templates can add more network adapters if necessary.`
    })
        .addSection<OsIdentifiverV1>({
            family: 'linux',
            linux: {
                name: 'Ubuntu',
                version: '20.04'
            }
        })
        .addSection<OsBaseConfigurationV1>({
            hostname: TEMPLATE_PLACEHOLDER,
            keyboardLayout: {
                layout: 'en',
                variant: 'en'
            },
            osLanguage: 'en',
            osUsers: [],
            serverDomain: TEMPLATE_PLACEHOLDER,
            timezoneDiffFromGMT: 3
        })
        .addSection<OsNetworkV1>({
            network: {
                adapters: [{
                    type: "eth",
                    adapterName: TEMPLATE_PLACEHOLDER,
                    dnsServers: TEMPLATE_PLACEHOLDER,
                    ipv4Address: TEMPLATE_PLACEHOLDER,
                    isIpReserved: true,
                }],
                allowInboundRules: [{
                    port: 22,
                    protocol: "tcp"
                }]
            }
        })
        .save()
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
 */