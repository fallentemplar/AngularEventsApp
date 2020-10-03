import { ISession } from '../../shared';
import { SessionListComponent } from "./session-list.component"

describe('SessionListComponent-Isolated', () => {
    let component: SessionListComponent;

    let mockAuthService, mockVoterService;


    beforeEach(() => {
        mockAuthService = jasmine.createSpyObj('authService', [], ['currentUser'])
        mockVoterService = jasmine.createSpyObj('voterService', ['deleteVoter', 'addVoter', 'userHasVoted'], [])
        component = new SessionListComponent(mockAuthService, mockVoterService);
    })
    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'intermediate' },
                { name: 'session 3', level: 'beginner' },
                { name: 'session 4', level: 'advanced' }
            ];

            component.filterBy = 'beginner';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(1);
        })

        it('should show all sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'session 3', level: 'intermediate' },
                { name: 'session 4', level: 'intermediate' },
                { name: 'session 1', level: 'beginner' },
                { name: 'session 2', level: 'advanced' }
            ];

            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(4);
            expect(component.visibleSessions[0].name).toBe('session 1');
            expect(component.visibleSessions[3].name).toBe('session 4');
        })
    })

})