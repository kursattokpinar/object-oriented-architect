import { TEMPLATE_PLACEHOLDER } from '../../types/core/Optional';
// tslint:disable-next-line:max-line-length
import { decorateXLargeIntelHwProfile } from '../../types/hardware-profiles/factories/XlargeIntelHardwareProfileFactory';
// tslint:disable-next-line:max-line-length
import { decorateUbuntu2004TrTimeZoneEnglishStaticIpXfsFormattedDisksOs } from '../../types/operating-system/factories/Ubuntu2004OsFactory';


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
                partition: 'primary',
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
                partition: 'logical',
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
                partition: 'logical',
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
                partition: 'logical',
            },
        },

        /**
         * etcd directory
         */
        {
            name: 'etcd',
            spec: {
                capacity: {
                    unit: 'GB',
                    value: 50,
                },
                provisioningType: TEMPLATE_PLACEHOLDER,
                isBootable: false,
                partition: 'logical',
            },
        },


        /**
         * etcd wal directory
         */
        {
            name: 'etcd_wal',
            spec: {
                capacity: {
                    unit: 'GB',
                    value: 50,
                },
                provisioningType: TEMPLATE_PLACEHOLDER,
                isBootable: false,
                partition: 'logical',
            },
        },
    ],
    networkAdapter: TEMPLATE_PLACEHOLDER,
});

/**
 * Operating system layer
 */
node = decorateUbuntu2004TrTimeZoneEnglishStaticIpXfsFormattedDisksOs(node, {
    adapterName: TEMPLATE_PLACEHOLDER,
    diskDeviceMountMapping: [
        {
            diskName: 'root',
            mountAt: '/',
        },
        {
            diskName: 'home',
            mountAt: '/home',
        },
        {
            diskName: 'rke2',
            mountAt: '/var/lib/rancher/rke2',
        },
        {
            diskName: 'log',
            mountAt: '/var/log',
        },
        {
            diskName: 'etcd',
            mountAt: '/var/lib/etcd',
        },
        {
            diskName: 'etcd_wal',
            mountAt: '/var/lib/etcd/member/wal',
        },
    ],
    dnsServers: TEMPLATE_PLACEHOLDER,
    hostname: TEMPLATE_PLACEHOLDER,
    serverDomain: TEMPLATE_PLACEHOLDER,
    ipv4Address: TEMPLATE_PLACEHOLDER,
});

// check if all disks are mounted
// check if all mounted disks are from those defined
// check if we have at most 1 bootable flagged disk
// check if format mappings for disks are correct

export const rke2WorkerNodeTemplate = node;
