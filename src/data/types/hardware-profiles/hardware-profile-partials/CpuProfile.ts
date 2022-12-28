import { ProcessorPerformanceBaseV1, CpuSpecV1 } from '../sub/cpu/pub/ProcessorSpec';

export interface CpuProfileV1<T extends ProcessorPerformanceBaseV1>  {
    numberOfCores: number;
    cpuSpec: CpuSpecV1<T>;
}
