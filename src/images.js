
const images = [
    { id: 1, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage1.jpg", title: "Kayaks On Lake" },
    { id: 2, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage2.jpg", title: "Lake Behind Trees" },
    { id: 3, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage3.jpg", title: "Mountain River Base" },
    { id: 4, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage4.jpg", title: "Lake Overlook" },
    { id: 5, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage5.jpg", title: "Boat Tour" },
    { id: 6, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage6.jpg", title: "Waterfall Valley" },
    { id: 7, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage7.jpg", title: "Cliff Face Lake" },
    { id: 8, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage8.jpg", title: "Banff Gondola" },
    { id: 9, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage9.jpg", title: "Banff from Above" },
    { id: 10, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage10.jpg", title: "Foggy Valley" },
    { id: 11, colour: 'Colour', location: 'Rocky Mountains', theme: 'People', url: "images/websiteimage11.jpg", title: "Fire Lookout" },
    { id: 12, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage12.jpg", title: "Rocky Stream" },
    { id: 13, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage13.jpg", title: "Misty Falls" },
    { id: 14, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage14.jpg", title: "Mt Rundle" },
    { id: 15, colour: 'Colour', location: 'Rocky Mountains', theme: 'Animals', url: "images/websiteimage15.jpg", title: "Ram On Road" },
    { id: 16, colour: 'Colour', location: 'Rocky Mountains', theme: 'Animals', url: "images/websiteimage16.jpg", title: "Ram From Below" },
    { id: 17, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage17.jpg", title: "Rundle Reflected" },
    { id: 18, colour: 'Colour', location: 'Rocky Mountains', theme: 'Animals', url: "images/websiteimage18.jpg", title: "Elk Grazing" },
    { id: 19, colour: 'Colour', location: 'Rocky Mountains', theme: 'Architecture', url: "images/websiteimage19.jpg", title: "Winding Tracks" },
    { id: 20, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage20.jpg", title: "Flowers and Mountains" },
    { id: 21, colour: 'Colour', location: 'Rocky Mountains', theme: 'People', url: "images/websiteimage21.jpg", title: "Imagery of the Falls" },
    { id: 22, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage22.jpg", title: "Waterfall Past Trees" },
    { id: 23, colour: 'Colour', location: 'Rocky Mountains', theme: 'People', url: "images/websiteimage23.jpg", title: "Closeup Adventurer" },
    { id: 24, colour: 'Colour', location: 'Rocky Mountains', theme: 'Animals', url: "images/websiteimage24.jpg", title: "Brown Bear Crossing" },
    { id: 25, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage25.jpg", title: "Smoke Upon the Hills" },
    { id: 26, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage26.jpg", title: "Lake Louise Garden" },
    { id: 27, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage27.jpg", title: "Hotel on Lake Louise" },
    { id: 28, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage28.jpg", title: "Distant Range" },
    { id: 29, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage29.jpg", title: "Red Cabin" },
    { id: 30, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage30.jpg", title: "Vibrant Lake" },
    { id: 31, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage31.jpg", title: "Raging River" },
    { id: 32, colour: 'Colour', location: 'Rocky Mountains', theme: 'People', url: "images/websiteimage32.jpg", title: "Together in the Rockies" },
    { id: 33, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage33.jpg", title: "Mountain Path" },
    { id: 34, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage34.jpg", title: "Glacial Sheet" },
    { id: 35, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage35.jpg", title: "Winding Mountain Stream" },
    { id: 36, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage36.jpg", title: "Distant Snowcaps" },
    { id: 37, colour: 'Colour', location: 'Rocky Mountains', theme: 'Animals', url: "images/websiteimage37.jpg", title: "Mountain Goats Shelter" },
    { id: 38, colour: 'Colour', location: 'Rocky Mountains', theme: 'Animals', url: "images/websiteimage38.jpg", title: "Caribou Grazing" },
    { id: 39, colour: 'Colour', location: 'Rocky Mountains', theme: 'Animals', url: "images/websiteimage39.jpg", title: "Showing Off Antlers" },
    { id: 40, colour: 'Colour', location: 'Rocky Mountains', theme: 'People', url: "images/websiteimage40.jpg", title: "Skipping Stones" },
    { id: 41, colour: 'Colour', location: 'Rocky Mountains', theme: 'Architecture', url: "images/websiteimage41.jpg", title: "Gondola to the Top" },
    { id: 42, colour: 'Colour', location: 'Rocky Mountains', theme: 'People', url: "images/websiteimage42.jpg", title: "Posing Infront of Nature" },
    { id: 43, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage43.jpg", title: "Sprawling Forest" },
    { id: 44, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage44.jpg", title: "Splashing Stream" },
    { id: 45, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage45.jpg", title: "Summer Frozen Lake" },
    { id: 46, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage46.jpg", title: "Melting Glacier" },
    { id: 47, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage47.jpg", title: "Rapid Falls" },
    { id: 48, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage48.jpg", title: "Rainbow Falls" },
    { id: 49, colour: 'Colour', location: 'Rocky Mountains', theme: 'Architecture', url: "images/websiteimage49.jpg", title: "Bridge Over Canyon" },
    { id: 50, colour: 'Colour', location: 'Rocky Mountains', theme: 'Landscape', url: "images/websiteimage50.jpg", title: "Shining Mountains" },
    { id: 51, colour: 'Colour', location: 'Drumheller', theme: 'Architecture', url: "images/websiteimage51.jpg", title: "Bobsled Track" },
    { id: 52, colour: 'Colour', location: 'Drumheller', theme: 'Animals', url: "images/websiteimage52.jpg", title: "Swiming Duck" },
    { id: 53, colour: 'Colour', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage53.jpg", title: "Fun in the River" },
    { id: 54, colour: 'Colour', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage54.jpg", title: "\"Sunhat\"" },
    { id: 55, colour: 'Colour', location: 'St Lawrence River', theme: 'Architecture', url: "images/websiteimage55.jpg", title: "Ship Beneath Bridge" },
    { id: 56, colour: 'Colour', location: 'Drumheller', theme: 'Landscape', url: "images/websiteimage56.jpg", title: "Layered Canyon" },
    { id: 57, colour: 'Colour', location: 'Drumheller', theme: 'People', url: "images/websiteimag57.jpg", title: "Stylish Photographer" },
    { id: 58, colour: 'Colour', location: 'Drumheller', theme: 'People', url: "images/websiteimage58.jpg", title: "Canyon Overseer" },
    { id: 59, colour: 'Colour', location: 'Drumheller', theme: 'People', url: "images/websiteimage59.jpg", title: "\"Is It Behind Me?\"" },
    { id: 60, colour: 'Colour', location: 'Drumheller', theme: 'Architecture', url: "images/websiteimage60.jpg", title: "T-Rex Scull" },
    { id: 61, colour: 'Colour', location: 'Drumheller', theme: 'Architecture', url: "images/websiteimage61.jpg", title: "Triceratops" },
    { id: 62, colour: 'Colour', location: 'Drumheller', theme: 'Landscape', url: "images/websiteimage62.jpg", title: "Atop Drumheller" },
    { id: 63, colour: 'Colour', location: 'Charleston Lake', theme: 'Landscape', url: "images/websiteimage63.jpg", title: "Calm Waters" },
    { id: 64, colour: 'Colour', location: 'Charleston Lake', theme: 'People', url: "images/websiteimage64.jpg", title: "Smiling On Lake" },
    { id: 65, colour: 'Colour', location: 'Charleston Lake', theme: 'Landscape', url: "images/websiteimage65.jpg", title: "Distant Flag" },
    { id: 66, colour: 'Colour', location: 'Charleston Lake', theme: 'Landscape', url: "images/websiteimage66.jpg", title: "Shallow Waters" },
    { id: 67, colour: 'Colour', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage67.jpg", title: "Boat Driver" },
    { id: 68, colour: 'Colour', location: 'St Lawrence River', theme: 'Landscape', url: "images/websiteimage68.jpg", title: "Bobing Buoy" },
    { id: 69, colour: 'Colour', location: 'St Lawrence River', theme: 'Landscape', url: "images/websiteimage69.jpg", title: "Light Through Fence" },
    { id: 70, colour: 'Colour', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage70.jpg", title: "Slytherin" },
    { id: 71, colour: 'Colour', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage71.jpg", title: "Smiling On the River" },
    { id: 72, colour: 'Colour', location: 'St Lawrence River', theme: 'Animals', url: "images/websiteimage72.jpg", title: "Wading Heron" },
    { id: 73, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage73.jpg", title: "Big Toys" },
    { id: 74, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage74.jpg", title: "Smooch" },
    { id: 75, colour: 'Colour', location: 'St Lawrence River', theme: 'Landscape', url: "images/websiteimage75.jpg", title: "Wavy Waters" },
    { id: 76, colour: 'Colour', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage76.jpg", title: "Scary Smile" },
    { id: 77, colour: 'Colour', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage77.jpg", title: "One Ski" },
    { id: 78, colour: 'Colour', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage78.jpg", title: "Two Skis" },
    { id: 79, colour: 'Colour', location: 'Johnstown', theme: 'Animals', url: "images/websiteimage79.jpg", title: "Dogs" },
    { id: 80, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage.80jpg", title: "Pink" },
    { id: 81, colour: 'Colour', location: 'Johnstown', theme: 'Landscape', url: "images/websiteimage81.jpg", title: "Lilacs" },
    { id: 82, colour: 'Colour', location: 'Johnstown', theme: 'Landscape', url: "images/websiteimage82.jpg", title: "Creek" },
    { id: 83, colour: 'Colour', location: 'Johnstown', theme: 'Landscape', url: "images/websiteimage83.jpg", title: "Winding Path" },
    { id: 84, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage84.jpg", title: "Full Swing" },
    { id: 85, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage85.jpg", title: "Angel" },
    { id: 86, colour: 'Colour', location: 'Johnstown', theme: 'Architecture', url: "images/websiteimage86.jpg", title: "Driver" },
    { id: 87, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage87.jpg", title: "Good Game" },
    { id: 88, colour: 'Colour', location: 'Johnstown', theme: 'Architecture', url: "images/websiteimage88.jpg", title: "Twinkle Twinkle" },
    { id: 89, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage89.jpg", title: "Grr" },
    { id: 90, colour: 'Colour', location: 'Johnstown', theme: 'Landscape', url: "images/websiteimage90.jpg", title: "Snowy Forest" },
    { id: 91, colour: 'Colour', location: 'Johnstown', theme: 'Landscape', url: "images/websiteimage91.jpg", title: "Icy Road" },
    { id: 92, colour: 'Colour', location: 'Johnstown', theme: 'Animals', url: "images/websiteimage92.jpg", title: "Two Llamas" },
    { id: 93, colour: 'Colour', location: 'Johnstown', theme: 'Landscape', url: "images/websiteimage93.jpg", title: "Snowy Star" },
    { id: 94, colour: 'Colour', location: 'Johnstown', theme: 'Landscape', url: "images/websiteimage94.jpg", title: "Deer Food" },
    { id: 95, colour: 'Colour', location: 'Johnstown', theme: 'Landscape', url: "images/websiteimage95.jpg", title: "Lines" },
    { id: 96, colour: 'Colour', location: 'Johnstown', theme: 'Architecture', url: "images/websiteimage96.jpg", title: "Corner Stream" },
    { id: 97, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage97.jpg", title: "Lines pt. 2" },
    { id: 98, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage98.jpg", title: "20" },
    { id: 99, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage99.jpg", title: "The Fam" },
    { id: 100, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage100.jpg", title: "Covid Christmas" },
    { id: 101, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage101.jpg", title: "Red" },
    { id: 102, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage102.jpg", title: "Young and Old" },
    { id: 103, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage103.jpg", title: "Reder" },
    { id: 104, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage104.jpg", title: "Bang!" },
    { id: 105, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage105.jpg", title: "Toss" },
    { id: 106, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage106.jpg", title: "Swish" },
    { id: 107, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage107.jpg", title: "Shaded" },
    { id: 108, colour: 'Colour', location: 'Johnstown', theme: 'People', url: "images/websiteimage108.jpg", title: "Cracked" },
    { id: 109, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage109.jpg", title: "Chimo" },
    { id: 110, colour: 'B/W', location: 'Johnstown', theme: 'Landscape', url: "images/websiteimage110.jpg", title: "Bloom" },
    { id: 111, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage111.jpg", title: "Sandwich" },
    { id: 112, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage112.jpg", title: "Patio" },
    { id: 113, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage113.jpg", title: "Ben" },
    { id: 114, colour: 'B/W', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage114.jpg", title: "Boating Under Bridge" },
    { id: 115, colour: 'B/W', location: 'St Lawrence River', theme: 'Landscape', url: "images/websiteimage115.jpg", title: "Sailboat" },
    { id: 116, colour: 'B/W', location: 'St Lawrence River', theme: 'Landscape', url: "images/websiteimage116.jpg", title: "Par 3" },
    { id: 117, colour: 'B/W', location: 'St Lawrence River', theme: 'Landscape', url: "images/websiteimage117.jpg", title: "Green Buoy" },
    { id: 118, colour: 'B/W', location: 'St Lawrence River', theme: 'Architecture', url: "images/websiteimage118.jpg", title: "Spire" },
    { id: 119, colour: 'B/W', location: 'St Lawrence River', theme: 'Animals', url: "images/websiteimage119.jpg", title: "Mooers" },
    { id: 120, colour: 'B/W', location: 'St Lawrence River', theme: 'Architecture', url: "images/websiteimage120.jpg", title: "Damn" },
    { id: 121, colour: 'B/W', location: 'St Lawrence River', theme: 'Architecture', url: "images/websiteimage121.jpg", title: "Daamnn" },
    { id: 122, colour: 'B/W', location: 'St Lawrence River', theme: 'Animals', url: "images/websiteimage122.jpg", title: "Nesting" },
    { id: 123, colour: 'B/W', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage123.jpg", title: "First Mate" },
    { id: 124, colour: 'B/W', location: 'St Lawrence River', theme: 'People', url: "images/websiteimage124.jpg", title: "Slurp" },
    { id: 125, colour: 'B/W', location: 'Johnstown', theme: 'Architecture', url: "images/websiteimage125.jpg", title: "Breaking Bad" },
    { id: 126, colour: 'B/W', location: 'Johnstown', theme: 'Architecture', url: "images/websiteimage126.jpg", title: "SEPS" },
    { id: 127, colour: 'B/W', location: 'Johnstown', theme: 'Architecture', url: "images/websiteimage127.jpg", title: "Mary" },
    { id: 128, colour: 'B/W', location: 'Johnstown', theme: 'Architecture', url: "images/websiteimage128.jpg", title: "Steeple" },
    { id: 129, colour: 'B/W', location: 'Johnstown', theme: 'Architecture', url: "images/websiteimage129.jpg", title: "Bridge" },
    { id: 130, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage130.jpg", title: "Dive" },
    { id: 131, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage131.jpg", title: "Four Legs" },
    { id: 132, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage132.jpg", title: "Cow Lick" },
    { id: 133, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage133.jpg", title: "Chilin'" },
    { id: 134, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage134.jpg", title: "146" },
    { id: 135, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage135.jpg", title: "Po-Po" },
    { id: 136, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage136.jpg", title: "Art Deco" },
    { id: 137, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage137.jpg", title: "Dolphin" },
    { id: 138, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage138.jpg", title: "Henrique" },
    { id: 139, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage139.jpg", title: "Guard Dog" },
    { id: 140, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage140.jpg", title: "Author" },
    { id: 141, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage141.jpg", title: "Lol" },
    { id: 142, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage142.jpg", title: "Sup" },
    { id: 143, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage143.jpg", title: "Crochet" },
    { id: 144, colour: 'B/W', location: 'Johnstown', theme: 'Animals', url: "images/websiteimage144.jpg", title: "Breton" },
    { id: 145, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage145.jpg", title: "Birdie" },
    { id: 146, colour: 'B/W', location: 'Johnstown', theme: 'People', url: "images/websiteimage146.jpg", title: "Par" },
    { id: 147, colour: 'B/W', location: 'Ottawa', theme: 'Architecture', url: "images/websiteimage147.jpg", title: "Reflections in the Canal" },
    { id: 148, colour: 'B/W', location: 'Ottawa', theme: 'Architecture', url: "images/websiteimage148.jpg", title: "Sandy Hill" },
    { id: 149, colour: 'B/W', location: 'Ottawa', theme: 'Architecture', url: "images/websiteimage149.jpg", title: "Archway" },
    { id: 150, colour: 'B/W', location: 'Ottawa', theme: 'Architecture', url: "images/websiteimage150.jpg", title: "Tower" },
    { id: 151, colour: 'B/W', location: 'Ottawa', theme: 'Architecture', url: "images/websiteimage151.jpg", title: "Snowy Bush" },
    { id: 152, colour: 'B/W', location: 'Ottawa', theme: 'Architecture', url: "images/websiteimage152.jpg", title: "Louis-Pasteur" },
    { id: 153, colour: 'B/W', location: 'Ottawa', theme: 'Architecture', url: "images/websiteimage153.jpg", title: "Rise" },
    { id: 154, colour: 'B/W', location: 'Ottawa', theme: 'Architecture', url: "images/websiteimage154.jpg", title: "Fall Ball" },
    { id: 155, colour: 'B/W', location: 'Ottawa', theme: 'Architecture', url: "images/websiteimage155.jpg", title: "Embankment" },
    { id: 156, colour: 'B/W', location: 'Ottawa', theme: 'Animals', url: "images/websiteimage156.jpg", title: "Sittings Ducks" },
    { id: 157, colour: 'B/W', location: 'Ottawa', theme: 'Animals', url: "images/websiteimage157.jpg", title: "Cascade" },
    { id: 158, colour: 'B/W', location: 'Ottawa', theme: 'Animals', url: "images/websiteimage158.jpg", title: "Swimming Upstream" },
    { id: 159, colour: 'B/W', location: 'Ottawa', theme: 'Architecture', url: "images/websiteimage159.jpg", title: "Low Road" },


    

    
  ];

  export default images;