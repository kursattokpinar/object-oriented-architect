import { Component, OnInit } from '@angular/core';
import { saveTemplate } from '../../../data/types/hardware-profiles/templates/XlargeIntelHardwareProfileFactory';
import { saveTemplate as saveBase } from '../../../data/types/hardware-profiles/templates/AnySizeIntelHardwareProfileFactory';
import { TemplateRecord, TemplateRepository } from '../../../lib/templateRepository';
@Component({
  selector: 'ngx-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.scss'],
})
export class InstancesComponent implements OnInit {

  template: TemplateRecord;

  constructor() {

    saveBase();
    saveTemplate();

    this.template = TemplateRepository.getTemplateByName('XLarge Hardware Profile with Intel CPU');
  }

  ngOnInit(): void {
  }

}
