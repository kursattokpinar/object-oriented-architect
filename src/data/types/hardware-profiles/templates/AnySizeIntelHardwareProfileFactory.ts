
import { IntelCpuPerformanceSpecV1 } from '../lib/cpu/ProcessorSpec';
import { TEMPLATE_PLACEHOLDER } from '../../core/Optional';
import { TemplateBuilder } from '../../../../lib/templateBuilder';
import { CpuProfileV1 } from '../HardwareProfile';


export type AnySizeIntelHardwareProfileV1 = CpuProfileV1<IntelCpuPerformanceSpecV1>;

export function saveTemplate() {

    TemplateBuilder.newTemplate<AnySizeIntelHardwareProfileV1>({
        name: 'Base Hardware Profile with Intel CPU',
        description: 'This is a base profile for hardware profiles which are using Intel based CPUs.',
    })
        .addSection<CpuProfileV1<IntelCpuPerformanceSpecV1>>({
            cpuSpec: {
                manufacturer: 'intel',
                instructionSetArchitecture: 'x86',
                performance: TEMPLATE_PLACEHOLDER,
                processorSku: TEMPLATE_PLACEHOLDER,
                smt: 2,
            },
            numberOfCores: TEMPLATE_PLACEHOLDER,
        })
        .save();
}
