import { ChangeDetectionStrategy, Component, Inject, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent,MatDialogTitle } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-poke-dialog',
  templateUrl: 'poke-dialog.component.html',
  styleUrl: 'poke-dialog.component.scss',
  standalone: true,
  imports: [MatCard, MatCardModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,  MatButtonModule, MatFormFieldModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class PokeDialogComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}


  playSound(soundSource: string){
    const audio = new Audio();
    audio.src = soundSource;
    audio.load();
    audio.play();
  }

}


