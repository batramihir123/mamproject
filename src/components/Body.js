import React, { useEffect } from "react";
import {useState} from "react";
import { ReactDOM } from "react";




const Body = () =>
{

  const [city, setCity] = useState("");
  const [builder, setBuilder] = useState("");
  const [suitType, setSuitType] = useState("");
  const [desiredOccupants, setDesiredOccupants] = useState("");
  const [viewedSuite, setViewedSuite] = useState(false);
  const [leasingAgent, setLeasingAgent] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [homeTelephone, setHomeTelephone] = useState("");
  const [workTelephone, setWorkTelephone] = useState("");
  const [cellTelephone, setCellTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [sin, setSin] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [streetAddress, setStreetAddress] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [landlord, setLandlord] = useState('');
  const [landlordPhone, setLandlordPhone] = useState('');
  const [duration, setDuration] = useState('');
  const [reasonForLeaving, setReasonForLeaving] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [yearsEmployed, setYearsEmployed] = useState('');
  const [salary, setSalary] = useState('');
  const [position, setPosition] = useState('');
  const [occupantOne, setOccupantOne] = useState({ firstName: '', lastName: '', age: '', relationship: '' });
  const [occupantTwo, setOccupantTwo] = useState({ firstName: '', lastName: '', age: '', relationship: '' });
  const [occupantThree, setOccupantThree] = useState({ firstName: '', lastName: '', age: '', relationship: '' });
  const [occupantFour, setOccupantFour] = useState({ firstName: '', lastName: '', age: '', relationship: '' });
  const [occupants, setOccupants] = useState([
    { firstName: '', lastName: '', age: '', relationship: '' },
    { firstName: '', lastName: '', age: '', relationship: '' },
    { firstName: '', lastName: '', age: '', relationship: '' },
    { firstName: '', lastName: '', age: '', relationship: '' },
  ]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      city: city,
      builder: builder,
      suitTypeRequired: suitType,
      desiredUnitsOfOccupants: desiredOccupants,
      haveViewedSuite: false,
      leasingAgentName: leasingAgent,
      personalInformation: {
        firstName: firstName,
        lastName:  lastName,
        homeTelephone: homeTelephone,
        workTelephone:workTelephone,
        cellTelephone: cellTelephone,
        emailAddress:  email,
        sin: sin,
        dateOfBirth: dateOfBirth,
        maritalStatus: maritalStatus,
      },
      addressInformation: {
        streetAddress:  streetAddress,
        city: city,
        province:  province,
        country: country,
        postalCode: postalCode,
        landlord: landlord,
        landlordPhone:  landlordPhone,
        howLong: duration,
        reasonForLeaving: reasonForLeaving,
      },
      employmentInformation: {
        companyName: companyName,
        companyAddress: companyAddress,
        supervisor: supervisor,
        companyPhone: companyPhone,
        yearsEmployed:  yearsEmployed,
        approximateSalary: salary,
        position:  position,
      },
      otherProposedOccupants: {
        occupant1: {
          firstName: occupants[0].firstName,
          lastName: occupants[0].lastName,
          age: occupants[0].age,
          relationship: occupants[0].relationship,
        },
        occupant2: {
          firstName: occupants[1]?.firstName || '',
          lastName: occupants[1]?.lastName || '',
          age: occupants[1]?.age || '',
          relationship: occupants[1]?.relationship || '',
        },
        occupant3: {
          firstName: occupants[2]?.firstName || '',
          lastName: occupants[2]?.lastName || '',
          age: occupants[2]?.age || '',
          relationship: occupants[2]?.relationship || '',
        },
        occupant4: {
          firstName: occupants[3]?.firstName || '',
          lastName: occupants[3]?.lastName || '',
          age: occupants[3]?.age || '',
          relationship: occupants[3]?.relationship || '',
        },
      }
    };
    setStreetAddress('');
    setCity('');
    setProvince('');
    setCountry('');
    setPostalCode('');
    setLandlord('');
    setLandlordPhone('');
    setDuration('');
    setReasonForLeaving('');
    setCompanyName('');
    setCompanyAddress('');
    setSupervisor('');
    setCompanyPhone('');
    setYearsEmployed('');
    setSalary('');
    setPosition('');

    setOccupantOne({ firstName: '', lastName: '', age: '', relationship: '' });
    setOccupantTwo({ firstName: '', lastName: '', age: '', relationship: '' });
    setOccupantThree({ firstName: '', lastName: '', age: '', relationship: '' });
    setOccupantFour({ firstName: '', lastName: '', age: '', relationship: '' });

  }

  const handleOccupantOneChange = (field, value) => {
    setOccupantOne({ ...occupantOne, [field]: value });
  };

  const handleOccupantTwoChange = (field, value) => {
    setOccupantTwo({ ...occupantTwo, [field]: value });
  };

  const handleOccupantThreeChange = (field, value) => {
    setOccupantThree({ ...occupantThree, [field]: value });
  };

  const handleOccupantFourChange = (field, value) => {
    setOccupantFour({ ...occupantFour, [field]: value });
  };

  const handleOccupantChange = (index, field, value) => {
    setOccupants((prevOccupants) => {
      const updatedOccupants = [...prevOccupants];
      updatedOccupants[index][field] = value;
      return updatedOccupants;
    });
  };

  
  const Building = {
    "build" : [
      "1612 Apartements",
      "1711 Mount Royal",
      "2501 Apartments",
      "Aberden Apartments",
      "Abigail Apartments",
      "Alex 20",
      "Alex 38",
      "Ales 44",
      "Alexander Apartments",
      "Ashley court",
      "Asben Apartments"
    ]
  };
  
  const cities = [
    {
        "Province": "Alberta",
        "City": [
            "Airdrie",
            "Beaumont",
            "Brooks",
            "Calgary",
            "Camrose",
            "Chestermere",
            "Cold Lake",
            "Edmonton",
            "Fort Saskatchewan",
            "Grande Prairie",
            "Lacombe",
            "Leduc",
            "Lethbridge",
            "Lloydminster",
            "Medicine Hat",
            "Red Deer",
            "Spruce Grove",
            "St. Albert",
            "Wetaskiwin"
        ],
        "Town": [
            "Athabasca",
            "Banff",
            "Barrhead",
            "Bashaw",
            "Bassano",
            "Beaverlodge",
            "Bentley",
            "Black Diamond",
            "Blackfalds",
            "Bon Accord",
            "Bonnyville",
            "Bow Island",
            "Bowden",
            "Bruderheim",
            "Calmar",
            "Canmore",
            "Cardston",
            "Carstairs",
            "Castor",
            "Claresholm",
            "Coaldale",
            "Coalhurst",
            "Cochrane",
            "Coronation",
            "Crossfield",
            "Daysland",
            "Devon",
            "Didsbury",
            "Drayton Valley",
            "Drumheller",
            "Eckville",
            "Edson",
            "Elk Point",
            "Fairview",
            "Falher",
            "Fort Macleod",
            "Fox Creek",
            "Gibbons",
            "Granum",
            "Grimshaw",
            "Hanna",
            "Hardisty",
            "High Level",
            "High Prairie",
            "High River",
            "Hinton",
            "Innisfail",
            "Irricana",
            "Killam",
            "Lamont",
            "Legal",
            "Magrath",
            "Manning",
            "Mayerthorpe",
            "McLennan",
            "Milk River",
            "Millet",
            "Morinville",
            "Mundare",
            "Nanton",
            "Nobleford",
            "Okotoks",
            "Olds",
            "Onoway",
            "Oyen",
            "Peace River",
            "Penhold",
            "Picture Butte",
            "Pincher Creek",
            "Ponoka",
            "Provost",
            "Rainbow Lake",
            "Raymond",
            "Redcliff",
            "Redwater",
            "Rimbey",
            "Rocky Mountain House",
            "Sedgewick",
            "Sexsmith",
            "Slave Lake",
            "Smoky Lake",
            "Spirit River",
            "St. Paul",
            "Stavely",
            "Stettler",
            "Stony Plain",
            "Strathmore",
            "Sundre",
            "Swan Hills",
            "Sylvan Lake",
            "Taber",
            "Thorsby",
            "Three Hills",
            "Tofield",
            "Trochu",
            "Turner Valley",
            "Two Hills",
            "Valleyview",
            "Vauxhall",
            "Vegreville",
            "Vermilion",
            "Viking",
            "Vulcan",
            "Wainwright",
            "Wembley",
            "Westlock",
            "Whitecourt"
        ]
    },
    {
        "Province": "British Columbia",
        "City": [
            "Abbotsford",
            "Armstrong",
            "Burnaby",
            "Campbell River",
            "Castlegar",
            "Chilliwack",
            "Colwood",
            "Coquitlam",
            "Courtenay",
            "Cranbrook",
            "Dawson Creek",
            "Delta",
            "Duncan",
            "Enderby",
            "Fernie",
            "Fort St. John",
            "Grand Forks",
            "Greenwood",
            "Kamloops",
            "Kelowna",
            "Kimberley",
            "Langford",
            "Langley",
            "Maple Ridge",
            "Merritt",
            "Nanaimo",
            "Nelson",
            "New Westminster",
            "North Vancouver",
            "Parksville",
            "Penticton",
            "Pitt Meadows",
            "Port Alberni",
            "Port Coquitlam",
            "Port Moody",
            "Powell River",
            "Prince George",
            "Prince Rupert",
            "Quesnel",
            "Revelstoke",
            "Richmond",
            "Rossland",
            "Salmon Arm",
            "Surrey",
            "Terrace",
            "Trail",
            "Vancouver",
            "Vernon",
            "Victoria",
            "West Kelowna",
            "White Rock",
            "Williams Lake"
        ],
        "Town": [
            "Comox",
            "Creston",
            "Gibsons",
            "Golden",
            "Ladysmith",
            "Lake Cowichan",
            "Oliver",
            "Osoyoos",
            "Port McNeill",
            "Princeton",
            "Qualicum Beach",
            "Sidney",
            "Smithers",
            "View Royal"
        ]
    },
    {
        "Province": "Manitoba",
        "City": [
            "Brandon",
            "Dauphin",
            "Flin Flon",
            "Morden",
            "Portage la Prairie",
            "Selkirk",
            "Steinbach",
            "Thompson",
            "Winkler",
            "Winnipeg"
        ],
        "Town": [
            "Altona",
            "Arborg",
            "Beausejour",
            "Carberry",
            "Carman",
            "Churchill",
            "Gillam",
            "Grand Rapids",
            "Lac du Bonnet",
            "Leaf Rapids",
            "Lynn Lake",
            "Melita",
            "Minnedosa",
            "Morris",
            "Neepawa",
            "Niverville",
            "PasThe Pas",
            "Powerview-Pine Falls",
            "Snow Lake",
            "Ste. Anne",
            "Stonewall",
            "Swan River",
            "Teulon",
            "Virden",
            "Winnipeg Beach",
            "Boissevain",
            "Deloraine",
            "Emerson",
            "Erickson",
            "Gilbert Plains",
            "Gladstone",
            "Grandview",
            "Gretna",
            "Hamiota",
            "Hartney",
            "MacGregor",
            "Manitou",
            "Minitonas",
            "Oak Lake",
            "Pilot Mound",
            "Plum Coulee",
            "Rapid City",
            "Rivers",
            "Roblin",
            "Rossburn",
            "Russell",
            "Souris",
            "Sainte Rose du Lac",
            "Treherne"
        ]
    },
    {
        "Province": "New Brunswick",
        "City": [
            "Bathurst",
            "Campbellton",
            "Dieppe",
            "Edmundston",
            "Fredericton",
            "Miramichi",
            "Moncton",
            "Saint John"
        ],
        "Town": [
            "Beresford",
            "Bouctouche",
            "Caraquet",
            "Dalhousie",
            "Florenceville-Bristol",
            "Grand Bay-Westfield",
            "Grand Falls",
            "Hampton",
            "Hartland",
            "Lamèque",
            "Nackawic",
            "Oromocto",
            "Quispamsis",
            "Richibucto",
            "Riverview",
            "Rothesay",
            "Sackville",
            "Saint Andrews",
            "St. George",
            "Saint-Léonard",
            "Saint-Quentin",
            "St. Stephen",
            "Shediac",
            "Shippagan",
            "Sussex",
            "Woodstock"
        ]
    },
    {
        "Province": "Newfoundland and Labrador",
        "City": [
            "Corner Brook",
            "St. John's",
            "Mount Pearl"
        ],
        "Town": [
            "Admirals Beach",
            "Anchor Point",
            "Appleton",
            "Aquaforte",
            "Arnold's Cove",
            "Avondale",
            "Badger",
            "Baie Verte",
            "Baine Harbour",
            "Bauline",
            "Bay Bulls",
            "Bay de Verde",
            "Bay L'Argent",
            "Bay Roberts",
            "Baytona",
            "Beachside",
            "Bellburns",
            "Belleoram",
            "Birchy Bay",
            "Bird Cove",
            "Bishop's Cove",
            "Bishop's Falls",
            "Bonavista",
            "Botwood",
            "Branch",
            "Brent's Cove",
            "Brighton",
            "Brigus",
            "Bryant's Cove",
            "Buchans",
            "Burgeo",
            "Burin",
            "Burlington",
            "Burnt Islands",
            "Campbellton",
            "Cape Broyle",
            "Cape St. George",
            "Carbonear",
            "Carmanville",
            "Cartwright",
            "Centreville-Wareham-Trinity",
            "Chance Cove",
            "Change Islands",
            "Channel-Port aux Basques",
            "Chapel Arm",
            "Charlottetown (Labrador)",
            "Clarenville",
            "Clarke's Beach",
            "Coachman's Cove",
            "Colinet",
            "Colliers",
            "Come By Chance",
            "Comfort Cove-Newstead",
            "Conception Bay South",
            "Conception Harbour",
            "Conche",
            "Cook's Harbour",
            "Cormack",
            "Cottlesville",
            "Cow Head",
            "Cox's Cove",
            "Crow Head",
            "Cupids",
            "Daniel's Harbour",
            "Deer Lake",
            "Dover",
            "Duntara",
            "Eastport",
            "Elliston",
            "Embree",
            "Englee",
            "English Harbour East",
            "Fermeuse",
            "Ferryland",
            "Flatrock",
            "Fleur de Lys",
            "Flower's Cove",
            "Fogo Island",
            "Forteau",
            "Fortune",
            "Fox Cove-Mortier",
            "Fox Harbour",
            "Frenchman's Cove",
            "Gallants",
            "Gambo",
            "Gander",
            "Garnish",
            "Gaskiers-Point La Haye",
            "Gaultois",
            "Gillams",
            "Glenburnie-Birchy Head-Shoal Brook",
            "Glenwood",
            "Glovertown",
            "Goose Cove East",
            "Grand Bank",
            "Grand Falls-Windsor",
            "Grand le Pierre",
            "Greenspond",
            "Hampden",
            "Hant's Harbour",
            "Happy Adventure",
            "Happy Valley-Goose Bay",
            "Harbour Breton",
            "Harbour Grace",
            "Harbour Main-Chapel's Cove-Lakeview",
            "Hare Bay",
            "Hawke's Bay",
            "Heart's Content",
            "Heart's Delight-Islington",
            "Heart's Desire",
            "Hermitage-Sandyville",
            "Holyrood",
            "Hopedale",
            "Howley",
            "Hughes Brook",
            "Humber Arm South",
            "Indian Bay",
            "Irishtown-Summerside",
            "Isle aux Morts",
            "Jackson's Arm",
            "Keels",
            "King's Cove",
            "King's Point",
            "Kippens",
            "Labrador City",
            "Lamaline",
            "L'Anse-au-Loup",
            "L'Anse-au-Clair",
            "Lark Harbour",
            "LaScie",
            "Lawn",
            "Leading Tickles",
            "Lewin's Cove",
            "Lewisporte",
            "Little Bay",
            "Little Bay East",
            "Little Bay Islands",
            "Little Burnt Bay",
            "Logy Bay-Middle Cove-Outer Cove",
            "Long Harbour-Mount Arlington Heights",
            "Lord's Cove",
            "Lourdes",
            "Lumsden",
            "Lushes Bight-Beaumont-Beaumont North",
            "Main Brook",
            "Makkovik",
            "Mary's Harbour",
            "Marystown",
            "Massey Drive",
            "McIvers",
            "Meadows",
            "Middle Arm",
            "Miles Cove",
            "Millertown",
            "Milltown-Head of Bay d'Espoir",
            "Ming's Bight",
            "Morrisville",
            "Mount Carmel-Mitchells Brook-St. Catherines",
            "Mount Moriah",
            "Musgrave Harbour",
            "Musgravetown",
            "Nain",
            "New Perlican",
            "New-Wes-Valley",
            "Nipper's Harbour",
            "Norman's Cove-Long Cove",
            "Norris Arm",
            "Norris Point",
            "North River",
            "North West River",
            "Northern Arm",
            "Old Perlican",
            "Pacquet",
            "Paradise",
            "Parkers Cove",
            "Parson's Pond",
            "Pasadena",
            "Peterview",
            "Petty Harbour-Maddox Cove",
            "Pilley's Island",
            "Pinware",
            "Placentia",
            "Point au Gaul",
            "Point Lance",
            "Point Leamington",
            "Point May",
            "Point of Bay",
            "Pool's Cove",
            "Port Anson",
            "Port au Choix",
            "Port au Port East",
            "Port au Port West-Aguathuna-Felix Cove",
            "Port Blandford",
            "Port Hope Simpson",
            "Port Kirwan",
            "Port Rexton",
            "Port Saunders",
            "Portugal Cove South",
            "Portugal Cove–St. Philip's",
            "Postville",
            "Pouch Cove",
            "Raleigh",
            "Ramea",
            "Red Bay",
            "Red Harbour",
            "Reidville",
            "Rencontre East",
            "Renews-Cappahayden",
            "Rigolet",
            "River of Ponds",
            "Riverhead",
            "Robert's Arm",
            "Rocky Harbour",
            "Roddickton-Bide Arm",
            "Rose Blanche-Harbour le Cou",
            "Rushoon",
            "Sally's Cove",
            "Salmon Cove",
            "Salvage",
            "Sandringham",
            "Sandy Cove",
            "Seal Cove (Fortune Bay)",
            "Seal Cove (White Bay)",
            "Small Point-Adam's Cove-Blackhead-Broad Cove",
            "South Brook",
            "South River",
            "Southern Harbour",
            "Spaniard's Bay",
            "Springdale",
            "St. Alban's",
            "St. Anthony",
            "St. Bernard's-Jacques Fontaine",
            "St. Brendan's",
            "St. Bride's",
            "St. George's",
            "St. Jacques-Coomb's Cove",
            "St. Joseph's",
            "St. Lawrence",
            "St. Lewis",
            "St. Lunaire-Griquet",
            "St. Mary's",
            "St. Pauls",
            "St. Shott's",
            "St. Vincent's-St. Stephen's-Peter's River",
            "Steady Brook",
            "Stephenville",
            "Stephenville Crossing",
            "Summerford",
            "Sunnyside",
            "Terra Nova",
            "Terrenceville",
            "Tilt Cove",
            "Torbay",
            "Traytown",
            "Trepassey",
            "Trinity",
            "Trinity Bay North",
            "Triton",
            "Trout River",
            "Twillingate",
            "Upper Island Cove",
            "Victoria",
            "Wabana",
            "Wabush",
            "West St. Modeste",
            "Westport",
            "Whitbourne",
            "Whiteway",
            "Winterland",
            "Winterton",
            "Witless Bay",
            "Woodstock",
            "Woody Point",
            "York Harbour"
        ]
    },
    {
        "Province": "Northwest Territories",
        "City": [
            "Yellowknife"
        ],
        "Town": [
            "Fort Smith",
            "Hay River",
            "Inuvik",
            "Norman Wells\t"
        ]
    },
    {
        "Province": "Nunavut",
        "City": [
            "Iqaluit"
        ],
        "Town": []
    },
    {
        "Province": "Ontario",
        "City": [
            "Barrie",
            "Belleville",
            "Brampton",
            "Brant",
            "Brantford",
            "Brockville",
            "Burlington",
            "Cambridge",
            "Clarence-Rockland",
            "Cornwall",
            "Dryden",
            "Elliot Lake",
            "Greater Sudbury",
            "Guelph",
            "Haldimand County",
            "Hamilton",
            "Kawartha Lakes",
            "Kenora",
            "Kingston",
            "Kitchener",
            "London",
            "Markham",
            "Mississauga",
            "Niagara Falls",
            "Norfolk County",
            "North Bay",
            "Orillia",
            "Oshawa",
            "Ottawa",
            "Owen Sound",
            "Pembroke",
            "Peterborough",
            "Pickering",
            "Port Colborne",
            "Prince Edward County",
            "Quinte West",
            "Richmond Hill",
            "Sarnia",
            "Sault Ste. Marie",
            "St. Catharines",
            "St. Thomas",
            "Stratford",
            "Temiskaming Shores",
            "Thorold",
            "Thunder Bay",
            "Timmins",
            "Toronto",
            "Vaughan",
            "Waterloo",
            "Welland",
            "Windsor",
            "Woodstock"
        ],
        "Town": [
            "Ajax",
            "Amherstburg",
            "Arnprior",
            "Atikokan",
            "Aurora",
            "Aylmer",
            "Bancroft",
            "Blind River",
            "Bracebridge",
            "Bradford West Gwillimbury",
            "Bruce Mines",
            "Caledon",
            "Carleton Place",
            "Cobalt",
            "Cobourg",
            "Cochrane",
            "Collingwood",
            "Deep River",
            "Deseronto",
            "East Gwillimbury",
            "Englehart",
            "Erin",
            "Espanola",
            "Essex",
            "Fort Erie",
            "Fort Frances",
            "Gananoque",
            "Georgina",
            "Goderich",
            "Gore Bay",
            "Grand Valley",
            "Gravenhurst",
            "Greater Napanee",
            "Grimsby",
            "Halton Hills",
            "Hanover",
            "Hawkesbury",
            "Hearst",
            "Huntsville",
            "Ingersoll",
            "Innisfil",
            "Iroquois Falls",
            "Kapuskasing",
            "Kearney",
            "Kingsville",
            "Kirkland Lake",
            "Lakeshore",
            "LaSalle",
            "Latchford",
            "Laurentian Hills",
            "Lincoln",
            "Marathon",
            "Mattawa",
            "Midland",
            "Milton",
            "Minto",
            "Mississippi Mills",
            "Mono",
            "Moosonee",
            "New Tecumseth",
            "Newmarket",
            "Niagara-on-the-Lake",
            "Northeastern Manitoulin and the Islands",
            "Oakville",
            "Orangeville",
            "Parry Sound",
            "Pelham",
            "Penetanguishene",
            "Perth",
            "Petawawa",
            "Petrolia",
            "Plympton-Wyoming",
            "Prescott",
            "Rainy River",
            "Renfrew",
            "Saugeen Shores",
            "Shelburne",
            "Smiths Falls",
            "Smooth Rock Falls",
            "South Bruce Peninsula",
            "Spanish",
            "St. Marys",
            "Tecumseh",
            "The Blue Mountains",
            "Thessalon",
            "Tillsonburg",
            "Wasaga Beach",
            "Whitby",
            "Whitchurch-Stouffville"
        ]
    },
    {
        "Province": "Prince Edward Island",
        "City": [
            "Charlottetown",
            "Summerside"
        ],
        "Town": [
            "Alberton",
            "Borden-Carleton",
            "Cornwall",
            "Kensington",
            "North Rustico",
            "O'Leary",
            "Souris",
            "Stratford",
            "Tignish",
            "Three Rivers"
        ]
    },
    {
        "Province": "Quebec",
        "City": [
            "Acton Vale",
            "Alma",
            "Amos",
            "Amqui",
            "Asbestos",
            "Baie-Comeau",
            "Baie-D'Urfé",
            "Baie-Saint-Paul",
            "Barkmere",
            "Beaconsfield",
            "Beauceville",
            "Beauharnois",
            "Beaupré",
            "Bécancour",
            "Bedford",
            "Belleterre",
            "Beloeil",
            "Berthierville",
            "Blainville",
            "Boisbriand",
            "Bois-des-Filion",
            "Bonaventure",
            "Boucherville",
            "Brome Lake",
            "Bromont",
            "Brossard",
            "Brownsburg-Chatham",
            "Candiac",
            "Cap-Chat",
            "Cap-Santé",
            "Carignan",
            "Carleton-sur-Mer",
            "Causapscal",
            "Chambly",
            "Chandler",
            "Chapais",
            "Charlemagne",
            "Châteauguay",
            "Château-Richer",
            "Chibougamau",
            "Clermont",
            "Coaticook",
            "Contrecoeur",
            "Cookshire-Eaton",
            "Côte Saint-Luc",
            "Coteau-du-Lac",
            "Cowansville",
            "Danville",
            "Daveluyville",
            "Dégelis",
            "Delson",
            "Desbiens",
            "Deux-Montagnes",
            "Disraeli",
            "Dolbeau-Mistassini",
            "Dollard-des-Ormeaux",
            "Donnacona",
            "Dorval",
            "Drummondville",
            "Dunham",
            "Duparquet",
            "East Angus",
            "Estérel",
            "Farnham",
            "Fermont",
            "Forestville",
            "Fossambault-sur-le-Lac",
            "Gaspé",
            "Gatineau",
            "Gracefield",
            "Granby",
            "Grande-Rivière",
            "Hampstead",
            "Hudson",
            "Huntingdon",
            "Joliette",
            "Kingsey Falls",
            "Kirkland",
            "La Malbaie",
            "La Pocatière",
            "La Prairie",
            "La Sarre",
            "La Tuque",
            "Lac-Delage",
            "Lachute",
            "Lac-Mégantic",
            "Lac-Saint-Joseph",
            "Lac-Sergent",
            "L'Ancienne-Lorette",
            "L'Assomption",
            "Laval",
            "Lavaltrie",
            "Lebel-sur-Quévillon",
            "L'Épiphanie",
            "Léry",
            "Lévis",
            "L'Île-Cadieux",
            "L'Île-Dorval",
            "L'Île-Perrot",
            "Longueuil",
            "Lorraine",
            "Louiseville",
            "Macamic",
            "Magog",
            "Malartic",
            "Maniwaki",
            "Marieville",
            "Mascouche",
            "Matagami",
            "Matane",
            "Mercier",
            "Métabetchouan–Lac-à-la-Croix",
            "Métis-sur-Mer",
            "Mirabel",
            "Mont-Joli",
            "Mont-Laurier",
            "Montmagny",
            "Montreal",
            "Montreal West",
            "Montréal-Est",
            "Mont-Saint-Hilaire",
            "Mont-Tremblant",
            "Mount Royal",
            "Murdochville",
            "Neuville",
            "New Richmond",
            "Nicolet",
            "Normandin",
            "Notre-Dame-de-l'Île-Perrot",
            "Notre-Dame-des-Prairies",
            "Otterburn Park",
            "Paspébiac",
            "Percé",
            "Pincourt",
            "Plessisville",
            "Pohénégamook",
            "Pointe-Claire",
            "Pont-Rouge",
            "Port-Cartier",
            "Portneuf",
            "Prévost",
            "Princeville",
            "Québec",
            "Repentigny",
            "Richelieu",
            "Richmond",
            "Rimouski",
            "Rivière-du-Loup",
            "Rivière-Rouge",
            "Roberval",
            "Rosemère",
            "Rouyn-Noranda",
            "Saguenay",
            "Saint-Augustin-de-Desmaures",
            "Saint-Basile",
            "Saint-Basile-le-Grand",
            "Saint-Bruno-de-Montarville",
            "Saint-Césaire",
            "Saint-Colomban",
            "Saint-Constant",
            "Sainte-Adèle",
            "Sainte-Agathe-des-Monts",
            "Sainte-Anne-de-Beaupré",
            "Sainte-Anne-de-Bellevue",
            "Sainte-Anne-des-Monts",
            "Sainte-Anne-des-Plaines",
            "Sainte-Catherine",
            "Sainte-Catherine-de-la-Jacques-Cartier",
            "Sainte-Julie",
            "Sainte-Marguerite-du-Lac-Masson",
            "Sainte-Marie",
            "Sainte-Marthe-sur-le-Lac",
            "Sainte-Thérèse",
            "Saint-Eustache",
            "Saint-Félicien",
            "Saint-Gabriel",
            "Saint-Georges",
            "Saint-Hyacinthe",
            "Saint-Jean-sur-Richelieu",
            "Saint-Jérôme",
            "Saint-Joseph-de-Beauce",
            "Saint-Joseph-de-Sorel",
            "Saint-Lambert",
            "Saint-Lazare",
            "Saint-Lin-Laurentides",
            "Saint-Marc-des-Carrières",
            "Saint-Ours",
            "Saint-Pamphile",
            "Saint-Pascal",
            "Saint-Pie",
            "Saint-Raymond",
            "Saint-Rémi",
            "Saint-Sauveur",
            "Saint-Tite",
            "Salaberry-de-Valleyfield",
            "Schefferville",
            "Scotstown",
            "Senneterre",
            "Sept-Îles",
            "Shawinigan",
            "Sherbrooke",
            "Sorel-Tracy",
            "Stanstead",
            "Sutton",
            "Témiscaming",
            "Témiscouata-sur-le-Lac",
            "Terrebonne",
            "Thetford Mines",
            "Thurso",
            "Trois-Pistoles",
            "Trois-Rivières",
            "Valcourt",
            "Val-d'Or",
            "Varennes",
            "Vaudreuil-Dorion",
            "Victoriaville",
            "Ville-Marie",
            "Warwick",
            "Waterloo",
            "Waterville",
            "Westmount",
            "Windsor"
        ],
        "Town": [
            "Acton Vale",
            "Alma",
            "Amos",
            "Amqui",
            "Asbestos",
            "Baie-Comeau",
            "Baie-D'Urfé",
            "Baie-Saint-Paul",
            "Barkmere",
            "Beaconsfield",
            "Beauceville",
            "Beauharnois",
            "Beaupré",
            "Bécancour",
            "Bedford",
            "Belleterre",
            "Beloeil",
            "Berthierville",
            "Blainville",
            "Boisbriand",
            "Bois-des-Filion",
            "Bonaventure",
            "Boucherville",
            "Brome Lake",
            "Bromont",
            "Brossard",
            "Brownsburg-Chatham",
            "Candiac",
            "Cap-Chat",
            "Cap-Santé",
            "Carignan",
            "Carleton-sur-Mer",
            "Causapscal",
            "Chambly",
            "Chandler",
            "Chapais",
            "Charlemagne",
            "Châteauguay",
            "Château-Richer",
            "Chibougamau",
            "Clermont",
            "Coaticook",
            "Contrecoeur",
            "Cookshire-Eaton",
            "Côte Saint-Luc",
            "Coteau-du-Lac",
            "Cowansville",
            "Danville",
            "Daveluyville",
            "Dégelis",
            "Delson",
            "Desbiens",
            "Deux-Montagnes",
            "Disraeli",
            "Dolbeau-Mistassini",
            "Dollard-des-Ormeaux",
            "Donnacona",
            "Dorval",
            "Drummondville",
            "Dunham",
            "Duparquet",
            "East Angus",
            "Estérel",
            "Farnham",
            "Fermont",
            "Forestville",
            "Fossambault-sur-le-Lac",
            "Gaspé",
            "Gatineau",
            "Gracefield",
            "Granby",
            "Grande-Rivière",
            "Hampstead",
            "Hudson",
            "Huntingdon",
            "Joliette",
            "Kingsey Falls",
            "Kirkland",
            "La Malbaie",
            "La Pocatière",
            "La Prairie",
            "La Sarre",
            "La Tuque[QC 1]",
            "Lac-Delage",
            "Lachute",
            "Lac-Mégantic",
            "Lac-Saint-Joseph",
            "Lac-Sergent",
            "L'Ancienne-Lorette",
            "L'Assomption",
            "Laval",
            "Lavaltrie",
            "Lebel-sur-Quévillon",
            "L'Épiphanie",
            "Léry",
            "Lévis",
            "L'Île-Cadieux",
            "L'Île-Dorval[QC 2]",
            "L'Île-Perrot",
            "Longueuil",
            "Lorraine",
            "Louiseville",
            "Macamic",
            "Magog",
            "Malartic",
            "Maniwaki",
            "Marieville",
            "Mascouche",
            "Matagami",
            "Matane",
            "Mercier",
            "Métabetchouan–Lac-à-la-Croix",
            "Métis-sur-Mer",
            "Mirabel",
            "Mont-Joli",
            "Mont-Laurier",
            "Montmagny",
            "Montreal[QC 3]",
            "Montreal West",
            "Montréal-Est",
            "Mont-Saint-Hilaire",
            "Mont-Tremblant",
            "Mount Royal",
            "Murdochville",
            "Neuville",
            "New Richmond",
            "Nicolet",
            "Normandin",
            "Notre-Dame-de-l'Île-Perrot",
            "Notre-Dame-des-Prairies",
            "Otterburn Park",
            "Paspébiac",
            "Percé",
            "Pincourt",
            "Plessisville",
            "Pohénégamook",
            "Pointe-Claire",
            "Pont-Rouge",
            "Port-Cartier",
            "Portneuf",
            "Prévost",
            "Princeville",
            "Québec[QC 4]",
            "Repentigny",
            "Richelieu",
            "Richmond",
            "Rimouski",
            "Rivière-du-Loup",
            "Rivière-Rouge",
            "Roberval",
            "Rosemère",
            "Rouyn-Noranda",
            "Saguenay",
            "Saint-Augustin-de-Desmaures",
            "Saint-Basile",
            "Saint-Basile-le-Grand",
            "Saint-Bruno-de-Montarville",
            "Saint-Césaire",
            "Saint-Colomban",
            "Saint-Constant",
            "Sainte-Adèle",
            "Sainte-Agathe-des-Monts",
            "Sainte-Anne-de-Beaupré",
            "Sainte-Anne-de-Bellevue",
            "Sainte-Anne-des-Monts",
            "Sainte-Anne-des-Plaines",
            "Sainte-Catherine",
            "Sainte-Catherine-de-la-Jacques-Cartier",
            "Sainte-Julie",
            "Sainte-Marguerite-du-Lac-Masson",
            "Sainte-Marie",
            "Sainte-Marthe-sur-le-Lac",
            "Sainte-Thérèse",
            "Saint-Eustache",
            "Saint-Félicien",
            "Saint-Gabriel",
            "Saint-Georges",
            "Saint-Hyacinthe",
            "Saint-Jean-sur-Richelieu",
            "Saint-Jérôme",
            "Saint-Joseph-de-Beauce",
            "Saint-Joseph-de-Sorel",
            "Saint-Lambert",
            "Saint-Lazare",
            "Saint-Lin-Laurentides",
            "Saint-Marc-des-Carrières",
            "Saint-Ours",
            "Saint-Pamphile",
            "Saint-Pascal",
            "Saint-Pie",
            "Saint-Raymond",
            "Saint-Rémi",
            "Saint-Sauveur",
            "Saint-Tite",
            "Salaberry-de-Valleyfield",
            "Schefferville",
            "Scotstown",
            "Senneterre",
            "Sept-Îles",
            "Shawinigan",
            "Sherbrooke",
            "Sorel-Tracy",
            "Stanstead",
            "Sutton",
            "Témiscaming",
            "Témiscouata-sur-le-Lac",
            "Terrebonne",
            "Thetford Mines",
            "Thurso",
            "Trois-Pistoles",
            "Trois-Rivières",
            "Valcourt",
            "Val-d'Or",
            "Varennes",
            "Vaudreuil-Dorion",
            "Victoriaville",
            "Ville-Marie",
            "Warwick",
            "Waterloo",
            "Waterville",
            "Westmount",
            "Windsor"
        ]
    },
    {
        "Province": "Yukon",
        "City": [
            "Whitehorse"
        ],
        "Town": [
            "Dawson City",
            "Faro",
            "Watson Lake"
        ]
    },
    {
        "Province": "Saskatchewan",
        "City": [
            "Estevan",
            "Flin Flon",
            "Humboldt",
            "Lloydminster",
            "Martensville",
            "Meadow Lake",
            "Melfort",
            "Melville",
            "Moose Jaw",
            "North Battleford",
            "Prince Albert",
            "Regina",
            "Saskatoon",
            "Swift Current",
            "Warman",
            "Weyburn",
            "Yorkton"
        ],
        "Town": [
            "Aberdeen",
            "Alameda",
            "Allan",
            "Arborfield",
            "Arcola",
            "Asquith",
            "Assiniboia",
            "Balcarres",
            "Balgonie",
            "Battleford",
            "Bengough",
            "Bienfait",
            "Big River",
            "Biggar",
            "Birch Hills",
            "Blaine Lake",
            "Bredenbury",
            "Broadview",
            "Bruno",
            "Burstall",
            "Cabri",
            "Canora",
            "Carlyle",
            "Carnduff",
            "Carrot River",
            "Central Butte",
            "Choiceland",
            "Churchbridge",
            "Colonsay",
            "Coronach",
            "Craik",
            "Cudworth",
            "Cupar",
            "Cut Knife",
            "Dalmeny",
            "Davidson",
            "Delisle",
            "Duck Lake",
            "Dundurn",
            "Eastend",
            "Eatonia",
            "Elrose",
            "Esterhazy",
            "Eston",
            "Fleming",
            "Foam Lake",
            "Fort Qu'Appelle",
            "Francis",
            "Govan",
            "Grand Coulee",
            "Gravelbourg",
            "Grenfell",
            "Gull Lake",
            "Hafford",
            "Hague",
            "Hanley",
            "Hepburn",
            "Herbert",
            "Hudson Bay",
            "Imperial",
            "Indian Head",
            "Ituna",
            "Kamsack",
            "Kelvington",
            "Kerrobert",
            "Kindersley",
            "Kinistino",
            "Kipling",
            "Kyle",
            "Lafleche",
            "Lampman",
            "Langenburg",
            "Langham",
            "Lanigan",
            "Lashburn",
            "Leader",
            "Lemberg",
            "Leroy",
            "Lumsden",
            "Luseland",
            "Macklin",
            "Maidstone",
            "Maple Creek",
            "Marshall",
            "Midale",
            "Milestone",
            "Moosomin",
            "Morse",
            "Mossbank",
            "Naicam",
            "Nipawin",
            "Nokomis",
            "Norquay",
            "Ogema",
            "Osler",
            "Outlook",
            "Oxbow",
            "Pense",
            "Pilot Butte",
            "Ponteix",
            "Porcupine Plain",
            "Preeceville",
            "Qu'Appelle",
            "Radisson",
            "Radville",
            "Raymore",
            "Redvers",
            "Regina Beach",
            "Rocanville",
            "Rockglen",
            "Rose Valley",
            "Rosetown",
            "Rosthern",
            "Rouleau",
            "Saltcoats",
            "Scott",
            "Shaunavon",
            "Shellbrook",
            "Sintaluta",
            "Southey",
            "Spiritwood",
            "Springside",
            "St. Brieux",
            "St. Walburg",
            "Star City",
            "Stoughton",
            "Strasbourg",
            "Sturgis",
            "Tisdale",
            "Turtleford",
            "Unity",
            "Vonda",
            "Wadena",
            "Wakaw",
            "Waldheim",
            "Wapella",
            "Watrous",
            "Watson",
            "Wawota",
            "White City",
            "Whitewood",
            "Wilkie",
            "Willow Bunch",
            "Wolseley",
            "Wynyard",
            "Yellow Grass",
            "Zealandia"
        ]
    },
    {
        "Province": "Nova Scotia",
        "City": [],
        "Town": [
            "Amherst",
            "Annapolis Royal",
            "Antigonish",
            "Berwick",
            "Bridgewater",
            "Clark's Harbour",
            "Digby",
            "Kentville",
            "Lockeport",
            "Lunenburg",
            "Mahone Bay",
            "Middleton",
            "Mulgrave",
            "New Glasgow",
            "Oxford",
            "Pictou",
            "Port Hawkesbury",
            "Shelburne",
            "Stellarton",
            "Stewiacke",
            "Trenton",
            "Truro",
            "Westville",
            "Windsor",
            "Wolfville",
            "Yarmouth",
            "Bedford",
            "Bridgetown",
            "Canso",
            "Dominion",
            "Glace Bay",
            "Hantsport",
            "Inverness",
            "Joggins",
            "Liverpool",
            "Louisbourg",
            "New Waterford",
            "North Sydney",
            "Parrsboro",
            "Port Hood",
            "Springhill",
            "Sydney Mines",
            "Wedgeport"
        ]
    }
]

  
    return (
      <>
    <div className="body" style={{backgroundColor:"lightblue" , marginTop:"0px"}}>
    <div >
  <p style={{ backgroundColor: "lightyellow"  ,marginTop:"40px", marginLeft:'30px',marginRight:'490px' , height:"170px" , fontSize:'20px'}}>
    <ol>
      <li>
        <h3>PLEASE NOTE:</h3>
      </li>
      <li>
        Please only complete one application, as we are only able to process one per person. If you wish to apply for multiple units, simply inform our agent when they contact you and they will be pleased to assist.
      </li>
      <li>
        Applications will be processed within two business days (Monday to Friday excluding holidays) of being received.
      </li>
      <li>
        All occupants over the age of 18 must complete a separate Rental Application.
      </li>
      <li>
        Errors or omissions may disqualify you as a potential tenant.
      </li>
    </ol>
  </p>

  <div style={{ backgroundColor: "white", border: "3px ",marginLeft:'30px',marginTop:'30px',marginRight:"490px",height:"50px" }}>
    <h1 style={{marginTop:'10px', color:'brown'}}>Apartment Information</h1>
  </div>

  <div style={{ marginBottom: "30px" }} className="form1">
    <form onSubmit={handleSubmit}>
      <div className="form">
        <label className="texting" style={{ marginRight: "10px" }}>City:</label>
        
        <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ marginBottom: "10px", width: "308px", height: "40px" }}
                >
                  <option value="">Select City</option>
                  {cities.map((province) => (
                    province.City.map((cityName) => (
                      <option key={cityName} value={cityName}>{cityName}</option>
                    ))
                  ))}
          </select>
      </div>
      <div className="form">
      <label className="texting" style={{ marginRight: "10px" }}>Builder:</label>
      <select
        value={builder}
        onChange={(e) => setBuilder(e.target.value)}
        style={{ marginBottom: "10px", width: "308px", height: "40px" }}
      >
        <option value="">Select a builder</option>
        {Building.build.map((builderName, index) => (
          <option key={index} value={builderName}>{builderName}</option>
        ))}
      </select>
    </div>
      <div className="form">
        <label className="texting" style={{ marginRight: "10px",height:'30px'  }}>Suit Type Required:</label>
        <select
        value={suitType}
        onChange={(e) => setSuitType(e.target.value)}
        style={{ marginBottom: "10px", width: "308px", height: "40px" }}
      >
        <option value="">Select a suite type</option>
        <option value="Bachelore">Bachelore</option>
        <option value="One Bedroom">One Bedroom</option>
        <option value="Two Bedroom">Two Bedroom</option>
        <option value="Three Bedroom">Three Bedroom</option>
      </select>
      </div>
      <div className="form">
        <label className="texting" style={{ marginRight: "10px" }}>Desired Units of Occupants:</label>
        <input
          type="text"
          value={desiredOccupants}
          onChange={(e) => setDesiredOccupants(e.target.value)}
          style={{ marginBottom: "10px" , width:"300px",height:'30px' }}
        />
      </div>
      <div className="form">
        <label className="texting" style={{ marginRight: "10px" }}>Have you viewed a suite?</label>
        <input
          type="checkbox"
          checked={viewedSuite}
          onChange={(e) => setViewedSuite(e.target.checked)}
          style={{ marginBottom: "10px" , width:"300px" ,height:'30px' }}
        />
      </div>
      <div className="form">
        <label className="texting"  style={{ marginRight: "10px" }}>Leasing Agent's Name:</label>
        <input
          type="text"
          value={leasingAgent}
          onChange={(e) => setLeasingAgent(e.target.value)}
          style={{ marginBottom: "10px" , width:"300px",height:'30px' }}
        />
      </div>
    </form>
  </div>
</div>
 <div style={{ backgroundColor: "white", border: "3px ",marginLeft:'30px',marginTop:'30px',marginRight:"490px",height:"50px" }}>
    <h1 style={{marginTop:'10px', color:'brown'}}>Personal Information</h1>
  </div>
<div>



</div>
  <div style={{ marginBottom: "30px" }} className="form1">
     
      <form onSubmit={handleSubmit}>
        <div className = "form">
          <label className="texting"  style={{ marginRight: "10px" }} htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ marginBottom: "10px" , width:"300px",height:'30px' , marginLeft:"190px"}}
            required
          />
        </div>
        <div className = "form" >
          <label className="texting"  style={{ marginRight: "10px" }} htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ marginBottom: "10px" , width:"300px",height:'30px' }}
            required
          />
        </div>
        <div className = "form">
          <label className="texting"  style={{ marginRight: "10px" }} htmlFor="homeTelephone">Home Telephone:</label>
          <input
            type="tel"
            id="homeTelephone"
            value={homeTelephone}
            onChange={(e) => setHomeTelephone(e.target.value)}
            style={{ marginBottom: "10px" , width:"300px",height:'30px' }}
          />
        </div>
        <div className = "form">
          <label className="texting"  style={{ marginRight: "10px" }} htmlFor="workTelephone">Work Telephone:</label>
          <input
            type="tel"
            id="workTelephone"
            value={workTelephone}
            onChange={(e) => setWorkTelephone(e.target.value)}
            style={{ marginBottom: "10px" , width:"300px",height:'30px' }}
          />
        </div>
        <div className = "form">
          <label className="texting"  style={{ marginRight: "10px" }} htmlFor="cellTelephone">Cell Telephone:</label>
          <input
            type="tel"
            id="cellTelephone"
            value={cellTelephone}
            onChange={(e) => setCellTelephone(e.target.value)}
            style={{ marginBottom: "10px" , width:"300px",height:'30px' }}
          />
        </div>
        <div className = "form">
          <label className="texting" htmlFor="email" style={{ marginRight: "10px" }}>Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "10px" , width:"300px",height:'30px' }}
          />
        </div>
        <div className = "form"> 
          <label className="texting" htmlFor="sin"  style={{ marginRight: "10px" }}>SIN #:</label>
          <input
            type="text"
            id="sin"
            value={sin}
            onChange={(e) => setSin(e.target.value)}
            style={{ marginBottom: "10px" , width:"300px",height:'30px' }}
          />
        </div>
        <div className = "form">
          <label className="texting"  style={{ marginRight: "10px" }} htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            style={{ marginBottom: "10px" , width:"300px",height:'30px' }}
            required
          />
        </div>
        <div className = "form">
          <label  className="texting"  style={{ marginRight: "10px" }} htmlFor="maritalStatus">Marital Status:</label>
          <select
            id="maritalStatus"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
            style={{ marginBottom: "10px" , width:"310px",height:'40px' }}
          >
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        
      </form> 
    </div>
    <div style={{ backgroundColor: "white", border: "3px ",marginLeft:'30px',marginTop:'30px',marginRight:"490px",height:"50px" }}>
    <h1 style={{marginTop:'10px', color:'brown'}}>Address Information</h1>
  </div>

  <div style={{ marginBottom: "30px" }} className="form1">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="streetAddress">
            Street Address:
          </label>
          <input
            type="text"
            id="streetAddress"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px", marginLeft :"150px"}}
            required
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="city">
            City:
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px" }}
            required
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="province">
            Province:
          </label>
          <input
            type="text"
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px" }}
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="country">
            Country:
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px" }}
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="postalCode">
            Postal Code:
          </label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px" }}
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="landlord">
            Landlord:
          </label>
          <input
            type="text"
            id="landlord"
            value={landlord}
            onChange={(e) => setLandlord(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px" }}
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="landlordPhone">
            Landlord's Phone:
          </label>
          <input
            type="tel"
            id="landlordPhone"
            value={landlordPhone}
            onChange={(e) => setLandlordPhone(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px" }}
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="duration">
            How Long? (years):
          </label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px" }}
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="reasonForLeaving">
            Reason for Leaving:
          </label>
          <input
            type="text"
            id="reasonForLeaving"
            value={reasonForLeaving}
            onChange={(e) => setReasonForLeaving(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px" }}
          />
        </div>

      </form>
    </div>

    <div style={{ backgroundColor: "white", border: "3px ",marginLeft:'30px',marginTop:'30px',marginRight:"490px",height:"50px" }}>
    <h1 style={{marginTop:'10px', color:'brown'}}>Employment Information</h1>
  </div>

  <div style={{ marginBottom: "30px" }} className="form1">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="companyName">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px", marginRight:"80px"}}
            required
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="companyAddress">
            Company Address:
          </label>
          <input
            type="text"
            id="companyAddress"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px", marginRight:"80px"}}
            required
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="supervisor">
            Supervisor:
          </label>
          <input
            type="text"
            id="supervisor"
            value={supervisor}
            onChange={(e) => setSupervisor(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px", marginRight:"80px"}}
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="companyPhone">
            Company Phone:
          </label>
          <input
            type="tel"
            id="companyPhone"
            value={companyPhone}
            onChange={(e) => setCompanyPhone(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px" , marginRight:"80px"}}
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="yearsEmployed">
            Yrs Employed:
          </label>
          <input
            type="number"
            id="yearsEmployed"
            value={yearsEmployed}
            onChange={(e) => setYearsEmployed(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px", marginRight:"80px" }}
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="salary">
            Approximate Salary ($/month):
          </label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px", marginRight:"80px"}}
            required
          />
        </div>
        <div className="form">
          <label className="texting" style={{ marginRight: "10px" }} htmlFor="position">
            Position:
          </label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            style={{ marginBottom: "10px", width: "300px", height: "30px" , marginRight:"80px" }}
            required
          />
        </div>
      </form>
    </div>

    <div style={{ backgroundColor: "white", border: "3px ",marginLeft:'30px',marginTop:'30px',marginRight:"490px",height:"50px" }}>
    <h1 style={{marginTop:'10px', color:'brown'}}>Other Proposed Occupants</h1>
  </div>
  <div className="form1">
      <form onSubmit={handleSubmit}>
        {occupants.map((occupant, index) => (
          <div key={index} className="form">
            <h1>Occupant {index + 1}</h1>
            <div className="form">
              <div>
                <label className="texting" htmlFor={`firstName${index}`}>
                  First Name:
                </label>
                <input
                  type="text"
                  id={`firstName${index}`}
                  value={occupant.firstName}
                  onChange={(e) =>
                    handleOccupantChange(index, 'firstName', e.target.value)
                  }
                  style={{ marginBottom: '10px', width: '300px', height: '30px' }}
                  required
                />
              </div>
              <div>
                <label className="texting" htmlFor={`lastName${index}`}>
                  Last Name:
                </label>
                <input
                  type="text"
                  id={`lastName${index}`}
                  value={occupant.lastName}
                  onChange={(e) =>
                    handleOccupantChange(index, 'lastName', e.target.value)
                  }
                  style={{ marginBottom: '10px', width: '300px', height: '30px' }}
                  required
                />
              </div>
              <div>
                <label className="texting" htmlFor={`age${index}`}>
                  Age:
                </label>
                <input
                  type="number"
                  id={`age${index}`}
                  value={occupant.age}
                  onChange={(e) =>
                    handleOccupantChange(index, 'age', e.target.value)
                  }
                  style={{ marginBottom: '10px', width: '300px', height: '30px' }}
                  required
                />
              </div>
              <div>
                <label className="texting" htmlFor={`relationship${index}`}>
                  Relationship:
                </label>
                <input
                  type="text"
                  id={`relationship${index}`}
                  value={occupant.relationship}
                  onChange={(e) =>
                    handleOccupantChange(index, 'relationship', e.target.value)
                  }
                  style={{ marginBottom: '10px', width: '300px', height: '30px' }}
                  required
                />
              </div>
            </div>
          </div>
        ))}
      </form>
    
    
    </div>

    <div style={{margin:"100px"}}>
    <div>
    <h1>If you were referred to rent with us by a current Mainstreet tenant please provide their information</h1>
    </div>
     <div>
     <label className="texting" htmlFor="Name" style={{fontSize:"30px ",fontWeight:'bold'}}>Name:</label>
      <input type="text" id="Name" name="Name"  style={{width:"400px" , height:"30px" ,marginLeft:"30px"}}/>
         
      <label className="texting" htmlFor="Adddress" style={{fontSize:"30px ",fontWeight:'bold', marginLeft:'220px'}}>Address:</label>
      <input type="text" id="Name" name="Name"  style={{width:"400px" , height:"30px" ,marginLeft:"30px"}}/>
     </div>

    </div>

<div style = {{margin:"100px"}}>

   <div style={{display:"flex",flexWrap:"wrap"}}>
    <div className="for" style={{ marginBottom: "10px" }}>
  <label className="text" htmlFor="pets" style={{fontSize:"30px"}}>Do you have pets?:</label>
  <div style={{ display: "inline-flex", marginLeft: "10px" }}>
    <input type="radio" id="petsYes" name="pets" value="yes" />
    <label htmlFor="petsYes" style={{ marginLeft: "5px" ,fontSize:"30px"}}>Yes</label>
  </div>
  <div style={{ display: "inline-flex", marginLeft: "10px" }}>
    <input type="radio" id="petsNo" name="pets" value="no" />
    <label htmlFor="petsNo" style={{ marginLeft: "5px",fontSize:"30px" }}>No</label>
  </div>
</div>

<div style={{fontSize:"30px", marginLeft:"30px" , marginRight:"30px"}}> If  Yes</div>
<div className="for">
  <label className="texti" htmlFor="breed" style={{fontSize:"30px"}}>Breed:</label>
  <input type="text" id="breed" name="breed"  style={{marginLeft:"30px" ,height:"30px"}}/>
</div>

<div className="for">
  <label className="texti" htmlFor="weight" style={{fontSize:"30px" , marginLeft:"20px"}}>Weight:</label>
  <input type="text" id="weight" name="weight" style={{marginLeft:"30px",height:"30px"}} />
</div>

<div className="for">
  <label className="texti" htmlFor="sex" style={{fontSize:"30px" , marginLeft:"20px"}}>Sex:</label>
  <input type="text" id="sex" name="sex" style={{marginLeft:"70px",height:"30px"}} />

  </div>

  </div>
<div className="for" style={{ marginBottom: "10px", marginTop:"60px" }}>
  <label className="text" htmlFor="pets" style={{fontSize:"30px"}}>
Have you ever had eviction papers served to you, been evicted, or denied lease renewal?: </label>
  <div style={{ display: "inline-flex", marginLeft: "10px" }}>
    <input type="radio" id="petsYes" name="pets" value="yes" />
    <label htmlFor="petsYes" style={{ marginLeft: "5px" ,fontSize:"30px"}}>Yes</label>
  </div>
  <div style={{ display: "inline-flex", marginLeft: "10px" }}>
    <input type="radio" id="petsNo" name="pets" value="no" />
    <label htmlFor="petsNo" style={{ marginLeft: "5px",fontSize:"30px" }}>No</label>
  </div>
</div>

<div className="for" style={{ marginBottom: "10px" , marginTop:"10px" }}>
  <label className="text" htmlFor="pets" style={{fontSize:"30px"}}>
  Have you ever been convicted of a crime?:  </label>
  <div style={{ display: "inline-flex", marginLeft: "10px" }}>
    <input type="radio" id="petsYes" name="pets" value="yes" />
    <label htmlFor="petsYes" style={{ marginLeft: "5px" ,fontSize:"30px"}}>Yes</label>
  </div>
  <div style={{ display: "inline-flex", marginLeft: "10px" }}>
    <input type="radio" id="petsNo" name="pets" value="no" />
    <label htmlFor="petsNo" style={{ marginLeft: "5px",fontSize:"30px" }}>No</label>
  </div>
</div>



</div>


<div style={{ backgroundColor: "white", border: "3px ",marginLeft:'30px',marginTop:'30px',marginRight:"490px",height:"50px" }}>
    <h1 style={{marginTop:'10px', color:'brown'}}>Insurance</h1>
  </div>


  <div className="form1" style={{marginLeft:'100px'}}>
<p style={{fontSize:"30px"}}>

It is the obligation of each approved tenant to hold a renter’s all-risk and comprehensive insurance policy including a minimum $2,000,000 liability insurance component with the provider of their choice. I agree to maintain the insurance policy for the entire term of my tenancy. Proof of valid renter’s insurance is required at or before signing a lease. If valid proof is not produced at the time of lease signing, a lease will not be offered and keys to the premises will not be released.

<div className="fo" style={{margin:"30px"}}>
  <input style={{height:"30px",width:"40px"}} type="checkbox" id="conditions" name="conditions" />
  <label  style = {{marginLeft:"30px"}}  className="texting" htmlFor="conditions" >I agree to the terms above. </label>
</div>
</p>


</div>

<div style={{ backgroundColor: "white", border: "3px ",marginLeft:'30px',marginTop:'30px',marginRight:"490px",height:"50px" }}>
    <h1 style={{marginTop:'10px', color:'brown'}}>Accuracy</h1>
  </div>

<div className="form1" style={{marginLeft:'100px'}}>
<p style={{fontSize:"30px"}}>


<p>I warrant that the information supplied herein is true and correct. I am at least 18 years of age and my name is listed on this application as it appears on my government issued ID. I understand that false or intentional omission of requested information may result in automatic denial of this application.</p>

I understand that all personal information collected from me may be collected, used and disclosed by Mainstreet Equity Corp for the purpose of my application assessment, for the purpose of debt collection, to uphold and maintain the rules and regulations of the property, to evaluate my tenancy, to comply with applicable law and in the ordinary course of Mainstreet Equity Corp's business, including but not limited to, any refinancing or potential sale of the property, and normal course dealing with providers of utilities and other like services. Any security deposit paid is to be considered as a rental deposit, forfeitable, in the event that the applicant does not take occupancy on the commencement date as agreed upon or fails to execute the standard lease agreement when present for execution.


<div className="fo" style={{margin:"30px"}}>
  <input style={{height:"30px",width:"40px"}} type="checkbox" id="conditions" name="conditions" />
  <label  style = {{marginLeft:"30px"}}  className="texting" htmlFor="conditions" >I agree to the terms above. </label>
</div>
</p>


</div>



<button type="submit" onClick={handleSubmit} style={{fontSize:"40px"}}>Submit Details</button>

  
  
  </div>




   
    </>
    );

  };

export default Body;