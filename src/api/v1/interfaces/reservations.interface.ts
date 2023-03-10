/**
 * * reservations interface <contract>
 */

export interface Reservation {
  userId: string;
  movie: string;
  moviePoster: string;
  schedule: {
    schedule: string;
    date: Date;
    cinema: string;
  };
  seats: [string];
  totalCredits: number;
  active: boolean;
}
