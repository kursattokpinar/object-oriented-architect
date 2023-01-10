import { isFunction, isObject } from 'lodash';
import { TemplateRepository } from './templateRepository';

export interface TemplateSectionExplantation {
    description?: string;
    procedure?: string;
}

export type TemplateSection<T> = TemplateSectionExplantation & {
    section: T,
};

export class TemplateBuilder<T extends object> {

    public baseTemplateName?: string;
    protected sections: TemplateSection<object>[] = [];
    protected modifications: T[] = [];

    protected constructor(private name?: string, private description?: string) {}

    public static newTemplate<T extends object>(args?: {name?: string, description?: string}): TemplateBuilder<T> {
        return new TemplateBuilder<T>(args?.name, args?.description);
    }

    public static extendTemplate<T extends B, B extends object>
        (baseTemplateName: string, args?: {name?: string, description?: string})
    : TemplateExtender<T, B> {

        // create extender from the builder.
        const templateExtender = new TemplateExtender<T, B>(baseTemplateName, args?.name, args?.description);

        return templateExtender;
    }

    public buildAndAddSection<S extends object>
        (builder: (templateRoot: object) => TemplateSection<S>)
    : TemplateBuilder<T> {

        const o = this.mergeSectionsIntoSingleObject();
        const newSection = builder(o);
        this.sections.push({
            ...newSection,
        });

        return this;
    }

    /**
     * Add section to the template without a procedure or description.
     * @param section Section that is going to be added to the target template
     * @returns Instance
     */
    public addSection<S extends object>(section: S): TemplateBuilder<T> {
        this.sections.push({
            section: section,
        });

        return this;
    }

    public save() {

        TemplateRepository.registerTemplate({
            name: this.name,
            description: this.description,
            template: this.mergeSectionsIntoSingleObject(),
            baseTemplateName: this.baseTemplateName,
        });
    }

    protected mergeSectionsIntoSingleObject(): T {
        let o: T;

        this.sections.forEach(s => {
            o = {
                ...o,
                ...s.section,
            };
        });

        if (this.baseTemplateName) {

            const baseTemplate = TemplateRepository.getTemplateByName(this.baseTemplateName);

            o = {
                ...o,
                ...baseTemplate?.template,
            };
        }

        // apply modifications coming from template extension
        this.modifications.forEach(m => {
            o = {
                ...o,
                ...m,
            };
        });

        return o;
    }
}

class TemplateExtender<T extends B, B extends object> extends TemplateBuilder<T>  {

    /**
     *
     */
    constructor(baseTemplateName: string, name?: string, description?: string) {
        super(name, description);

        this.baseTemplateName = baseTemplateName;
    }

    public modifySection<S extends object>(builder: (templateRoot: T) => void): TemplateBuilder<T> {
        const o = this.mergeSectionsIntoSingleObject();

        // run modifications on `o`
        builder(o);

        this.modifications.push(o);

        return this;
    }

    public addSection<S extends object>(section: S): TemplateExtender<T, B> {
        this.sections.push({
            section: section,
        });

        return this;
    }
}
