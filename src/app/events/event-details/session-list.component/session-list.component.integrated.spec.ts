import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AuthService } from 'src/app/user';
import { DurationPipe } from '../../shared';
import { VoterService } from '../voter.service';
import { SessionListComponent } from './session-list.component';

//For create shallow integrated tests, we can create components in the same class
//but if these are complicated, it is not viable
//Or we can import NO_ERRORS_SCHEMA from @angular/core and add it in TestBed schemas


describe('SessionListComponent', () => {

    let fixture: ComponentFixture<SessionListComponent>;
    let component: SessionListComponent;
    let element: HTMLElement;
    let debugEl: DebugElement;

    beforeEach(waitForAsync(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'alexisaguirre' }
        };
        let mockVoterService = {
            userHasVoted: () => true
        };


        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                //UpvoteComponent,
                DurationPipe,
                //CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: []
        });
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        debugEl = fixture.debugElement;
    });

    describe('initial display', () => {

        it('should have the correct session title', () => {

            component.sessions = [{
                id: 1,
                name: "Angular for dummies",
                presenter: 'Juanito banana',
                duration: 1,
                level: 'Beginner',
                abstract: 'Lorem ipsum',
                voters: ['Juanito']
            }];

            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            //Option A
            expect(element.querySelector("[well-title]").textContent)
                .toContain('Angular for dummies');

            //Option B
            // expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Angular for dummies');
        })

    });

});