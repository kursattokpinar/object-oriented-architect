import { TEMPLATE_PLACEHOLDER } from "../../types/core/Optional";
import { decorateXLargeIntelHwProfile } from "../../types/hardware-profiles/factories/XlargeIntelHardwareProfileFactory";
import { decorateUbuntu2004TrTimeZoneEnglishStaticIpXfsFormattedDisksOs } from "../../types/operating-system/factories/Ubuntu2004OsFactory";


let node: object;

/**
 * Hardware Profile Layer
 * Specify disk sizes and names only.
 */
node = decorateXLargeIntelHwProfile({}, {
    processorSku: TEMPLATE_PLACEHOLDER,
    cpuPerformance: TEMPLATE_PLACEHOLDER,
    smt: TEMPLATE_PLACEHOLDER,
    disks: [
        
        /**
         * Root disk.
         */
        {
            name: 'root',
            spec: {
                capacity: {
                    unit: 'GB',
                    value: 40,
                },
                provisioningType: TEMPLATE_PLACEHOLDER,
                isBootable: true,
                partition: "primary"
            },
        },

        /**
         * Home disk.
         */
        {
            name: 'home',
            spec: {
                capacity: {
                    unit: 'GB',
                    value: 60,
                },
                provisioningType: TEMPLATE_PLACEHOLDER,
                isBootable: false,
                partition: "logical"
            },
        },

        /**
         * Directory where rke2 binaries are installed.
         */
        {
            name: 'rke2',
            spec: {
                capacity: {
                    unit: 'GB',
                    value: 100,
                },
                provisioningType: TEMPLATE_PLACEHOLDER,
                isBootable: false,
                partition: "logical"
            },
        },

        /**
         * Main log directory of the node
         */
        {
            name: 'log',
            spec: {
                capacity: {
                    unit: 'GB',
                    value: 100,
                },
                provisioningType: TEMPLATE_PLACEHOLDER,
                isBootable: false,
                partition: "logical"
            },
        },
    ],
    networkAdapter: TEMPLATE_PLACEHOLDER
});

node = decorateUbuntu2004TrTimeZoneEnglishStaticIpXfsFormattedDisksOs(node, {
    adapterName: 'ens160',
    diskDeviceMountMapping: [
        {
            diskName: 'boot',
            mountAt: '/'
        }
    ],
    dnsServers: ['8.8.8.8', '8.8.4.4'],
    hostname: 'somehostname',
    ipv4Address: '10.0.0.1'
})

// check if all disks are mounted
// check if all mounted disks are from those defined
// check if we have at most 1 bootable flagged disk
// check if format mappings for disks are correct

export const rke2WorkerNodeTemplate = node;
