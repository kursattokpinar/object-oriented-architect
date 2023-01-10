
export interface TemplateRecord {
    name: string;
    description: string;
    template: object;
    baseTemplateName?: string;
}


export class TemplateRepository {
    static templates: TemplateRecord[] = [];

    public static registerTemplate(record: TemplateRecord) {

        if (!this.getTemplateByName(record.name))
            this.templates.push(record);
        else
            throw new Error('Template with given name already exists in the repository.');
    }

    public static getTemplateByName(name: string): TemplateRecord {
        return this.templates.find(t => t.name === name);
    }

    public static getAllTemplatesNames(): string[] {
        return this.templates.map(o => o.name);
    }
}
