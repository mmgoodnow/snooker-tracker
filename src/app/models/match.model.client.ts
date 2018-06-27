import { Player } from "./player.model.client";

export class Match {
	Player1: Player;
	Player2: Player;

	ID: number;
	EventID: number;
	Round: number;
	Number: number;
	Player1ID: number;
	Score1: number;
	Walkover1: boolean;
	Player2ID: number;
	Score2: number;
	Walkover2: boolean;
	WinnerID: number;
	Unfinished: boolean;
	OnBreak: boolean;
	WorldSnookerID: number;
	LiveUrl: string;
	DetailsUrl: string;
	PointsDropped: boolean;
	ShowCommonNote: boolean;
	Estimated: boolean;
	Type: number;
	TableNo: number;
	VideoURL: string;
	InitDate: string;
	ModDate: string;
	StartDate: string;
	EndDate: string;
	ScheduledDate: string;
	FrameScores: string;
	Sessions: string;
	Note: string;
	ExtendedNote: string;
}
