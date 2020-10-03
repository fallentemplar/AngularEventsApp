import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { ISession } from '../shared';
import { VoterService } from './voter.service';

// Unit testing (isolated) services

describe('VoterService', () => {
    let voterService: VoterService;
    let mockHttp;
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });
    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            const session = { id: 6, voters: ['Juan', 'Pedro', 'Benito'] };
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, session as ISession, 'Juan');

            expect(session.voters.length).toBe(2);
            expect(session.voters[0]).toBe('Pedro');
        });

        it('should call http.delete with the right URL', () => {
            const session = { id: 6, voters: ['Juan', 'Pedro', 'Benito'] };
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, session as ISession, 'Juan');

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/Juan');
        });
    });

    describe('addVoter', () => {
        it('it should call http.get with the right URL', () => {
            const session = { id: 6, voters: ['Juan', 'Pedro', 'Benito'] };
            mockHttp.post.and.returnValue(of(false));

            voterService.addVoter(3, session as ISession, 'Rodrigo');

            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/Rodrigo', {}, jasmine.any(Object));
        });
    });
});
