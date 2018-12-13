'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


    return queryInterface.bulkInsert('brewery_tables', [
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Draught House Pub and Brewery",
        address: "4112 Medical Parkway, Austin, TX, 78741"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Independence Brewing Co.",
        address: "3913 Todd Lane, No. 607, Austin, TX, 78744"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "North by Northwest Restaurant and Brewery",
        address: "10010 Capital Of TX Hwy N, Austin, TX, 78759"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Uncle Billy's Brew and Que",
        address: "1530 Barton Springs Road, Austin, TX, 78704"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "(512) Brewing Company",
        address: "407 Radam, F200, Austin, TX, 78745"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Black Star Co-op Pub and Brewery",
        address: "7020 Easy Wind Drive, Suite 100, Austin, TX, 78752"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Thirsty Planet Brewing",
        address: "11160 Circle Drive, Austin, TX, 78736"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Jester King Craft Brewery",
        address: "13005 Fitzhugh Rd., Austin, TX, 78736"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Circle Brewing Company",
        address: "2340 W Braker Ln., Suite B , Austin, TX, 78758"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Hops and Grain Brewing",
        address: "507 Calles Street, Austin, TX, 78702"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Austin Beerworks",
        address: "3009 Industrial Terrace, Austin, TX, 78758"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "South Austin Brewing Company",
        address: "415 E St. Elmo Rd, Austin, TX, 78745"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Twisted X Brewing Co",
        address: "3200 W Whitestone Blvd, Austin, TX, 78613"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Adelbert's Brewery",
        address: "2314 Rutland Drive, #100, Austin, TX, 78758"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Pinthouse Pizza",
        address: "4729 Burnet Road, Austin, TX, 78756"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Infamous Brewing Co",
        address: "4602 Weletka Dr Suite #200-300, Austin, TX, 78734"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Austin Beer Garden Brewing Co",
        address: "1305 W. Oltorf, Austin, TX, 78704"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "4th Tap Brewing Co-Op",
        address: "10615 Metric Blvd, Austin, TX, 78758"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "NXNW South",
        address: "5701 W Slaughter, Bldg. D, Austin, TX, 78749"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Zilker Brewing Co",
        address: "1701 E 6th St, Austin, tx, 78702"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "St Elmo Brewing Company",
        address: "440 E. St. Elmo Rd. Suite G-2, Austin, TX, 78745"
        },
        
        
        {
        createdAt: "2018-12-13 20:20:29",
        updatedAt: "2018-12-13 20:20:29",
        brewer_name: "Lazarus Brewing Co",
        address: "1902 E 6th St, Austin, TX, 78702"
        }
  ])


  },

  down: (queryInterface, Sequelize) => {

    //will delete stuff 
    
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
