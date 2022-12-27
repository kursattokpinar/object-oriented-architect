import xlargeIntelHardwareProfileFactory from "../../types/hardware-profiles/factories/XlargeIntelHardwareProfileFactory";

let workerNode = xlargeIntelHardwareProfileFactory({
    processorSku: 'Xeon(R) CPU E5-2690',
    cpuBaseFrequency: 2.9,
    smt: 2,
    disks: [
        {
            name: 'boot',
            spec: {
                capacity: {
                    unit: "GB",
                    value: 300
                },
                provisioningType: 'thick',
                fileSystemType: "ext4"
            }
        }
    ], 
    networkAdapter: {
        network: 'csplab',
        adapterType: 'VMXNET 3',
        macAddress: '00:50:56:bf:a5:01'
    }
})

export default workerNode;