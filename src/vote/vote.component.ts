import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css',
})
export class VoteComponent implements OnInit {
  votesA: number = 0;
  votesB: number = 0;
  showWinner: boolean = false;
  winner: string = '';

  ngOnInit(): void {
    this.startCountdown();
  }

  voteA(event: Event) {
    this.votesA++;
  }

  voteB(event: Event) {
    this.votesB++;
  }

  startCountdown() {
    setInterval(() => {
      this.determineWinner();
    }, 10000);
  }

  determineWinner() {
    this.showWinner = true;
    if (this.votesA > this.votesB) {
      this.winner = 'A';
    } else if (this.votesB > this.votesA) {
      this.winner = 'B';
    } else {
      this.winner = `It's a Tie`;
    }

    setTimeout(() => {
      this.showWinner = false;
      this.votesA = 0;
      this.votesB = 0;
    }, 5000);
  }
}
