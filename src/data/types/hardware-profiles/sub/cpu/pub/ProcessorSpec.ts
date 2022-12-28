// tslint:disable-next-line:no-empty-interface
export interface ProcessorPerformanceBaseV1 {

}

export type IntelCpuPerformanceSpecV1 = ProcessorPerformanceBaseV1 & {
    baseFrequency: number,
    allCoreTurboFrequency?: number,
    singleCoreMaxTurboFrequency?: number,
};

export type ArmCpuPerformanceSpecV1 = ProcessorPerformanceBaseV1 & {
    allCoreSustainedFrequency: number,
};


export interface CpuSpecV1<T extends ProcessorPerformanceBaseV1> {
    manufacturer: T extends IntelCpuPerformanceSpecV1 ? 'intel' : 'amd';
    instructionSetArchitecture: T extends IntelCpuPerformanceSpecV1 ? 'x86' : 'arm';
    processorSku: string;
    performance: T extends IntelCpuPerformanceSpecV1 ? IntelCpuPerformanceSpecV1 : ArmCpuPerformanceSpecV1;
    smt: number;
}
