export const points = {
  type: "FeatureCollection",
  name: "ground_truth",
  crs: {
    type: "name",
    properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
  },
  features: [
    {
      type: "Feature",
      properties: {
        id: 1,
        name: "Roslyn Rivera Mall",
        x: 36.80011111,
        y: -1.21680556,
        class: "commercial",
        location: "ruaka",
        orientation: "NW",
      },
      geometry: {
        type: "Point",
        coordinates: [36.80011111, -1.21680556],
      },
      photo: "frontend/src/assets/photos/Roslyn_Rivera_Mall_NW.jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 2,
        name: "Bellisimo Apartments",
        x: 36.7750282,
        y: -1.2044149,
        class: "residential",
        location: "ruaka",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.7750282, -1.2044149] },
      photo: "../photos/bellisimo apartments NE.jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 3,
        name: "Two Rivers Mall",
        x: 36.796566,
        y: -1.2076599,
        class: "commercial",
        location: "ruaka",
        orientation: "SW",
      },
      geometry: { type: "Point", coordinates: [36.796566, -1.2076599] },
      photo: "../photos/Two Rivers Mall SW.jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 4,
        name: "Royal Shine Carwash",
        x: 36.7997513,
        y: -1.209437,
        class: "commercial",
        location: "ruaka",
        orientation: "S",
      },
      geometry: { type: "Point", coordinates: [36.7997513, -1.209437] },
      photo: "../photos/Royal shine car wash S.jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 5,
        name: "Total Energies",
        x: 36.78965,
        y: -1.2107417,
        class: "commercial",
        location: "ruaka",
        orientation: "NW",
      },
      geometry: { type: "Point", coordinates: [36.78965, -1.2107417] },
      photo: "./photos/TOTAL ENERGIES (NW).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 6,
        name: "Residential2",
        x: 36.7729194,
        y: -1.2041917,
        class: "residential",
        location: "ruaka",
        orientation: "NW",
      },
      geometry: { type: "Point", coordinates: [36.7729194, -1.2041917] },
      photo: "../photos/RESIDENTIAL2 (NW).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 7,
        name: "Residential",
        x: 36.7683944,
        y: -1.2032806,
        class: "residential",
        location: "ruaka",
        orientation: "SW",
      },
      geometry: { type: "Point", coordinates: [36.7683944, -1.2032806] },
      photo: "../photos/RESIDENTIAL (SW).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 8,
        name: "redhill bridge",
        x: 36.7604611,
        y: -1.2008583,
        class: "transport",
        location: "ruaka",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.7604611, -1.2008583] },
      photo: "../photos/RESIDENTIAL2 (NW).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 9,
        name: "mansfeild Apartments",
        x: 36.7783222,
        y: -1.2057611,
        class: "tall grass",
        location: "ruaka",
        orientation: "SW",
      },
      geometry: { type: "Point", coordinates: [36.7783222, -1.2057611] },
      photo: "../photos/REDHILL BRIDGE (NE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 10,
        name: "Kinyanjui Apartments",
        x: 36.778325,
        y: -1.2057556,
        class: "built up",
        location: "ruaka",
        orientation: "SE",
      },
      geometry: { type: "Point", coordinates: [36.778325, -1.2057556] },
      photo: "../photos/MANSFIELD APARTMENTS (SW).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 11,
        name: "Isuzu",
        x: 36.7925111,
        y: -1.2062639,
        class: "commercial",
        location: "ruaka",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.7925111, -1.2062639] },
      photo: "../photos/KINYANJUI APARTMENTS (SE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 12,
        name: "informal settlement 1",
        x: 36.8209417,
        y: -1.2181639,
        class: "commercial",
        location: "ruaka",
        orientation: "SE",
      },
      geometry: { type: "Point", coordinates: [36.8209417, -1.2181639] },
      photo: ".../photos/ISUZU (NE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 13,
        name: "dust road",
        x: 36.827875,
        y: -1.2273917,
        class: "transport",
        location: "ruaka",
        orientation: "SE",
      },
      geometry: { type: "Point", coordinates: [36.827875, -1.2273917] },
      photo: "../photos/INFORMAL SETTLEMENT 1(SE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 14,
        name: "informal 2",
        x: 36.8209333,
        y: -1.218475,
        class: "commercial",
        location: "ruaka",
        orientation: "SE",
      },
      geometry: { type: "Point", coordinates: [36.8209333, -1.218475] },
      photo: "../photos/INFORMAL 2 (SE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 15,
        name: "shops",
        x: 36.7798222,
        y: -1.2058083,
        class: "commercial",
        location: "ruaka",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.7798222, -1.2058083] },
      photo: "../photos/shops(NE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 16,
        name: "kagundo road",
        x: 36.7681139,
        y: -1.2096778,
        class: "bareground",
        location: "ruaka",
        orientation: "SE",
      },
      geometry: { type: "Point", coordinates: [36.7681139, -1.2096778] },
      photo: "../photos/BAREGROUND KAGUNDO RD (SE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 17,
        name: "Bar 69",
        x: 36.7913917,
        y: -1.2063222,
        class: "commercial",
        location: "ruaka",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.7913917, -1.2063222] },
      photo: "../photos/BAR 69 (NE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 18,
        name: "Kagundo road",
        x: 36.768025,
        y: -1.2095556,
        class: "agriculture",
        location: "ruaka",
        orientation: "NW",
      },
      geometry: { type: "Point", coordinates: [36.768025, -1.2095556] },
      photo: "../photos/AGRICULTURE KAGUNDO RD (NW).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 19,
        name: "bareground",
        x: 36.9372864,
        y: -1.4888099,
        class: "bareground",
        location: "Kitengela",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.9372864, -1.4888099] },
      photo: "../photos/bare ground 60.jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 20,
        name: "Flats",
        x: 36.9512634,
        y: -1.495923,
        class: "residential",
        location: "Kitengela",
        orientation: "NW",
      },
      geometry: { type: "Point", coordinates: [36.9512634, -1.495923] },
      photo: "../photos/flats 325.jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 21,
        name: "grassland1",
        x: 36.9415932,
        y: -1.5255869,
        class: "dead grass",
        location: "Kitengela",
        orientation: "SE",
      },
      geometry: { type: "Point", coordinates: [36.9415932, -1.5255869] },
      photo: "../photos/GRASSLAND (SE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 22,
        name: "murrum mining",
        x: 36.9339485,
        y: -1.520375,
        class: "mining",
        location: "Kitengela",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.9339485, -1.520375] },
      photo: "../photos/murram mining 70.jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 23,
        name: "kusco homes",
        x: 36.9303513,
        y: -1.5126049,
        class: "residential",
        location: "Kitengela",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.9303513, -1.5126049] },
      photo: "../photos/KUSCCO HOMES.jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 24,
        name: "ranch",
        x: 36.9440231,
        y: -1.5227081,
        class: "dead grass",
        location: "Kitengela",
        orientation: "NW",
      },
      geometry: { type: "Point", coordinates: [36.9440231, -1.5227081] },
      photo: "../photos/Ranch.jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 25,
        name: "tosha petrol",
        x: 36.9547861,
        y: -1.4913528,
        class: "commercial",
        location: "Kitengela",
        orientation: "SE",
      },
      geometry: { type: "Point", coordinates: [36.9547861, -1.4913528] },
      photo: "../photos/Tosha petrol 130° (SE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 26,
        name: "informal 3",
        x: 36.9619639,
        y: -1.4753278,
        class: "commercial",
        location: "Kitengela",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.9619639, -1.4753278] },
      photo: "../photos/informal 3 NE.jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 27,
        name: "scrap yard",
        x: 36.9513889,
        y: -1.5113111,
        class: "commercial",
        location: "Kitengela",
        orientation: "NW",
      },
      geometry: { type: "Point", coordinates: [36.9513889, -1.5113111] },
      photo: "../photos/Scrapyard (NW).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 28,
        name: "plains",
        x: 36.9367056,
        y: -1.5533667,
        class: "range land",
        location: "Kitengela",
        orientation: "NW",
      },
      geometry: { type: "Point", coordinates: [36.9367056, -1.5533667] },
      photo: "../photos/Plains 330° (NW).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 29,
        name: "mosque",
        x: 36.9560639,
        y: -1.4847861,
        class: "social",
        location: "Kitengela",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.9560639, -1.4847861] },
      photo: "../photos/Mosque 69°(NE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 30,
        name: "kitengela mall",
        x: 36.9580278,
        y: -1.4785778,
        class: "commercial",
        location: "Kitengela",
        orientation: "SE",
      },
      geometry: { type: "Point", coordinates: [36.9580278, -1.4785778] },
      photo: "../photos/KITENGELA MALL (SE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 31,
        name: "EPZ",
        x: 36.9692833,
        y: -1.4733,
        class: "industrial",
        location: "Kitengela",
        orientation: "NE",
      },
      geometry: { type: "Point", coordinates: [36.9692833, -1.4733] },
      photo: "../photos/EPZ (NE).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: 32,
        name: "Enkasiti Resort",
        x: 36.9369139,
        y: -1.5535861,
        class: "dead grass",
        location: "Kitengela",
        orientation: "SW",
      },
      geometry: { type: "Point", coordinates: [36.9369139, -1.5535861] },
      photo: "../photos/Enkasiti resort (SW).jpg",
    },
    {
      type: "Feature",
      properties: {
        id: null,
        name: "BMWPM Plant",
        x: 36.941575,
        y: -1.5392889,
        class: "industrial",
        location: "Kitengela",
        orientation: "SE",
      },
      geometry: { type: "Point", coordinates: [36.941575, -1.5392889] },
      photo: "../photos/BOLEYN MAGIC WALL PANEL MANUFACTURING PLANT (SE).jpg",
    },
  ],
};
