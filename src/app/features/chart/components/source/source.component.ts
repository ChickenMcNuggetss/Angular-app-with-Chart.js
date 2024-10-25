import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Source } from '@features/chart/interfaces/source';

@Component({
  selector: 'app-source',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceComponent {
  public sourceItem = input.required<Source>({ alias: 'source' });
}
