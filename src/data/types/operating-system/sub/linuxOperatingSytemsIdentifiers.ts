export interface LinuxOperatingSystemsIdentifierV1 {
    name: 'Ubuntu' | 'Fedora' | 'CentOS' | 'Red Hat Enterprise Linux';
    version: string;
    buildNumber?: string;
    kernelVersion?: string;
}
