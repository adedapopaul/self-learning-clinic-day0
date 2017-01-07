
  'use strict';

  var myApp = require('../app/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });
      it('should return [-15, -8] for [-15, -10, -13,-9, -8]', function () {
        expect(myApp.findMinMax([-15, -10, -13,-9, -8])).toEqual([-15, -8]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
       it('should return [-8, 113] for [47, 66, 65, 22, 44, 67, 78, 8, 99, 113]', function () {
        expect(myApp.findMinMax([47, 66, 65, 22, 44, 67, 78, -8, 99, 113])).toEqual([-8, 113]);
      });


    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [6] for [ 6, 6, 6, 6, 6, 6 ]', function () {
        expect(myApp.findMinMax([ 6, 6, 6, 6, 6, 6 ])).toEqual([6]);
      });
      it('should return [2] for [2]', function () {
        expect(myApp.findMinMax([ 2])).toEqual([2]);
      });

      it("should return [0] for [0, 0, 0 , 0]", function() {
          expect(myApp.findMinMax([0, 0, 0 , 0])).toEqual([0]);
 })

    });

      describe('Test to describe when the arguement is NOt a Number', function () {

            it('should return undefined for (3,5,6,7)', function () {
        expect(myApp.findMinMax(3,5,6,7)).toEqual(undefined);
      });

           
          });

  
  });

