
import { TemplateBuilder } from '../../../../lib/templateBuilder';
import { MemoryProfileV1, CpuProfileV1 } from '../HardwareProfile';
import { IntelCpuPerformanceSpecV1 } from '../lib/cpu/ProcessorSpec';
import { AnySizeIntelHardwareProfileV1 } from './AnySizeIntelHardwareProfileFactory';

export type XLargeIntelHardwareProfileV1 = AnySizeIntelHardwareProfileV1 & MemoryProfileV1;

export function saveTemplate() {

    TemplateBuilder.extendTemplate<XLargeIntelHardwareProfileV1, AnySizeIntelHardwareProfileV1>('Base Hardware Profile with Intel CPU', {
        name: 'XLarge Hardware Profile with Intel CPU',
        description: 'This profile is using SMT value as 2.',
    })
        .modifySection<CpuProfileV1<IntelCpuPerformanceSpecV1>>((t => {
            t.numberOfCores = 16;
        }))
        .addSection<MemoryProfileV1>({
            memorySpec: {
                capacity: {
                    value: 32,
                    unit: 'GB',
                },
            },
        })
        .save();
}
