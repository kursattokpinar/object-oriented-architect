import { Component, OnInit } from '@angular/core';
import workerNode from '../../../../data/instances/cluster0/WorkerNodeInstance';

@Component({
  selector: 'ngx-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  workerNode= workerNode

  constructor() { }

  ngOnInit(): void {
  }

}
