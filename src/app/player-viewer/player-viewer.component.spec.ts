import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerViewerComponent } from "./player-viewer.component";

describe("PlayerViewerComponent", () => {
	let component: PlayerViewerComponent;
	let fixture: ComponentFixture<PlayerViewerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PlayerViewerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlayerViewerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
