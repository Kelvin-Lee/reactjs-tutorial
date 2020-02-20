import * as util from './util.js'

describe('util', function(){
   describe('on calculateWinner', function(){
     it('should return the winner\'s symbol', function(){
        let squaresX = ['X', 'X', 'X', null, null, null, null, null, null, null];
        expect(util.calculateWinner(squaresX)).toBe('X');
     });
     it('should return null when there is not yet a winner', function(){
         let squares = ['X', 'O','X', 'O','X', 'O', null, 'O', null];
         expect(util.calculateWinner(squares)).toBe(null);
     });
   });
});
