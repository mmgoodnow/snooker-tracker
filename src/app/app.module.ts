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
import { HomeComponent } from "./home/home.component";
import { EventComponent } from "./event/event.component";
import { PlayerListComponent } from "./player-list/player-list.component";
import { MatchListComponent } from "./match-list/match-list.component";
import { EventListComponent } from "./event-list/event-list.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { UserComponent } from "./user/user.component";
import { FollowServiceClient } from "./services/follow.service.client";

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
		HomeComponent,
		EventComponent,
		PlayerListComponent,
		MatchListComponent,
		EventListComponent,
		UserComponent,
	],
	imports: [BrowserModule, FormsModule, routing, AngularFontAwesomeModule],
	providers: [
		UserServiceClient,
		PlayerServiceClient,
		SubscriptionServiceClient,
		EventServiceClient,
		MatchServiceClient,
		FollowServiceClient,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
