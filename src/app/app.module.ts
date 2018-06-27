import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { RankingsComponent } from "./rankings/rankings.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { UserServiceClient } from "./services/user.service.client";
import { LogoutComponent } from "./logout/logout.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { AdminComponent } from "./admin/admin.component";
import { PlayerServiceClient } from "./services/player.service.client";
import { PlayerViewerComponent } from "./player-viewer/player-viewer.component";
import { FavoritePlayersComponent } from "./favorite-players/favorite-players.component";
import { SubscriptionServiceClient } from "./services/subscription.service.client";
import { EventServiceClient } from "./services/event.service.client";
import { MatchServiceClient } from "./services/match.service.client";

@NgModule({
	declarations: [
		AppComponent,
		SearchResultsComponent,
		RankingsComponent,
		NavbarComponent,
		LogoutComponent,
		LoginComponent,
		ProfileComponent,
		RegisterComponent,
		AdminComponent,
		PlayerViewerComponent,
		FavoritePlayersComponent,
	],
	imports: [BrowserModule, FormsModule, routing],
	providers: [
		UserServiceClient,
		PlayerServiceClient,
		SubscriptionServiceClient,
		EventServiceClient,
		MatchServiceClient,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
