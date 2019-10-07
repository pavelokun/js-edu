/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let know = 800;
      let dontKnow = 1300;
      if (knowsProgramming == true) {
        return Math.ceil(know/config[focus]);
      } else {
        return Math.ceil(dontKnow/config[focus]);
      };
  };
  